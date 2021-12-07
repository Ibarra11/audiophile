import { FieldInputProps, FormikErrors, FormikTouched } from 'formik';
import { InputGroup, Label, Input, RadioGroup, ErrorText } from './styles';

interface ITextInput {
  label: string;
  name: string;
  id: string;
  type: 'text' | 'email' | 'tel';
  fieldProps: (nameOrOptions: any) => FieldInputProps<any>;
  meta: [FormikTouched<any>, FormikErrors<any>];
}
const TextInput = ({ label, fieldProps, meta, ...props }: ITextInput) => {
  const [touched, errors] = meta;

  return (
    <InputGroup>
      <Label htmlFor={props.name || props.id}>{label}</Label>
      <Input {...props} {...fieldProps(props.name)} />
      {touched[props.name] && errors[props.name] ? (
        <ErrorText>{errors[props.name]}</ErrorText>
      ) : null}
    </InputGroup>
  );
};

interface IRadioButton {
  label: string;
  name: string;
  id: string;
  type: 'radio';
  fieldProps: (nameOrOptions: any) => FieldInputProps<any>;
  checked: boolean;
}

const RadioButton = ({
  label,
  fieldProps,
  checked,
  ...props
}: IRadioButton) => {
  console.log(props.id + ' ' + checked);
  return (
    <RadioGroup checked={checked}>
      <Input
        {...props}
        {...fieldProps(props.name)}
        value={props.id}
        checked={checked}
      />
      <Label htmlFor={props.name || props.id}>{label}</Label>
    </RadioGroup>
  );
};

export { TextInput, RadioButton };
