import React, { useState } from 'react';
import * as Yup from 'yup';
import { DollarSign } from 'react-feather';
import Buttons from '../Buttons';
import CartList from '../CartList';
import ConfirmationModal from './ConfirmationModal';
import { useCart } from '../../context/ShoppingCartContext';
import { TextInput, RadioButton } from './helpers';
import numeral from 'numeral';
import { useFormik } from 'formik';
import {
  Wrapper,
  Form,
  Heading,
  FormGroupWrapper,
  FormGroup,
  FormGroupGrid,
  RadioGroupGrid,
  FormGroupHeader,
  PaymentDetailsMobileToTablet,
  PaymentDetailsLaptopAndUp,
  SummaryWrapper,
  SummaryHeading,
  SummaryRow,
  RadioGroupHeading,
  RowTitle,
  RowPrice,
  CashOption,
  CashText,
  OrangeRowPrice,
  ErrorText,
  GoBackLink,
} from './styles';

const CheckoutSchema = Yup.object().shape(
  {
    Name: Yup.string().required(),
    Email: Yup.string().email().required(),
    'Phone Number': Yup.string().required(),
    Address: Yup.string().required(),
    'Zip Code': Yup.string().max(5).required(),
    City: Yup.string().required(),
    Country: Yup.string().required(),
    'Payment Method': Yup.string().required(),
    'e-number': Yup.string().ensure().when('Payment Method', {
      is: 'e-money',
      then: Yup.string().required(),
    }),
    'e-pin': Yup.string().ensure().when('Payment Method', {
      is: 'e-money',
      then: Yup.string().required(),
    }),
  },
  [
    ['Payment Method', 'e-number'],
    ['Payment Method', 'e-pin'],
  ],
);

