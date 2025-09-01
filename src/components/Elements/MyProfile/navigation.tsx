type NavigationProps = {
  title: string;
  desc: string;
};

const Navigation = ({ title, desc }: NavigationProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2.5">
        <h5 className="font-poppins font-semibold text-xl leading-[120%] text-[#222325]">
          {title}
        </h5>
        <p className="font-normal text-sm leading-[140%] tracking-[0.2px] text-[#333333AD]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Navigation;
