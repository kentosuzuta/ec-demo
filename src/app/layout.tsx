import Footer from "@/features/layout/components/Footer";
import { Header } from "@/features/layout/components/Header";
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
      <body suppressHydrationWarning>
        <MuiProvider>
          <Header />
          <Box component="main" sx={{ py: 4 }}>
            {children}
          </Box>
          <Footer />
        </MuiProvider>
      </body>
    </html>
  );
}
