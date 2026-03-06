"use client";

import { Box, Container } from "@mui/material";
import SuccessContent from "./SuccessContent";

export default function SuccessView({ orderId }: { orderId?: string }) {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="md">
        <SuccessContent orderId={orderId} />
      </Container>
    </Box>
  );
}
