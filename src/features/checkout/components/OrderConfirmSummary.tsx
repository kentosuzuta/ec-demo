"use client";

import { useOrderConfirmSummaryHandler } from "@/features/checkout/hooks/useOrderConfirmSummaryHandler";
import type { CartItem } from "@/features/layout/hooks/useCartHandler";
import { formatYen } from "@/lib/format/currency";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function OrderConfirmSummary({
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
  const { isSubmitting, errorMessage, handleConfirmOrder } =
    useOrderConfirmSummaryHandler({ items, subtotal, shipping, total });

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
          mb: 3,
        }}
      >
        <Typography variant="h6">合計</Typography>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 800 }}>
          {formatYen(total)}
        </Typography>
      </Box>

      <Button
        variant="outlined"
        size="large"
        fullWidth
        component={Link}
        href="/checkout/payment"
        sx={{ mb: 1 }}
        disabled={isSubmitting}
      >
        戻る
      </Button>
      <Button
        variant="contained"
        size="large"
        fullWidth
        onClick={handleConfirmOrder}
        disabled={isSubmitting || items.length === 0}
      >
        {isSubmitting ? "注文確定中..." : "注文確定"}
      </Button>
      {errorMessage && (
        <Typography color="error" variant="body2" sx={{ mt: 1.5 }}>
          {errorMessage}
        </Typography>
      )}
    </Paper>
  );
}
