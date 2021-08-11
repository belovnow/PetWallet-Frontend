import {
  Box,
  CircularProgress,
  IconButton,
  List,
  ListSubheader,
} from "@material-ui/core";
import { useEffect } from "react";
import { IAccount } from "../../types/domain";
import Paper from "@material-ui/core/Paper";
import { AccountsState } from "../../reducers/accounts-reducer";
import AccountsListItem from "../account-list-item/ui";
import { useStyles } from "./style";
import { useState } from "react";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import CreateAccountDialog from "../create-account-dialog";

interface Props {
  getAccountsStart: () => void;
  deleteAccountStart: (id: number) => void;
  accountsState: AccountsState;
}

const AccountListUI = (props: Props) => {
  const classes = useStyles();
  const [opened, setOpened] = useState<boolean>(false);
  const {
    accountsState: { accounts, pending },
    getAccountsStart,
    deleteAccountStart,
  } = props;

  useEffect(() => {
    getAccountsStart();
  }, [getAccountsStart]);

  const handleClose = () => {
    setOpened(false);
  };

  if (pending) {
    return <CircularProgress />;
  }

  return (
    <React.Fragment>
      <List
        component={Paper}
        subheader={
          <React.Fragment>
            <Box className={classes.headerBox}>
              <ListSubheader>Категории</ListSubheader>
              <IconButton
                edge="end"
                className={classes.icon}
                onClick={() => {
                  setOpened(true);
                }}
              >
                <AddIcon />
              </IconButton>
            </Box>
          </React.Fragment>
        }
      >
        {accounts?.map((account: IAccount) => (
          <AccountsListItem
            key={account.id}
            account={account}
            deleteAccount={deleteAccountStart}
          />
        ))}
      </List>
      <CreateAccountDialog opened={opened} handleClose={handleClose} />
    </React.Fragment>
  );
};

export default AccountListUI;
