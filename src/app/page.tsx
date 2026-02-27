import ProductView from "@/features/product/components/ProductView";
import { fetchProducts } from "@/lib/service/product";

export default async function Page() {
  const products = await fetchProducts();
  return <ProductView products={products} />;
}
