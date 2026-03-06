export type ShippingAddressFormValues = {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  postalCode: string;
  prefecture: string;
  addressLine1: string;
  addressLine2: string;
};

export const initialShippingAddressValues: ShippingAddressFormValues = {
  lastName: "",
  firstName: "",
  email: "",
  phone: "",
  postalCode: "",
  prefecture: "",
  addressLine1: "",
  addressLine2: "",
};
