import { Box, Typography } from "@mui/material";

export default function OrderConfirmTitle() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 500 }}>
        注文確認
      </Typography>
    </Box>
  );
}
