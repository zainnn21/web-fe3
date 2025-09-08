import { useEffect, useState } from "react";
import Input from "../Elements/Input/Index";
import Label from "../Elements/Input/Label";
import Card from "../Elements/Card";
import { useAdminStore } from "../../stores/useAdminStore";
import type { Product } from "../../services/types/product";

const Admin = () => {
  if (!localStorage.getItem("isLogin")) {
    window.location.href = "/";
  }

  const initialState = {
    texttitle: "",
    price: 0,
    ptitle: "",
    category: "",
    source: "",
    duration: "",
    profilename: "",
    job: "",
    srcprofile: "",
    jobspan: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [userName, setUserName] = useState("");
  const [edit, setEdit] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    const target = e.target as
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement;
    const { name, value } = target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialState);
    setEdit(null);
  };

  const {
    addNewProduct,
    fetchProductsByUserId,
    deleteExistingProduct,
    updateExistingProduct,
    products: courses,
  } = useAdminStore();

  //mengambil product dari api
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const userId = user.id;
    const userName = user.name;
    console.log("Data User: ", user);

    if (userId) {
      fetchProductsByUserId(userId);
    }

    setUserName(userName);
  }, [fetchProductsByUserId]);

  //menyimpan data product dan edit data product
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userId = JSON.parse(localStorage.getItem("user") || "{}").id;

    if (Object.values(formData).some((value) => value === "")) {
      alert("Semua field harus diisi.");
      return;
    }

    if (isNaN(Number(formData.price))) {
      alert("Harga harus berupa angka.");
      return;
    }

    if (formData.price.toLocaleString() === "0") {
      confirm("Apakah anda yakin harga course 0 (gratis)?");
    }

    console.log("Form Data Submitted: ", formData);

    // Generate ID
    const newId =
      courses.length > 0
        ? Math.max(...courses.map((c: Product) => c.id)) + 1
        : 1;

    if (edit) {
      const updatedCourse: Product = {
        id: edit,
        ...formData,
        price: Number(formData.price),
        updatedAt: new Date(),
      };
      updateExistingProduct(edit, updatedCourse);
      alert("Course berhasil diubah.");
    } else {
      const newCourse: Product = {
        id: newId,
        ...formData,
        price: Number(formData.price),
        creatorId: userId,
        ratingImages: 0,
        reviewcount: 0,
      };
      addNewProduct(newCourse);
      alert("Course berhasil ditambahkan.");
    }
    //Reset form
    resetForm();
  };

  const handleDelete = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus course ini?")) {
      deleteExistingProduct(id);
      alert("Course berhasil dihapus.");
    }
  };

  const handleEdit = (course: Product) => {
    setEdit(course.id);
    setFormData({
      texttitle: course.texttitle,
      price: course.price,
      ptitle: course.ptitle,
      category: course.category,
      source: course.source,
      duration: course.duration,
      profilename: course.profilename,
      job: course.job,
      srcprofile: course.srcprofile,
      jobspan: course.jobspan,
    });
  };

  return (
    <main className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 flex flex-col gap-8">
      <section>
        <div className="flex flex-col divide-y divide-gray-200 rounded-2xl bg-white shadow-lg shadow-slate-400 h-full">
          <section className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="mt-1 text-md text-gray-600">
              Welcome to the Admin Dashboard,{" "}
              <span className="font-medium capitalize text-gray-800">
                {userName}
              </span>
            </p>
          </section>

          <section className="p-6">
            {edit ? (
              <h2 className="text-2xl font-semibold text-gray-900">
                Edit Course
              </h2>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Manajemen Course
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Gunakan form di bawah ini untuk menambahkan course baru ke
                  dalam sistem.
                </p>
              </>
            )}
            <form
              action=""
              className="mt-6 flex flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  label="Nama Course"
                  type="text"
                  placeholder="Fullstack Developer"
                  name="texttitle"
                  variantLabel="text-gray-700"
                  value={formData.texttitle}
                  onChange={handleChange}
                />
                <Input
                  label="Harga (IDR)"
                  type="number"
                  placeholder="100000"
                  name="price"
                  variantLabel="text-gray-700"
                  value={formData.price}
                  onChange={handleChange}
                />
                <Input
                  label="Pembuat Course"
                  type="text"
                  placeholder="Alexander Nugraha"
                  name="profilename"
                  variantLabel="text-gray-700"
                  value={formData.profilename}
                  onChange={handleChange}
                />
                <Input
                  label="Pekerjaan"
                  type="text"
                  placeholder="Fullstack Developer"
                  name="job"
                  variantLabel="text-gray-700"
                  value={formData.job}
                  onChange={handleChange}
                />
                <Input
                  label="Tempat Kerja"
                  type="text"
                  placeholder="Google"
                  name="jobspan"
                  variantLabel="text-gray-700"
                  value={formData.jobspan}
                  onChange={handleChange}
                />
                <Input
                  label="URL Photo"
                  type="url"
                  placeholder="https://.../source.png"
                  name="srcprofile"
                  variantLabel="text-gray-700"
                  onChange={handleChange}
                  value={formData.srcprofile}
                />
                <div>
                  <Label
                    htmlFor="kategori"
                    variantLabel="block text-sm font-medium text-gray-700"
                  >
                    Kategori
                  </Label>
                  <select
                    name="category"
                    id="kategori"
                    className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    onChange={handleChange}
                    value={formData.category}
                  >
                    <option>Pilih Kategori</option>
                    <option value="Pemasaran">Pemasaran</option>
                    <option value="Digital & Teknologi">
                      Digital & Teknologi
                    </option>
                    <option value="Pengembangan Diri">Pengembangan Diri</option>
                    <option value="Bisnis & Manajemen">
                      Bisnis & Manajemen
                    </option>
                    <option value="other">Other....</option>
                  </select>
                </div>
                <Input
                  label="URL Gambar"
                  type="url"
                  placeholder="https://.../source.png"
                  name="source"
                  variantLabel="text-gray-700"
                  onChange={handleChange}
                  value={formData.source}
                />
                <Input
                  label="Durasi"
                  type="text"
                  placeholder="Contoh: 10 jam 15 menit"
                  name="duration"
                  variantLabel="text-gray-700"
                  onChange={handleChange}
                  value={formData.duration}
                />
              </div>
              <div className="col-span-full">
                <Label
                  htmlFor="deskripsi"
                  variantLabel="block text-sm font-medium text-gray-700"
                >
                  Deskripsi
                </Label>
                <textarea
                  name="ptitle"
                  id="deskripsi"
                  rows={4}
                  placeholder="Jelaskan mengenai course ini secara detail..."
                  className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  onChange={handleChange}
                  value={formData.ptitle}
                />
              </div>
              <div className="flex justify-end">
                {edit ? (
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 sm:w-auto cursor-pointer"
                  >
                    Edit Course
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 sm:w-auto cursor-pointer"
                  >
                    Tambah Course
                  </button>
                )}
              </div>
            </form>
          </section>
        </div>
      </section>
      <section className="p-6 flex flex-col rounded-2xl bg-white shadow-lg shadow-slate-400">
        <h2 className="text-2xl font-semibold text-gray-900">Daftar Course</h2>
        <p className="mt-1 text-sm text-gray-600">
          Daftar course yang telah ditambahkan.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {courses.length > 0 ? (
            courses.map((courses: Product) => (
              <div
                key={courses.id}
                className="flex flex-col gap-4  p-4 hover:bg-gray-100 hover:rounded-lg transition-colors duration-300 ease-in-out items-center rounded-lg bg-gray-50"
              >
                <Card
                  source={courses.source}
                  texttitle={courses.texttitle}
                  price={courses.price}
                  ptitle={courses.ptitle}
                  srcprofile={courses.srcprofile}
                  profilename={courses.profilename}
                  job={courses.job}
                  jobspan={courses.jobspan}
                  id={courses.id}
                  duration={courses.duration}
                  category={courses.category}
                  reviewcount={courses.reviewcount}
                  ratingImages={courses.ratingImages}
                />
                <div className="flex items-center justify-end gap-4">
                  <button
                    className="text-sm font-semibold cursor-pointer w-20 bg-green-400 text-white p-2 rounded-md hover:bg-green-500 transition-colors duration-300 ease-in-out"
                    onClick={() => handleEdit(courses)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-sm font-semibold  cursor-pointer w-20 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors duration-300 ease-in-out"
                    onClick={() => handleDelete(courses.id)}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              Belum ada course yang ditambahkan.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Admin;
