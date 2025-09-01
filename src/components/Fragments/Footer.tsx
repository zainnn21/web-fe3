import { useState } from "react";
import LogoImg from "../Elements/Navbar/logo";
import Address from "../Elements/address/index";
import CategoryFooter from "../Elements/FCategory/index";
import IconFooter from "../Elements/IconFooter/Index";

const FooterHome = () => {
  const [showKategori, setShowKategori] = useState(false);
  const [showPerusahaan, setShowPerusahaan] = useState(false);
  const [showKomunitas, setShowKomunitas] = useState(false);

  const toggleKategori = () => {
    setShowKategori(!showKategori);
  };

  const togglePerusahaan = () => {
    setShowPerusahaan(!showPerusahaan);
  };

  const toggleKomunitas = () => {
    setShowKomunitas(!showKomunitas);
  };

  return (
    <div className="bg-white border p-5 md:px-30 md:py-15 md:gap-5 gap-4 border-[#3A35411F] flex flex-col items-center">
      <div className="flex flex-col md:flex-row md:justify-between md:w-300 gap-4">
        <div className="flex flex-col gap-4 md:max-w-[352px]">
          <LogoImg></LogoImg>
          <div className="flex flex-col md:gap-3 gap-2">
            <Address
              title="Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!"
              p1="Jl. Usman Effendi No. 50 Lowokwaru, Malang"
              p2="+62-877-7123-1234"
            ></Address>
          </div>
        </div>
        <div className="flex md:gap-12 gap-3 md:flex-row flex-col">
          <div>
            <CategoryFooter
              title="Kategori"
              isOpen={showKategori}
              onToggle={toggleKategori}
              showToggle={true}
            >
              <li>
                <a href="#">Digital & Teknologi</a>
              </li>
              <li>
                <a href="#">Pemasaran</a>
              </li>
              <li>
                <a href="#">Manajemen Bisnis</a>
              </li>
              <li>
                <a href="#">Pengembangan Diri</a>
              </li>
              <li>
                <a href="#">Desain</a>
              </li>
            </CategoryFooter>
          </div>
          <div>
            <CategoryFooter
              title="Perusahaan"
              isOpen={showPerusahaan}
              onToggle={togglePerusahaan}
              showToggle={true}
            >
              <li>
                <a href="#">Tentang Kami</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Kebijakan Privasi</a>
              </li>
              <li>
                <a href="#">Ketentuan Layanan</a>
              </li>
              <li>
                <a href="#">Bantuan</a>
              </li>
            </CategoryFooter>
          </div>
          <div>
            <CategoryFooter
              title="Komunitas"
              isOpen={showKomunitas}
              onToggle={toggleKomunitas}
              showToggle={true}
            >
              <li>
                <a href="#">Tips Sukses</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </CategoryFooter>
          </div>
        </div>
      </div>
      <hr className="w-full md:w-300 border border-[#3A35411F]" />
      <div className="flex md:justify-between w-full md:max-w-300 md:flex-row flex-col gap-3">
        <IconFooter></IconFooter>
      </div>
    </div>
  );
};

export default FooterHome;
