import { useForm, Controller } from "react-hook-form";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { IAccountItem } from "../../types/domain";
import { AccountType } from "./types";
import { MainState } from "../../types/redux";

interface Props {
  saveAccountStart: (account: IAccountItem) => void;
  saveState: MainState;
}

const AccountAddFormUI = (props: Props) => {  
  const { pending } = props.saveState;
  const { control, handleSubmit } = useForm();

  const onSubmit = (account: IAccountItem) => {
    props.saveAccountStart(account);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl size="small" fullWidth>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              required
              label="Название"
              size="small"              
            />
          )}
        />
        <Controller
          name="type"
          control={control}
          defaultValue={AccountType.Income}
          render={({ field }) => (
            <Select {...field} variant="outlined">
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
              variant="outlined"
              required
              label="Сумма"
              type="number"
              size="small"              
            />
          )}
        />
        <Button type="submit" variant="contained" disabled={pending}>
          Сохранить
        </Button>
      </FormControl>
    </form>
  );
};

export default AccountAddFormUI;
