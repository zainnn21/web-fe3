import { create } from "zustand";
import type { User } from "../services/types/auth";
import {
  getUserById,
  updateUser,
  deleteUser,
} from "../services/api/auth.service";

interface ProfileState {
  profile: User | null;
  error: string | null;
  fetchProfile: (id: string) => Promise<void>;
  setProfile: (name: string, value: string) => void;
  updateProfile: (id: string) => Promise<void>;
  deleteProfile: (id: string) => Promise<void>;
}

export const useProfileStore = create<ProfileState>((set, get) => ({
  // initial state
  profile: null,
  error: null,

  fetchProfile: async (id: string) => {
    try {
      const response = await getUserById(id);
      set({ profile: response });
    } catch (error) {
      console.log(`Gagal mengambil data user ID: ${id}`, error);
      set({ error: "Gagal mengambil data user" });
    }
  },

  setProfile: (name: string, value: string) => {
    set((state) => ({
      profile: state.profile
        ? {
            ...state.profile,
            [name]: value,
          }
        : null,
    }));
  },

  updateProfile: async (id: string) => {
    const { profile } = get();
    if (!profile) return;
    try {
      if (profile.phone && isNaN(profile.phone)) {
        alert("No Hp hanya bisa diisi dengan angka");
        return;
      }
      updateUser(id, profile);
      localStorage.setItem("user", JSON.stringify(profile));
      alert("Data berhasil diubah");
    } catch (error) {
      console.log(error);
      set({ error: "Gagal memperbarui data user" });
      alert("Gagal memperbarui data user");
    }
  },

  deleteProfile: async (id: string) => {
    try {
      if (!confirm("Apakah anda yakin ingin menghapus akun?")) return;
      console.log(id);
      deleteUser(id);
      localStorage.removeItem("user");
      localStorage.removeItem("isLogin");
      localStorage.removeItem("token");
      alert("Akun berhasil dihapus");
      if (window.location.pathname === "/my-profile")
        window.location.href = "/";
    } catch (error) {
      console.log(error);
      set({ error: "Gagal menghapus data user" });
      alert("Gagal menghapus data user");
    }
  },
}));
