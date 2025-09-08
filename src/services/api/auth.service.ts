import apiClient from "../apiClient";
import type { User, UserLogin } from "../types/auth";

const API_Users = `/users`;

//register user
export const registerUser = async (data: User) => {
  const response = await apiClient.post(API_Users, data);
  return response.data;
};

//login user
export const loginUser = async (data: UserLogin) => {
  const response = await apiClient.get(`${API_Users}?email=${data.email}`);
  console.log("Response Login: ", response);

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
  const response = await apiClient.get(`${API_Users}/${id}`);
  console.log("Data User: ", response);
  return response.data;
};

//update user
export const updateUser = async (id: string, data: User) => {
  const response = await apiClient.put(`${API_Users}/${id}`, data);
  console.log(`User ID: ${id} berhasil diupdate`);
  console.log("Server response: ", response);
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await apiClient.delete(`${API_Users}/${id}`);
  console.log(`User ID: ${id} berhasil dihapus: `);
  console.log("Server response: ", response);
  return response.data;
};
