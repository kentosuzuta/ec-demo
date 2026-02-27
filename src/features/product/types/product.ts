export type Product = {
  id: string;
  title: string;
  summary: string;
  priceYen: number;
  imageUrl: string;
  category?: string;
  inStock: boolean;
};
