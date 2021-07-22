import * as actions from "../actions/accounts-action";
import { put, call, takeLatest, take } from "redux-saga/effects";
import { getAccounts, saveAccount, deleteAccount } from "../api/account";
import { IAccount } from "../types/domain";
import { AppAction } from "../types/redux";
import { getOperationsStart } from "../actions/operations-action";

export function* defaultAccountsSaga() {
    yield takeLatest(actions.getAccountsType.GET_ACCOUNTS_START, getAccountsSaga);
}

export function* getAccountsSaga() {
    try {        
        const accounts: IAccount[] = yield call(getAccounts);
        yield put(actions.getAccountsSuccess(accounts));
    }
    catch (e) {
        yield put(actions.getAccountsFailed(e))
    }
}

export function* saveAccountSaga() {
    while (true) {
        try {
            const action: AppAction = yield take(actions.saveAccountType.SAVE_ACCOUNT_START);
            yield call(saveAccount, action.payload);
            yield put(actions.saveAccountSuccess());
            yield put(actions.getAccountsStart());
        }
        catch (e) {
            yield put(actions.saveAccountFailed(e));
        }
    }
}

export function* deleteAccountSaga() {
    while (true) {
        try {
            const action: AppAction = yield take(actions.deleteAccountType.DELETE_ACCOUNT_START);
            yield call(deleteAccount, action.payload);
            yield put(actions.deleteAccountSuccess());
            yield put(actions.getAccountsStart());
            yield put(getOperationsStart());
        }
        catch (e) {
            yield put(actions.deleteAccountFailed(e));
        }
    }
}
