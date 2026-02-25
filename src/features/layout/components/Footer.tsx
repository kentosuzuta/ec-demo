"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 6 }}>
      <Divider />
      <Container sx={{ py: 3 }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 1200,
            mx: "auto",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
              DEMO SHOP
            </Typography>

            <Stack direction="row" spacing={2}>
              <Typography
                component={Link}
                href="#"
                variant="body2"
                sx={{ textDecoration: "none", color: "text.secondary" }}
              >
                利用規約
              </Typography>
              <Typography
                component={Link}
                href="#"
                variant="body2"
                sx={{ textDecoration: "none", color: "text.secondary" }}
              >
                プライバシーポリシー
              </Typography>
            </Stack>
          </Stack>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              textAlign: "center",
              mt: 2,
              color: "text.secondary",
            }}
          >
            © {new Date().getFullYear()} DEMO SHOP. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
