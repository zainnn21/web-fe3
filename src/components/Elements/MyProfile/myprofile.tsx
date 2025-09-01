type Props = {
  imgSrc: string;
  imgAlt: string;
  name: string;
  email: string;
  button: string;
};

const MyProfile = ({ imgSrc, imgAlt, name, email, button }: Props) => {
  return (
    <>
      <div className="flex gap-3.5">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="rounded-sm w-[60px] h-[60px]"
        />
        <div className="flex flex-col">
          <h1 className="font-poppins font-semibold text-base leading-[120%] text-[#222325]  ">
            {name}
          </h1>
          <h2 className="text-base font-normal leading-[140%] tracking-[0.2px] text-[#222325]">
            {email}
          </h2>
          <button className="text-left">
            <p className="font-bold text-sm leading-[140%] tracking-[0.2px] text-[#F64920]">
              {button}
            </p>
          </button>
        </div>
      </div>
      <hr className="border border-[#3A35411F]" />
    </>
  );
};

export default MyProfile;
