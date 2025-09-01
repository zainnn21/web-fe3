type CardTitleProps = {
  children: React.ReactNode;
  name: string;
};

const CardTitle = ({ children, name }: CardTitleProps) => {
  return (
    <h6
      title={name}
      className={
        name === "titlecard"
          ? "font-poppins font-semibold text-base md:text-[18px] leading-[120%] text-[#222325]"
          : "font-medium text-sm md:text-base leading-[140%] tracking-[0.2px] text-[#222325]"
      }
    >
      {children}
    </h6>
  );
};

export default CardTitle;
