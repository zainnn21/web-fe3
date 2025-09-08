import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api/auth.service";

export const useRegister = () => {
  const navigate = useNavigate();

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.currentTarget;

    const inputUser = {
      id: Math.random().toString(36), // generate a random id
      name: target.namalenkap.value,
      email: target.email.value,
      gender: target.gender.value,
      phone: target.phone.value,
      password: target.password.value,
      konfirmasiPassword: target.konfirmasipassword.value,
      countryCode: target.countryCode.value,
      createdAt: new Date(),
      updatedAt: new Date(),
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

    try {
      await registerUser(inputUser);
      console.log("Data User Berhasil Ditambahkan: ", inputUser);
      alert("Pendaftaran berhasil!");
      navigate("/login");
    } catch (error) {
      console.error("Pendaftaran gagal:", error);
      alert("Pendaftaran gagal. Silakan coba lagi.");
    }
  };
  return handleRegister;
};
