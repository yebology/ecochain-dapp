import { getContractWithoutSigner } from "./constant";

export async function getFAQs() {
  return await loadFAQs();
}

async function loadFAQs() {
  try {
    const contract = await getContractWithoutSigner();
    const faqs = await contract.getFAQs();
    return structuredFAQs(faqs);
  } catch (error) {
    console.log(error);
    return "";
  }
}

function structuredFAQs(faqs: any) {
  const faqList = faqs.map((faq: any) => ({
    question: faq.question,
    answer: faq.answer,
  }));
  return faqList;
}
