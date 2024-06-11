"use client";
import { GeneralDivType } from "@/types/generalTypes";
import React, { FC, useEffect, useState } from "react";
import Star from "@/components/svg/Star/Star";
import cn from "classnames";

interface RatingProps extends GeneralDivType {
  rating: number;
  isEditable?: boolean;
  setRating?: (rating: number) => void;
  className?: string;
}

const Rating: FC<RatingProps> = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}) => {
  const [ratingArray, setRatingArray] = useState<React.JSX.Element[]>(
    new Array(5).fill(<></>),
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedRating = ratingArray.map((r: React.JSX.Element, i: number) => (
      <Star
        key={i}
        className={cn({
          ["cursor-pointer"]: isEditable,
          ["fill-primary"]: i < currentRating,
        })}
        onMouseEnter={() => changeDisplay(i + 1)}
        onClick={() => onClick(i + 1)}
        tabIndex={isEditable ? 0 : i - 1}
        onKeyDown={(e: React.KeyboardEvent<SVGElement>) =>
          handleSpace(i + 1, e)
        }
      />
    ));

    setRatingArray(updatedRating);
  };

  const changeDisplay = (i: number): void => {
    isEditable && constructRating(i);
  };

  const onClick = (i: number): void => {
    isEditable && setRating && setRating(i);
  };

  const handleSpace = (i: number, e: React.KeyboardEvent<SVGElement>): void => {
    if (e.code === "Space") {
      isEditable && setRating && setRating(i);
    }
  };

  return (
    <div
      {...props}
      className={"flex gap-[5px]"}
      onMouseLeave={() => changeDisplay(rating)}
    >
      {ratingArray.map((r: React.JSX.Element, i: number) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
