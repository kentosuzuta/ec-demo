"use client";

import { useProductImageGalleryHandler } from "@/features/product/hooks/useProductImageGalleryHandler";
import { Box } from "@mui/material";

export default function ProductImageGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const { uniqueImages, selectedImage, setSelectedImage } =
    useProductImageGalleryHandler(images);

  if (!selectedImage) return null;

  return (
    <Box sx={{ mb: 3, width: "100%", maxWidth: 720 }}>
      <Box
        component="img"
        src={selectedImage}
        alt={alt}
        sx={{
          width: "100%",
          aspectRatio: "4 / 3",
          objectFit: "cover",
          borderRadius: 2,
          mb: 1.5,
        }}
      />

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {uniqueImages.map((image, index) => {
          const isSelected = image === selectedImage;
          return (
            <Box
              key={`${image}-${index}`}
              component="button"
              type="button"
              onClick={() => setSelectedImage(image)}
              aria-label={`画像 ${index + 1}`}
              sx={{
                p: 0,
                border: isSelected ? "2px solid" : "1px solid",
                borderColor: isSelected ? "primary.main" : "divider",
                borderRadius: 1,
                overflow: "hidden",
                width: 88,
                height: 66,
                cursor: "pointer",
                background: "transparent",
              }}
            >
              <Box
                component="img"
                src={image}
                alt={`${alt} サムネイル ${index + 1}`}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
