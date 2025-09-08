import { create } from "zustand";
import type { Product } from "../services/types/product";
import {
  getProductByUserId,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../services/api/product.service";

interface AdminState {
  products: Product[];
  error: string | null;
  fetchProductsByUserId: (creatorId: number) => Promise<void>;
  addNewProduct: (data: Product) => Promise<void>;
  updateExistingProduct: (id: number, data: Product) => Promise<void>;
  deleteExistingProduct: (id: number) => Promise<void>;
}
export const useAdminStore = create<AdminState>((set) => ({
  //initial state
  products: [],
  error: null,

  fetchProductsByUserId: async (creatorId: number) => {
    try {
      const response = await getProductByUserId(creatorId);
      console.log("Data Product: ", response);
      set({ products: response });
      return response.data;
    } catch (error) {
      console.log(
        `Gagal mengambil data product untuk user ID: ${creatorId}`,
        error
      );
      set({ error: "Gagal mengambil data product" });
    }
  },

  addNewProduct: async (data: Product) => {
    try {
      // Implementasi logika untuk menambahkan produk baru
      const response = await addProduct(data);
      console.log("Data Product: ", response);
      return response.data;
    } catch (error) {
      console.log("Gagal menambahkan data product", error);
      set({ error: "Gagal menambahkan data product" });
    }
  },
  updateExistingProduct: async (id: number, data: Product) => {
    try {
      // Implementasi logika untuk memperbarui produk yang ada
      const response = await updateProduct(id, data);
      console.log("Data Product: ", response);
      return response.data;
    } catch (error) {
      console.log("Gagal memperbarui data product", error);
      set({ error: "Gagal memperbarui data product" });
    }
  },
  deleteExistingProduct: async (id: number) => {
    try {
      // Implementasi logika untuk menghapus produk
      const response = await deleteProduct(id);
      console.log("Data Product: ", response);
      return response.data;
    } catch (error) {
      console.log("Gagal menghapus data product", error);
      set({ error: "Gagal menghapus data product" });
    }
  },
}));
