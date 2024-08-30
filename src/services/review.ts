import { getContractWithoutSigner, getContractWithSigner } from "./constant";

export async function giveReview(review: string, rating: number) {
  try {
    const contract = await getContractWithSigner();
    const transaction = await contract.giveReview(review, rating);
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
    const reviews = await contract.getReviews();
    return structuredReviews(reviews);
  } catch (error) {
    console.log(error);
    return "";
  }
}

function structuredReviews(reviews: any) {
  const reviewList = reviews.map((review: any) => ({
    reviewer: review.reviewer.toString(),
    rating: parseFloat(review.rating),
    timestamp: parseInt(review.timestamp),
    review: review.review,
  }));
  return reviewList;
}
