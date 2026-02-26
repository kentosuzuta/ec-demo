"use client";

import { useFavorite } from "@/features/layout/providers/FavoriteProvider";
import type { Product } from "@/features/product/types/product";
import { formatYen } from "@/lib/format/currency";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ProductCard({ product }: { product: Product }) {
  const { addFavorite, removeFavorite, hasFavorite } = useFavorite();
  const isFavorite = hasFavorite(product.id);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" },
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

        <Box sx={{ mt: "auto", pt: 2, display: "flex", gap: 1.5 }}>
          <Button
            variant="outlined"
            disabled={!product.inStock}
            startIcon={<FavoriteBorderIcon />}
            sx={{ flex: 1, minWidth: 0, whiteSpace: "nowrap" }}
            onClick={() =>
              isFavorite
                ? removeFavorite(product.id)
                : addFavorite(product.id)
            }
          >
            {isFavorite ? "お気に入り済み" : "お気に入り"}
          </Button>
          <Button
            variant="contained"
            disabled={!product.inStock}
            startIcon={<ShoppingCartIcon />}
            sx={{ flex: 1, minWidth: 0, whiteSpace: "nowrap" }}
          >
            カートに追加
          </Button>
        </Box>

        {!product.inStock && (
          <Typography variant="caption" sx={{ display: "block", mt: 1 }}>
            在庫なし
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
