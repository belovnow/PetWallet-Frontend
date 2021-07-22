import * as actions from "../actions/operations-action";
import { put, call, takeLatest, take } from "redux-saga/effects";
import { getOperations, saveOperation, deleteOperation } from "../api/operations";
import { IOperation } from "../types/domain";
import { getWalletsStart } from "../actions/wallets-action";
import { getAccountsStart } from "../actions/accounts-action";
import { AppAction } from "../types/redux";

export function* defaultOperationsSaga() {
    yield takeLatest(actions.getOperationsType.GET_OPERATIONS_START, getOperationsSaga);
}

export function* getOperationsSaga() {
    try {
        const operations: IOperation[] = yield call(getOperations);
        yield put(actions.getOperationsSuccess(operations));
    }
    catch (e) {
        yield put(actions.getOperationsFailed(e))
    }
}

export function* saveOperationSaga() {
    while (true) {
        try {
            const action: AppAction = yield take(actions.saveOperationType.SAVE_OPERATION_START);
            yield call(saveOperation, action.payload);
            yield put(actions.saveOperationSuccess());
            yield put(actions.getOperationsStart());
            yield put(getWalletsStart());
            yield put(getAccountsStart()); 
        }
        catch (e) {
            yield put(actions.saveOperationFailed(e));
        }
    }
}

export function* deleteOperationSaga() {
    while (true) {
        try {
            const action: AppAction = yield take(actions.deleteOperationType.DELETE_OPERATION_START);
            yield call(deleteOperation, action.payload);
            yield put(actions.deleteOperationSuccess());
            yield put(actions.getOperationsStart());
            yield put(getWalletsStart());
            yield put(getAccountsStart());
        }
        catch (e) {
            yield put(actions.deleteOperationFailed(e));
        }
    }
}
