type ParagraphProps = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className="font-normal text-sm md:text-base leading-[140%] tracking-[0.2px]">
      {children}
    </p>
  );
};

export default Paragraph;
