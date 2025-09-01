import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";

interface LogoImgProps {
  titleimg?: string;
}

const LogoImg = ({ titleimg }: LogoImgProps) => {
  return (
    <Link to="/">
      <img
        src={Logo}
        alt="videobelajar"
        title={titleimg}
        className="w-38 h-10.5 md:w-51 md:h-14"
      />
    </Link>
  );
};

export default LogoImg;
