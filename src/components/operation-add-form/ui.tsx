import { useForm, Controller } from "react-hook-form";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useFetch } from "../../utils/hooks/useFetch";
import { getAccounts } from "../../api/account";
import {
  IAccount,
  IOperationItem,
  IWallet,  
} from "../../types/domain";
import Autocomplete from '@mui/material/Autocomplete';
import { getWallets } from "../../api/wallets";
import { OperationType } from "./types";
import { MainState } from "../../types/redux";

interface Props {
  saveOperationStart: (operation: IOperationItem) => void;
  saveState: MainState;
}

const OperationAddFormUI = (props: Props) => {
  const { pending } = props.saveState;
  const { control, handleSubmit } = useForm();

  const onSubmit = (operation: IOperationItem) => {
    props.saveOperationStart(operation);
  };

  const { data: accounts } = useFetch(() => getAccounts());
  const { data: wallets } = useFetch(() => getWallets());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl size="small" fullWidth>
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              required
              label="Сумма"
              type="number"
              size="small"
            />
          )}
        />
        <Controller
          name="type"
          control={control}
          defaultValue={OperationType.Income}
          render={({ field }) => (
            <Select {...field} variant="outlined" fullWidth>
              <MenuItem value={OperationType.Income}>Зачислить</MenuItem>
              <MenuItem value={OperationType.Expense}>Списать</MenuItem>
            </Select>
          )}
        />
        <Controller
          name="walletId"
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              size="small"
              options={wallets as IWallet[]}
              getOptionLabel={(wallet: IWallet) => wallet.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Кошелёк"
                  required
                />
              )}
              onChange={(_, data) => field.onChange(data?.id)}
            />
          )}
        />
        <Controller
          name="accountId"
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              size="small"
              options={accounts as IAccount[]}
              getOptionLabel={(account: IAccount) => account.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Счёт"
                  required
                />
              )}
              onChange={(_, data) => field.onChange(data?.id)}
            />
          )}
        />
        <Button type="submit" fullWidth variant="contained" disabled={pending}>
          Сохранить
        </Button>
      </FormControl>
    </form>
  );
};

export default OperationAddFormUI;
