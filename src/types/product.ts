export interface Product {
    id: string;
    title: string;
    price: number;
    rating: number;
    tag?: "Novo" | "Promo";
    image: string;
  }