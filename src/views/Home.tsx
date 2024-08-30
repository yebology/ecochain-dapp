import React, { useEffect, useState } from "react";
import { FAQSection } from "../components/section/FAQSection";
import { HomeHeroSection } from "../components/section/HomeHeroSection";
import { ReviewSection } from "../components/section/ReviewSection";
import { WhyUsSection } from "../components/section/WhyUsSection";
import { ReviewModal } from "../components/modal/ReviewModal";
import { ReusableModal } from "../components/modal/ReusableModal";
import { FAQ, Review } from "../utils/interface";
import { getReviews, giveReview } from "../services/review";
import { setGlobalState } from "../utils/global";
import { getFAQs } from "../services/faq";

type HomeProps = {
  account: string;
};

export const Home: React.FC<HomeProps> = ({ account }) => {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [openReview, setOpenReview] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [reviewData, setReviewData] = useState<Review[]>([]);
  const [faqsData, setFaqsData] = useState<FAQ[]>([]);
  const [trigger, setTrigger] = useState(false);

  const onSubmit = async () => {
    onCloseReview();
    await validateInput();
    onReset();
  };

  const validateInput = async () => {
    setGlobalState("loadingModal", "scale-100")
    const convertedRating = parseInt(rating);
    if (
      convertedRating < 1 ||
      convertedRating > 5 ||
      review == "" ||
      rating == ""
    ) {
      setGlobalState("loadingModal", "scale-0")
      setOpenError(true);
    } 
    else {
      try {
        const transaction = await giveReview(review, convertedRating);
        const transactionReceipt = await transaction.wait();
        console.log(transactionReceipt.hash);
        setTrigger(true);
        setGlobalState("loadingModal", "scale-0")
        setOpenSuccess(true);
      } 
      catch (error) {
        console.log(error);
        setGlobalState("loadingModal", "scale-0")
        setOpenError(true);
      } 
    }
  };

  const onOpenReview = () => {
    if (account) {
      setOpenReview(true);
      console.log("bbb");
    }
  };

  const onCloseReview = () => {
    setOpenReview(false);
    console.log("aaaaa");
    console.log(openReview);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReviews();
        setReviewData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [trigger]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const data = await getFAQs();
        setFaqsData(data);
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])

  return (
    <div className="relative mt-16">
      <HomeHeroSection />
      <WhyUsSection />
      <ReviewSection
        onOpen={onOpenReview}
        data={reviewData}
        account={account}
      />
      <FAQSection data={faqsData} />
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
