import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, IconButton } from "@mui/material";

export default function ProductDetailActionButtons() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Button size="large" variant="contained">
        <ShoppingCartIcon />
        カートへ入れる
      </Button>
      <IconButton
        aria-label="favorite"
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "50%",
        }}
      >
        <FavoriteBorderIcon />
      </IconButton>
    </Box>
  );
}
