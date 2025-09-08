import axios from "axios";

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
