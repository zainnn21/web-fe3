import Select from "react-select";

/**
 * Mendefinisikan struktur untuk setiap opsi dalam dropdown.
 */
interface SortOption {
  value: string;
  label: string;
}

/**
 * Daftar opsi yang akan ditampilkan di dropdown "Urutkan".
 */
const sortOptions: SortOption[] = [
  { value: "default", label: "Urutkan" },
  { value: "harga_terendah", label: "Harga Terendah" },
  { value: "harga_tertinggi", label: "Harga Tertinggi" },
  { value: "A to Z", label: "A to Z" },
  { value: "Z to A", label: "Z to A" },
  { value: "rating_tertinggi", label: "Rating Tertinggi" },
  { value: "rating_terendah", label: "Rating Terendah" },
];

/**
 * Props untuk komponen ProductControls.
 */
interface ProductControlsProps {
  selectedValue: string;
  onSelectChange: (value: string) => void;
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Komponen `ProductControls` menyediakan UI untuk mencari dan mengurutkan daftar produk.
 * Menggunakan `react-select` untuk dropdown yang dapat dikustomisasi.
 */
const ProductControls = ({
  selectedValue,
  onSelectChange,
  searchTerm,
  onSearchChange,
}: ProductControlsProps) => {
  // Menemukan objek opsi yang sesuai dengan nilai yang sedang dipilih.
  // Diperlukan untuk prop `value` dari react-select.
  const selectedOptionObject = sortOptions.find(
    (option) => option.value === selectedValue
  );

  return (
    <div className="flex gap-4 md:justify-end justify-between">
      <Select<SortOption>
        instanceId="sort-select"
        options={sortOptions.filter((option) => option.value !== "default")}
        value={selectedOptionObject}
        onChange={(selectedOption) => {
          if (selectedOption) {
            onSelectChange(selectedOption.value);
          }
        }}
        isSearchable={false}
        className="w-48"
        classNamePrefix="react-select"
        styles={{
          control: (base) => ({
            ...base,
            borderRadius: "10px",
            borderColor: "#3A35411F",
            boxShadow: "none",
            padding: "6px",
            "&:hover": {
              borderColor: "#3A35411F",
            },
          }),
          option: (base, { isSelected, isFocused }) => {
            let backgroundColor = "white";
            if (isSelected) {
              backgroundColor = "#F4F5FA";
            } else if (isFocused) {
              backgroundColor = "#DEEBFF";
            }

            return {
              ...base,
              backgroundColor,
              color: isSelected ? "black" : "gray",
              "&:active": {
                backgroundColor: "#F4F5FA",
              },
            };
          },
        }}
      />
      <div className="relative z-0">
        <input
          className="rounded-[10px] bg-white border px-3 py-3 border-[#3A35411F] cursor-pointer flex max-w-38 md:w-55 "
          placeholder="Cari Kelas"
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          name="cari"
          id="cari"
        />
        <img src="/carikelas.png" alt="" className="absolute right-3 top-3 " />
      </div>
    </div>
  );
};

export default ProductControls;
