import * as actions from "../actions/wallets-action";
import { put, call, takeLatest, take } from "redux-saga/effects";
import { getWallets, saveWallet, deleteWallet } from "../api/wallets";
import { IWallet } from "../types/domain";
import { getOperationsStart } from "../actions/operations-action";
import { AppAction } from "../types/redux";

export function* defaultSaga() {
    yield takeLatest(actions.getWalletsType.GET_WALLETS_START, getWalletsSaga);
}

export function* getWalletsSaga() {
    try {
        const operations: IWallet[] = yield call(getWallets);
        yield put(actions.getWalletsSuccess(operations));
    }
    catch (e) {
        yield put(actions.getWalletsFailed(e))
    }
}

export function* saveWalletSaga() {
    while (true) {
        try {
            const action: AppAction = yield take(actions.saveWalletType.SAVE_WALLET_START);
            yield call(saveWallet, action.payload);
            yield put(actions.saveWalletSuccess());
            yield put(actions.getWalletsStart());
        }
        catch (e) {
            yield put(actions.saveWalletFailed(e));
        }
    }
}

export function* deleteWalletSaga() {
    while (true) {
        try {
            const action: AppAction = yield take(actions.deleteWalletType.DELETE_WALLET_START);
            yield call(deleteWallet, action.payload);
            yield put(actions.deleteWalletSuccess());
            yield put(actions.getWalletsStart());
            yield put(getOperationsStart());
        }
        catch (e) {
            yield put(actions.deleteWalletFailed(e));
        }
    }
}
