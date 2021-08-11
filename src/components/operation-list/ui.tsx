import React, { useEffect } from "react";
import {
  CircularProgress,
  Divider,
  List,
  ListSubheader,
} from "@material-ui/core";
import { IOperation } from "../../types/domain";
import Paper from "@material-ui/core/Paper";
import { OperationsState } from "../../reducers/operations-reducer";
import OperationListItem from "../operation-list-item/ui";

interface Props {
  getOperationsStart: () => void;
  deleteOperationStart: (id: number) => void;
  operationsState: OperationsState;
}

const OperationListUI = (props: Props) => {
  const {
    operationsState: { operations, pending },
    getOperationsStart,
    deleteOperationStart,
  } = props;

  useEffect(() => {
    getOperationsStart();
  }, [getOperationsStart]);

  if (pending) {
    return <CircularProgress />;
  }

  return (
    <Paper>
      <List
        subheader={
          <ListSubheader component="div">История операций</ListSubheader>
        }
      >
        {operations?.map((operation: IOperation) => (
          <React.Fragment key={operation.id}>
            <OperationListItem
              operation={operation}
              deleteOperation={deleteOperationStart}
            />
            {operation !== operations[operations.length - 1] ? (
              <Divider variant="inset" />
            ) : null}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default OperationListUI;
