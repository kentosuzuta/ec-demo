import type { Product } from "@/features/product/types/product";
import { formatYen } from "@/lib/format/currency";
import { Box, Chip, Typography } from "@mui/material";

export default function ProductDetailInfoPanel({ product }: { product: Product }) {
  return (
    <>
      {product.category && (
        <Box sx={{ mb: 3 }}>
          <Chip
            label={product.category}
            color="primary"
            size="small"
            sx={{ fontWeight: 600 }}
          />
        </Box>
      )}

      <Box sx={{ mb: 2, display: "flex", gap: 2, alignItems: "center" }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: 600, whiteSpace: "nowrap" }}
        >
          {product.title}
        </Typography>
        <Chip
          size="small"
          label={product.inStock ? "在庫あり" : "在庫なし"}
          color={product.inStock ? "success" : "default"}
        />
      </Box>

      <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
        {formatYen(product.priceYen)}
      </Typography>

      <Typography variant="body1" sx={{ mb: 1.5 }}>
        {product.summary}
      </Typography>
    </>
  );
}
