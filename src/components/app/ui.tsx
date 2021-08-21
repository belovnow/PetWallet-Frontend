import WalletsList from "../wallet-list";
import {  
  Container,
  CssBaseline,
} from "@material-ui/core";
import { Provider } from "react-redux";
import store from "../../store";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MainPage from "../../pages/main";
import InfoPage from "../../pages/info";

import { useStyles } from "./styles";
import Header from "../header/ui";

const App = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline>
         <Header />
          <Container className={classes.content}>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/info" component={InfoPage} />
            </Switch>
          </Container>
        </CssBaseline>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
