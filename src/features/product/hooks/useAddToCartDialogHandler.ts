"use client";

import type { AddCartInput } from "@/features/layout/hooks/useCartHandler";
import { fetchProductOptionValues } from "@/lib/service/product";
import { useCallback, useMemo, useState } from "react";

type AddToCartDialogHandlerInput = {
  productId: string;
  title: string;
  category?: string;
  imageUrl: string;
  priceYen: number;
  onConfirmAddToCart: (input: AddCartInput) => void;
};

export type AddToCartDialogHandlerProps = {
  isDialogOpen: boolean;
  isLoading: boolean;
  colorOptions: string[];
  sizeOptions: string[];
  quantityOptions: number[];
  selectedColor: string;
  selectedSize: string;
  selectedQuantity: number;
  canSubmit: boolean;
  handleOpenDialog: () => Promise<void>;
  handleCloseDialog: () => void;
  handleColorChange: (value: string) => void;
  handleSizeChange: (value: string) => void;
  handleQuantityChange: (value: number) => void;
  handleConfirmAddToCart: () => void;
};

export function useAddToCartDialogHandler({
  productId,
  title,
  category,
  imageUrl,
  priceYen,
  onConfirmAddToCart,
}: AddToCartDialogHandlerInput): AddToCartDialogHandlerProps {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [colorOptions, setColorOptions] = useState<string[]>([]);
  const [sizeOptions, setSizeOptions] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const quantityOptions = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);

  const handleOpenDialog = useCallback(async () => {
    setIsDialogOpen(true);
    setIsLoading(true);

    try {
      const options = await fetchProductOptionValues({ productId });
      const colors = options
        .filter((option) => option.option_type === "color")
        .map((option) => option.option_value);
      const sizes = options
        .filter((option) => option.option_type === "size")
        .map((option) => option.option_value);

      setColorOptions(colors);
      setSizeOptions(sizes);
      setSelectedColor(colors[0] ?? "");
      setSelectedSize(sizes[0] ?? "");
      setSelectedQuantity(1);
    } catch {
      setColorOptions([]);
      setSizeOptions([]);
      setSelectedColor("");
      setSelectedSize("");
      setSelectedQuantity(1);
    } finally {
      setIsLoading(false);
    }
  }, [productId]);

  const handleCloseDialog = useCallback(() => {
    setIsDialogOpen(false);
  }, []);

  const handleColorChange = useCallback((value: string) => {
    setSelectedColor(value);
  }, []);

  const handleSizeChange = useCallback((value: string) => {
    setSelectedSize(value);
  }, []);

  const handleQuantityChange = useCallback((value: number) => {
    setSelectedQuantity(value);
  }, []);

  const handleConfirmAddToCart = useCallback(() => {
    onConfirmAddToCart({
      productId,
      title,
      category,
      imageUrl,
      priceYen,
      color: selectedColor || undefined,
      size: selectedSize || undefined,
      quantity: selectedQuantity,
    });
    setIsDialogOpen(false);
  }, [
    imageUrl,
    category,
    onConfirmAddToCart,
    priceYen,
    productId,
    selectedColor,
    selectedQuantity,
    selectedSize,
    title,
  ]);

  const canSubmit = useMemo(() => {
    if (isLoading) return false;
    if (colorOptions.length > 0 && !selectedColor) return false;
    if (sizeOptions.length > 0 && !selectedSize) return false;
    if (selectedQuantity <= 0) return false;
    return true;
  }, [
    colorOptions.length,
    isLoading,
    selectedColor,
    selectedQuantity,
    selectedSize,
    sizeOptions.length,
  ]);

  return {
    isDialogOpen,
    isLoading,
    colorOptions,
    sizeOptions,
    quantityOptions,
    selectedColor,
    selectedSize,
    selectedQuantity,
    canSubmit,
    handleOpenDialog,
    handleCloseDialog,
    handleColorChange,
    handleSizeChange,
    handleQuantityChange,
    handleConfirmAddToCart,
  };
}
