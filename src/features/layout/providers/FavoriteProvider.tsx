"use client";

import {
  FavoriteHandlerProps,
  useFavoriteHandler,
} from "@/features/layout/hooks/useFavoriteHandler";
import { createContext, useContext } from "react";

const FavoriteContext = createContext<FavoriteHandlerProps | null>(null);

export function FavoriteProvider({ children }: { children: React.ReactNode }) {
  const value = useFavoriteHandler();
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorite must be used within FavoriteProvider");
  }
  return context;
}
