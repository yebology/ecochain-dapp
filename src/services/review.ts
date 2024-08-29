import { getContractWithoutSigner, getContractWithSigner } from "./constant";

export async function giveReview(rating: number, review: string) {
    try {
      const contract = await getContractWithSigner();
      const transaction = await contract.giveReview(rating, review);
      return transaction;
    } catch (error) {
      console.log(error);
      return "";
    }
  }
  
  export async function getReviews() {
    return await loadReviews();
  }
  
  async function loadReviews() {
    try {
      const contract = await getContractWithoutSigner();
      const reviews = contract.getReviews();
      return structuredReviews(reviews);
    } catch (error) {
      console.log(error);
      return "";
    }
  }
  
  function structuredReviews(reviews: any) {
    const reviewList = reviews.map((review: any) => ({
      reviewer: review.reviewer.toString(),
      rating: review.rating,
      timestamp: review.timestamp,
      review: review.review,
    }));
    return reviewList;
  }