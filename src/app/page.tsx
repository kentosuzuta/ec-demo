"use client";

import { Product } from "@/features/product/types/product";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

const mockProducts: Product[] = [
  {
    id: "1",
    title: "プレミアムコットンTシャツ",
    summary: "高品質な綿100%素材を使用した着心地抜群のTシャツ",
    priceYen: 5800,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1755456918798-35ddc5afa423?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fCVFMyU4MyU5NyVFMyU4MyVBQyVFMyU4MyU5RiVFMyU4MiVBMiVFMyU4MyVBMCVFMyU4MiVCMyVFMyU4MyU4MyVFMyU4MyU4OCVFMyU4MyVCM1QlRTMlODIlQjclRTMlODMlQTMlRTMlODMlODR8ZW58MHx8MHx8fDA%3D",
    inStock: true,
  },

  {
    id: "2",
    title: "スポーツスニーカー",
    summary: "クッション性に優れたソールで長時間の歩行も快適",
    priceYen: 12800,
    imageUrl:
      "https://images.unsplash.com/photo-1656164753657-8ff832063a71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fCVFMyU4MiVCOSVFMyU4MyU4QiVFMyU4MyVCQyVFMyU4MiVBQiVFMyU4MyVCQ3xlbnwwfHwwfHx8MA%3D%3D",
    inStock: true,
  },
  {
    id: "3",
    title: "ラグジュアリーウォッチ",
    summary: "洗練されたデザインとスイス製ムーブメント搭載",
    priceYen: 45000,
    imageUrl:
      "https://images.unsplash.com/photo-1628375162431-33c2e0a89670?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
  },
  {
    id: "4",
    title: "デザイナーハンドバッグ",
    summary: "本革を使用した上質なハンドバッグ。収納力も抜群",
    priceYen: 28000,
    imageUrl:
      "https://images.unsplash.com/photo-1652427019217-3ded1a356f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fCVFMyU4MyU4RiVFMyU4MyVCMyVFMyU4MyU4OSVFMyU4MyU5MCVFMyU4MyU4MyVFMyU4MiVCMHxlbnwwfHwwfHx8MA%3D%3D",
    inStock: true,
  },
  {
    id: "5",
    title: "ワイヤレスヘッドホン",
    summary: "ノイズキャンセリング機能搭載。高音質で音楽を楽しめる",
    priceYen: 18900,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUUzJTgzJUFGJUUzJTgyJUE0JUUzJTgzJUE0JUUzJTgzJUFDJUUzJTgyJUI5JUUzJTgzJTk4JUUzJTgzJTgzJUUzJTgzJTg5JUUzJTgzJTlCJUUzJTgzJUIzfGVufDB8fDB8fHww",
    inStock: true,
  },
  {
    id: "6",
    title: "UVカットサングラス",
    summary: "UV400カット。偏光レンズで眩しさを軽減",
    priceYen: 8500,
    imageUrl:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
  },
];

export default function Home() {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          商品一覧
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          ダミー
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {mockProducts.map((p) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={p.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={p.imageUrl}
                alt={p.title}
                sx={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  objectFit: "cover",
                }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <Typography variant="h6" component="h2">
                  {p.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {p.summary}
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                  {new Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "JPY",
                    maximumFractionDigits: 0,
                  }).format(p.priceYen)}
                </Typography>

                <Box sx={{ mt: "auto", pt: 2, display: "flex", gap: 1 }}>
                  <Button
                    variant="contained"
                    disabled={!p.inStock}
                    component={Link}
                    href={`/products/${p.id}`}
                  >
                    詳細を見る
                  </Button>
                  <Button variant="outlined" disabled={!p.inStock}>
                    カートに追加
                  </Button>
                </Box>

                {!p.inStock && (
                  <Typography
                    variant="caption"
                    sx={{ display: "block", mt: 1 }}
                  >
                    在庫なし
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
