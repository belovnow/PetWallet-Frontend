import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { IWallet } from "../../types/domain";
import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import CreateOperationDialog from "../create-operation-dialog";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface Props {
  wallet: IWallet;
  deleteWallet: (id: number) => void;
}

const WalletsListItem = (props: Props) => {
  const [opened, setOpened] = useState(false);
  const { wallet, deleteWallet: deleteWalletStart } = props;
  const { id, name, amount } = wallet;

  const handleClose = () => {
    setOpened(false);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={() => setOpened(true)}>
        <ListItemAvatar>
          <Avatar>
            <PaymentIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={amount + " ₽"} />
        <ListItemSecondaryAction onClick={() => deleteWalletStart(id)}>
          <IconButton edge="end" size="large">
            <DeleteOutlineIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <CreateOperationDialog
        handleClose={handleClose}
        wallet={wallet}
        opened={opened}
      />
    </React.Fragment>
  );
};

export default WalletsListItem;
