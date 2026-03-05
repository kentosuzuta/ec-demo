import type { CartItem } from "@/features/layout/hooks/useCartHandler";
import { formatYen } from "@/lib/format/currency";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import Link from "next/link";

export default function CartItemCard({
  item,
  onDecrease,
  onIncrease,
  onRemove,
}: {
  item: CartItem;
  onDecrease: () => void;
  onIncrease: () => void;
  onRemove: () => void;
}) {
  return (
    <Card variant="outlined" sx={{ display: "flex", p: 2 }}>
      <Link
        href={`/products/${item.productId}`}
        style={{
          lineHeight: 0,
          borderRadius: 8,
          overflow: "hidden",
          display: "inline-block",
        }}
      >
        <CardMedia
          component="img"
          image={item.imageUrl}
          alt={item.title}
          sx={{
            width: 120,
            height: 120,
            objectFit: "cover",
            borderRadius: 1,
            flexShrink: 0,
            cursor: "pointer",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: 3,
            },
          }}
        />
      </Link>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          ml: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
              {item.title}
            </Typography>
            {item.category && (
              <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: "block" }}>
                {item.category}
              </Typography>
            )}
            {(item.size || item.color) && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                {item.size && `サイズ: ${item.size}`}
                {item.size && item.color && " / "}
                {item.color && `カラー: ${item.color}`}
              </Typography>
            )}
          </Box>
          <IconButton
            size="small"
            aria-label="remove cart item"
            onClick={onRemove}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            mt: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                border: 1,
                borderColor: "grey.300",
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <IconButton
                size="small"
                aria-label="decrease quantity"
                onClick={onDecrease}
                disabled={item.quantity <= 1}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
              <Typography
                variant="body2"
                sx={{ px: 2, minWidth: 48, textAlign: "center" }}
              >
                {item.quantity}
              </Typography>
              <IconButton
                size="small"
                aria-label="increase quantity"
                onClick={onIncrease}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary">
              個数
            </Typography>
          </Box>

          <Typography variant="h6" color="primary" sx={{ fontWeight: 800 }}>
            {formatYen(item.priceYen * item.quantity)}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
