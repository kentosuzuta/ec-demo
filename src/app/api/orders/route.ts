import type {
  CreateOrderPayload,
  CreateOrderResponse,
} from "@/features/checkout/types/order";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as CreateOrderPayload;
  const { shippingAddress, paymentMethod, subtotal, shipping, total, items } =
    body;

  if (!items || items.length === 0) {
    return NextResponse.json(
      { message: "注文商品がありません" },
      { status: 400 },
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return NextResponse.json(
      { message: "Supabase環境変数が不足しています" },
      { status: 500 },
    );
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false },
  });

  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert({
      last_name: shippingAddress.lastName,
      first_name: shippingAddress.firstName,
      email: shippingAddress.email,
      phone: shippingAddress.phone,
      postal_code: shippingAddress.postalCode,
      prefecture: shippingAddress.prefecture,
      address_line1: shippingAddress.addressLine1,
      address_line2: shippingAddress.addressLine2 || null,
      payment_method: paymentMethod,
      subtotal,
      shipping,
      total,
      status: "pending",
    })
    .select("id")
    .single();

  if (orderError || !order) {
    return NextResponse.json(
      { message: orderError?.message ?? "注文の作成に失敗しました" },
      { status: 500 },
    );
  }

  const { error: itemError } = await supabase.from("order_items").insert(
    items.map((item) => ({
      order_id: order.id,
      product_id: item.productId,
      title: item.title,
      unit_price: item.unitPrice,
      quantity: item.quantity,
      color: item.color || null,
      size: item.size || null,
    })),
  );

  if (itemError) {
    return NextResponse.json(
      { message: itemError.message ?? "注文明細の作成に失敗しました" },
      { status: 500 },
    );
  }

  const response: CreateOrderResponse = { orderId: order.id as string };
  return NextResponse.json(response);
}
