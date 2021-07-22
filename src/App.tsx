import WalletsList from "./components/wallet-list";
import WalletAddForm from "./components/wallet-add-form";
import { Container, CssBaseline } from "@material-ui/core";
import OperationList from "./components/operation-list";
import AccountList from "./components/account-list";
import OperationAddForm from "./components/operation-add-form";
import { Provider } from "react-redux";
import store from "./store";
import AccountAddForm from "./components/account-add-form";

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline>
        <Container>
          <h3>Добавить кошелёк</h3>
          <WalletAddForm />
          <h3>Список кошельков</h3>
          <WalletsList />
          <h3>Добавить операцию</h3>
          <OperationAddForm />
          <h3>Список операций</h3>
          <OperationList />
          <h3>Добавить счёт</h3>
          <AccountAddForm />
          <h3>Список счетов</h3>
          <AccountList />
        </Container>
      </CssBaseline>
    </Provider>
  );
};

export default App;
