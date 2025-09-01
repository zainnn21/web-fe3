import type { ReactNode } from "react";
import BackgroundImage from "./Background";

type WideCardProps = {
  variant: "topcard" | "lowercard";
  children: ReactNode;
};

const WideCard = ({ variant, children }: WideCardProps) => {
  return <BackgroundImage namecard={variant}>{children}</BackgroundImage>;
};

export default WideCard;
