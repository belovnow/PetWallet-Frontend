import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Button,
} from "@material-ui/core";
import { useEffect } from "react";
import { IWallet } from "../../types/domain";
import Paper from "@material-ui/core/Paper";
import { WalletsState } from "../../reducers/wallet-reducer";

interface Props {
  getWalletsStart: () => void;
  deleteWalletStart: (id: number) => void;
  walletsState: WalletsState;
}

const WalletsListUI = (props: Props) => {
  const { wallets, pending } = props.walletsState;
  
  useEffect(() => {
    props.getWalletsStart();
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
            <TableCell>Amount</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {wallets?.map((wallet: IWallet) => (
            <TableRow key={wallet.id}>
              <TableCell>{wallet.id}</TableCell>
              <TableCell>{wallet.name}</TableCell>
              <TableCell>{wallet.amount}</TableCell>
              <TableCell>
                <Button
                  onClick={() => props.deleteWalletStart(wallet.id)}
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

export default WalletsListUI;
