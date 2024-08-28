import efficiency from "../assets/efficiency.png";
import security from "../assets/security.png";
import sustainability from "../assets/sustainability.png";
import reward from "../assets/reward.png";
import { FAQ, NFTArt, Review } from "./interface";

export const navList = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "NFT",
    url: "/nft",
  },
  {
    title: "Waste Bank",
    url: "/waste_bank",
  },
  {
    title: "Transaction",
    url: "/transaction",
  },
];

export const whyUsList = [
  {
    image: sustainability,
    content: "Sustainability",
    description:
      "EcoChain helps reduce carbon footprint and supports a cleaner environment.",
  },
  {
    image: efficiency,
    content: "Efficiency",
    description:
      "Enjoy fast, low-fee transactions with easy decentralized processing.",
  },
  {
    image: reward,
    content: "Rewards",
    description: "Collect points from recycling, exchange them for $RCYCL, and earn exclusive NFTs."
  },
  {
    image: security,
    content: "Security",
    description: "Keep your data and transactions safe with ecoChain's strong security."
  }
];

export const faqList: FAQ[] = [
  {
    question: "How can I get started?",
    answer: "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup."
  },
  {
    question: "What is the pricing structure?",
    answer: "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users."
  }
];

export const reviewList: Review[] = [
  {
      reviewer: "Alice",
      rating: 4.5,
      timestamp: 1693221600000, // Representing a specific date in milliseconds
      review: "Great product, really enjoyed using it!"
  },
  {
      reviewer: "Bob",
      rating: 3.8,
      timestamp: 1693308000000,
      review: "Good overall, but some features could be improved."
  },
  {
      reviewer: "Charlie",
      rating: 5.0,
      timestamp: 1693394400000,
      review: "Excellent! Exceeded my expectations in every way."
  },
  {
      reviewer: "David",
      rating: 2.7,
      timestamp: 1693480800000,
      review: "Not as good as I expected, had some issues."
  },
  {
      reviewer: "Eve",
      rating: 4.2,
      timestamp: 1693567200000,
      review: "Very satisfied with the purchase, would recommend."
  }
];

export const nftArtList: NFTArt[] = [
  {
      id: 1,
      name: "Ape Art #1",
      description: "A unique hand-drawn NFT of an ape.",
      image: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid",
      price: 1.25
  },
  {
      id: 2,
      name: "Ape Art #2",
      description: "An exclusive NFT featuring a stylized ape illustration.",
      image: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid",
      price: 2.50
  },
  {
      id: 3,
      name: "Ape Art #3",
      description: "Collectible NFT with a hand-drawn ape design.",
      image: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid",
      price: 3.75
  },
  {
      id: 4,
      name: "Ape Art #4",
      description: "Limited edition NFT of a unique ape illustration.",
      image: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid",
      price: 5.00
  }
];
