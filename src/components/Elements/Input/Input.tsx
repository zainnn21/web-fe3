import { useState } from "react";
import Eyeoff from "../../../assets/mdi_eye-off.png";
import Eyeon from "../../../assets/mdi_eye-on.png";

type InputProps = {
  name?: string;
  placeholder: string;
  type: string;
  variant?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
};

const Input = ({ name, placeholder, type, variant, onChange, value }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        className={` rounded-md border border-[#3A35411F] h-12 cursor-pointer font-roboto font-normal text-base leading-[140%] tracking-[0.2px] text-[#1D2433] px-2.5 py-1 w-full ${variant}`}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
      {isPassword && (
        <img
          src={showPassword ? Eyeon : Eyeoff}
          alt={showPassword ? "Hide Password" : "Show Password"}
          className="absolute top-3 right-3 cursor-pointer w-6 h-6"
          onClick={() => setShowPassword((prev) => !prev)}
        />
      )}
    </div>
  );
};

export default Input;