const CheckoutForm = () => {
  const [showModal, setShowModal] = useState(false);
  const formik = useFormik({
    initialValues: {
      Name: 'Alan Ibarra',
      Email: 'alan.ibarra209@gmail.com',
      'Phone Number': '209-416-2966',
      Address: '3561 Glenville CT',
      'Zip Code': '95382',
      City: 'Turlock',
      Country: 'CA',
      'Payment Method': 'e-money',
      'e-number': 'afd',
      'e-pin': 'fdasf',
    },
    validationSchema: CheckoutSchema,
    onSubmit: (values) => {
      window.scrollTo(0, 0);
      setShowModal(!showModal);
    },
  });
  const cart = useCart();
  const shippingCost = cart.total * 0.025;
  const vatCost = cart.total * 0.08;
  const grandTotal = cart.total + shippingCost + vatCost;

  return (
    <Wrapper>
      <GoBackLink onClick={() => window.history.back()}>
        Go Back
      </GoBackLink>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          formik.submitForm();
        }}
      >
        <FormGroupWrapper>
          <Heading>Checkout</Heading>
          <FormGroup>
            <FormGroupHeader>Billing Details</FormGroupHeader>
            <FormGroupGrid>
              <TextInput
                label="Name"
                name="Name"
                id="Name"
                type="text"
                fieldProps={formik.getFieldProps}
                meta={[formik.touched, formik.errors]}
              />
              <TextInput
                label="Email Address"
                name="Email"
                id="Email"
                type="email"
                fieldProps={formik.getFieldProps}
                meta={[formik.touched, formik.errors]}
              />
              <TextInput
                label="Phone Number"
                name="Phone Number"
                id="Phone Number"
                type="tel"
                fieldProps={formik.getFieldProps}
                meta={[formik.touched, formik.errors]}
              />
            </FormGroupGrid>
          </FormGroup>
          <FormGroup>
            <FormGroupHeader>Shipping Info</FormGroupHeader>
            <FormGroupGrid>
              <TextInput
                label="Address"
                name="Address"
                id="Address"
                type="text"
                fieldProps={formik.getFieldProps}
                meta={[formik.touched, formik.errors]}
                columns={2}
              />
              <TextInput
                label="Zip Code"
                name="Zip Code"
                id="Zip Code"
                type="text"
                fieldProps={formik.getFieldProps}
                meta={[formik.touched, formik.errors]}
              />
              <TextInput
                label="City"
                name="City"
                id="City"
                type="text"
                fieldProps={formik.getFieldProps}
                meta={[formik.touched, formik.errors]}
              />
              <TextInput
                label="Country"
                name="Country"
                id="Country"
                type="text"
                fieldProps={formik.getFieldProps}
                meta={[formik.touched, formik.errors]}
              />
            </FormGroupGrid>
          </FormGroup>
          <FormGroup>
            <FormGroupHeader>Payment Details</FormGroupHeader>
            <RadioGroupGrid>
              <RadioGroupHeading>Payment Method</RadioGroupHeading>
              <RadioButton
                label="e-Money"
                id="e-money"
                name="Payment Method"
                type="radio"
                fieldProps={formik.getFieldProps}
                checked={formik.values['Payment Method'] === 'e-money'}
              />

              <RadioButton
                label="Cash on Delivery"
                name="Payment Method"
                id="cash"
                type="radio"
                fieldProps={formik.getFieldProps}
                checked={formik.values['Payment Method'] === 'cash'}
              />
              {formik.errors['Payment Method'] &&
              formik.touched['Payment Method'] ? (
                <ErrorText>Select one of the payment methods</ErrorText>
              ) : null}
            </RadioGroupGrid>

            <PaymentDetailsMobileToTablet>
              <RadioGroupGrid>
                <TextInput
                  label="e-money Number"
                  name="e-number"
                  id="e-number"
                  type="text"
                  fieldProps={formik.getFieldProps}
                  meta={[formik.touched, formik.errors]}
                  columns={1}
                />
                <TextInput
                  label="e-Money PIN"
                  name="e-pin"
                  id="e-pin"
                  type="text"
                  fieldProps={formik.getFieldProps}
                  meta={[formik.touched, formik.errors]}
                  columns={1}
                />
              </RadioGroupGrid>
            </PaymentDetailsMobileToTablet>
            <PaymentDetailsLaptopAndUp>
              {formik.values['Payment Method'] === 'cash' ? (
                <CashOption>
                  <DollarSign size={64} color="hsl(22, 65%, 57%)" />
                  <CashText>
                    The ‘Cash on Delivery’ option enables you to pay in
                    cash when our delivery courier arrives at your
                    residence. Just make sure your address is correct so
                    that your order will not be cancelled.
                  </CashText>
                </CashOption>
              ) : (
                <RadioGroupGrid>
                  <TextInput
                    label="e-money Number"
                    name="e-number"
                    id="e-number"
                    type="text"
                    fieldProps={formik.getFieldProps}
                    meta={[formik.touched, formik.errors]}
                    columns={1}
                  />
                  <TextInput
                    label="e-Money PIN"
                    name="e-pin"
                    id="e-pin"
                    type="text"
                    fieldProps={formik.getFieldProps}
                    meta={[formik.touched, formik.errors]}
                    columns={1}
                  />
                </RadioGroupGrid>
              )}
            </PaymentDetailsLaptopAndUp>
          </FormGroup>
        </FormGroupWrapper>
        <SummaryWrapper>
          <SummaryHeading>Summary</SummaryHeading>
          <CartList />
          <SummaryRow>
            <RowTitle>Total</RowTitle>
            <RowPrice>{numeral(cart.total).format('0,0.00')}</RowPrice>
          </SummaryRow>
          <SummaryRow>
            <RowTitle>Shipping</RowTitle>
            <RowPrice>{numeral(shippingCost).format('0,0.00')}</RowPrice>
          </SummaryRow>
          <SummaryRow>
            <RowTitle>Vat (included)</RowTitle>
            <RowPrice>{numeral(vatCost).format('0,0.00')}</RowPrice>
          </SummaryRow>
          <SummaryRow>
            <RowTitle>Grand Total</RowTitle>
            <OrangeRowPrice>
              {numeral(grandTotal).format('0,0.00')}
            </OrangeRowPrice>
          </SummaryRow>
          <Buttons id={'btn1'} btnType="btn" width={'full'}>
            Continue & Pay
          </Buttons>
        </SummaryWrapper>
      </Form>
      {showModal && <ConfirmationModal cart={cart} isOpen={showModal} />}
    </Wrapper>
  );
};

export default CheckoutForm;
