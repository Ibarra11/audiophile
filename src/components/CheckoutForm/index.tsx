import React from 'react';
import * as Yup from 'yup';
import Buttons from '../Buttons';
import CartList from '../CartList';
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
  FormGroupHeader,
  SummaryWrapper,
  SummaryHeading,
  SummaryRow,
  RowTitle,
  RowPrice,
  OrangeRowPrice,
  ErrorText,
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
  const formik = useFormik({
    initialValues: {
      Name: '',
      Email: '',
      'Phone Number': '',
      Address: '',
      'Zip Code': '',
      City: '',
      Country: '',
      'Payment Method': 'e-money',
      'e-number': '',
      'e-pin': '',
    },
    validationSchema: CheckoutSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const cart = useCart();
  const shippingCost = cart.total * 0.025;
  const vatCost = cart.total * 0.08;
  const grandTotal = cart.total + shippingCost + vatCost;

  return (
    <Wrapper>
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
          </FormGroup>
          <FormGroup>
            <FormGroupHeader>Shipping Info</FormGroupHeader>
            <TextInput
              label="Address"
              name="Address"
              id="Address"
              type="text"
              fieldProps={formik.getFieldProps}
              meta={[formik.touched, formik.errors]}
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
          </FormGroup>
          <FormGroup>
            <FormGroupHeader>Payment Details</FormGroupHeader>
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
            <TextInput
              label="e-money Number"
              name="e-number"
              id="e-number"
              type="text"
              fieldProps={formik.getFieldProps}
              meta={[formik.touched, formik.errors]}
            />
            <TextInput
              label="e-Money PIN"
              name="e-pin"
              id="e-pin"
              type="text"
              fieldProps={formik.getFieldProps}
              meta={[formik.touched, formik.errors]}
            />
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
    </Wrapper>
  );
};

export default CheckoutForm;
