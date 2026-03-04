"use client";

import {
  CartHandlerProps,
  useCartHandler,
} from "@/features/layout/hooks/useCartHandler";
import { createContext, useContext } from "react";

const CartContext = createContext<CartHandlerProps | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const value = useCartHandler();
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
