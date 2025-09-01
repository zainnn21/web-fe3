import Label from "../Input/Label";
import InputNo from "./InputNo";
import Input from "../Input/Input";

type NoHpProps = {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  countryCode: string;
};

const NoHp = ({ name, label, placeholder, type, countryCode }: NoHpProps) => {
  return (
    <div className="flex flex-col">
      <Label htmlFor={name}>{label}</Label>
      <div className="flex justify-between md:gap-6 gap-3">
        <InputNo countryCode={countryCode}></InputNo>
        <Input type={type} name={name} placeholder={placeholder}></Input>
      </div>
    </div>
  );
};

export default NoHp;
