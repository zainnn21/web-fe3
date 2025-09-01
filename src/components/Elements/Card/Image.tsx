type ImageCardProps = {
  source: string;
  alt?: string;
};

const ImageCard = ({ source, alt = "image" }: ImageCardProps) => {
  return (
    <img
      src={source}
      alt={alt}
      className="md:w-[344px] md:h-[193px] w-[82px] h-[82px] rounded-[10px] mb-2.5 object-cover object-center flex-shrink-0"
    />
  );
};

export default ImageCard;
