import React from "react";

const DOTS = "...";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string; // Prop opsional untuk kustomisasi style dari luar
}

/**
 * Menghasilkan rentang halaman untuk ditampilkan di paginasi.
 * @param currentPage Halaman aktif saat ini.
 * @param totalPages Jumlah total halaman.
 * @returns Array berisi nomor halaman dan elipsis, contoh: [1, '...', 4, 5, 6, '...', 10]
 */
const generatePaginationRange = (
  currentPage: number,
  totalPages: number
): (string | number)[] => {
  // Jika total halaman 7 atau kurang, tampilkan semua nomor halaman.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Jika halaman saat ini berada di dekat awal (halaman 1-4)
  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, DOTS, totalPages];
  }

  // Jika halaman saat ini berada di dekat akhir (halaman totalPages-3 sampai totalPages)
  if (currentPage >= totalPages - 3) {
    return [1, DOTS, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  // Jika halaman saat ini berada di tengah
  return [1, DOTS, currentPage - 1, currentPage, currentPage + 1, DOTS, totalPages];
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) => {
  // Jangan render komponen jika hanya ada 1 halaman atau kurang
  if (totalPages <= 1) {
    return null;
  }

  const paginationRange = generatePaginationRange(currentPage, totalPages);

  return (
    <div className={`flex justify-end gap-1.5 mt-4 ${className}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 bg-[#F4F5FA] border border-[#3A35411F] rounded-sm disabled:opacity-50 w-10 h-10 cursor-pointer"
        aria-label="Go to previous page"
      >
        &lt;
      </button>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <span
              key={`${DOTS}-${index}`}
              className="p-2 w-10 h-10 flex items-center justify-center"
            >
              &#8230;
            </span>
          );
        }

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber as number)}
            className={`p-2 rounded-sm font-semibold w-10 h-10 cursor-pointer ${
              currentPage === pageNumber
                && "bg-[#FFBD3A] text-white border-[#FFBD3A]"
            }`}
            aria-current={currentPage === pageNumber ? "page" : undefined}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 bg-[#F4F5FA] border border-[#3A35411F] rounded-sm disabled:opacity-50 w-10 h-10 cursor-pointer"
        aria-label="Go to next page"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
