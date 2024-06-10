import { GeneralDivType } from "@/types/generalTypes";
import React, { FC } from "react";
import Star from "@/components/svg/Star/Star";

interface RatingProps extends GeneralDivType {
  isEditable?: boolean;
  rating: number;
  setRating: (rating: number) => void;
}

const Rating: FC<RatingProps> = () => {
  return (
    <div>
      <Star className={"fill-amber-300"} />
    </div>
  );
};

export default Rating;
