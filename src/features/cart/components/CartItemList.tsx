"use client";

import type {
  CartItem,
  CartHandlerProps,
} from "@/features/layout/hooks/useCartHandler";
import { Stack } from "@mui/material";
import CartItemCard from "./CartItemCard";

type CartItemListProps = {
  items: CartItem[];
  removeCartItem: CartHandlerProps["removeCartItem"];
  updateCartQuantity: CartHandlerProps["updateCartQuantity"];
};

export default function CartItemList({
  items,
  removeCartItem,
  updateCartQuantity,
}: CartItemListProps) {
  return (
    <Stack spacing={2}>
      {items.map((item) => (
        <CartItemCard
          key={`${item.productId}-${item.color}-${item.size}`}
          item={item}
          onRemove={() =>
            removeCartItem({
              productId: item.productId,
              color: item.color,
              size: item.size,
            })
          }
          onDecrease={() =>
            updateCartQuantity({
              productId: item.productId,
              color: item.color,
              size: item.size,
              quantity: Math.max(1, item.quantity - 1),
            })
          }
          onIncrease={() =>
            updateCartQuantity({
              productId: item.productId,
              color: item.color,
              size: item.size,
              quantity: item.quantity + 1,
            })
          }
        />
      ))}
    </Stack>
  );
}
