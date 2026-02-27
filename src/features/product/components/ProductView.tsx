"use client";

import type { Product } from "@/features/product/types/product";
import { Box, Container, Grid } from "@mui/material";
import { useProductCategoryTabHandler } from "../hooks/useProductCategoryTabHandler";
import ProductCard from "./ProductCard";
import ProductCategoryTab from "./ProductCategoryTab";
import ProductTitle from "./ProductTitle";

export default function ProductView({ products }: { products: Product[] }) {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  } = useProductCategoryTabHandler(products);

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <ProductTitle />
      </Box>
      <Box sx={{ mb: 3 }}>
        <ProductCategoryTab
          categories={categories}
          selected={selectedCategory}
          handleSelect={setSelectedCategory}
        />
      </Box>

      <Grid container spacing={3}>
        {filteredProducts.map((p) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={p.id}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
