"use client";

import { useCart } from "@/features/layout/providers/CartProvider";
import {
  Box,
  Container,
  Grid,
} from "@mui/material";
import BackToCartButton from "./BackToCartButton";
import CheckoutOrderSummary from "./CheckoutOrderSummary";
import CheckoutStepper from "./CheckoutStepper";
import CheckoutTitle from "./CheckoutTitle";
import PaymentMethodForm from "./PaymentMethodForm";

export default function PaymentMethodView() {
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
        <CheckoutTitle />
      </Box>
      <Box sx={{ mb: 1 }}>
        <CheckoutStepper activeStep={1} />
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <PaymentMethodForm />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <CheckoutOrderSummary
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
