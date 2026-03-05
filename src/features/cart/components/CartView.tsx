"use client";

import BackToProductsButton from "@/features/common/components/BackToProductsButton";
import { useCart } from "@/features/layout/providers/CartProvider";
import {
  Box,
  Container,
  Grid,
} from "@mui/material";
import CartEmptyState from "./CartEmptyState";
import CartItemList from "./CartItemList";
import CartOrderSummary from "./CartOrderSummary";
import CartTitle from "./CartTitle";

export default function CartView() {
  const { items, count, removeCartItem, updateCartQuantity } = useCart();
  const subtotal = items.reduce(
    (sum, item) => sum + item.priceYen * item.quantity,
    0,
  );
  const shipping = subtotal >= 6000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <BackToProductsButton />
      </Box>
      <Box sx={{ mb: 3 }}>
        <CartTitle count={count} />
      </Box>

      {items.length === 0 ? (
        <CartEmptyState />
      ) : (
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            <CartItemList
              items={items}
              removeCartItem={removeCartItem}
              updateCartQuantity={updateCartQuantity}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <CartOrderSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
            />
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
