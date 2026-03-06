"use client";

import { initialPaymentCardValues } from "@/features/checkout/types/paymentCard";
import type { PaymentCardFormValues } from "@/features/checkout/types/paymentCard";
import { initialShippingAddressValues } from "@/features/checkout/types/shippingAddress";
import type { ShippingAddressFormValues } from "@/features/checkout/types/shippingAddress";
import type { PaymentMethodType } from "@/features/checkout/types/paymentMethod";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

type CheckoutContextValue = {
  shippingAddress: ShippingAddressFormValues;
  setShippingAddress: React.Dispatch<
    React.SetStateAction<ShippingAddressFormValues>
  >;
  paymentMethod: PaymentMethodType;
  setPaymentMethod: React.Dispatch<React.SetStateAction<PaymentMethodType>>;
  paymentCard: PaymentCardFormValues;
  setPaymentCard: React.Dispatch<React.SetStateAction<PaymentCardFormValues>>;
  resetCheckout: () => void;
};

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [shippingAddress, setShippingAddress] = useState<ShippingAddressFormValues>(
    initialShippingAddressValues,
  );
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethodType>("クレジットカード");
  const [paymentCard, setPaymentCard] =
    useState<PaymentCardFormValues>(initialPaymentCardValues);

  const resetCheckout = useCallback(() => {
    setShippingAddress(initialShippingAddressValues);
    setPaymentMethod("クレジットカード");
    setPaymentCard(initialPaymentCardValues);
  }, []);

  const value = useMemo(
    () => ({
      shippingAddress,
      setShippingAddress,
      paymentMethod,
      setPaymentMethod,
      paymentCard,
      setPaymentCard,
      resetCheckout,
    }),
    [paymentCard, paymentMethod, resetCheckout, shippingAddress],
  );

  return (
    <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within CheckoutProvider");
  }
  return context;
}
