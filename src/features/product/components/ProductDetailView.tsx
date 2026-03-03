import BackToProductsButton from "@/features/common/components/BackToProductsButton";
import ProductDetailInfoPanel from "@/features/product/components/ProductDetailInfoPanel";
import ProductImageGallery from "@/features/product/components/ProductImageGallery";
import ProductVariantSelector from "@/features/product/components/ProductVariantSelector";
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
              colorOptions={colorOptions}
              sizeOptions={sizeOptions}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <ProductDeliveryInfo />
          </Box>

          <ProductDetailActionButtons productId={product.id} />
        </Box>
      </Box>
    </Container>
  );
}
