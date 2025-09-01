type TitleProps = { children: string };

const Title = ({ children }: TitleProps) => {
  return <h1 className="font-bold text-sm md:text-[18px]">{children}</h1>;
};
export default Title;
