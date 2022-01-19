import {
  Button,
  TextField,
  FormControl,
  CssBaseline,  
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { IWalletItem } from "../../types/domain";
import { MainState } from "../../types/redux";

interface Props {
  saveWalletStart: (wallet: IWalletItem) => void;  
  saveState: MainState
}

const WalletAddFormUI = (props: Props) => {
  const { pending } = props.saveState;
  const { control, handleSubmit } = useForm();

  const onSubmit = (wallet: IWalletItem) => {
    props.saveWalletStart(wallet);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CssBaseline>        
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
            name="amount"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                required
                type="number"
                label="Сумма"
                size="small"                
              />
            )}
          />
          <Button
            type="submit"            
            variant="contained"
            disabled={pending}
          >
            Сохранить
          </Button>
        </FormControl>        
      </CssBaseline>
    </form>    
  );
};

export default WalletAddFormUI;
