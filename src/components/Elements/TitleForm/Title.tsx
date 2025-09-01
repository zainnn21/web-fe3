type TitleFormProps = {
  children: React.ReactNode;
  tvariant?: string;
};

const TitleForm = ({ children, tvariant }: TitleFormProps) => {
  return (
    <h1
      className={` font-poppins font-semibold text-2xl leading-[110%] text-center text-[#222325] md:text-3xl ${tvariant}`}
    >
      {children}
    </h1>
  );
};



export default TitleForm;
