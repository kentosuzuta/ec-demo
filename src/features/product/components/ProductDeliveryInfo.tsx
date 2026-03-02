import { LocalShipping, Verified } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";

export default function ProductDeliveryInfo() {
  return (
    <Paper variant="outlined" sx={{ p: 2, width: "100%", maxWidth: 360 }}>
      <Stack spacing={1.5}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LocalShipping color="action" />
          <Typography variant="body2">
            送料無料（¥5,000以上のご注文）
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Verified color="action" />
          <Typography variant="body2">30日間返品保証</Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
