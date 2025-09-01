import { Link } from "react-router-dom";

type Props = {
  imgSrc: string;
  imgAlt: string;
  buttonTitle: string;
  navigate: string;
  variant?: string;
};

const handleClick = () => {
  console.log("clicked");
};

const NavigationButton = ({
  imgSrc,
  imgAlt,
  buttonTitle,
  navigate,
  variant,
}: Props) => {
  return (
    <Link
      to={navigate}
      onClick={handleClick}
      className={`rounded-sm text-[#3A354161] p-3 flex gap-3 ${variant} cursor-pointer`}
    >
      <img src={imgSrc} alt={imgAlt} className="w-6 h-6" />
      <p className="font-bold text-lg leading-[140%] tracking-[0.2px] text-center">
        {buttonTitle}
      </p>
    </Link>
  );
};

export default NavigationButton;
