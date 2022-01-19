import React from "react";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { IOperation } from "../../types/domain";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { OperationType } from "../operation-add-form/types";
import clsx from "clsx";
import { useStyles } from "./styles";


interface Props {
  operation: IOperation;
  deleteOperation: (id: number) => void;
}

const OperationListItem = (props: Props) => {
  const classes = useStyles();
  const {
    operation: { id, amount, executed, type, accountId, walletId },
    deleteOperation
  } = props;

  const operationToText = (type: OperationType): string => {
    return type === OperationType.Income ? "Доход" : "Расход";
  };


  const months: string[] = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  const dateFormater = (date: Date): string => {
    const rightDate = new Date(date);
    const currentMonth = rightDate.getMonth();

    return rightDate.getDate() + " " + months[currentMonth];
  };

  return (
    <React.Fragment>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            className={clsx({
              [classes.income]: type === OperationType.Income,
              [classes.expense]: type === OperationType.Expense,
            })}
          >
            {type === OperationType.Income ? (
              <AddCircleSharpIcon />
            ) : (
              <RemoveCircleIcon />
            )}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={amount + " ₽"} secondary="Сумма" />
        <ListItemText
          primary={operationToText(type)}
          secondary="Тип операции"
        />
        <ListItemText primary={dateFormater(executed)} secondary="Дата" />
        <ListItemText primary={walletId} secondary="Кошелёк" />
        <ListItemText primary={accountId} secondary="Счёт" />
        <ListItemSecondaryAction onClick={() => deleteOperation(id)}>
          <IconButton aria-label="delete" size="large">
            <DeleteOutlineIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </React.Fragment>
  );
};

export default OperationListItem;
