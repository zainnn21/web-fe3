import { useEffect, useState } from "react";
import Input from "../Elements/Input/Index";
import Label from "../Elements/Input/Label";
import Card from "../Elements/Card";

const Admin = () => {
  type typeCourse = {
    id: number;
    nameCourse: string;
    description: string;
    category: string;
    image: string;
    duration: string;
    price: number;
    creator: string;
    creatorJob: string;
    creatorPhoto: string;
    creatorJobPlace: string;
  };

  const [userName, setUserName] = useState("");
  const [nameCourse, setNameCourse] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [duration, setDuration] = useState("");
  const [creator, setcreator] = useState("");
  const [creatorJob, setcreatorJob] = useState("");
  const [creatorPhoto, setcreatorPhoto] = useState("");
  const [creatorJobPlace, setcreatorJobPlace] = useState("");
  const [edit, setEdit] = useState<number | null>(null);

  //mengambil data course dari local storage
  const [courses, setCourses] = useState(() => {
    const storedCourses = localStorage.getItem("courses");
    return storedCourses ? JSON.parse(storedCourses) : [];
  });

  //mengambil data user dari local storage
  useEffect(() => {
    try {
      const profileDataString = localStorage.getItem("profileData");
      if (profileDataString) {
        const profileData = JSON.parse(profileDataString);
        setUserName(profileData.namaLengkap || "");
      }
    } catch (error) {
      console.error("Failed to parse profile data from localStorage", error);
      setUserName("");
    }
  }, []);

  //menyimpan data course ke local storage
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const formatPrice = (price: number) => {
    //Format million
    if (price >= 1000000) {
      const num = (price / 1000000).toFixed(1);
      if (num.endsWith(".0")) {
        return `Rp ${Math.floor(price / 1000000)}M`;
      }
      return `Rp ${num}M`;
    }
    //Format thousand
    if (price >= 1000) {
      return `Rp ${Math.floor(price / 1000)}K`;
    }

    return `Rp` + price;
  };

  //menyimpan data course
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !nameCourse ||
      !price ||
      !description ||
      !category ||
      !image ||
      !duration ||
      !creator ||
      !creatorJob ||
      !creatorPhoto ||
      !creatorJobPlace
    ) {
      alert("Semua field harus diisi.");
      return;
    }

    if (isNaN(Number(price))) {
      alert("Harga harus berupa angka.");
      return;
    }

    // Generate ID
    const newId =
      courses.length > 0
        ? Math.max(...courses.map((c: typeCourse) => c.id)) + 1
        : 1;

    if (edit) {
      setCourses(
        courses.map((course: typeCourse) =>
          course.id === edit
            ? {
                ...course,
                nameCourse,
                description,
                category,
                image,
                duration,
                price: Number(price),
                creator,
                creatorJob,
                creatorPhoto,
                creatorJobPlace,
              }
            : course
        )
      );
      setEdit(null);
      alert("Course berhasil diubah.");
    } else {
      const newCourse: typeCourse = {
        id: newId,
        nameCourse,
        description,
        category,
        image,
        duration,
        price: Number(price),
        creator,
        creatorJob,
        creatorPhoto,
        creatorJobPlace,
      };
      setCourses([...courses, newCourse]);
      alert("Course berhasil ditambahkan.");
    }

    // Reset form
    setNameCourse("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");
    setDuration("");
    setcreator("");
    setcreatorJob("");
    setcreatorPhoto("");
    setcreatorJobPlace("");
  };

  const handleDelete = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus course ini?")) {
      setCourses(courses.filter((course: typeCourse) => course.id !== id));
      alert("Course berhasil dihapus.");
    }
  };

  const handleEdit = (course: typeCourse) => {
    setEdit(course.id);
    setNameCourse(course.nameCourse);
    setPrice(course.price.toString());
    setDescription(course.description);
    setCategory(course.category);
    setImage(course.image);
    setDuration(course.duration);
    setcreator(course.creator);
    setcreatorJob(course.creatorJob);
    setcreatorPhoto(course.creatorPhoto);
    setcreatorJobPlace(course.creatorJobPlace);
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
                  name="namaCourse"
                  variantLabel="text-gray-700"
                  value={nameCourse}
                  onChange={(e) => setNameCourse(e.target.value)}
                />
                <Input
                  label="Harga (IDR)"
                  type="number"
                  placeholder="100000"
                  name="harga"
                  variantLabel="text-gray-700"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <Input
                  label="Pembuat Course"
                  type="text"
                  placeholder="Alexander Nugraha"
                  name="creator"
                  variantLabel="text-gray-700"
                  value={creator}
                  onChange={(e) => setcreator(e.target.value)}
                />
                <Input
                  label="Pekerjaan"
                  type="text"
                  placeholder="Fullstack Developer"
                  name="pekerjaan"
                  variantLabel="text-gray-700"
                  value={creatorJob}
                  onChange={(e) => setcreatorJob(e.target.value)}
                />
                <Input
                  label="Tempat Kerja"
                  type="text"
                  placeholder="Google"
                  name="tempatKerja"
                  variantLabel="text-gray-700"
                  value={creatorJobPlace}
                  onChange={(e) => setcreatorJobPlace(e.target.value)}
                />
                <Input
                  label="URL Photo"
                  type="url"
                  placeholder="https://.../image.png"
                  name="Profile Picture"
                  variantLabel="text-gray-700"
                  onChange={(e) => setcreatorPhoto(e.target.value)}
                  value={creatorPhoto}
                />
                <div>
                  <Label
                    htmlFor="kategori"
                    variantLabel="block text-sm font-medium text-gray-700"
                  >
                    Kategori
                  </Label>
                  <select
                    name="kategori"
                    id="kategori"
                    className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
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
                  placeholder="https://.../image.png"
                  name="gambar"
                  variantLabel="text-gray-700"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                />
                <Input
                  label="Durasi"
                  type="text"
                  placeholder="Contoh: 10 jam 15 menit"
                  name="durasi"
                  variantLabel="text-gray-700"
                  onChange={(e) => setDuration(e.target.value)}
                  value={duration}
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
                  name="deskripsi"
                  id="deskripsi"
                  rows={4}
                  placeholder="Jelaskan mengenai course ini secara detail..."
                  className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
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
            courses.map((courses: typeCourse) => (
              <div
                key={courses.id}
                className="flex flex-col gap-4  p-4 hover:bg-gray-100 hover:rounded-lg transition-colors duration-300 ease-in-out items-center rounded-lg bg-gray-50"
              >
                <Card
                  source={courses.image}
                  texttitle={courses.nameCourse}
                  price={formatPrice(courses.price)}
                  ptitle={courses.description}
                  srcprofile={courses.creatorPhoto}
                  profilename={courses.creator}
                  job={courses.creatorJob}
                  jobspan={courses.creatorJobPlace}
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
