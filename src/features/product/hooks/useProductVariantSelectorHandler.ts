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

  const [color, setColor] = useState(normalizedColorOptions[0]);
  const [size, setSize] = useState(sizeOptions[0] ?? "");
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
    color: selectedColor,
    setColor,
    size: selectedSize,
    setSize,
  };
};
