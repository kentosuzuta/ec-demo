import type { ShippingAddressFormValues } from "@/features/checkout/types/shippingAddress";

export type ShippingAddressFormErrors = Partial<
  Record<keyof ShippingAddressFormValues, string>
>;

export function validateShippingAddress(
  values: ShippingAddressFormValues,
): ShippingAddressFormErrors {
  const nextErrors: ShippingAddressFormErrors = {};

  const lastName = values.lastName.trim();
  const firstName = values.firstName.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const postalCode = values.postalCode.trim();
  const prefecture = values.prefecture.trim();
  const addressLine1 = values.addressLine1.trim();
  const addressLine2 = values.addressLine2.trim();

  if (!lastName) nextErrors.lastName = "姓を入力してください";
  else if (lastName.length > 50)
    nextErrors.lastName = "姓は50文字以内で入力してください";

  if (!firstName) nextErrors.firstName = "名を入力してください";
  else if (firstName.length > 50)
    nextErrors.firstName = "名は50文字以内で入力してください";

  if (!email) nextErrors.email = "メールアドレスを入力してください";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    nextErrors.email = "メールアドレスの形式が正しくありません";

  const normalizedPhone = phone.replace(/-/g, "");
  if (!phone) nextErrors.phone = "電話番号を入力してください";
  else if (!/^[0-9-]+$/.test(phone))
    nextErrors.phone = "電話番号は数字とハイフンで入力してください";
  else if (normalizedPhone.length < 10 || normalizedPhone.length > 11)
    nextErrors.phone = "電話番号は10〜11桁で入力してください";

  if (!postalCode) nextErrors.postalCode = "郵便番号を入力してください";
  else if (!/^\d{3}-?\d{4}$/.test(postalCode))
    nextErrors.postalCode = "郵便番号は 123-4567 形式で入力してください";

  if (!prefecture) nextErrors.prefecture = "都道府県を入力してください";
  else if (prefecture.length > 20)
    nextErrors.prefecture = "都道府県は20文字以内で入力してください";

  if (!addressLine1) nextErrors.addressLine1 = "市区町村・番地を入力してください";
  else if (addressLine1.length > 100)
    nextErrors.addressLine1 = "市区町村・番地は100文字以内で入力してください";

  if (addressLine2.length > 100)
    nextErrors.addressLine2 = "建物名・部屋番号は100文字以内で入力してください";

  return nextErrors;
}
