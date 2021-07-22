import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import { useEffect } from "react";
import { IAccount} from "../../types/domain";
import Paper from "@material-ui/core/Paper";
import { AccountsState } from "../../reducers/accounts-reducer";

interface Props {
  getAccountsStart: () => void;
  deleteAccountStart: (id: number) => void;
  accountsState: AccountsState;
}

const AccountListUI = (props: Props) => {
  const { accounts, pending } = props.accountsState;

  useEffect(() => {
    props.getAccountsStart();
  }, []);

  if (pending) {
    return <CircularProgress />;
  }

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {accounts?.map((account: IAccount) => (
            <TableRow key={account.id}>
              <TableCell>{account.id}</TableCell>
              <TableCell>{account.name}</TableCell>
              <TableCell>{account.type}</TableCell>
              <TableCell>{account.amount}</TableCell>
              <TableCell>
                <Button
                  onClick={() => props.deleteAccountStart(account.id)}
                  variant="outlined"
                  size="small"
                >
                  Удалить
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AccountListUI;
