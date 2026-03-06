"use client";

import { useCallback, useMemo, useState } from "react";

export type CartItem = {
  productId: string;
  title: string;
  category: string;
  imageUrl: string;
  priceYen: number;
  color: string;
  size: string;
  quantity: number;
};

export type AddCartInput = {
  productId: string;
  title: string;
  category?: string;
  imageUrl: string;
  priceYen: number;
  color?: string;
  size?: string;
  quantity: number;
};

export type CartHandlerProps = {
  count: number;
  items: CartItem[];
  addCart: (input: AddCartInput) => void;
  removeCartItem: (input: { productId: string; color: string; size: string }) => void;
  clearCart: () => void;
  updateCartQuantity: (input: {
    productId: string;
    color: string;
    size: string;
    quantity: number;
  }) => void;
};

export function useCartHandler(): CartHandlerProps {
  const [items, setItems] = useState<CartItem[]>([]);

  const addCart = useCallback((input: AddCartInput) => {
    const nextItem: CartItem = {
      productId: input.productId,
      title: input.title,
      category: input.category ?? "",
      imageUrl: input.imageUrl,
      priceYen: input.priceYen,
      color: input.color ?? "",
      size: input.size ?? "",
      quantity: input.quantity,
    };

    setItems((prev) => {
      const index = prev.findIndex(
        (item) =>
          item.productId === nextItem.productId &&
          item.color === nextItem.color &&
          item.size === nextItem.size,
      );

      if (index === -1) return [...prev, nextItem];

      return prev.map((item, itemIndex) =>
        itemIndex === index
          ? { ...item, quantity: item.quantity + nextItem.quantity }
          : item,
      );
    });
  }, []);

  const updateCartQuantity = useCallback(
    (input: { productId: string; color: string; size: string; quantity: number }) => {
      const nextQuantity = Math.max(1, input.quantity);
      setItems((prev) =>
        prev.map((item) =>
          item.productId === input.productId &&
          item.color === input.color &&
          item.size === input.size
            ? { ...item, quantity: nextQuantity }
            : item,
        ),
      );
    },
    [],
  );

  const removeCartItem = useCallback(
    (input: { productId: string; color: string; size: string }) => {
      setItems((prev) =>
        prev.filter(
          (item) =>
            !(
              item.productId === input.productId &&
              item.color === input.color &&
              item.size === input.size
            ),
        ),
      );
    },
    [],
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  return useMemo(
    () => ({
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      items,
      addCart,
      removeCartItem,
      clearCart,
      updateCartQuantity,
    }),
    [addCart, clearCart, items, removeCartItem, updateCartQuantity],
  );
}
