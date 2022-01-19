import { Grid } from "@mui/material";
import WalletsList from "./../components/wallet-list";
import AccountList from "./../components/account-list";
import OperationList from "./../components/operation-list";

const MainPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item container spacing={1} sm={3} xs={12} direction="column">
        <Grid item>
          <WalletsList />
        </Grid>
        <Grid item>
          <AccountList />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={9} md={6}>
        <OperationList />
      </Grid>
    </Grid>
  );
};

export default MainPage;
