import apiClient from "../apiClient";
import type { Product } from "../types/product";

const API_Products = `/product`;

export const getProduct = async () => {
  const response = await apiClient.get(API_Products);
  console.log("Data Product: ", response);
  return response.data;
};

export const getProductByUserId = async (creatorId: number) => {
  const response = await apiClient.get(
    `${API_Products}?creatorId=${creatorId}`,
    {}
  );
  return response.data;
};

export const addProduct = async (data: Product) => {
  const response = await apiClient.post(API_Products, data);
  return response.data;
};

export const updateProduct = async (id: number, data: Product) => {
  const response = await apiClient.put(`${API_Products}/${id}`, data);
  return response.data;
};

export const deleteProduct = async (id: number) => {
  const response = await apiClient.delete(`${API_Products}/${id}`);
  return response.data;
};
