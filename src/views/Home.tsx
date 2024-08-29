import React, { useState } from "react";
import { FAQSection } from "../components/section/FAQSection";
import { HomeHeroSection } from "../components/section/HomeHeroSection";
import { ReviewSection } from "../components/section/ReviewSection";
import { WhyUsSection } from "../components/section/WhyUsSection";
import { ReviewModal } from "../components/modal/ReviewModal";

export const Home = () => {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [open, setOpen] = useState(false);

  const onSubmit = () => {
    onClose();
    onReset();
  };

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const onRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(e.target.value);
  };

  const onReset = () => {
    setRating("");
    setReview("");
    setOpen(false);
  };

  return (
    <div className="relative mt-16">
      <div
        className={`transition-opacity duration-500 ${
          open ? "opacity-90" : "opacity-100"
        }`}
      >
        <HomeHeroSection />
        <WhyUsSection />
        <ReviewSection onOpen={onOpen} />
        <FAQSection />
        {open && (
          <ReviewModal
            rating={rating}
            review={review}
            onReviewChange={onReviewChange}
            onRatingChange={onRatingChange}
            onClose={onClose}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </div>
  );
};
