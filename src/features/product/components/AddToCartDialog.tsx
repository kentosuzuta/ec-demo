import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export default function AddToCartDialog({
  open,
  productTitle,
  isLoading,
  colorOptions,
  sizeOptions,
  quantityOptions,
  selectedColor,
  selectedSize,
  selectedQuantity,
  canSubmit,
  onClose,
  onColorChange,
  onSizeChange,
  onQuantityChange,
  onConfirm,
}: {
  open: boolean;
  productTitle: string;
  isLoading: boolean;
  colorOptions: string[];
  sizeOptions: string[];
  quantityOptions: number[];
  selectedColor: string;
  selectedSize: string;
  selectedQuantity: number;
  canSubmit: boolean;
  onClose: () => void;
  onColorChange: (value: string) => void;
  onSizeChange: (value: string) => void;
  onQuantityChange: (value: number) => void;
  onConfirm: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}
      >
        <ShoppingCartIcon fontSize="small" />
        カートに追加
      </DialogTitle>

      <DialogContent>
        <Box sx={{ pt: 1 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {productTitle}
          </Typography>

          {isLoading ? (
            <Typography variant="body2" color="text.secondary">
              オプションを読み込み中...
            </Typography>
          ) : (
            <>
              {colorOptions.length > 0 && (
                <FormControl fullWidth size="small" sx={{ mb: 4 }}>
                  <InputLabel id="dialog-color-label">カラー</InputLabel>
                  <Select
                    labelId="dialog-color-label"
                    value={selectedColor}
                    label="カラー"
                    onChange={(event) => onColorChange(event.target.value)}
                    MenuProps={{ disableScrollLock: true }}
                  >
                    {colorOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              {sizeOptions.length > 0 && (
                <FormControl fullWidth size="small" sx={{ mb: 4 }}>
                  <InputLabel id="dialog-size-label">サイズ</InputLabel>
                  <Select
                    labelId="dialog-size-label"
                    value={selectedSize}
                    label="サイズ"
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

              <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                <InputLabel id="dialog-quantity-label">個数</InputLabel>
                <Select
                  labelId="dialog-quantity-label"
                  value={selectedQuantity}
                  label="個数"
                  onChange={(event) =>
                    onQuantityChange(Number(event.target.value))
                  }
                  MenuProps={{ disableScrollLock: true }}
                >
                  {quantityOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {colorOptions.length === 0 && sizeOptions.length === 0 && (
                <Typography variant="body2" color="text.secondary">
                  選択可能なオプションはありません。
                </Typography>
              )}
            </>
          )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", gap: 1, mb: 2 }}>
        <Button
          onClick={onClose}
          color="primary"
          variant="outlined"
          sx={{ minWidth: 120 }}
        >
          いいえ
        </Button>
        <Button
          onClick={onConfirm}
          color="primary"
          variant="contained"
          disabled={!canSubmit}
          sx={{ minWidth: 120 }}
        >
          カートに追加
        </Button>
      </DialogActions>
    </Dialog>
  );
}
