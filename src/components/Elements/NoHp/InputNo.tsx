import { useState } from "react";
import type { ChangeEvent } from "react";
import FlagIndonesia from "../../../assets/Indonesia (ID).png";
import FlagPhilippines from "../../../assets/Philippines.jpg"; // Add this image to your assets

type CountryOption = {
  code: string;
  label: string;
  flag: string;
};

const countryOptions: CountryOption[] = [
  { code: "+62", label: "Indonesia", flag: FlagIndonesia },
  { code: "+63", label: "Philippines", flag: FlagPhilippines },
];

const InputNo = ({ countryCode }: { countryCode: string }) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(
    countryOptions[0]
  );

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = event.target.value;
    const country = countryOptions.find((c) => c.code === selectedCode);
    if (country) {
      setSelectedCountry(country);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#F4F5FA] border-r border-[#3A35411F] border-solid px-2.5 py-1 rounded rounded-bl-md rounded-t-md h-12 flex items-center md:w-11">
        <img
          src={selectedCountry.flag}
          alt={selectedCountry.label}
          className="w-6 h-6"
        />
      </div>
      <select
        name={countryCode}
        className="rounded-md border border-solid border-[#3A35411F] md:w-28 h-12 w-19"
        value={selectedCountry.code}
        onChange={handleSelectChange}
      >
        {countryOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.code}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputNo;
