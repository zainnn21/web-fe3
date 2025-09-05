import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/index";
import LineOr from "../Elements/LineOr/index";
import FormTitle from "../Elements/TitleForm/index";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/api/auth.service";

const FormLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    if (!data.email || !data.password) {
      alert("Semua field harus diisi !!!");
      return;
    }

    //NOTE: token sementara dikosongkan karena masih memakai mockapi & user tetap disimpan di localstorage
    try {
      const loggedInUser = await loginUser(data);
      const token = "";
      const user = loggedInUser;
      const isLogin = true;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLogin", JSON.stringify(isLogin));
      console.log(loggedInUser);

      alert("Selamat Datang " + loggedInUser.name);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        alert(error.message);
      } else {
        alert("Terjadi kesalahan");
      }
    }
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
