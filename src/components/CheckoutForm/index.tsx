import React from 'react';
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
  InputGroup,
  RadioGroup,
  Label,
  Input,
  SummaryWrapper,
  SummaryHeading,
  SummaryRow,
  RowTitle,
  RowPrice,
  OrangeRowPrice,
} from './styles';

const CheckoutForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      zipcode: '',
      city: '',
      country: '',
      paymentMethod: '',
      'e-number': '',
      'e-pin': '',
    },
    validate: (values) => {
      console.log(values);
      const errors: { [index: string]: string } = {};
      if (values.name.length > 15) {
        errors.name = 'Name must be less than 15 characters';
      }
      return errors;
    },
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
      <Form>
        <FormGroupWrapper>
          <Heading>Checkout</Heading>
          <FormGroup>
            <FormGroupHeader>Billing Details</FormGroupHeader>
            <TextInput
              label="Name"
              name="name"
              id="name"
              type="text"
              fieldProps={formik.getFieldProps}
              meta={[formik.touched, formik.errors]}
            />
            <TextInput
              label="Email Address"
              name="email"
              id="email"
              type="email"
              fieldProps={formik.getFieldProps}
              meta={[formik.touched, formik.errors]}
            />
            <TextInput
              label="Phone Number"
              name="phone"
              id="phone"
              type="tel"
              fieldProps={formik.getFieldProps}
              meta={[formik.touched, formik.errors]}
            />
          </FormGroup>
          <FormGroup>
            <FormGroupHeader>Shipping Info</FormGroupHeader>
            <TextInput
              label="Address"
              name="address"
              id="address"
              type="text"
              fieldProps={formik.getFieldProps}
              meta={[formik.touched, formik.errors]}
            />
            <TextInput
              label="Zip Code"
              name="zipcode"
              id="zipcode"
              type="text"
              fieldProps={formik.getFieldProps}
              meta={[formik.touched, formik.errors]}
            />
            <TextInput
              label="City"
              name="city"
              id="city"
              type="text"
              fieldProps={formik.getFieldProps}
              meta={[formik.touched, formik.errors]}
            />
            <TextInput
              label="Country"
              name="country"
              id="country"
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
              name="paymentMethod"
              type="radio"
              fieldProps={formik.getFieldProps}
              meta={[formik.touched, formik.errors]}
            />
            <RadioButton
              label="Cash on Delivery"
              name="paymentMethod"
              id="cash"
              type="radio"
              fieldProps={formik.getFieldProps}
              meta={[formik.touched, formik.errors]}
            />
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
        </SummaryWrapper>
      </Form>
    </Wrapper>
  );
};

export default CheckoutForm;
