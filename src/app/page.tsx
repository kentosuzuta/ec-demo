import ProductView from "@/features/product/components/ProductView";
import { fetchProducts } from "@/lib/service/product";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const products = await fetchProducts({ query: q });
  return <ProductView products={products} />;
}
