"use client";

import {
  PaymentCardFormErrors,
  validatePaymentCard,
} from "@/features/checkout/lib/validatePaymentCard";
import { useCheckout } from "@/features/checkout/providers/CheckoutProvider";
import type { PaymentCardFormValues } from "@/features/checkout/types/paymentCard";
import { isPaymentMethodType } from "@/features/checkout/types/paymentMethod";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export function usePaymentMethodFormHandler() {
  const router = useRouter();
  const { paymentMethod, setPaymentMethod, paymentCard, setPaymentCard } =
    useCheckout();
  const [errors, setErrors] = useState<PaymentCardFormErrors>({});

  const handlePaymentMethodChange = useCallback((value: string) => {
    if (isPaymentMethodType(value)) {
      setPaymentMethod(value);
    }
  }, [setPaymentMethod]);

  const handleCardFieldChange =
    (field: keyof PaymentCardFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setPaymentCard((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (paymentMethod === "クレジットカード") {
      const nextErrors = validatePaymentCard(paymentCard);
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) return;
    } else {
      setErrors({});
    }

    router.push("/checkout/confirm");
  };

  return {
    paymentMethod,
    paymentCard,
    errors,
    handlePaymentMethodChange,
    handleCardFieldChange,
    handleSubmit,
  };
}
