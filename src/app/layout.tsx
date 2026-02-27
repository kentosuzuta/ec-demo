import Footer from "@/features/layout/components/Footer";
import { Header } from "@/features/layout/components/Header";
import { FavoriteProvider } from "@/features/layout/providers/FavoriteProvider";
import MuiProvider from "@/providers/ThemeProvider";
import { Box } from "@mui/material";
import { Metadata } from "next";

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
        style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}
      >
        <MuiProvider>
          <FavoriteProvider>
            <Header />
            <Box component="main" sx={{ py: 4, flexGrow: 1 }}>
              {children}
            </Box>
            <Footer />
          </FavoriteProvider>
        </MuiProvider>
      </body>
    </html>
  );
}
