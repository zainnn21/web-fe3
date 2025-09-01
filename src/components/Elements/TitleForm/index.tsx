import Parapgraph from "./Paragraph";
import Title from "./Title";

type FormTitleProps = {
  title: string;
  paragraph: string;
};

const FormTitle = ({ title, paragraph }: FormTitleProps) => {
  return (
    <div className="flex flex-col gap-2.5 ">
      <Title>{title}</Title>
      <Parapgraph>{paragraph}</Parapgraph>
    </div>
  );
};

export default FormTitle;
