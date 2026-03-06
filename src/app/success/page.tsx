import SuccessView from "@/features/success/components/SuccessView";

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ orderId?: string }>;
}) {
  const params = searchParams ? await searchParams : undefined;
  return <SuccessView orderId={params?.orderId} />;
}
