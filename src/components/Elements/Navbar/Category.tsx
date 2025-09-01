import React from "react";
import { Link } from "react-router-dom";

interface CategoryProps {
  children: React.ReactNode;
  variant?: string;
  To?: string;
}
const Category = ({ children, variant = "", To = "" }: CategoryProps) => {
  return (
    <Link
      to={To}
      className={`font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333AD] hidden md:block cursor-pointer hover:text-[#3ECF4C] ${variant}`}
    >
      {children}
    </Link>
  );
};

export default Category;
