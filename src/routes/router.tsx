import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/homepage";
import LoginPage from "../Pages/loginpage";
import RegisterPage from "../Pages/registerpage";
import ProfilePage from "../Pages/profilepage";
import AllProduct from "../Pages/allproductpage";
import AdminPage from "../Pages/adminpage";

/**
 * Konfigurasi utama untuk semua rute (halaman) dalam aplikasi.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/my-profile",
    element: <ProfilePage />,
  },
  {
    path: "/all-product",
    element: <AllProduct />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

export default router;
