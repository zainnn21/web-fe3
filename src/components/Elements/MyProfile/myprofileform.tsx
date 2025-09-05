import { useId } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  value?: number | string;
  placeHolder?: string;
};

const MyProfileForm = ({ label, placeHolder, type = "text", value, ...props }: Props) => {
  const inputId = useId();

  return (
    <div className="relative">
      <input
        id={inputId}
        type={type}
        placeholder={placeHolder}
        value={value}
        className="peer w-full rounded-lg border border-gray-300 p-4 text-base text-gray-900 h-[49px] placeholder-transparent focus:border-[#3ECF4C] focus:outline-none"
        {...props}
      />
      <label
        htmlFor={inputId}
        className="absolute -top-2.5 left-2 bg-white px-1 text-sm text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#3ECF4C]"
      >
        {label}
      </label>
    </div>
  );
};

export default MyProfileForm;
