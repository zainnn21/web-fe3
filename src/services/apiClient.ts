import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("Mengirim request ke: ", config.url);
    return config;
  },
  (error) => {
    return Promise.reject(
      new Error("Gagal mengirim request: " + error.message)
    );
  }
);

export default apiClient;
