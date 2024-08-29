import React, { useState } from "react";
import { FAQSection } from "../components/section/FAQSection";
import { HomeHeroSection } from "../components/section/HomeHeroSection";
import { ReviewSection } from "../components/section/ReviewSection";
import { WhyUsSection } from "../components/section/WhyUsSection";
import { ReviewModal } from "../components/modal/ReviewModal";
import { ReusableModal } from "../components/modal/ReusableModal";

export const Home = () => {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [openReview, setOpenReview] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const onSubmit = () => {
    onCloseReview();
    validateInput();
    onReset();
  };

  const validateInput = () => {
    const convertedRating = parseInt(rating);
    if (convertedRating < 1 || convertedRating > 5 || review == "") {
      setOpenError(true);
    } else {
      // logic
      setOpenSuccess(true);
    }
  };

  const onOpenReview = () => {
    setOpenReview(true);
  };

  const onCloseReview = () => {
    setOpenReview(false);
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
    setOpenReview(false);
  };

  const onCloseSuccess = () => {
    setOpenSuccess(false);
  };

  const onCloseError = () => {
    setOpenError(false);
  };

  return (
    <div className="relative mt-16">
        <HomeHeroSection />
        <WhyUsSection />
        <ReviewSection onOpen={onOpenReview} />
        <FAQSection />
        {openReview && (
          <ReviewModal
            rating={rating}
            review={review}
            onReviewChange={onReviewChange}
            onRatingChange={onRatingChange}
            onClose={onCloseReview}
            onSubmit={onSubmit}
          />
        )}
        {openError && (
          <ReusableModal
            onClose={onCloseError}
            message={"ErrorModal"}
            header={"Something Went Wrong!"}
            content={
              "We encountered an issue. Please double-check your input and try again."
            }
          />
        )}
        {openSuccess && (
          <ReusableModal
            onClose={onCloseSuccess}
            message={"SuccessModal"}
            header={"Thank You!"}
            content={
              "Your review has been submitted successfully. We appreciate your feedback!"
            }
          />
        )}
    </div>
  );
};
