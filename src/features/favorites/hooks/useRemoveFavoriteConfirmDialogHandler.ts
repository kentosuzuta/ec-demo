"use client";

import { useCallback, useState } from "react";

export function useRemoveFavoriteConfirmDialogHandler({
  isFavorite,
  onConfirmRemove,
}: {
  isFavorite: boolean;
  onConfirmRemove: () => void;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = useCallback(() => {
    if (!isFavorite) return;
    setIsDialogOpen(true);
  }, [isFavorite]);

  const handleCloseDialog = useCallback(() => {
    setIsDialogOpen(false);
  }, []);

  const handleConfirmRemove = useCallback(() => {
    onConfirmRemove();
    setIsDialogOpen(false);
  }, [onConfirmRemove]);

  return {
    isDialogOpen,
    handleOpenDialog,
    handleCloseDialog,
    handleConfirmRemove,
  };
}
