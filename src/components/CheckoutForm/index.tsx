import React, { useState } from 'react';
import * as Yup from 'yup';
import { DollarSign } from 'react-feather';
import Summary from './Summary';
import FormGroup from './FormGroup';
import RadioGroup from './RadioGroup';
import TextInput from './TextInput';
import RadioButton from './RadioButton';
import ConfirmationModal from '../Confirmation';
import { useCart } from '../../context/ShoppingCartContext';

import { useFormik } from 'formik';
import {
  Wrapper,
  Form,
  Heading,
  FormGroupWrapper,
  MobileToTablet,
  LaptopAndUp,
  CashOption,
  CashText,
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
  const cart = useCart();
  const formik = useFormik({
    initialValues: {
      Name: '',
      Email: '',
      'Phone Number': '',
      Address: '',
      'Zip Code': '',
      City: '',
      Country: '',
      'Payment Method': '',
      'e-number': '',
      'e-pin': '',
    },
    validationSchema: CheckoutSchema,
    onSubmit: (values) => {
      window.scrollTo(0, 0);
      setShowModal(!showModal);
    },
  });
  /* 
    We redirect the user if the cart is empty because there is no
    point in filling out the checkout form is cart is empty.
  */
  if (cart.size === 0) {
    window.location.replace('/');
  }

  return (
    <Wrapper>
      {showModal && <ConfirmationModal isOpen={showModal} />}
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
          <FormGroup heading="Billing Details">
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
          <FormGroup heading="Shipping Info">
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
          </FormGroup>
          <FormGroup heading="Payment Details">
            <RadioGroup heading="Payment Method">
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
            </RadioGroup>
            <MobileToTablet>
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
            </MobileToTablet>
            <LaptopAndUp>
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
                <>
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
                </>
              )}
            </LaptopAndUp>
          </FormGroup>
        </FormGroupWrapper>
        <Summary cart={cart} />
      </Form>
    </Wrapper>
  );
};

export default CheckoutForm;
