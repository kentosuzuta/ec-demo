import Footer from "@/features/layout/components/Footer";
import { Header } from "@/features/layout/components/Header";
import { CartProvider } from "@/features/layout/providers/CartProvider";
import { FavoriteProvider } from "@/features/layout/providers/FavoriteProvider";
import MuiProvider from "@/providers/ThemeProvider";
import { Box } from "@mui/material";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "EC Demo",
  description: "EC Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        suppressHydrationWarning
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MuiProvider>
          <FavoriteProvider>
            <CartProvider>
              <Suspense fallback={null}>
                <Header />
              </Suspense>
              <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
              </Box>
              <Footer />
            </CartProvider>
          </FavoriteProvider>
        </MuiProvider>
      </body>
    </html>
  );
}
