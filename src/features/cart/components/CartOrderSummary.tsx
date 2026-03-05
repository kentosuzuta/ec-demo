import { formatYen } from "@/lib/format/currency";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function CartOrderSummary({
  subtotal,
  shipping,
  total,
}: {
  subtotal: number;
  shipping: number;
  total: number;
}) {
  return (
    <Paper sx={{ p: 3, position: { md: "sticky" }, top: { md: 88 } }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        注文サマリー
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography variant="body1">小計</Typography>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          {formatYen(subtotal)}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="body1">送料</Typography>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          {shipping === 0 ? "無料" : formatYen(shipping)}
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6">合計</Typography>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 800 }}>
          {formatYen(total)}
        </Typography>
      </Box>

      <Button
        variant="contained"
        size="large"
        fullWidth
        sx={{ mb: 2 }}
        component={Link}
        href="/checkout"
      >
        レジに進む
      </Button>
      <Button
        variant="outlined"
        size="large"
        fullWidth
        component={Link}
        href="/"
      >
        買い物を続ける
      </Button>
    </Paper>
  );
}
