import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Button } from "@mui/material";

export default function PtoductDetailReturnButton() {
  return (
    <>
      <Button variant="outlined" href="/">
        <KeyboardReturnIcon /> 商品一覧へ戻る
      </Button>
    </>
  );
}
