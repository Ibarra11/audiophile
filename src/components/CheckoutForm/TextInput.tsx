import React from 'react';
import { FieldInputProps, FormikErrors, FormikTouched } from 'formik';
import {
  InputGroup,
  Label,
  ErrorLabel,
  Input,
  ErrorInput,
  ErrorText,
} from './styles';

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
      {touched[props.name] && errors[props.name] ? (
        <>
          <ErrorLabel htmlFor={props.name || props.id}>
            {label}
            <span>Wrong Format</span>
          </ErrorLabel>
          <ErrorInput {...props} {...fieldProps(props.name)} />
        </>
      ) : (
        <>
          <Label htmlFor={props.name || props.id}>{label}</Label>
          <Input {...props} {...fieldProps(props.name)} />
        </>
      )}
    </InputGroup>
  );
};

export default TextInput;
