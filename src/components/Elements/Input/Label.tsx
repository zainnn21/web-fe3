type LabelProps = {
  htmlFor?: string;
  children: string;
  variantLabel?: string;
};

const Label = ({ htmlFor, children, variantLabel }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`font-normal font-DMsans leading-[140%] tracking-[0.2px] text-[#333333AD] text-sm pb-1 pr-4 gap-1 md:text-base ${variantLabel}`}
    >
      {children}
      <span className="text-[#FF5C2B] text-base font-normal leading-6 tracking-[0.15px]">
        *
      </span>
    </label>
  );
};

export default Label;
