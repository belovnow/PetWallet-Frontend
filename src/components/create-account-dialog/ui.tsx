import {
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
  MenuItem,
  Select,
} from "@material-ui/core";
import { IAccountItem } from "../../types/domain";
import { useForm, Controller } from "react-hook-form";
import { MainState } from "../../types/redux";
import { useStyles } from "./styles";
import { useEffect } from "react";
import { AccountType } from "../account-add-form/types";

interface Props {
  handleClose: () => void;
  opened: boolean;
  saveAccountStart: (account: IAccountItem) => void;
  saveState: MainState;
}

const CreateAccountDialogUI = (props: Props) => {
  const classes = useStyles();
  const { control, handleSubmit } = useForm();

  const { handleClose, opened, saveAccountStart, saveState } = props;

  const onSubmit = (account: IAccountItem) => {
    saveAccountStart(account);
  };

  useEffect(() => {
    handleClose();
  }, [saveState.success]);

  return (
    <Dialog onClose={handleClose} open={opened} fullWidth>
      <DialogTitle className={classes.dialog}>
        <Typography>Создать категорию</Typography>
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
              name="type"
              control={control}
              defaultValue={AccountType.Income}
              render={({ field }) => (
                <Select
                  {...field}
                  className={classes.formInput}
                  variant="outlined"
                >
                  <MenuItem value={AccountType.Income}>Дохода</MenuItem>
                  <MenuItem value={AccountType.Expense}>Расхода</MenuItem>
                </Select>
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

export default CreateAccountDialogUI;
