// APIレスポンス

export type ProductDto = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  category?: string;
  createdAt: string;
  updateAt: string;
};

export type ProductListDto = {
  items: ProductDto[];
  total: number;
};
