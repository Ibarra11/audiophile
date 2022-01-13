import { FieldInputProps } from 'formik';
import { Label, Input, RadioGroup } from './styles';

interface IRadioButton {
  label: string;
  name: string;
  id: string;
  type: 'radio';
  fieldProps: (nameOrOptions: any) => FieldInputProps<any>;
  checked: boolean;
  rows?: number;
  columns?: number;
}

const RadioButton = ({
  label,
  fieldProps,
  checked,
  rows,
  columns,
  ...props
}: IRadioButton) => {
  return (
    <RadioGroup checked={checked} rows={rows} columns={columns}>
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

export default RadioButton;
