"use client";

import { useMemo, useState } from "react";

export const useProductVariantSelectorHandler = (
  colorOptions: string[],
  sizeOptions: string[],
) => {
  const normalizedColorOptions = useMemo(
    () => (colorOptions.length > 0 ? colorOptions : ["未設定"]),
    [colorOptions],
  );
  const quantityOptions = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);

  const [color, setColor] = useState(normalizedColorOptions[0]);
  const [size, setSize] = useState(sizeOptions[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const selectedColor = normalizedColorOptions.includes(color)
    ? color
    : normalizedColorOptions[0];
  const selectedSize =
    sizeOptions.length > 0
      ? sizeOptions.includes(size)
        ? size
        : sizeOptions[0]
      : "";

  return {
    normalizedColorOptions,
    quantityOptions,
    color: selectedColor,
    setColor,
    size: selectedSize,
    setSize,
    quantity,
    setQuantity,
  };
};
