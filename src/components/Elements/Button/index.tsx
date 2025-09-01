import GoogleLogo from "../../../assets/logos_google-icon.png";

type ButtonProps = {
  label: string;
  bg?: string;
  textColor?: string;
  border?: string;
  typeButton?: "button" | "submit" | "reset";
  GoogleImg?: boolean;
  onClick?: () => void;
};

const Button = ({
  label,
  bg,
  textColor,
  border,
  typeButton,
  GoogleImg,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`rounded-[10px] w-full  font-bold text-sm leading-[140%] tracking-[0.2px] h-9 md:h-11 flex items-center justify-center gap-2 cursor-pointer ${border} ${bg} ${textColor}`}
      onClick={onClick}
      type={typeButton}
    >
      {GoogleImg && (
        <img src={GoogleLogo} alt="Logo Google" className="w-5 h-5" />
      )}
      {label}
    </button>
  );
};

export default Button;
