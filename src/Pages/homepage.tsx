import BodyHome from "../components/Fragments/BodyHome";
import PageLayout from "../components/Layouts/PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col justify-center px-5 md:px-30 py-7 md:py-16 md:gap-16 gap-6 w-full items-center ">
        <BodyHome />
      </div>
    </PageLayout>
  );
};
export default HomePage;
