import { useState, useMemo, useCallback } from "react";

/**
 * @interface ProductItem
 * @description Mewakili struktur satu item produk.
 * @property {number} id - Pengidentifikasi unik untuk produk.
 * @property {string} category - Kategori produk.
 * @property {string} price - Harga produk dalam bentuk string (misalnya, "300K", "Gratis").
 * @property {string} duration - Durasi produk dalam bentuk string (misalnya, "8 jam").
 * @property {string} texttitle - Judul produk untuk pencarian.
 * @property {string} ratingdesc - Deskripsi rating untuk pengurutan.
 * @property {unknown} [key: string] - Memungkinkan properti lain yang tidak terduga.
 */
export interface ProductItem {
  id: number;
  category: string;
  price: string;
  duration: string;
  texttitle: string;
  ratingdesc: string;
  [key: string]: unknown;
}

/**
 * @typedef FilterState
 * @description Mewakili state dari semua filter yang aktif.
 * @property {string[]} category - Array dari filter kategori yang aktif.
 * @property {string[]} price - Array dari filter kategori harga yang aktif (misalnya, "Murah", "Gratis").
 * @property {string[]} duration - Array dari filter kategori durasi yang aktif (misalnya, "48jam").
 */
type FilterState = {
  category: string[];
  price: string[];
  duration: string[];
};

// --- Fungsi Bantuan (Helper Functions) ---

/**
 * Mengonversi string harga (misalnya, "300K") menjadi nilai numerik.
 * @param {string} price - String harga yang akan dikonversi.
 * @returns {number} Nilai numerik dari harga.
 */
const getPriceValue = (price: string | number): number => {
  if (typeof price === "number") {
    console.log(price);
    return price;
  }
  if (typeof price === "string") {
    if (price.toLocaleLowerCase().includes("gratis")) return 0;
    const regex = /(\d+)K/;
    const match = regex.exec(price);
    return match ? parseInt(match[1]) * 1000 : 0;
  }
  return 0;
};

/**
 * Mengekstrak durasi dalam jam dari sebuah string (misalnya, "8 jam").
 * @param {string} duration - String durasi.
 * @returns {number} Durasi dalam jam.
 */
const getDurationInHours = (duration: string): number => {
  const regex = /(\d+) jam/;
  const match = regex.exec(duration);
  return match ? parseInt(match[1]) : 0;
};

/**
 * Menentukan kategori harga ("Gratis", "Murah", "Sedang", "Mahal") berdasarkan string harga.
 * @param {string} price - String harga.
 * @returns {string} Kategori harga yang sesuai.
 */
const getPriceCategory = (price: string): string => {
  const value = getPriceValue(price);
  if (value === 0) return "Gratis";
  if (value <= 300000) return "Murah";
  if (value <= 500000) return "Sedang";
  return "Mahal";
};

/**
 * Menentukan kategori durasi berdasarkan string durasi.
 * @param {string} duration - String durasi.
 * @returns {string} Kategori durasi yang sesuai.
 */
const getDurationCategory = (duration: string): string => {
  const hours = getDurationInHours(duration);
  if (hours < 4) return "KurangDari4jam";
  if (hours <= 8) return "48jam";
  return "LebihDari8jam";
};

/**
 * Hook kustom React untuk mengelola logika pemfilteran produk.
 * Hook ini merangkum state untuk filter aktif dan menyediakan fungsi untuk memanipulasinya.
 * Logika pemfilteran di-memoize untuk meningkatkan performa.
 *
 * @param {ProductItem[]} data - Array data produk asli yang akan difilter.
 * @returns {{
 *   filteredData: ProductItem[],
 *   toggleFilter: (filterType: keyof FilterState, value: string) => void,
 *   resetFilters: () => void,
 *   activeFilters: FilterState
 * }} Objek yang berisi data yang telah difilter dan fungsi untuk mengelola filter.
 */
export const useProductFilter = (data: ProductItem[]) => {
  /**
   * State untuk menyimpan filter yang sedang aktif untuk setiap kategori.
   */
  const [activeFilters, setFilters] = useState<FilterState>({
    category: [],
    price: [],
    duration: [],
  });

  /**
   * Mengaktifkan atau menonaktifkan sebuah nilai filter untuk tipe filter tertentu.
   * Jika nilai sudah ada di dalam filter, nilai tersebut akan dihapus. Jika tidak, akan ditambahkan.
   * Dibungkus dengan `useCallback` untuk mencegah pembuatan ulang fungsi pada setiap render.
   * @param {keyof FilterState} filterType - Tipe filter yang akan diubah ('category', 'price', 'duration').
   * @param {string} value - Nilai filter yang akan di-toggle.
   */
  const toggleFilter = useCallback(
    (filterType: keyof FilterState, value: string) => {
      setFilters((prev) => {
        const currentFilters = prev[filterType];
        const newFilters = currentFilters.includes(value)
          ? currentFilters.filter((f) => f !== value)
          : [...currentFilters, value];
        return { ...prev, [filterType]: newFilters };
      });
    },
    [] // Array dependensi kosong berarti fungsi ini hanya dibuat sekali.
  );

  /**
   * Mengatur ulang semua filter aktif ke state awal (kosong).
   * Dibungkus dengan `useCallback` untuk optimasi.
   */
  const resetFilters = useCallback(() => {
    setFilters({ category: [], price: [], duration: [] });
  }, []);

  /**
   * Kalkulasi data yang difilter menggunakan `useMemo`.
   * Logika ini hanya akan berjalan kembali jika `data` atau `activeFilters` berubah,
   * mencegah kalkulasi yang berat pada setiap render.
   */
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Periksa apakah kategori item cocok dengan filter kategori yang aktif.
      // Jika tidak ada filter kategori yang aktif, pengecekan ini lolos.
      const categoryMatch =
        activeFilters.category.length === 0 ||
        activeFilters.category.includes(item.category);

      // Periksa apakah kategori harga item cocok dengan filter harga yang aktif.
      const priceMatch =
        activeFilters.price.length === 0 ||
        activeFilters.price.includes(getPriceCategory(item.price));

      // Periksa apakah kategori durasi item cocok dengan filter durasi yang aktif.
      const durationMatch =
        activeFilters.duration.length === 0 ||
        activeFilters.duration.includes(getDurationCategory(item.duration));

      // Item akan dimasukkan ke dalam hasil jika cocok dengan semua kategori filter yang aktif.
      return categoryMatch && priceMatch && durationMatch;
    });
  }, [data, activeFilters]);

  return {
    filteredData,
    toggleFilter,
    resetFilters,
    activeFilters,
  };
};
