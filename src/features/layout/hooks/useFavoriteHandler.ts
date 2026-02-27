"use client";

import { useCallback, useMemo, useState } from "react";

export type FavoriteHandlerProps = {
  count: number;
  items: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  hasFavorite: (id: string) => boolean;
};

export function useFavoriteHandler(): FavoriteHandlerProps {
  const [items, setItems] = useState<string[]>([]);

  const addFavorite = useCallback((id: string) => {
    setItems((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item !== id));
  }, []);

  const hasFavorite = useCallback((id: string) => items.includes(id), [items]);

  return useMemo(
    () => ({
      count: items.length,
      items,
      addFavorite,
      removeFavorite,
      hasFavorite,
    }),
    [addFavorite, hasFavorite, items, removeFavorite],
  );
}
