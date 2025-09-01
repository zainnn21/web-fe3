import Arrow from "../../../../public/green arrow.png";
import React, { useState } from "react";
import CheckBox from "./inputcheckbox";

/**
 * Merepresentasikan state dari semua filter yang aktif.
 * Kunci (key) harus cocok dengan tipe filter yang ada.
 */
type FilterState = {
  category: string[];
  price: string[];
  duration: string[];
};

/**
 * Struktur untuk satu opsi filter yang akan dirender.
 */
type FilterOption = {
  value: string; // Nilai internal, mis: "PengembanganDiri"
  label: string; // Teks yang ditampilkan di UI, mis: "Pengembangan Diri"
};

/**
 * Props untuk komponen Filter yang sudah menerapkan best practice.
 */
type FilterProps = {
  activeFilters: FilterState;
  onFilterChange: (filterType: keyof FilterState, value: string) => void;
  handleReset: () => void;
  categoryOptions: FilterOption[];
  priceOptions: FilterOption[];
  durationOptions: FilterOption[];
};

/**
 * Merender bagian filter yang dapat dilipat (collapsible).
 * Komponen ini mencakup judul, ikon, dan menangani tampilan status buka/tutup.
 *
 * @param {string} props.title - Judul bagian filter.
 * @param {string} props.icon - Path ke gambar ikon untuk bagian tersebut.
 * @param {boolean} props.isOpen - Menunjukkan apakah bagian tersebut sedang terbuka.
 * @param {() => void} props.onToggle - Fungsi yang dipanggil saat header bagian diklik.
 * @param {React.ReactNode} props.children - Konten bagian (biasanya daftar komponen CheckBox).
 */
const FilterSection = ({
  title,
  icon,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  icon: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => (
  <div className="rounded-[10px] bg-white border px-4 py-3 flex flex-col gap-4 border-[#3A35411F]">
    {/* Header yang dapat diklik untuk toggle */}
    <div
      className="flex items-center gap-4 cursor-pointer hover:opacity-80"
      onClick={onToggle}
    >
      <img src={icon} alt={title.toLowerCase()} />
      <span className="font-medium text-base leading-[140%] tracking-[0.2px] w-full text-left text-[#3ECF4C]">
        {title}
      </span>
      <img
        src={Arrow}
        alt="arrow"
        className={`transition-transform duration-200 text-[#3ECF4C] ${
          !isOpen ? "rotate-90" : ""
        }`}
      />
    </div>
    {/* Konten (daftar checkbox) hanya ditampilkan jika section terbuka */}
    {isOpen && <div className="flex flex-col gap-3">{children}</div>}
  </div>
);

/**
 * Komponen filter utama yang menampilkan berbagai opsi pemfilteran produk.
 * Komponen ini bersifat "data-driven", artinya ia merender UI berdasarkan data (opsi) yang diterima melalui props.
 * Ini membuatnya sangat fleksibel dan dapat digunakan kembali.
 *
 * @param {FilterProps} props - Props untuk komponen Filter.
 */
const Filter = ({
  handleReset,
  activeFilters,
  onFilterChange,
  categoryOptions,
  priceOptions,
  durationOptions,
}: FilterProps) => {
  // State untuk mengelola status buka/tutup dari setiap bagian filter.
  const [openSections, setOpenSections] = useState({
    // Default semua section terbuka
    category: true,
    harga: true,
    durasi: true,
  });

  /**
   * Mengubah status buka/tutup dari bagian filter tertentu.
   * @param {keyof typeof openSections} section - Nama bagian yang akan di-toggle.
   */
  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="rounded-[10px] bg-white border md:p-5 p-4 flex flex-col gap-3 md:gap-4 border-[#3A35411F] w-80 h-fit">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[18px] leading-[120%] font-poppins text-[#333333]">
          Filter
        </p>
        <button
          className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#FF5C2B] cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <FilterSection
        title="Bidang Studi"
        icon="/Notebook.png"
        isOpen={openSections.category}
        onToggle={() => toggleSection("category")}
      >
        {categoryOptions.map((option) => (
          <CheckBox
            key={option.value}
            id={option.value}
            name={option.label}
            isChecked={activeFilters.category.includes(option.value)}
            onChange={() => onFilterChange("category", option.value)}
          />
        ))}
      </FilterSection>
      <FilterSection
        title="Harga"
        icon="/ShoppingBag.png"
        isOpen={openSections.harga}
        onToggle={() => toggleSection("harga")}
      >
        {priceOptions.map((option) => (
          <CheckBox
            key={option.value}
            id={option.value}
            name={option.label}
            isChecked={activeFilters.price.includes(option.value)}
            onChange={() => onFilterChange("price", option.value)}
          />
        ))}
      </FilterSection>
      <FilterSection
        title="Durasi"
        icon="/Clock.png"
        isOpen={openSections.durasi}
        onToggle={() => toggleSection("durasi")}
      >
        {durationOptions.map((option) => (
          <CheckBox
            key={option.value}
            id={option.value}
            name={option.label}
            isChecked={activeFilters.duration.includes(option.value)}
            onChange={() => onFilterChange("duration", option.value)}
            variant="!rounded-full"
          />
        ))}
      </FilterSection>
    </div>
  );
};
export default Filter;
