import Header from "../components/Fragments/Header";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <div className="px-5 py-6 justify-center md:items-center flex min-h-screen">
        <AuthLayout>
          <FormRegister/>
        </AuthLayout>
      </div>
    </>
  );
};

export default RegisterPage;
