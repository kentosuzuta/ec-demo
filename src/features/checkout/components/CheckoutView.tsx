"use client";

import { Box, Container } from "@mui/material";
import BackToCartButton from "./BackToCartButton";
import CheckoutStepper from "./CheckoutStepper";
import CheckoutTitle from "./CheckoutTitle";
import ShippingAddressForm from "./ShippingAddressForm";

export default function CheckoutView() {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <BackToCartButton />
      </Box>
      <Box sx={{ mb: 1 }}>
        <CheckoutTitle />
      </Box>
      <Box sx={{ mb: 1 }}>
        <CheckoutStepper activeStep={0} />
      </Box>
      <ShippingAddressForm />
    </Container>
  );
}
