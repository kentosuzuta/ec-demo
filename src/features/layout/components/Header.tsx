"use client";

import { useFavorite } from "@/features/layout/providers/FavoriteProvider";
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
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              size="small"
              placeholder="検索"
              fullWidth
              sx={{
                maxWidth: 520,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
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
            <Badge badgeContent={0} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
