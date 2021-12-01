import { FieldInputProps, FormikErrors, FormikTouched } from 'formik';
import { InputGroup, Label, Input, RadioGroup } from './styles';

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
        <div>{errors[props.name]}</div>
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
  meta: [FormikTouched<any>, FormikErrors<any>];
}

const RadioButton = ({
  label,
  fieldProps,
  meta,
  ...props
}: IRadioButton) => {
  const [touched, errors] = meta;
  return (
    <RadioGroup>
      <Input {...props} {...fieldProps(props.name)} value={props.id} />
      <Label htmlFor={props.name || props.id}>{label}</Label>
      {touched[props.name] && errors[props.name] ? (
        <div>{errors[props.name]}</div>
      ) : null}
    </RadioGroup>
  );
};

export { TextInput, RadioButton };
