"use client";

import { useFavorite } from "@/features/layout/providers/FavoriteProvider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, IconButton } from "@mui/material";

export default function ProductDetailActionButtons({
  productId,
}: {
  productId: string;
}) {
  const { addFavorite, hasFavorite } = useFavorite();
  const isFavorite = hasFavorite(productId);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Button size="large" variant="contained">
        <ShoppingCartIcon />
        カートへ入れる
      </Button>
      <IconButton
        aria-label="favorite"
        sx={{
          border: "1px solid",
          borderColor: isFavorite ? "error.main" : "divider",
          borderRadius: "50%",
          color: isFavorite ? "error.main" : "inherit",
        }}
        onClick={() => {
          if (!isFavorite) addFavorite(productId);
        }}
      >
        <FavoriteBorderIcon />
      </IconButton>
    </Box>
  );
}
