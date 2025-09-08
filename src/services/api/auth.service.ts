import axios from "axios";
import type { User, UserLogin } from "../types/auth";

const API_URL = "https://68b67b2873b3ec66cec1a8fa.mockapi.io";
const API_Users = `/users`;

//register user
export const registerUser = async (data: User) => {
  try {
    const response = await axios.post(`${API_URL}${API_Users}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//login user
export const loginUser = async (data: UserLogin) => {
  const response = await axios.get(`${API_URL}/users?email=${data.email}`);

  //mengembalikan array,bahkan jika hanya ada 1 user
  const foundUser = response.data;

  //cek jika user tidak ditemukan
  if (foundUser.length === 0) {
    throw new Error("User Tidak Ditemukan");
  }

  const userFromAPI = foundUser[0];
  //bandingkan password
  if (userFromAPI.password !== data.password) {
    throw new Error("Password Salah");
  } else {
    console.log("Login Berhasil");
    const { ...userData } = userFromAPI;
    return userData;
  }
};

//ambil user by Id
export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}${API_Users}/${id}`);
    console.log("Data User: ", response);
    return response.data;
  } catch (error) {
    console.log(`Gagal mengambil data user ID: ${id}`, error);
    throw error;
  }
};

//update user
export const updateUser = async (id: string, data: User) => {
  try {
    const response = await axios.put(`${API_URL}${API_Users}/${data.id}`, data);
    console.log(`User ID: ${id} berhasil diupdate`);
    console.log("Server response: ", response);
    return response.data;
  } catch (error) {
    console.log(`Gagal update user ID: ${id}`, error);
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}${API_Users}/${id}`);
    console.log(`User ID: ${id} berhasil dihapus: `);
    console.log("Server response: ", response);
    return response.data;
  } catch (error) {
    console.log(`Gagal menghapus user ID: ${id}`, error);
    throw error;
  }
};
