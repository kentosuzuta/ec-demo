"use client";

import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function ProductVariantSelector({
  normalizedColorOptions,
  quantityOptions,
  sizeOptions,
  color,
  size,
  quantity,
  onColorChange,
  onSizeChange,
  onQuantityChange,
}: {
  normalizedColorOptions: string[];
  quantityOptions: number[];
  sizeOptions: string[];
  color: string;
  size: string;
  quantity: number;
  onColorChange: (value: string) => void;
  onSizeChange: (value: string) => void;
  onQuantityChange: (value: number) => void;
}) {
  return (
    <Box sx={{ mt: 3, display: "grid", gap: 4, maxWidth: 360 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="product-color-label">カラー</InputLabel>
        <Select
          labelId="product-color-label"
          value={color}
          label="color"
          onChange={(event) => onColorChange(event.target.value)}
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
          <InputLabel id="product-size-label">サイズ</InputLabel>
          <Select
            labelId="product-size-label"
            value={size}
            label="size"
            onChange={(event) => onSizeChange(event.target.value)}
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

      <FormControl fullWidth size="small">
        <InputLabel id="product-quantity-label">個数</InputLabel>
        <Select
          labelId="product-quantity-label"
          value={quantity}
          label="個数"
          onChange={(event) => onQuantityChange(Number(event.target.value))}
          MenuProps={{ disableScrollLock: true }}
        >
          {quantityOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
