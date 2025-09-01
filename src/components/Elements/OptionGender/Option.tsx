type OptionProps = {
  name: string;
};

const OptionGender = ({ name }: OptionProps) => {
  return (
    <select
      name={name}
      id={name}
      className="rounded-md border border-solid border-[#3A35411F] h-12 px-2 font-normal text-sm  leading-[] tracking-[0.2px] text-[#222325] cursor-pointer"
      defaultValue=""
    >
      <option value="" disabled>
        Pilih Jenis Kelamin
      </option>
      <option value="Wanita">Wanita</option>
      <option value="Laki-laki">Laki-laki</option>
    </select>
  );
};

export default OptionGender;
