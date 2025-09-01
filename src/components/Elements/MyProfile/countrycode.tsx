import type React from "react";

type CountryCodeProps = React.HTMLProps<HTMLSelectElement> & {
  countryCode: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const CountryCode = ({ countryCode, onChange }: CountryCodeProps) => {
  return (
    <select
      name={countryCode}
      className=" rounded-lg border border-gray-300 p-4 text-base text-gray-900 h-[49px] placeholder-transparent focus:border-[#3ECF4C] focus:outline-none py-3 pl-1"
      onChange={onChange}
    >
      <option value="+62">+62</option>
      <option value="+63">+63</option>
    </select>
  );
};

export default CountryCode;
