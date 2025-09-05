import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
import LineOr from "../Elements/LineOr";
import FormTitle from "../Elements/TitleForm";
import OptionGender from "../Elements/OptionGender/Index";
import { Link, useNavigate } from "react-router-dom";
import NoHp from "../Elements/NoHp/index";
import { registerUser } from "../../services/api/auth.service";

const FormRegister = () => {
  const navigate = useNavigate();

  //simpan data user di local storage
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputUser = {
      name: event.target.namalenkap.value,
      email: event.target.email.value,
      gender: event.target.jeniskelamin.value,
      phone: event.target.nohp.value,
      password: event.target.password.value,
      countryCode: event.target.countryCode.value,
      konfirmasiPassword: event.target.konfirmasipassword.value,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: Math.random().toString(36),
    };

    if (
      !inputUser.name ||
      !inputUser.email ||
      !inputUser.gender ||
      !inputUser.phone ||
      !inputUser.password ||
      !inputUser.konfirmasiPassword ||
      !inputUser.countryCode
    ) {
      alert("Semua field harus diisi !!!");
      return;
    }

    if (inputUser.password !== inputUser.konfirmasiPassword) {
      alert("Password tidak sama !!!");
      return;
    }

    if (inputUser.phone.length < 8) {
      alert("No Hp minimal 8 angka !!!");
      return;
    }

    if (inputUser.phone.length > 15) {
      alert("No Hp maksimal 15 angka !!!");
      return;
    }

    if (!inputUser.phone.match(/^\d+$/)) {
      alert("No Hp harus angka !!!");
      return;
    }

    registerUser(inputUser);
    console.log(inputUser);
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
          name="namalenkap"
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
