import type { Product } from "@/features/product/types/product";
import type { ProductDto } from "@/features/product/types/product.dto";
import { toProduct } from "@/features/product/types/product.mapper";
import { ProductDetailInDto } from "@/features/product/types/product_detail.dto";
import type { ProductDetailImageCommonDto } from "@/features/product/types/product_detail_image_common.dto";
import { ProductOptionDto } from "@/features/product/types/product_option.dto";
import { getSupabaseClient } from "@/lib/supabase/client";

export async function fetchProducts(): Promise<Product[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("products")
    .select(
      "id,name,description,price,image_url,stock,category,created_at,updated_at",
    )
    .order("created_at", { ascending: false });

  if (error || !data) {
    throw new Error(error?.message ?? "Failed to fetch products");
  }
  return (data as ProductDto[]).map(toProduct);
}

export async function fetchProductById(
  input: ProductDetailInDto,
): Promise<Product | null> {
  const { productId } = input;
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("products")
    .select(
      "id,name,description,price,image_url,stock,category,created_at,updated_at",
    )
    .eq("id", productId)
    .single();

  if (error) {
    if (error.code === "PGRST116" || error.code === "22P02") return null;
    throw new Error(error.message);
  }

  if (!data) return null;
  return toProduct(data as ProductDto);
}

export async function fetchCommonDetailImages(): Promise<
  ProductDetailImageCommonDto[]
> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("product_detail_images_common")
    .select("id,image_url,sort_order")
    .order("sort_order", { ascending: true });

  if (error || !data) {
    throw new Error(error?.message ?? "Failed to fetch common detail images");
  }

  return data as ProductDetailImageCommonDto[];
}

export async function fetchProductOptionValues(
  input: ProductDetailInDto,
): Promise<ProductOptionDto[]> {
  const { productId } = input;
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("product_option_values")
    .select("id,product_id,option_type,option_value,sort_order")
    .eq("product_id", productId)
    .order("option_type", { ascending: true })
    .order("sort_order", { ascending: true });

  if (error || !data) {
    throw new Error(error?.message ?? "Failed to fetch product option values");
  }

  return data as ProductOptionDto[];
}
