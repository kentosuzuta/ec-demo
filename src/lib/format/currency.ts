export const formatYen = (amount: number): string => {
  const withCommas = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `¥${withCommas}`;
};
