import type { Product } from "@/features/product/types/product";
import type { ProductDto } from "@/features/product/types/product.dto";
import { toProduct } from "@/features/product/types/product.mapper";
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
  productId: string,
): Promise<Product | null> {
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
