import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./routes/router"; // Impor router dari file terpisah

// Mencari elemen HTML di `index.html` yang memiliki id="root".
// Elemen ini akan menjadi "wadah" utama untuk seluruh aplikasi React.
const rootelement = document.getElementById("root");

// Pemeriksaan keamanan untuk memastikan elemen 'root' benar-benar ada di HTML.
// Jika tidak ditemukan, program akan berhenti dengan pesan error.
if (!rootelement) {
  throw new Error("Root element not found");
}

// Memulai proses render aplikasi React ke dalam elemen 'root'.
createRoot(rootelement).render(
  // StrictMode adalah komponen bantu dari React yang membantu menemukan potensi masalah dalam kode selama pengembangan.
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
