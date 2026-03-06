"use client";

import CommonSnackbar from "@/features/common/components/CommonSnackbar";
import { SNACKBAR_MESSAGES } from "@/features/common/constants/snackbarMessages";
import { useCommonSnackbarHandler } from "@/features/common/hooks/useCommonSnackbarHandler";
import { useRemoveFavoriteConfirmDialogHandler } from "@/features/favorites/hooks/useRemoveFavoriteConfirmDialogHandler";
import { useCart } from "@/features/layout/providers/CartProvider";
import { useFavorite } from "@/features/layout/providers/FavoriteProvider";
import AddToCartDialog from "@/features/product/components/AddToCartDialog";
import { useAddToCartDialogHandler } from "@/features/product/hooks/useAddToCartDialogHandler";
import type { Product } from "@/features/product/types/product";
import { formatYen } from "@/lib/format/currency";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import RemoveFavoriteConfirmDialog from "./RemoveFavoriteConfirmDialog";

export default function FavoriteProductCard({ product }: { product: Product }) {
  const { removeFavorite, hasFavorite } = useFavorite();
  const { addCart } = useCart();
  const { open, message, handleOpenSnackbar, handleCloseSnackbar } =
    useCommonSnackbarHandler(SNACKBAR_MESSAGES.CART_ITEM_ADDED);
  const isFavorite = hasFavorite(product.id);
  const {
    isDialogOpen: isRemoveDialogOpen,
    handleOpenDialog: handleOpenRemoveDialog,
    handleCloseDialog: handleCloseRemoveDialog,
    handleConfirmRemove,
  } = useRemoveFavoriteConfirmDialogHandler({
    isFavorite,
    onConfirmRemove: () => removeFavorite(product.id),
  });
  const {
    isDialogOpen: isAddToCartDialogOpen,
    isLoading,
    colorOptions,
    sizeOptions,
    quantityOptions,
    selectedColor,
    selectedSize,
    selectedQuantity,
    canSubmit,
    handleOpenDialog: handleOpenAddToCartDialog,
    handleCloseDialog: handleCloseAddToCartDialog,
    handleColorChange,
    handleSizeChange,
    handleQuantityChange,
    handleConfirmAddToCart,
  } = useAddToCartDialogHandler({
    productId: product.id,
    title: product.title,
    category: product.category,
    imageUrl: product.imageUrl,
    priceYen: product.priceYen,
    onConfirmAddToCart: (input) => {
      addCart(input);
      handleOpenSnackbar();
    },
  });

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.3s",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        <CardActionArea
          component={Link}
          href={`/products/${product.id}`}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            flexGrow: 1,
          }}
        >
          <CardMedia
            component="img"
            image={product.imageUrl}
            alt={product.title}
            sx={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }}
          />
          <CardContent
            sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
          >
            <Typography variant="h6" component="h2">
              {product.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mt: 1,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {product.summary}
            </Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>
              {formatYen(product.priceYen)}
            </Typography>

            {!product.inStock && (
              <Typography variant="caption" sx={{ display: "block", mt: 1 }}>
                在庫なし
              </Typography>
            )}
          </CardContent>
        </CardActionArea>

        <Box sx={{ px: 2, pb: 2, display: "flex", gap: 1.5 }}>
          <Button
            variant="outlined"
            disabled={!product.inStock}
            startIcon={<FavoriteBorderIcon />}
            sx={{
              flex: 1,
              minWidth: 0,
              whiteSpace: "nowrap",
              color: isFavorite ? "error.main" : "primary",
              borderColor: isFavorite ? "error.main" : undefined,
            }}
            onClick={handleOpenRemoveDialog}
          >
            お気に入りを削除
          </Button>
          <Button
            variant="contained"
            disabled={!product.inStock}
            startIcon={<ShoppingCartIcon />}
            sx={{ flex: 1, minWidth: 0, whiteSpace: "nowrap" }}
            onClick={handleOpenAddToCartDialog}
          >
            カートに追加
          </Button>
        </Box>
      </Card>

      <RemoveFavoriteConfirmDialog
        open={isRemoveDialogOpen}
        productTitle={product.title}
        onClose={handleCloseRemoveDialog}
        onConfirm={handleConfirmRemove}
      />

      <AddToCartDialog
        open={isAddToCartDialogOpen}
        productTitle={product.title}
        isLoading={isLoading}
        colorOptions={colorOptions}
        sizeOptions={sizeOptions}
        quantityOptions={quantityOptions}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        selectedQuantity={selectedQuantity}
        canSubmit={canSubmit}
        onClose={handleCloseAddToCartDialog}
        onColorChange={handleColorChange}
        onSizeChange={handleSizeChange}
        onQuantityChange={handleQuantityChange}
        onConfirm={handleConfirmAddToCart}
      />

      <CommonSnackbar
        open={open}
        message={message}
        onClose={handleCloseSnackbar}
      />
    </>
  );
}
