"use client";

import { useCheckout } from "@/features/checkout/providers/CheckoutProvider";
import type {
  CreateOrderPayload,
  CreateOrderResponse,
} from "@/features/checkout/types/order";
import type { CartItem } from "@/features/layout/hooks/useCartHandler";
import { useCart } from "@/features/layout/providers/CartProvider";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

type UseOrderConfirmSummaryHandlerProps = {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
};

export function useOrderConfirmSummaryHandler({
  items,
  subtotal,
  shipping,
  total,
}: UseOrderConfirmSummaryHandlerProps) {
  const router = useRouter();
  const { shippingAddress, paymentMethod, resetCheckout } = useCheckout();
  const { clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleConfirmOrder = useCallback(async () => {
    if (isSubmitting || items.length === 0) return;

    setIsSubmitting(true);
    setErrorMessage("");

    const payload: CreateOrderPayload = {
      shippingAddress,
      paymentMethod,
      subtotal,
      shipping,
      total,
      items: items.map((item) => ({
        productId: item.productId,
        title: item.title,
        unitPrice: item.priceYen,
        quantity: item.quantity,
        color: item.color || undefined,
        size: item.size || undefined,
      })),
    };

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = (await response.json().catch(() => null)) as
          | { message?: string }
          | null;
        throw new Error(errorBody?.message ?? "注文の確定に失敗しました");
      }

      const result = (await response
        .json()
        .catch(() => null)) as CreateOrderResponse | null;

      if (!result?.orderId) {
        throw new Error("注文番号の取得に失敗しました");
      }

      clearCart();
      resetCheckout();
      router.push(`/success?orderId=${encodeURIComponent(result.orderId)}`);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "注文の確定に失敗しました",
      );
    } finally {
      setIsSubmitting(false);
    }
  }, [
    clearCart,
    isSubmitting,
    items,
    paymentMethod,
    resetCheckout,
    router,
    shipping,
    shippingAddress,
    subtotal,
    total,
  ]);

  return {
    isSubmitting,
    errorMessage,
    handleConfirmOrder,
  };
}
