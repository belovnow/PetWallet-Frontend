import { Action } from "redux";
import { AccountsState } from "../reducers/accounts-reducer";
import { OperationsState } from "../reducers/operations-reducer";
import { WalletsState } from "../reducers/wallet-reducer";
import { MainState } from "./domain";

export interface AppAction extends Action {
    payload?: any;
};

export interface MainState {
    success: boolean,
    pending: boolean,
    error: boolean
};

export interface StateProps {
    accountsReducers: {
        accountsState: AccountsState,
        deleteState: MainState,
        saveState: MainState
    },
    operationsReducers: {
        opetationsState: OperationsState,
        deleteState: MainState,
        saveState: MainState
    },
    walletsReducers: {
        walletsState: WalletsState,
        deleteState: MainState,
        saveState: MainState
    },
};
