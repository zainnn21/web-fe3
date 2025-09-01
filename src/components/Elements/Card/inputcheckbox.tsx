type Props = {
  name: string;
  variant?: string;
  id: string;
  onChange?: () => void;
  isChecked: boolean;
};

const InputCheckBox = ({ name, variant, id, onChange, isChecked }: Props) => {
  return (
    <div className="flex gap-3">
      <input
        type="checkbox"
        className={`w-4.5 h-4.5 pt-0.5 pl-0.5 rounded-sm border border-[#3ECF4C] bg-[#E2FCD9CC] appearance-none     checked:bg-[#3ECF4C] cursor-pointer ${variant}`}
        id={id}
        name={id}
        onChange={onChange}
        checked={isChecked}
      />
      <label
        htmlFor={id}
        className="font-normal text-base leading-[140%] tracking-[0.2px] text-[#333333]"
      >
        {name}
      </label>
    </div>
  );
};

export default InputCheckBox;
