"use client";
import { Button } from "@mui/material";
import Link from "next/link";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
export default function BackToCartButton() {
  return (
    <>
      <Button variant="outlined" component={Link} href="/cart">
        <KeyboardReturnIcon /> カートへ戻る
      </Button>
    </>
  );
}
