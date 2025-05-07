import StarRatingActive from "@/assets/svg/StarRatingActive";
import StarRatingNonActive from "@/assets/svg/StarRatingNonActive";

type Props = {
  rating: number;
};

export const StarRating = ({ rating }: Props) => {
  const roundedRating = Math.round(rating);

  return (
    <div className="inline-flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>
          {i < roundedRating ? <StarRatingActive /> : <StarRatingNonActive />}
        </span>
      ))}
    </div>
  );
};
