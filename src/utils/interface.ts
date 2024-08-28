export type FAQ = {
    question: string,
    answer: string
}

export type Review = {
    reviewer: string,
    rating: number,
    timestamp: number,
    review: string
}

export type NFTArt = {
    id: number,
    name: string,
    description: string,
    image: string,
    price: number
}

export type WasteBank = {
    wallet: string,
    country: string,
    city: string,
    linkToMap: string
}

export type Transaction = {
    wasteBankWallet: string,
    user: string,
    bottleWeightInKg: number,
    paperWeightInKg: number,
    canWeightInKg: number,
    timestamp: number
}