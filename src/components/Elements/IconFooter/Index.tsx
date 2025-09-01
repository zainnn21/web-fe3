import IconF from "./IconF";
import Title from "./Title";

import Icon1 from "../../../assets/linkedin.png";
import Icon2 from "../../../assets/facebook.png";
import Icon3 from "../../../assets/ig.png";
import Icon4 from "../../../assets/twitter.png";

const IconFooter = () => {
  return (
    <>
      <Title>@2023 Gerobak Sayur All Rights Reserved.</Title>
      <IconF
        icon1={Icon1}
        icon2={Icon2}
        icon3={Icon3}
        icon4={Icon4}
        desc1="Linkedin"
        desc2="Facebook"
        desc3="Instagram"
        desc4="Twitter"
      ></IconF>
    </>
  );
};
export default IconFooter;
