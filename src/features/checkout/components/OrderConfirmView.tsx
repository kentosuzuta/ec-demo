"use client";
import OrderConfirmDetails from "@/features/checkout/components/OrderConfirmDetails";
import OrderConfirmSummary from "@/features/checkout/components/OrderConfirmSummary";
import { useCheckout } from "@/features/checkout/providers/CheckoutProvider";
import { useCart } from "@/features/layout/providers/CartProvider";
import { Box, Container, Grid } from "@mui/material";
import BackToCartButton from "./BackToCartButton";
import CheckoutStepper from "./CheckoutStepper";
import OrderConfirmTitle from "./OrderConfirmTitle";

export default function OrderConfirmView() {
  const { shippingAddress, paymentMethod, paymentCard } = useCheckout();
  const { items } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + item.priceYen * item.quantity,
    0,
  );
  const shipping = subtotal >= 6000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <BackToCartButton />
      </Box>
      <Box sx={{ mb: 1 }}>
        <OrderConfirmTitle />
      </Box>
      <Box sx={{ mb: 1 }}>
        <CheckoutStepper activeStep={2} />
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <OrderConfirmDetails
            shippingAddress={shippingAddress}
            paymentMethod={paymentMethod}
            paymentCard={paymentCard}
            items={items}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <OrderConfirmSummary
            items={items}
            subtotal={subtotal}
            shipping={shipping}
            total={total}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
