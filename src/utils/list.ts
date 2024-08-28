import efficiency from "../assets/efficiency.png";
import security from "../assets/security.png";
import sustainability from "../assets/sustainability.png";
import reward from "../assets/reward.png";
import { FAQ, NFTArt, Review, Transaction, WasteBank } from "./interface";

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
    description:
      "Collect points from recycling, exchange them for $RCYCL, and earn exclusive NFTs.",
  },
  {
    image: security,
    content: "Security",
    description:
      "Keep your data and transactions safe with ecoChain's strong security.",
  },
];

export const faqList: FAQ[] = [
  {
    question: "How can I get started?",
    answer:
      "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
  },
  {
    question: "What is the pricing structure?",
    answer:
      "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
  },
];

export const reviewList: Review[] = [
  {
    reviewer: "Alice",
    rating: 4.5,
    timestamp: 1693221600000, // Representing a specific date in milliseconds
    review: "Great product, really enjoyed using it!",
  },
  {
    reviewer: "Bob",
    rating: 3.8,
    timestamp: 1693308000000,
    review: "Good overall, but some features could be improved.",
  },
  {
    reviewer: "Charlie",
    rating: 5.0,
    timestamp: 1693394400000,
    review: "Excellent! Exceeded my expectations in every way.",
  },
  {
    reviewer: "David",
    rating: 2.7,
    timestamp: 1693480800000,
    review: "Not as good as I expected, had some issues.",
  },
  {
    reviewer: "Eve",
    rating: 4.2,
    timestamp: 1693567200000,
    review: "Very satisfied with the purchase, would recommend.",
  },
];

export const nftArtList: NFTArt[] = [
  {
    id: 1,
    name: "Mirella Jadeheart",
    description:
      "A graceful forest nymph with flowing green hair, sharp eyes that hold the secrets of the woods.",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid",
    price: 1.25,
  },
  {
    id: 2,
    name: "Thorn Azureleaf",
    description: "A young wizard with flowing teal-green hair and soft, glowing light brown eyes.",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid",
    price: 2.5,
  },
  {
    id: 3,
    name: "Thalira Fernshade",
    description: "A young sorceress with a pure heart and soft green hair, adorned with leaf accessories.",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid",
    price: 3.75,
  },
  {
    id: 4,
    name: "Gallen Eldergrove",
    description: "A valiant forest prince with flowing green hair and sharp, mysterious eyes.",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid",
    price: 5.0,
  },
  {
    id: 5,
    name: "Seraphina Mosslight",
    description: "A forest guardian fairy with green hair and eyes that shimmer like morning dew.",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid",
    price: 5.0,
  },
];

export const wasteBanks: WasteBank[] = [
  {
      wallet: "0x123abc456def789ghi",
      country: "Indonesia",
      city: "Jakarta",
      linkToMap: "https://goo.gl/maps/1"
  },
  {
      wallet: "0x987zyx654wvu321tsr",
      country: "USA",
      city: "New York",
      linkToMap: "https://goo.gl/maps/2"
  },
  {
      wallet: "0x654mno321pqr098vwx",
      country: "Germany",
      city: "Berlin",
      linkToMap: "https://goo.gl/maps/3"
  },
  {
      wallet: "0xabc123def456ghi789",
      country: "Japan",
      city: "Tokyo",
      linkToMap: "https://goo.gl/maps/4"
  },
  {
      wallet: "0x456stu789vwx012yza",
      country: "Brazil",
      city: "Rio de Janeiro",
      linkToMap: "https://goo.gl/maps/5"
  }
];

export const transactions: Transaction[] = [
  {
    wasteBankWallet: "0x123abc456def789ghi",
    user: "user1@example.com",
    bottleWeightInKg: 5.5,
    paperWeightInKg: 2.3,
    canWeightInKg: 1.0,
    timestamp: 1693190400, // Example Unix timestamp
  },
  {
    wasteBankWallet: "0x987zyx654wvu321tsr",
    user: "user2@example.com",
    bottleWeightInKg: 3.2,
    paperWeightInKg: 1.8,
    canWeightInKg: 0.7,
    timestamp: 1693190500, // Example Unix timestamp
  },
  {
    wasteBankWallet: "0x987zyx654wvu321tsr",
    user: "user3@example.com",
    bottleWeightInKg: 6.0,
    paperWeightInKg: 4.2,
    canWeightInKg: 2.1,
    timestamp: 1693190600, // Example Unix timestamp
  },
  {
    wasteBankWallet: "0x456stu789vwx012yza",
    user: "user4@example.com",
    bottleWeightInKg: 4.8,
    paperWeightInKg: 2.9,
    canWeightInKg: 1.5,
    timestamp: 1693190700, // Example Unix timestamp
  },
  {
    wasteBankWallet: "0x456stu789vwx012yza",
    user: "user5@example.com",
    bottleWeightInKg: 7.3,
    paperWeightInKg: 5.0,
    canWeightInKg: 3.2,
    timestamp: 1693190800, // Example Unix timestamp
  },
];
