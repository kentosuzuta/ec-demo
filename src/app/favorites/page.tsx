import FavoritesView from "@/features/favorites/components/FavoritesView";
import { fetchProducts } from "@/lib/service/product";

export default async function Page() {
  const products = await fetchProducts();
  return <FavoritesView products={products} />;
}
