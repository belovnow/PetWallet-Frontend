import { IAccount, IAccountItem } from "../types/domain";

export const getAccountsType = {
    GET_ACCOUNTS_START: "GET_ACCOUNTS_START",
    GET_ACCOUNTS_SUCCESS: "GET_ACCOUNTS_SUCCESS",
    GET_ACCOUNTS_FAILED: "GET_ACCOUNTS_FAILED"
};

export const getAccountsStart = () => {
    return { type: getAccountsType.GET_ACCOUNTS_START }
};

export const getAccountsSuccess = (accounts: IAccount[]) => {
    return {
        type: getAccountsType.GET_ACCOUNTS_SUCCESS,
        payload: accounts
    }
};

export const getAccountsFailed = (error: Event) => {
    return {
        type: getAccountsType.GET_ACCOUNTS_FAILED,
        payload: error
    }
};

export const saveAccountType = {
    SAVE_ACCOUNT_START: "SAVE_ACCOUNT_START",
    SAVE_ACCOUNT_SUCCESS: "SAVE_ACCOUNT_SUCCESS",
    SAVE_ACCOUNT_FAILED: "SAVE_ACCOUNT_FAILED"
};

export const saveAccountStart = (account: IAccountItem) => {
    return {
        type: saveAccountType.SAVE_ACCOUNT_START,
        payload: account
    }
};

export const saveAccountSuccess = () => {
    return {
        type: saveAccountType.SAVE_ACCOUNT_SUCCESS        
    }
};

export const saveAccountFailed = (error: Event) => {
    return {
        type: saveAccountType.SAVE_ACCOUNT_FAILED,
        payload: error
    }
};

export const deleteAccountType = {
    DELETE_ACCOUNT_START: "DELETE_ACCOUNT_START",
    DELETE_ACCOUNT_SUCCESS: "DELETE_ACCOUNT_SUCCESS",
    DELETE_ACCOUNT_FAILED: "DELETE_ACCOUNT_FAILED"
};

export const deleteAccountStart = (id: number) => {
    return {
        type: deleteAccountType.DELETE_ACCOUNT_START,
        payload: id
    }
};

export const deleteAccountSuccess = () => {
    return {
        type: deleteAccountType.DELETE_ACCOUNT_SUCCESS        
    }
};

export const deleteAccountFailed = (error: Event) => {
    return {
        type: deleteAccountType.DELETE_ACCOUNT_FAILED,
        payload: error
    }
};
