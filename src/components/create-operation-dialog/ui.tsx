import {
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { IAccount, IOperationItem, IWallet } from "../../types/domain";
import { Autocomplete } from "@material-ui/lab";
import { useForm, Controller } from "react-hook-form";
import { OperationType } from "../operation-add-form/types";
import { getAccounts } from "../../api/account";
import { useFetch } from "../../utils/hooks/useFetch";
import { AccountType } from "../account-add-form/types";
import { useMemo } from "react";
import { MainState } from "../../types/redux";
import { useStyles } from "./styles";

interface Props {
  handleClose: (arg: boolean) => void;
  wallet: IWallet;
  opened: boolean;
  saveOperationStart: (operation: IOperationItem) => void;
  saveState: MainState;
}

const CreateOperationDialogUI = (props: Props) => {
  const classes = useStyles();
  const { control, handleSubmit, watch } = useForm();
  const { wallet, handleClose, opened, saveOperationStart, saveState } = props;
  const { data: accounts } = useFetch(() => getAccounts());

  const onSubmit = (operation: IOperationItem) => {
    operation.walletId = wallet.id;
    saveOperationStart(operation);
  };

  const filteredAccounts = useMemo(() => {
    if (watch("type") !== undefined) {
      return accounts?.filter((acc) => acc.type === watch("type"));
    } else {
      return accounts?.filter((acc) => acc.type === AccountType.Income);
    }
  }, [watch("type"), opened]);

  return (
    <Dialog onClose={handleClose} open={opened} fullWidth>
      <DialogTitle className={classes.dialog}>
        <Typography>
          {wallet.name} {wallet.amount} ₽
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth>
            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.formInput}
                  variant="outlined"
                  required
                  label="Сумма"
                  type="number"
                  InputLabelProps={{ required: false }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₽</InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <Controller
              name="type"
              control={control}
              defaultValue={OperationType.Income}
              render={({ field }) => (
                <Select
                  {...field}
                  variant="outlined"
                  className={classes.formInput}
                >
                  <MenuItem value={OperationType.Income}>Зачислить</MenuItem>
                  <MenuItem value={OperationType.Expense}>Списать</MenuItem>
                </Select>
              )}
            />
            <Controller
              name="accountId"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  className={classes.formInput}
                  options={filteredAccounts as IAccount[]}
                  getOptionLabel={(account: IAccount) => account.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Счёт"
                      required
                      InputLabelProps={{ required: false }}
                    />
                  )}
                  onChange={(_, data) => field.onChange(data?.id)}
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

export default CreateOperationDialogUI;
