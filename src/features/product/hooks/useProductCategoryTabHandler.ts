"use client";

import { useMemo, useState } from "react";
import { Product } from "../types/product";

export const useProductCategoryTabHandler = (products: Product[]) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("すべて");

  const categories = useMemo(() => {
    const uniq = Array.from(
      new Set(products.map((p) => p.category).filter(Boolean)),
    ) as string[];
    return ["すべて", ...uniq];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "すべて") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  };
};
