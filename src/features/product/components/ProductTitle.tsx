import { Typography } from "@mui/material";

export default function ProductTitle() {
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
        商品一覧
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        ダミーダミーダミー
      </Typography>
    </>
  );
}
