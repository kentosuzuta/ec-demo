"use client";

import BackToProductsButton from "@/features/common/components/BackToProductsButton";
import FavoritesEmptyState from "@/features/favorites/components/FavoritesEmptyState";
import FavoriteProductCard from "@/features/favorites/components/FavoriteProductCard";
import { useFavorite } from "@/features/layout/providers/FavoriteProvider";
import type { Product } from "@/features/product/types/product";
import { Box, Container, Grid } from "@mui/material";
import { useMemo } from "react";
import FavoritesTitle from "./FavoritesTitle";

export default function FavoritesView({ products }: { products: Product[] }) {
  const { items } = useFavorite();
  const favoriteProducts = useMemo(
    () => products.filter((product) => items.includes(product.id)),
    [items, products],
  );

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <BackToProductsButton />
      </Box>
      <Box sx={{ mb: 3 }}>
        <FavoritesTitle count={items.length} />
      </Box>

      {favoriteProducts.length === 0 ? (
        <FavoritesEmptyState />
      ) : (
        <Grid container spacing={3}>
          {favoriteProducts.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
              <FavoriteProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
