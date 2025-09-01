import Title from "./Title";
import RightArrow from "../../../assets/rightArrow.png";

type CategoryFooterProps = {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  showToggle?: boolean;
};

const CategoryFooter = ({
  children,
  title,
  isOpen,
  onToggle,
  showToggle,
}: CategoryFooterProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Title>{title}</Title>
        {showToggle && (
          <button
            onClick={onToggle}
            className="md:hidden flex items-center justify-center w-6 h-6 transition-transform duration-200"
            style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            <img src={RightArrow} alt="Toggle" className="w-6 h-6" />
          </button>
        )}
      </div>
      <ul
        className={`flex flex-col gap-3.5 text-base font-medium leading-[140%] tracking-[0.2px] text-[#333333AD] md:flex ${
          isOpen || !showToggle ? "flex" : "hidden"
        }`}
      >
        {children}
      </ul>
    </div>
  );
};

export default CategoryFooter;
