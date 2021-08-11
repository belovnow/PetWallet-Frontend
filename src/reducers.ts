import { combineReducers } from "redux";
import { getWalletsReducer, saveWalletReducer, deleteWalletReducer } from "./reducers/wallet-reducer";
import { getOperationsReducer, saveOperationReducer, deleteOperationReducer } from "./reducers/operations-reducer";
import { getAccountsReducer, saveAccountReducer, deleteAccountReducer } from "./reducers/accounts-reducer";

export const rootReducer = combineReducers({
    walletsReducers: combineReducers({
        walletsState: getWalletsReducer,
        saveState: saveWalletReducer,
        deleteState: deleteWalletReducer
    }),
    operationsReducers: combineReducers({
        operationsState: getOperationsReducer,
        saveState: saveOperationReducer,
        deleteState: deleteOperationReducer
    }),
    accountsReducers: combineReducers({
        accountsState: getAccountsReducer,
        saveState: saveAccountReducer,
        deleteState: deleteAccountReducer
    }),
});
