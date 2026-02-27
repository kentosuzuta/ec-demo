import ProductDetailView from "@/features/product/components/ProductDetailView";
import { isUuid } from "@/features/product/lib/isUuid";
import { fetchProductById } from "@/lib/service/product";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  if (!isUuid(productId)) {
    notFound();
  }

  const product = await fetchProductById(productId);

  if (product) return <ProductDetailView product={product} />;
  notFound();
}
