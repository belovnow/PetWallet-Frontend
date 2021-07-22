import { defaultAccountsSaga, saveAccountSaga, deleteAccountSaga } from "./sagas/accounts-saga";
import { saveWalletSaga, deleteWalletSaga, defaultSaga } from "./sagas/wallets-saga";
import { defaultOperationsSaga, saveOperationSaga, deleteOperationSaga } from "./sagas/operations-saga";

export const rootSaga = [
    defaultSaga,
    saveWalletSaga,
    deleteWalletSaga,
    defaultAccountsSaga,
    saveAccountSaga,
    deleteAccountSaga,
    defaultOperationsSaga,
    saveOperationSaga,
    deleteOperationSaga
];