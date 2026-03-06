"use client";

import CommonSnackbar from "@/features/common/components/CommonSnackbar";
import { SNACKBAR_MESSAGES } from "@/features/common/constants/snackbarMessages";
import { useCommonSnackbarHandler } from "@/features/common/hooks/useCommonSnackbarHandler";
import { useCart } from "@/features/layout/providers/CartProvider";
import { useFavorite } from "@/features/layout/providers/FavoriteProvider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, IconButton } from "@mui/material";

export default function ProductDetailActionButtons({
  productId,
  title,
  category,
  imageUrl,
  priceYen,
  color,
  size,
  quantity,
}: {
  productId: string;
  title: string;
  category?: string;
  imageUrl: string;
  priceYen: number;
  color: string;
  size: string;
  quantity: number;
}) {
  const { addFavorite, hasFavorite } = useFavorite();
  const { addCart } = useCart();
  const { open, message, handleOpenSnackbar, handleCloseSnackbar } =
    useCommonSnackbarHandler(SNACKBAR_MESSAGES.CART_ITEM_ADDED);
  const isFavorite = hasFavorite(productId);

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          size="large"
          variant="contained"
          onClick={() => {
            addCart({
              productId,
              title,
              category,
              imageUrl,
              priceYen,
              color: color || undefined,
              size: size || undefined,
              quantity,
            });
            handleOpenSnackbar();
          }}
        >
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

      <CommonSnackbar
        open={open}
        message={message}
        onClose={handleCloseSnackbar}
      />
    </>
  );
}
