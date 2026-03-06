export type PaymentCardFormValues = {
  cardNumber: string;
  expiry: string;
  cvv: string;
  cardHolder: string;
};

export const initialPaymentCardValues: PaymentCardFormValues = {
  cardNumber: "",
  expiry: "",
  cvv: "",
  cardHolder: "",
};
