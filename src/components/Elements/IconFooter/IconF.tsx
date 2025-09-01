type IconProps = {
  icon1: string;
  desc1: string;
  icon2: string;
  desc2: string;
  icon3: string;
  desc3: string;
  icon4: string;
  desc4: string;
};

const icon = ({
  icon1,
  desc1,
  icon2,
  desc2,
  icon3,
  desc3,
  icon4,
  desc4,
}: IconProps) => {
  return (
    <div className="flex gap-[15px]">
      <img src={icon1} alt={desc1} className="w-9 h-9 cursor-pointer" />
      <img src={icon2} alt={desc2} className="w-9 h-9 cursor-pointer" />
      <img src={icon3} alt={desc3} className="w-9 h-9 cursor-pointer" />
      <img src={icon4} alt={desc4} className="w-9 h-9 cursor-pointer" />
    </div>
  );
};
export default icon;
