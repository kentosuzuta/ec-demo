"use client";

import { paymentMethodOptions } from "@/features/checkout/constants/paymentMethod";
import { usePaymentMethodFormHandler } from "@/features/checkout/hooks/usePaymentMethodFormHandler";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function PaymentMethodForm() {
  const {
    paymentMethod,
    paymentCard,
    errors,
    handlePaymentMethodChange,
    handleCardFieldChange,
    handleSubmit,
  } = usePaymentMethodFormHandler();

  return (
    <Paper component="form" sx={{ p: 3 }} onSubmit={handleSubmit}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        支払い方法
      </Typography>

      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          value={paymentMethod}
          onChange={(event) => handlePaymentMethodChange(event.target.value)}
        >
          {paymentMethodOptions.map((method) => (
            <FormControlLabel
              key={method}
              value={method}
              control={<Radio />}
              label={method}
            />
          ))}
        </RadioGroup>
      </FormControl>

      {paymentMethod === "クレジットカード" && (
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12 }}>
            <TextField
              label="カード番号"
              fullWidth
              required
              value={paymentCard.cardNumber}
              onChange={handleCardFieldChange("cardNumber")}
              error={Boolean(errors.cardNumber)}
              helperText={errors.cardNumber}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="有効期限 (MM/YY)"
              fullWidth
              required
              value={paymentCard.expiry}
              onChange={handleCardFieldChange("expiry")}
              error={Boolean(errors.expiry)}
              helperText={errors.expiry}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="セキュリティコード"
              fullWidth
              required
              value={paymentCard.cvv}
              onChange={handleCardFieldChange("cvv")}
              error={Boolean(errors.cvv)}
              helperText={errors.cvv}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              label="カード名義人"
              fullWidth
              required
              value={paymentCard.cardHolder}
              onChange={handleCardFieldChange("cardHolder")}
              error={Boolean(errors.cardHolder)}
              helperText={errors.cardHolder}
            />
          </Grid>
        </Grid>
      )}

      <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          size="large"
          component={Link}
          href="/checkout"
          sx={{ mr: 3 }}
        >
          戻る
        </Button>
        <Button
          variant="contained"
          size="large"
          type="submit"
        >
          注文確認へ進む
        </Button>
      </Box>
    </Paper>
  );
}
