import Label from "../Input/Label";
import Option from "./Option";

type OptionListProps = {
  name: string;
  label: string;
};

const OptionList = ({ name, label }: OptionListProps) => {
  return (
    <div className="flex flex-col">
      <Label htmlFor={name}>{label}</Label>
      <Option name={name}></Option>
    </div>
  );
};

export default OptionList;
