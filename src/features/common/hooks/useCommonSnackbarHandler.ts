"use client";

import { useCallback, useState } from "react";

export function useCommonSnackbarHandler(defaultMessage = "") {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);

  const handleOpenSnackbar = useCallback(
    (nextMessage?: string) => {
      if (nextMessage) {
        setMessage(nextMessage);
      } else if (defaultMessage) {
        setMessage(defaultMessage);
      }
      setOpen(true);
    },
    [defaultMessage],
  );

  const handleCloseSnackbar = useCallback(() => {
    setOpen(false);
  }, []);

  return {
    open,
    message,
    handleOpenSnackbar,
    handleCloseSnackbar,
  };
}
