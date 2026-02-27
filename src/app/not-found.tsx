import { Box, Button, Container, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Container
      sx={{
        py: 20,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 800, mb: 1 }}>
          404
        </Typography>
        <Typography variant="h5" component="p" sx={{ fontWeight: 700, mb: 2 }}>
          ページが見つかりません
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          URLが間違っているか、ページが移動または削除された可能性があります。
        </Typography>
        <Button variant="contained" href="/">
          商品一覧へ戻る
        </Button>
      </Box>
    </Container>
  );
}
