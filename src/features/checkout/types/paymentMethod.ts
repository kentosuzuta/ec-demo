import { paymentMethodOptions } from "@/features/checkout/constants/paymentMethod";

export type PaymentMethodType = (typeof paymentMethodOptions)[number];

export const isPaymentMethodType = (value: string): value is PaymentMethodType =>
  paymentMethodOptions.includes(value as PaymentMethodType);
