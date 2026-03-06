import { Box, Container, Typography } from "@mui/material";
import BackToCartButton from "./BackToCartButton";
import CheckoutStepper from "./CheckoutStepper";

export default function PaymentMethodView() {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <BackToCartButton />
      </Box>

      <Box sx={{ mb: 4 }}>
        <CheckoutStepper activeStep={1} />
      </Box>

      <Typography variant="h4" component="h1" sx={{ fontWeight: 500 }}>
        支払い方法
      </Typography>
    </Container>
  );
}
