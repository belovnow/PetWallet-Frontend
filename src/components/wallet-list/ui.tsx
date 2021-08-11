import {
  Box,
  CircularProgress,
  IconButton,
  List,
  ListSubheader,
  Paper,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { IWallet } from "../../types/domain";
import { WalletsState } from "../../reducers/wallet-reducer";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import WalletsListItem from "../wallet-list-item/ui";
import { useStyles } from "./style";
import CreateWalletDialog from "../create-wallet-dialog";

interface Props {
  getWalletsStart: () => void;
  deleteWalletStart: (id: number) => void;
  walletsState: WalletsState;
}

const WalletsListUI = (props: Props) => {
  const classes = useStyles();
  const [opened, setOpened] = useState<boolean>(false);
  const {
    walletsState: { wallets, pending },
    getWalletsStart,
    deleteWalletStart,
  } = props;

  useEffect(() => {
    getWalletsStart();
  }, [getWalletsStart]);

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
              <ListSubheader>Кошельки</ListSubheader>
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
        {wallets?.map((wallet: IWallet) => (
          <WalletsListItem
            key={wallet.id}
            wallet={wallet}
            deleteWallet={deleteWalletStart}
          />
        ))}
      </List>
      <CreateWalletDialog opened={opened} handleClose={handleClose} />
    </React.Fragment>
  );
};

export default WalletsListUI;
