type StarsProps = {
  images: string[];
};

const Stars = ({ images }: StarsProps) => {
  // Default ke array kosong untuk mencegah error
  return (
    <div className="flex gap-0.5">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`star-${index + 1}`}
          className="w-[18px] h-[18px]"
        />
      ))}
    </div>
  );
};

export default Stars;
