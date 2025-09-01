import ImageCard from "./Image";
import CardTitle from "./Title";
import ParagraphCard from "./paragraph";
import Profile from "./ProfileCard";
import Stars from "./stars";

type CardProps = {
  source: string;
  texttitle: string;
  ptitle: string;
  srcprofile: string;
  profilename: string;
  job: string;
  jobspan: string;
  ratingImages?: string[];
  ratingdesc?: string;
  price: string | number;
  className?: string;
};

const Card = ({
  source,
  texttitle,
  ptitle,
  srcprofile,
  profilename,
  job,
  jobspan,
  ratingImages,
  ratingdesc,
  price,
  className = "",
}: CardProps) => {
  return (
    <div
      className={`md:w-96 rounded-[10px] bg-white border md:p-5 p-4 flex flex-col md:gap-4 gap-2  border-[#3A35411F] ${className} hover:shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out `}
    >
      <div className="flex gap-3 md:flex-col">
        <ImageCard source={source}></ImageCard>
        <div className="flex flex-col gap-2">
          <CardTitle name="titlecard">{texttitle}</CardTitle>
          <ParagraphCard name="pcard">{ptitle}</ParagraphCard>
          <div className="flex gap-2.5">
            <Profile srcprofile={srcprofile} name="profile"></Profile>
            <div>
              <CardTitle name="profile">{profilename}</CardTitle>
              <ParagraphCard name="pprofile">
                {job}{" "}
                <span className="font-bold text-xs md:text-sm leading-[140%] tracking-[0.2px] text-[#333333AD]">
                  {jobspan}
                </span>
              </ParagraphCard>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2">
        <div className="flex gap-2">
          <Stars images={ratingImages || []}></Stars>
          <p className="font-medium text-xs md:text-sm leading-[140%] tracking-[0.2px] text-[#333333AD] underline">
            {ratingdesc}
          </p>
        </div>
        <p className="font-poppins text-[#3ECF4C] font-semibold text-xl md:text-2xl leading-[120%]">
          {price}
        </p>
      </div>
    </div>
  );
};

export default Card;
