import { useLocation, Link } from "react-router-dom";
import Logo from "./logo";
import Category from "./Category";
import Profile from "./profile";
import PP from "../../../assets/profile.png";
import Line3 from "../../../assets/3line.png";

const Navbar = () => {
  // 1. Dapatkan path URL saat ini dengan hook `useLocation` dari React Router.
  const { pathname } = useLocation();
  const getUserData = JSON.parse(localStorage.getItem("profileData") || "{}");

  // 2. Simulasi status login.
  // Di real aplikasi, nilai ini akan datang dari state management (seperti Context API atau Redux).
  const isLoggedIn = getUserData.isLogin;

  // Kondisi untuk mengecek apakah kita berada di halaman login atau register
  const isAuthPage = pathname === "/login" || pathname === "/register";

  const categoryVariant = pathname === "/all-product" ? "!text-[#3ECF4C]" : "";
  const adminVariant = pathname === "/admin" ? "!text-[#3ECF4C]" : "";


  return (
    <>
      <div className="flex items-center justify-between md:max-w-280 w-full">
        <Logo />
        <div className="flex gap-4 md:gap-8">
          {!isAuthPage && (
            <>
              {isLoggedIn && (
                <Category To="/admin" variant={adminVariant}>
                  Admin
                </Category>
              )}{" "}
            </>
          )}
          {!isAuthPage && (
            <Category To="/all-product" variant={categoryVariant}>
              Kategori
            </Category>
          )}
        </div>
      </div>
      {/* Tampilkan bagian ini (profile atau tombol login) hanya jika BUKAN halaman login atau register */}
      {!isAuthPage && (
        <>
          {isLoggedIn ? (
            // JIKA PENGGUNA SUDAH LOGIN: Tampilkan ikon profil.
            <div className="flex items-center">
              <div className="hidden md:block">
                <Profile srcprofile={PP} />
              </div>
              <div className="md:hidden">
                <Profile srcprofile={Line3} variant="!w-6 !h-6" />
              </div>
            </div>
          ) : (
            // JIKA PENGGUNA BELUM LOGIN: Tampilkan tombol Masuk dan Daftar.
            <div className="flex items-center gap-2 md:gap-4">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-white bg-[#3ECF4C] rounded-md hover:bg-green-600 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-sm font-medium  rounded-md  transition-colors text-[#3ECF4C] border border-[#3ECF4C] hover:bg-green-200"
              >
                Register
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
