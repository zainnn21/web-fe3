import { useState, useEffect, useRef } from "react";
import ExitLogo from "../../../assets/exit.png";
import { Link } from "react-router-dom";

interface ProfileProps {
  srcprofile: string;
  variant?: string;
}

const Profile = ({ srcprofile, variant }: ProfileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Apakah Anda yakin ingin keluar?");
    if (confirmLogout) {
      const profileData = JSON.parse(
        localStorage.getItem("profileData") || "{}"
      );
      if (profileData) {
        profileData.isLogin = false;
        localStorage.setItem("profileData", JSON.stringify(profileData));
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <img
          src={srcprofile}
          className={`w-11 h-11 rounded-[10px] ${variant}`}
          alt="profile"
        />
      </button>

      {isOpen && (
        <div
          className="md:absolute fixed md:top-16 top-19 md:left-auto left-0 right-0 rounded-br-sm rounded-bl-sm shadow-2xl bg-white  flex flex-col md:w-50 w-full z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div
            className="border-b px-3 py-4 gap-1.5 border-[#3A35411F] flex-col md:w-50 w-full block md:hidden"
            role="none"
          >
            <Link
              to="/all-product"
              className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333AD]"
            >
              Kategori
            </Link>
          </div>
          <div
            className="border-b px-3 py-4 gap-1.5 border-[#3A35411F] flex flex-col md:w-50 w-full"
            role="none"
          >
            <a
              href="/my-profile"
              className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333AD]"
            >
              Profile Saya
            </a>
          </div>
          <div
            className="border-b px-3 py-4 gap-1.5 border-[#3A35411F] flex flex-col w-full"
            role="none"
          >
            <Link
              to="#"
              className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333AD]"
            >
              Kelas Saya
            </Link>
          </div>
          <div
            className="border-b px-3 py-4 gap-1.5 border-[#3A35411F] flex flex-col w-full"
            role="none"
          >
            <Link
              to="#"
              className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333AD]"
            >
              Pesananan Saya
            </Link>
          </div>
          <div
            className="border-b px-3 py-4 gap-1.5 border-[#3A35411F] flex flex-col w-full"
            role="none"
          >
            <Link
              to="/"
              onClick={handleLogout}
              className="flex font-medium text-base leading-[140%] tracking-[0.2px] text-[#FF5C2B] items-center gap-1.5"
            >
              Keluar{``}
              <img src={ExitLogo} alt="" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
