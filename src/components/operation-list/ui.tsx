import { useEffect } from "react";
import {
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { IOperation } from "../../types/domain";
import Paper from "@material-ui/core/Paper";
import { OperationsState } from "../../reducers/operations-reducer";

interface Props {
  getOperationsStart: () => void;
  deleteOperationStart: (id: number) => void;
  opetationsState: OperationsState;
}

const OperationListUI = (props: Props) => {
  const { operations, pending } = props.opetationsState;

  useEffect(() => {
    props.getOperationsStart();
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
            <TableCell>OperationType</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Executed</TableCell>
            <TableCell>AccountId</TableCell>
            <TableCell>WalletId</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {operations?.map((operation: IOperation) => (
            <TableRow key={operation.id}>
              <TableCell>{operation.id}</TableCell>
              <TableCell>{operation.type}</TableCell>
              <TableCell>{operation.amount}</TableCell>
              <TableCell>{operation.executed}</TableCell>
              <TableCell>{operation.accountId}</TableCell>
              <TableCell>{operation.walletId}</TableCell>
              <TableCell>
                <Button
                  onClick={() => props.deleteOperationStart(operation.id)}
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

export default OperationListUI;
