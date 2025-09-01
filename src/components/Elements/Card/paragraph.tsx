type ParagraphCardProps = {
  children: React.ReactNode;
  name: string;
};

const ParagraphCard = ({ name, children }: ParagraphCardProps) => {
  return (
    <p
      title={name}
      className={
        name === "pcard"
          ? "font-medium text-sm leading-[140%] tracking-[0.2px] text-[#333333AD] hidden md:block"
          : "font-normal text-xs md:text-sm leading-[140%] tracking-[0.2px] text-[#333333AD]"
      }
    >
      {children}
    </p>
  );
};

export default ParagraphCard;
