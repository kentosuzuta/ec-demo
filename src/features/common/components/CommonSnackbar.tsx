"use client";

import { Alert, Snackbar } from "@mui/material";

export default function CommonSnackbar({
  open,
  message,
  onClose,
  autoHideDuration = 2500,
}: {
  open: boolean;
  message: string;
  onClose: () => void;
  autoHideDuration?: number;
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={onClose} severity="success" variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
}
