"use client";

import { useProductVariantSelectorHandler } from "@/features/product/hooks/useProductVariantSelectorHandler";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function ProductVariantSelector({
  colorOptions,
  sizeOptions,
}: {
  colorOptions: string[];
  sizeOptions: string[];
}) {
  const { normalizedColorOptions, color, setColor, size, setSize } =
    useProductVariantSelectorHandler(colorOptions, sizeOptions);

  return (
    <Box sx={{ mt: 3, display: "grid", gap: 4, maxWidth: 360 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="product-color-label">color</InputLabel>
        <Select
          labelId="product-color-label"
          value={color}
          label="color"
          onChange={(event) => setColor(event.target.value)}
          MenuProps={{ disableScrollLock: true }}
        >
          {normalizedColorOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {sizeOptions.length > 0 && (
        <FormControl fullWidth size="small">
          <InputLabel id="product-size-label">size</InputLabel>
          <Select
            labelId="product-size-label"
            value={size}
            label="size"
            onChange={(event) => setSize(event.target.value)}
            MenuProps={{ disableScrollLock: true }}
          >
            {sizeOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );
}
