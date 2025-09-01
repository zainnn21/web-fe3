import TitleCollectionVideo from "../Elements/Card/titlecollectionvideo";
import Filter from "../Elements/Card/filter";
import Card from "../Elements/Card";
import Data from "../../data/cardClass";
import Pagination from "../Elements/Card/Pagination";
import ProductControls from "../Elements/Card/sortandsearchproduct";
import { useEffect, useState } from "react";
import { useProductFilter } from "../../hooks/useProductFilter";
import { useSearchAndSort } from "../../hooks/useSearchAndSort";

const CATEGORY_OPTIONS = [
  { value: "Pemasaran", label: "Pemasaran" },
  { value: "Digital & Teknologi", label: "Digital & Teknologi" },
  { value: "Pengembangan Diri", label: "Pengembangan Diri" },
  { value: "Bisnis & Manajemen", label: "Bisnis & Manajemen" },
];

const PRICE_OPTIONS = [
  { value: "Gratis", label: "Gratis" },
  { value: "Murah", label: "Rp 0 - Rp 300K" },
  { value: "Sedang", label: "Rp 300K - Rp 500K" },
  { value: "Mahal", label: "Rp 500K+" },
];

const DURATION_OPTIONS = [
  { value: "KurangDari4jam", label: "Kurang Dari 4 Jam" },
  { value: "48jam", label: "4 - 8 Jam" },
  { value: "LebihDari8jam", label: "Lebih Dari 8 Jam" },
];

const AllProduct = () => {
  // 1. Filter berdasarkan checkbox
  const {
    filteredData: checkboxFilteredData,
    toggleFilter,
    resetFilters: resetCheckboxFilters,
    activeFilters,
  } = useProductFilter(Data);

  // 2. Terapkan pencarian dan pengurutan pada data yang sudah difilter
  const {
    processedData: finalData,
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
    resetSearchAndSort,
  } = useSearchAndSort(checkboxFilteredData);

  const [currentPage, setCurrentPage] = useState(1);

  // Fungsi reset gabungan untuk semua filter
  const handleReset = () => {
    resetCheckboxFilters();
    resetSearchAndSort();
    setCurrentPage(1);
  };

  // Atur ulang halaman ke 1 jika ada filter yang berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [finalData]);

  // Logika Paginasi
  const itemsPerPage = 6;
  const totalPages = Math.ceil(finalData.length / itemsPerPage);
  const currentItems = finalData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col px-7 md:px-30 py-5 md:py-16 md:gap-9 gap-6 items-center">
      <div className="flex flex-col md:gap-8 gap-6 md:w-300 w-80">
        <TitleCollectionVideo />
        <div className="flex gap-6 flex-col md:flex-row md:gap-10.5 justify-between">
          {/* filter container */}
          <Filter
            activeFilters={activeFilters}
            onFilterChange={toggleFilter}
            handleReset={handleReset}
            categoryOptions={CATEGORY_OPTIONS}
            priceOptions={PRICE_OPTIONS}
            durationOptions={DURATION_OPTIONS}
          />

          {/* product container */}
          <div className="flex flex-col gap-8">
            <ProductControls
              selectedValue={sortOption}
              onSelectChange={(value) => setSortOption(value)}
              searchTerm={searchTerm}
              onSearchChange={(e) => setSearchTerm(e.target.value)}
            />

            {/*course section*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentItems.map((item) => (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <Card key={item.id} {...(item as any)} />
              ))}
            </div>

            {/* Komponen Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
