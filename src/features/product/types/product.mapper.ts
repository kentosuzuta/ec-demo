import { Product } from "./product";
import type { ProductDto } from "./product.dto";

export const toProduct = (dto: ProductDto): Product => ({
  id: dto.id,
  title: dto.name,
  summary: dto.description,
  priceYen: dto.price,
  imageUrl: dto.image_url,
  category: dto.category,
  inStock: dto.stock > 0,
});
