import Input from "./Input";
import Label from "./Label";

type InputFormProps = {
  name?: string;
  placeholder: string;
  label?: string;
  type: string;
  variantLabel?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number
};
const InputForm = ({
  name,
  placeholder,
  label,
  type,
  variantLabel,
  onChange,
  value
}: InputFormProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <Label variantLabel={variantLabel} htmlFor={name}>
          {label}
        </Label>
      )}
      <Input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  );
};

export default InputForm;
