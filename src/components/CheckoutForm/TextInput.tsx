import React from 'react';
import { FieldInputProps, FormikErrors, FormikTouched } from 'formik';
import { InputGroup, Label, Input, ErrorText } from './styles';

interface ITextInput {
  label: string;
  name: string;
  id: string;
  type: 'text' | 'email' | 'tel';
  fieldProps: (nameOrOptions: any) => FieldInputProps<any>;
  meta: [FormikTouched<any>, FormikErrors<any>];
  columns?: number;
  rows?: number;
}

const TextInput = ({
  label,
  fieldProps,
  meta,
  rows,
  columns,
  ...props
}: ITextInput) => {
  const [touched, errors] = meta;

  return (
    <InputGroup rows={rows} columns={columns}>
      <Label htmlFor={props.name || props.id}>{label}</Label>
      <Input {...props} {...fieldProps(props.name)} />
      {touched[props.name] && errors[props.name] ? (
        <ErrorText>{errors[props.name]}</ErrorText>
      ) : null}
    </InputGroup>
  );
};

export default TextInput;
