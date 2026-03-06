import type { PaymentCardFormValues } from "@/features/checkout/types/paymentCard";
import type { PaymentMethodType } from "@/features/checkout/types/paymentMethod";
import type { ShippingAddressFormValues } from "@/features/checkout/types/shippingAddress";
import type { CartItem } from "@/features/layout/hooks/useCartHandler";
import { formatYen } from "@/lib/format/currency";
import { Box, Divider, Paper, Typography } from "@mui/material";

export default function OrderConfirmDetails({
  shippingAddress,
  paymentMethod,
  paymentCard,
  items,
}: {
  shippingAddress: ShippingAddressFormValues;
  paymentMethod: PaymentMethodType;
  paymentCard: PaymentCardFormValues;
  items: CartItem[];
}) {
  return (
    <>
      <Paper sx={{ p: 3, mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          配送先
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {shippingAddress.lastName} {shippingAddress.firstName}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {shippingAddress.email}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {shippingAddress.phone}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          〒{shippingAddress.postalCode}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {shippingAddress.prefecture}
          {shippingAddress.addressLine1}
          {shippingAddress.addressLine2
            ? ` ${shippingAddress.addressLine2}`
            : ""}
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          支払い方法
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {paymentMethod}
        </Typography>
        {paymentMethod === "クレジットカード" && paymentCard.cardNumber && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            カード番号: **** **** ****{" "}
            {paymentCard.cardNumber.replace(/\s|-/g, "").slice(-4)}
          </Typography>
        )}
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          注文商品
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {items.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            注文商品がありません
          </Typography>
        ) : (
          <Box sx={{ display: "grid", gap: 1.5 }}>
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
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.quantity}点
                    {item.size ? ` / サイズ: ${item.size}` : ""}
                    {item.color ? ` / カラー: ${item.color}` : ""}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {formatYen(item.priceYen * item.quantity)}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Paper>
    </>
  );
}
