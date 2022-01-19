import WalletsList from "../wallet-list";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from "@mui/material";
import { Provider } from "react-redux";
import store from "../../store";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MainPage from "../../pages/main";
import InfoPage from "../../pages/info";
import Header from "../header/ui";

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const App = () => {  
  const theme = createTheme();

  return (
    <Provider store={store}>
      <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline>
           <Header />
            <Container>
              <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/info" component={InfoPage} />
              </Switch>
            </Container>
          </CssBaseline>
          </ThemeProvider>
      </StyledEngineProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
