export type ProductDto = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock: number;
  category?: string;
  created_at: string;
  updated_at: string;
};

export type ProductListDto = {
  items: ProductDto[];
  total: number;
};
