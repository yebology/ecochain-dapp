import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviewList } from "../../utils/list";
import { ReviewCard } from "../card/ReviewCard";

type ReviewSectionProps = {
  onOpen: () => void;
};

export const ReviewSection: React.FC<ReviewSectionProps> = ({ onOpen }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  let sliderRef = useRef<Slider | null>(null);
  const playAnimation = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const settings = {
    dots: false,
    className: "center",
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    playAnimation();
  }, []);

  return (
    <div className="relative my-10 pt-32">
      <div className="absolute bottom-0 w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>
      <div className="absolute top-1/4 bottom-0 right-0 w-96 h-44 bg-gradient-to-r from-[#2E7D32] via-[#66BB6A] to-[#A5D6A7] blur-3xl opacity-50"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-5 text-center">
          <div
            style={{ backgroundColor: "#66BB6A" }}
            className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-lg text-center text-cn hover:cursor-pointer"
          >
            Shared Experiences
          </div>
          <h1 className="mb-5 text-3xl font-semibold text-n-7 text-center md:text-5xl">
            Voices of Our{" "}
            <span
              style={{
                background: "linear-gradient(45deg, #2E7D32, #66BB6A, #A5D6A7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}
              Users.
            </span>
          </h1>
          <p className="text-xl text-n-5 font-normal text-center md:text-2xl">
            Discover what{" "}
            <span
              style={{
                background: "linear-gradient(45deg, #2E7D32, #66BB6A, #A5D6A7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}
              people{" "}
            </span>
            are
            <span
              style={{
                background: "linear-gradient(45deg, #2E7D32, #66BB6A, #A5D6A7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}
              saying{" "}
            </span>{" "}
            about us.
          </p>
          <button
            onClick={onOpen}
            style={{ backgroundColor: "#66BB6A" }}
            className="uppercase hover:scale-105 duration-200 text-white font-semibold rounded-xl p-3 shadow-md"
          >
            Add Yours
          </button>
        </div>
        <div
          className={`mt-6 slider-container ${
            reviewList == null ? "scale-0" : "scale-100"
          }`}
        >
          <Slider ref={sliderRef} {...settings}>
            {reviewList == null ? (
              <div></div>
            ) : (
              reviewList.map((review, index) => (
                <ReviewCard
                  key={index}
                  id={index}
                  review={review}
                  isExpanded={expandedIndex === index}
                  toggleExpand={toggleExpand}
                />
              ))
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};
