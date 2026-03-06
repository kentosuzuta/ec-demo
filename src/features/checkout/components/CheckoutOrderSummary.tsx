import type { CartItem } from "@/features/layout/hooks/useCartHandler";
import { formatYen } from "@/lib/format/currency";
import { Box, Divider, Paper, Typography } from "@mui/material";

export default function CheckoutOrderSummary({
  items,
  subtotal,
  shipping,
  total,
}: {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}) {
  return (
    <Paper sx={{ p: 3, position: { md: "sticky" }, top: { md: 88 } }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        注文サマリー
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Box sx={{ mb: 2 }}>
        {items.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            カートに商品がありません
          </Typography>
        ) : (
          <Box sx={{ display: "grid", gap: 1.25 }}>
            {items.map((item) => (
              <Box
                key={`${item.productId}-${item.color}-${item.size}`}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 1,
                }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.quantity}点
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {formatYen(item.priceYen * item.quantity)}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography variant="body1">小計</Typography>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          {formatYen(subtotal)}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="body1">送料</Typography>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          {shipping === 0 ? "無料" : formatYen(shipping)}
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">合計</Typography>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 800 }}>
          {formatYen(total)}
        </Typography>
      </Box>
    </Paper>
  );
}
