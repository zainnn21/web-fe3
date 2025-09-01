import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
import LineOr from "../Elements/LineOr";
import FormTitle from "../Elements/TitleForm";
import OptionGender from "../Elements/OptionGender/Index";
import { Link, useNavigate } from "react-router-dom";
import NoHp from "../Elements/NoHp/index";

const FormRegister = () => {
  const navigate = useNavigate();

  //simpan data user di local storage
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("clicked");
    const userData = {
      namaLengkap: event.target.namalengkap.value,
      email: event.target.email.value,
      jenisKelamin: event.target.jeniskelamin.value,
      noHp: event.target.nohp.value,
      password: event.target.password.value,
      countryCode: event.target.countryCode.value,
      konfirmasiPassword: event.target.konfirmasipassword.value,
      isLogin: false,
    };

    if (
      !userData.namaLengkap ||
      !userData.email ||
      !userData.jenisKelamin ||
      !userData.noHp ||
      !userData.password ||
      !userData.konfirmasiPassword ||
      !userData.countryCode
    ) {
      alert("Semua field harus diisi !!!");
      return;
    }

    if (userData.password !== userData.konfirmasiPassword) {
      alert("Password tidak sama !!!");
      return;
    }

    if (userData.noHp.length < 8) {
      alert("No Hp minimal 8 angka !!!");
      return;
    }

    if (userData.noHp.length > 15) {
      alert("No Hp maksimal 15 angka !!!");
      return;
    }

    if (!userData.noHp.match(/^\d+$/)) {
      alert("No Hp harus angka !!!");
      return;
    }
    localStorage.setItem("profileData", JSON.stringify(userData));
    navigate("/login");
  };

  return (
    <>
      <FormTitle
        title="Pendaftaran Akun"
        paragraph="Yuk, daftarkan akunmu sekarang juga!"
      ></FormTitle>

      <form className="gap-3 flex flex-col" onSubmit={handleSubmit}>
        <InputForm
          label="Nama Lengkap"
          name="namalengkap"
          placeholder=""
          type="text"
        ></InputForm>
        <InputForm
          label="E-Mail "
          name="email"
          placeholder=""
          type="email"
        ></InputForm>
        <OptionGender label="Jenis Kelamin " name="jeniskelamin"></OptionGender>
        <NoHp
          label="No. Hp "
          name="nohp"
          placeholder=""
          type="tel"
          countryCode="countryCode"
        ></NoHp>
        <InputForm
          label="Kata Sandi "
          name="password"
          placeholder=""
          type="password"
        ></InputForm>
        <InputForm
          label="Konfirmasi Kata Sandi "
          name="konfirmasipassword"
          placeholder=""
          type="password"
        ></InputForm>
        <Link
          to="/forgot-password"
          className="font-medium text-sm leading-[140%] tracking-[0.2px] text-[#333333AD] text-right"
        >
          Lupa Password?
        </Link>
        <Button
          label="Daftar"
          bg="bg-[#3ECF4C]"
          textColor="text-white"
          typeButton="submit"
        ></Button>
        <Button
          label="Masuk"
          bg="bg-[#E2FCD9CC]"
          textColor="text-[#3ECF4C]"
          onClick={() => navigate("/login")}
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

export default FormRegister;
