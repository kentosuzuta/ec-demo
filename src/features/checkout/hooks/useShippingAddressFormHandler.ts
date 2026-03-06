"use client";

import {
  ShippingAddressFormErrors,
  validateShippingAddress,
} from "@/features/checkout/lib/validateShippingAddress";
import { useCheckout } from "@/features/checkout/providers/CheckoutProvider";
import type { ShippingAddressFormValues } from "@/features/checkout/types/shippingAddress";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useShippingAddressFormHandler() {
  const router = useRouter();
  const { shippingAddress, setShippingAddress } = useCheckout();
  const [errors, setErrors] = useState<ShippingAddressFormErrors>({});

  const handleFieldChange =
    (field: keyof ShippingAddressFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setShippingAddress((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateShippingAddress(shippingAddress);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    router.push("/checkout/payment");
  };

  return {
    values: shippingAddress,
    errors,
    handleFieldChange,
    handleSubmit,
  };
}
