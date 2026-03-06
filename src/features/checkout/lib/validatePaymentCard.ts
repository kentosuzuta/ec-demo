import type { PaymentCardFormValues } from "@/features/checkout/types/paymentCard";

export type PaymentCardFormErrors = Partial<
  Record<keyof PaymentCardFormValues, string>
>;

export function validatePaymentCard(
  values: PaymentCardFormValues,
): PaymentCardFormErrors {
  const nextErrors: PaymentCardFormErrors = {};

  const cardNumber = values.cardNumber.trim().replace(/\s|-/g, "");
  const expiry = values.expiry.trim();
  const cvv = values.cvv.trim();
  const cardHolder = values.cardHolder.trim();

  if (!cardNumber) {
    nextErrors.cardNumber = "カード番号を入力してください";
  } else if (!/^\d{14,19}$/.test(cardNumber)) {
    nextErrors.cardNumber = "カード番号は14〜19桁の数字で入力してください";
  }

  if (!expiry) {
    nextErrors.expiry = "有効期限を入力してください";
  } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
    nextErrors.expiry = "有効期限は MM/YY 形式で入力してください";
  } else {
    const [month, year] = expiry.split("/");
    const expMonth = Number(month);
    const expYear = 2000 + Number(year);
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    if (
      expYear < currentYear ||
      (expYear === currentYear && expMonth < currentMonth)
    ) {
      nextErrors.expiry = "有効期限が切れています";
    }
  }

  if (!cvv) {
    nextErrors.cvv = "セキュリティコードを入力してください";
  } else if (!/^\d{3,4}$/.test(cvv)) {
    nextErrors.cvv = "セキュリティコードは3〜4桁の数字で入力してください";
  }

  if (!cardHolder) {
    nextErrors.cardHolder = "カード名義人を入力してください";
  } else if (cardHolder.length > 50) {
    nextErrors.cardHolder = "カード名義人は50文字以内で入力してください";
  }

  return nextErrors;
}
