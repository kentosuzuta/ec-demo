"use client";

import BackToProductsButton from "@/features/common/components/BackToProductsButton";
import ProductDetailInfoPanel from "@/features/product/components/ProductDetailInfoPanel";
import ProductImageGallery from "@/features/product/components/ProductImageGallery";
import ProductVariantSelector from "@/features/product/components/ProductVariantSelector";
import { useProductVariantSelectorHandler } from "@/features/product/hooks/useProductVariantSelectorHandler";
import type { Product } from "@/features/product/types/product";
import { Box, Container } from "@mui/material";
import ProductDeliveryInfo from "./ProductDeliveryInfo";
import ProductDetailActionButtons from "./ProductDetailActionButtons";

export default function ProductDetailView({
  product,
  detailImages,
  colorOptions,
  sizeOptions,
}: {
  product: Product;
  detailImages: string[];
  colorOptions: string[];
  sizeOptions: string[];
}) {
  const {
    normalizedColorOptions,
    quantityOptions,
    color,
    setColor,
    size,
    setSize,
    quantity,
    setQuantity,
  } = useProductVariantSelectorHandler(colorOptions, sizeOptions);

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <BackToProductsButton />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "0 0 60%" },
            minWidth: 300,
          }}
        >
          <ProductImageGallery images={detailImages} alt={product.title} />
        </Box>

        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "0 0 40%" },
            ml: { md: 4 },
          }}
        >
          <ProductDetailInfoPanel product={product} />

          <Box sx={{ mb: 4 }}>
            <ProductVariantSelector
              normalizedColorOptions={normalizedColorOptions}
              quantityOptions={quantityOptions}
              sizeOptions={sizeOptions}
              color={color}
              size={size}
              quantity={quantity}
              onColorChange={setColor}
              onSizeChange={setSize}
              onQuantityChange={setQuantity}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <ProductDeliveryInfo />
          </Box>

          <ProductDetailActionButtons
            productId={product.id}
            title={product.title}
            category={product.category}
            imageUrl={product.imageUrl}
            priceYen={product.priceYen}
            color={color}
            size={size}
            quantity={quantity}
          />
        </Box>
      </Box>
    </Container>
  );
}
