"use client";

import { useHeaderHandler } from "@/features/layout/hooks/useHeaderHandler";
import { useCart } from "@/features/layout/providers/CartProvider";
import { useFavorite } from "@/features/layout/providers/FavoriteProvider";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

export function Header() {
  const { count } = useFavorite();
  const { count: cartCount } = useCart();
  const {
    initialQuery,
    keyword,
    handleKeywordChange,
    handleSearchSubmit,
    handleClearSearch,
  } = useHeaderHandler();

  return (
    <AppBar position="sticky" elevation={1} color="primary">
      <Toolbar disableGutters>
        <Box
          sx={{
            width: "100%",
            maxWidth: 1200,
            mx: "auto",
            px: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              fontWeight: 800,
              textDecoration: "none",
              color: "inherit",
              whiteSpace: "nowrap",
            }}
          >
            DEMO SHOP
          </Typography>

          <Box
            component="form"
            key={initialQuery}
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
            onSubmit={(event) => {
              event.preventDefault();
              handleSearchSubmit();
            }}
          >
            <TextField
              name="q"
              size="small"
              placeholder="検索"
              fullWidth
              value={keyword}
              onChange={(event) => handleKeywordChange(event.target.value)}
              sx={{
                maxWidth: 520,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        type="submit"
                        size="small"
                        aria-label="search"
                      >
                        <SearchIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment:
                    keyword.length > 0 ? (
                      <InputAdornment position="end">
                        <IconButton
                          type="button"
                          size="small"
                          aria-label="clear search"
                          onClick={handleClearSearch}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </InputAdornment>
                    ) : undefined,
                },
              }}
            />
          </Box>

          <IconButton
            component={Link}
            href="/favorites"
            aria-label="favorites"
            color="inherit"
          >
            <Badge badgeContent={count} color="error">
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>

          <IconButton
            component={Link}
            href="/cart"
            aria-label="cart"
            color="inherit"
          >
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
