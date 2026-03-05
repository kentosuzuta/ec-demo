import { Box, Chip, Typography } from "@mui/material";

export default function CartTitle({ count }: { count: number }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 500 }}>
        ショッピングカート一覧
      </Typography>
      <Chip size="medium" color="primary" label={`${count}件`} />
    </Box>
  );
}
