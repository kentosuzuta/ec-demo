import type { ShippingAddressFormValues } from "@/features/checkout/types/shippingAddress";
import type { PaymentMethodType } from "@/features/checkout/types/paymentMethod";

export type CreateOrderItemInput = {
  productId: string;
  title: string;
  unitPrice: number;
  quantity: number;
  color?: string;
  size?: string;
};

export type CreateOrderPayload = {
  shippingAddress: ShippingAddressFormValues;
  paymentMethod: PaymentMethodType;
  subtotal: number;
  shipping: number;
  total: number;
  items: CreateOrderItemInput[];
};

export type CreateOrderResponse = {
  orderId: string;
};
