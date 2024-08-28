import React from "react";
import { Review } from "../../utils/interface";
import { truncate } from "../../utils/helper";

type ReviewCardProps = {
    id: number,
    review: Review,
    isExpanded: any,
    toggleExpand: any
}

export const ReviewCard : React.FC<ReviewCardProps> = ({ id, review, isExpanded, toggleExpand }) => {

  return (
    <div>
      <div className="font-normal hover:scale-105 duration-500 gradient m-4">
        <a
          href="#feedbacks"
          className="cursor-pointer"
          onClick={() => toggleExpand(id)}
        >
          <div className="relative p-6 space-y-4 leading-none rounded-lg">
            <div className="flex items-center space-x-2">
              <img
                src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${review.reviewer}`}
                className="w-6 h-6 bg-center md:w-16 md:-12 lg:w-12 lg:h-12"
                alt="avatar"
              />
              <div>
                <h3 className="text-sm font-medium text-n-7 lg:text-lg md:text-md">
                  {truncate(review.reviewer, 4, 4, 11)}
                </h3>
              </div>
            </div>
            <p
              className={`text-start leading-normal text-n-7 text-md ${
                isExpanded ? "" : "line-clamp-1"
              }`}
            >
              {review.review}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};