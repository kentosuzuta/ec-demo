"use client";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Button } from "@mui/material";
import Link from "next/link";

export default function BackToProductsButton() {
  return (
    <>
      <Button variant="outlined" component={Link} href="/">
        <KeyboardReturnIcon /> 商品一覧へ戻る
      </Button>
    </>
  );
}
