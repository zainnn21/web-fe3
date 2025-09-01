import TopCard from "../../../assets/topcard.jpg";
import LowerCard from "../../../assets/lowercard.jpg";

type BackgroundImageProps = {
  children: React.ReactNode;
  namecard: string;
};

const BackgroundImage = ({ children, namecard }: BackgroundImageProps) => {
  return (
    <div
      className="w-full md:max-w-[1200px] max-w-80 md:px-35 px-5 md:pb-16 md:pt-20.5 py-16 rounded-[10px] bg-cover bg-no-repeat flex flex-col gap-6  items-center bg-center"
      aria-label={namecard}
      style={
        namecard === "topcard"
          ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${TopCard})`,
            }
          : {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${LowerCard})`,
            }
      }
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
