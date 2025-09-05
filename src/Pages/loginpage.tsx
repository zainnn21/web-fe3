import Header from "../components/Fragments/Header";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <>
      <Header/>
      <div className="px-5 py-6 justify-center md:items-center flex min-h-screen">
        <AuthLayout>
          <FormLogin/>
        </AuthLayout>
      </div>
    </>
  );
};

export default LoginPage;
