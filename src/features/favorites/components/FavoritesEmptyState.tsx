import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Box, Button, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function FavoritesEmptyState() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 8,
        textAlign: "center",
        bgcolor: "grey.50",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <FavoriteBorder
          sx={{
            fontSize: 120,
            color: "grey.300",
          }}
        />
      </Box>
      <Typography variant="h5" gutterBottom>
        お気に入りは空です
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        気になる商品をお気に入りに追加して、後で確認できます
      </Typography>
      <Button variant="contained" size="large" component={Link} href="/">
        商品を探す
      </Button>
    </Paper>
  );
}
