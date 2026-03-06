import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Alert, Button, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function SuccessContent({ orderId }: { orderId?: string }) {
  return (
    <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, textAlign: "center" }}>
      <CheckCircleIcon sx={{ fontSize: 100, color: "success.main", mb: 3 }} />

      <Typography variant="h4" gutterBottom>
        ご注文ありがとうございます！
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        注文番号: #{orderId ?? "--------"}
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        ご登録のメールアドレスに確認メールをお送りしました。(ダミー)
      </Typography>

      <Alert severity="success" sx={{ mb: 4 }}>
        商品は2-3営業日以内に発送予定です
      </Alert>

      <Button variant="contained" size="large" component={Link} href="/">
        ショッピングを続ける
      </Button>
    </Paper>
  );
}
