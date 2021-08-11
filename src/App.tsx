import WalletsList from "./components/wallet-list";
import {
  AppBar,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import OperationList from "./components/operation-list";
import AccountList from "./components/account-list";
import { Provider } from "react-redux";
import store from "./store";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
  },
  heroContent: {
    paddingTop: "20px",
  },
  paper: {
    padding: "30px",
    width: "100%",
  },
  root: {
    flexGrow: 1,
    padding: "20px",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <CssBaseline>
        <AppBar position="sticky" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h5" color="inherit" noWrap>
              PetWallet
            </Typography>
          </Toolbar>
        </AppBar>
        <Container className={classes.heroContent}>
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
        </Container>
      </CssBaseline>
    </Provider>
  );
};

export default App;
