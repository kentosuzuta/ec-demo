import ProductDetailView from "@/features/product/components/ProductDetailView";
import { isUuid } from "@/features/product/lib/isUuid";
import { ProductDetailInDto } from "@/features/product/types/product_detail.dto";
import {
  fetchCommonDetailImages,
  fetchProductById,
  fetchProductOptionValues,
} from "@/lib/service/product";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<ProductDetailInDto>;
}) {
  const { productId } = await params;

  if (!isUuid(productId)) {
    notFound();
  }

  const product = await fetchProductById({ productId });
  let commonImages: string[] = [];
  let colorOptions: string[] = [];
  let sizeOptions: string[] = [];

  try {
    const commonDetailImages = await fetchCommonDetailImages();
    commonImages = commonDetailImages.map((item) => item.image_url);
  } catch {
    commonImages = [];
  }

  try {
    const options = await fetchProductOptionValues({ productId });
    colorOptions = options
      .filter((option) => option.option_type === "color")
      .map((option) => option.option_value);
    sizeOptions = options
      .filter((option) => option.option_type === "size")
      .map((option) => option.option_value);
  } catch {
    colorOptions = [];
    sizeOptions = [];
  }

  if (product) {
    const detailImages = Array.from(
      new Set([product.imageUrl, ...commonImages]),
    );
    return (
      <ProductDetailView
        product={product}
        detailImages={detailImages}
        colorOptions={colorOptions}
        sizeOptions={sizeOptions}
      />
    );
  }
  notFound();
}
