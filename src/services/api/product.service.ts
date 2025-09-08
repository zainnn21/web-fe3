import axios from "axios";
import type { Product } from "../types/product";

const API_URL = "https://68b67b2873b3ec66cec1a8fa.mockapi.io";
const API_Products = `/product`;

export const getProduct = async () => {
  try {
    const response = await axios.get(`${API_URL}${API_Products}`);
    console.log("Data Product: ", response);
    return response.data;
  } catch (error) {
    console.log("Gagal mengambil data product", error);
    throw error;
  }
};

export const getProductByUserId = async (creatorId: number) => {
  try {
    const response = await axios.get(`${API_URL}${API_Products}`, {
      params: {
        creatorId: creatorId,
      },
    });
    console.log(`Data Product Id: ${creatorId}`, response);
    console.log("url: ", `${API_URL}${API_Products}?creatorId=${creatorId}`);
    return response.data;
  } catch (error) {
    console.log("Gagal mengambil data product", error);
    throw error;
  }
};

export const addProduct = async (data: Product) => {
  try {
    const response = await axios.post(`${API_URL}${API_Products}`, data);
    return response.data;
  } catch (error) {
    console.log("Gagal menambahkan data product", error);
    throw error;
  }
};

export const updateProduct = async (id: number, data: Product) => {
  try {
    const response = await axios.put(`${API_URL}${API_Products}/${id}`, data);
    return response.data;
  } catch (error) {
    console.log("Gagal memperbarui data product", error);
    throw error;
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}${API_Products}/${id}`);
    return response.data;
  } catch (error) {
    console.log("Gagal menghapus data product", error);
    throw error;
  }
};
