"use client";

import { useMemo, useState } from "react";

export const useProductImageGalleryHandler = (images: string[]) => {
  const uniqueImages = useMemo(() => Array.from(new Set(images)), [images]);
  const [selectedImage, setSelectedImage] = useState(uniqueImages[0] ?? "");

  return {
    uniqueImages,
    selectedImage,
    setSelectedImage,
  };
};
