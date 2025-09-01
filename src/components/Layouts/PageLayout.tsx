import Header from "../Fragments/Header";
import Footer from "../Fragments/Footer";

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
