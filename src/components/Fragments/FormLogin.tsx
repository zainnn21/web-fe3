import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/index";
import LineOr from "../Elements/LineOr/index";
import FormTitle from "../Elements/TitleForm/index";
import { Link, useNavigate } from "react-router-dom";
const FormLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userProfile = localStorage.getItem("profileData");

    if (userProfile === null) {
      alert("Profile Tidak Ditemukan");
      return;
    }

    const userData = JSON.parse(userProfile);
    const emailInput = event.target.email.value;
    const passwordInput = event.target.password.value;
    console.log(emailInput, passwordInput);
    console.log(userData);
    console.log(userData.email);

    if (emailInput !== userData.email || passwordInput !== userData.password) {
      alert("Email atau password salah");
      return;
    }

    alert("Login berhasil");
    console.log("clicked");
    userData.isLogin = true;
    localStorage.setItem("profileData", JSON.stringify(userData));
    navigate("/");
  };
  return (
    <>
      <FormTitle
        title="Masuk ke Akun"
        paragraph="Yuk, lanjutin belajarmu di videobelajar."
      ></FormTitle>
      <form className="gap-3 flex flex-col" onSubmit={handleSubmit}>
        <InputForm
          label="E-Mail "
          name="email"
          placeholder=""
          type="email"
        ></InputForm>
        <InputForm
          label="Kata Sandi "
          name="password"
          placeholder=""
          type="password"
        ></InputForm>
        <Link
          // Sebaiknya arahkan ke rute yang valid, contoh: /forgot-password
          to="/forgot-password"
          className="font-medium text-sm leading-[140%] tracking-[0.2px] text-[#333333AD] text-right"
        >
          Lupa Password?
        </Link>
        <Button
          label="Masuk"
          bg="bg-[#3ECF4C]"
          textColor="text-white"
          typeButton="submit"
        ></Button>
        <Button
          label="Daftar"
          bg="bg-[#E2FCD9CC]"
          textColor="text-[#3ECF4C]"
          onClick={() => navigate("/register")}
          typeButton="button"
        ></Button>
        <LineOr></LineOr>
        <Button
          label="Masuk Dengan Google"
          bg="bg-white"
          textColor="text-[#4A505C]"
          border="border border-[#F1F1F1] border-solid"
          GoogleImg
          typeButton="button"
        ></Button>
      </form>
    </>
  );
};

export default FormLogin;
