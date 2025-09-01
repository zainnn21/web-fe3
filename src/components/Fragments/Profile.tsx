import MyProfile from "../Elements/MyProfile/myprofile";
import Navigation from "../Elements/MyProfile/navigation";
import NavigationButton from "../Elements/MyProfile/NavigationButton";
import MyProfileForm from "../Elements/MyProfile/myprofileform";
import Button from "../Elements/Button";
import CountryCode from "../Elements/MyProfile/countrycode";
import { useState } from "react";

interface ProfileData {
  namaLengkap?: string;
  email?: string;
  password?: string;
  countryCode?: string;
  noHp?: string;
}

const Profile = () => {
  const getInitialState = (): ProfileData => {
    try {
      return JSON.parse(localStorage.getItem("profileData") || "{}");
    } catch (error) {
      console.error("Gagal mem-parsing data profil dari localStorage", error);
      return {};
    }
  };
  const [profile, setProfile] = useState<ProfileData>(getInitialState());

  const handleFieldChange = (name: string, value: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleFieldChange(event.target.name, event.target.value);

  const handleCountryCodeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => handleFieldChange("countryCode", event.target.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("profileData", JSON.stringify(profile));
    alert("Data berhasil diubah");
    window.location.reload();
  };
  return (
    <main className="px-5 py-7 gap-6 flex flex-col md:flex-row md:px-30 md:py-16 md:gap-9 md:justify-center">
      <div className="flex flex-col gap-6">
        <Navigation title="Profil Saya" desc="Ubah data diri anda" />
        <div className="flex flex-col gap-2 rounded-[10px] bg-white border border-[#3A35411F] p-5 md:p-6">
          <NavigationButton
            imgSrc="/Person.png"
            imgAlt="profile"
            buttonTitle="Profil Saya"
            navigate="/my-profile"
            variant="bg-[#FFF7D7CC] border-[#FFBD3A] border text-[#FFBD3A]"
          />
          <NavigationButton
            imgSrc="/kelassaya-white.png"
            imgAlt="kelas saya"
            buttonTitle="Kelas Saya"
            navigate="#"
          />
          <NavigationButton
            imgSrc="/pesanansaya-white.png"
            imgAlt="pesananan saya"
            buttonTitle="Pesanan Saya"
            navigate="#"
          />
        </div>
      </div>
      <form
        className="rounded-[10px] border p-6 flex flex-col gap-6 bg-white border-[#3A35411F]"
        onSubmit={handleSubmit}
      >
        <MyProfile
          imgSrc="/myprofile.png"
          imgAlt="profile"
          name={getInitialState().namaLengkap ?? ""}
          email={getInitialState().email ?? ""}
          button="Ganti Foto Profil"
        />

        <div className="flex flex-col gap-4 md:flex-row">
          <MyProfileForm
            label="Nama Lengkap"
            name="namaLengkap"
            value={profile.namaLengkap ?? ""}
            onChange={handleInputChange}
          />
          <MyProfileForm
            label="E-Mail"
            name="email"
            type="email"
            value={profile.email ?? ""}
            onChange={handleInputChange}
          />
          <MyProfileForm
            label="Password"
            name="password"
            type="password"
            value={profile.password ?? ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <CountryCode
            countryCode={profile.countryCode ?? ""}
            onChange={handleCountryCodeChange}
          />
          <MyProfileForm
            label=""
            name="noHp"
            type="tel"
            value={profile.noHp ?? ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-end">
          <Button
            label="Simpan"
            typeButton="submit"
            bg="bg-[#3ECF4C]"
            textColor="text-white md:w-[112px]"
          />
        </div>
      </form>
    </main>
  );
};
export default Profile;
