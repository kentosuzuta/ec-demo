import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

export default function RemoveFavoriteConfirmDialog({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean;
  productTitle: string;
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <DialogContentText
          sx={{ mt: 2, textAlign: "center", fontWeight: 600, fontSize: 20 }}
        >
          お気に入りから削除しますか？
        </DialogContentText>
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
          sx={{ minWidth: 120 }}
        >
          はい
        </Button>
      </DialogActions>
    </Dialog>
  );
}
