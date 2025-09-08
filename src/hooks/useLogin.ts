import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api/auth.service";

export const useLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.currentTarget;

    const data = {
      email: target.email.value,
      password: target.password.value,
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
  return handleSubmit;
};
