"use client";

import { useShippingAddressFormHandler } from "@/features/checkout/hooks/useShippingAddressFormHandler";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";

export default function ShippingAddressForm() {
  const { values, errors, handleFieldChange, handleSubmit } =
    useShippingAddressFormHandler();

  return (
    <Paper component="form" sx={{ p: 3 }} onSubmit={handleSubmit}>
      <Typography
        variant="h6"
        sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}
      >
        <LocalShippingIcon />
        配送先情報
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="姓"
            fullWidth
            required
            value={values.lastName}
            onChange={handleFieldChange("lastName")}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="名"
            fullWidth
            required
            value={values.firstName}
            onChange={handleFieldChange("firstName")}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="メールアドレス"
            type="email"
            fullWidth
            required
            value={values.email}
            onChange={handleFieldChange("email")}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="電話番号"
            fullWidth
            required
            value={values.phone}
            onChange={handleFieldChange("phone")}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="郵便番号"
            fullWidth
            required
            value={values.postalCode}
            onChange={handleFieldChange("postalCode")}
            error={Boolean(errors.postalCode)}
            helperText={errors.postalCode}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <TextField
            label="都道府県"
            fullWidth
            required
            value={values.prefecture}
            onChange={handleFieldChange("prefecture")}
            error={Boolean(errors.prefecture)}
            helperText={errors.prefecture}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            label="市区町村・番地"
            fullWidth
            required
            value={values.addressLine1}
            onChange={handleFieldChange("addressLine1")}
            error={Boolean(errors.addressLine1)}
            helperText={errors.addressLine1}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            label="建物名・部屋番号（任意）"
            fullWidth
            value={values.addressLine2}
            onChange={handleFieldChange("addressLine2")}
            error={Boolean(errors.addressLine2)}
            helperText={errors.addressLine2}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="contained" size="large" type="submit">
          支払い方法へ進む
        </Button>
      </Box>
    </Paper>
  );
}
