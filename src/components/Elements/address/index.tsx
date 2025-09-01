import Title from "./title";
import Paragraph from "./paragraph";

type AddressProps = {
  title: string;
  p1: string;
  p2: string;
};

const Address = ({ title, p1, p2 }: AddressProps) => {
  return (
    <>
      <Title>{title}</Title>
      <Paragraph>{p1}</Paragraph>
      <Paragraph>{p2}</Paragraph>
    </>
  );
};

export default Address;
