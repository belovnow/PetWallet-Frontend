import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { IAccount } from "../../types/domain";
import React from "react";
import clsx from "clsx";
import { AccountType } from "../account-add-form/types";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useStyles } from "./styles";

interface Props {
  account: IAccount;
  deleteAccount: (id: number) => void;
}

const AccountsListItem = (props: Props) => {
  const classes = useStyles();

  const { account, deleteAccount: deleteAccountStart } = props;
  const { id, name, amount, type } = account;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          className={clsx({
            [classes.income]: type === AccountType.Income,
            [classes.expense]: type === AccountType.Expense,
          })}
        >
          <MonetizationOnOutlinedIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={amount + " ₽"} />
      <ListItemSecondaryAction onClick={() => deleteAccountStart(id)}>
        <IconButton edge="end">
          <DeleteOutlineIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default AccountsListItem;
