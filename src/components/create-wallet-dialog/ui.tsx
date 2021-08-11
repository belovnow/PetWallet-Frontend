import {
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
} from "@material-ui/core";
import {
  IWalletItem,
} from "../../types/domain";
import { useForm, Controller } from "react-hook-form";
import { MainState } from "../../types/redux";
import { useStyles } from "./styles";
import { useEffect } from "react";

interface Props {
  handleClose: () => void;
  opened: boolean;
  saveWalletStart: (wallet: IWalletItem) => void;
  saveState: MainState;
}

const CreateWalletDialogUI = (props: Props) => {
  const classes = useStyles();
  const { control, handleSubmit } = useForm();

  const { handleClose, opened, saveWalletStart, saveState } = props;

  const onSubmit = (wallet: IWalletItem) => {
    saveWalletStart(wallet);
  };

  useEffect(() => {
    handleClose();
  }, [saveState.success]);

  return (
    <Dialog onClose={handleClose} open={opened} fullWidth>
      <DialogTitle className={classes.dialog}>
        <Typography>Создать кошелёк</Typography>
      </DialogTitle>
      <DialogContent dividers>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.formInput}
                  variant="outlined"
                  required
                  label="Название"
                  InputLabelProps={{ required: false }}
                />
              )}
            />
            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.formInput}
                  variant="outlined"
                  required
                  type="number"
                  label="Начальная сумма"
                  InputLabelProps={{ required: false }}
                />
              )}
            />
            <Button
              type="submit"
              variant="outlined"
              size="large"
              color="primary"
              disabled={saveState.pending}
            >
              Сохранить
            </Button>
          </FormControl>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWalletDialogUI;
