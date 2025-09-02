import RatingFull from "../../../assets/Star.png";
import RatingEmpty from "../../../assets/gray Star.png";
import RatingHalf from "../../../assets/Masked Star.png";

type StarsProps = {
  rating: number;
};

const generateStars = (rating: number, totalStars = 5) => {
  const images = [];
  
  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      images.push(RatingFull);
    } else if (i - 0.5 <= rating) {
      images.push(RatingHalf);
    } else {
      images.push(RatingEmpty);
    }
  }
  return images;
};

const Stars = ({ rating }: StarsProps) => {
  const ratingImages = generateStars(rating);
  return (
    <div className="flex gap-0.5">
      {ratingImages.map((image, index) => (
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
