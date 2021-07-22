import { IAccount } from "../types/domain";
import { AppAction, MainState } from "../types/redux";

const initialState: MainState = {
    success: false,
    pending: false,
    error: false
};

export interface AccountsState extends MainState {    
    accounts: Array<IAccount> | null;
}

const initialAccountsState: AccountsState = {
    accounts: null,
    success: false,
    pending: false,
    error: false
};

export const getAccountsReducer = (state = initialAccountsState, action: AppAction) => {
    switch (action.type) {
        case "GET_ACCOUNTS_START":
            return {
                ...state,
                success: false,
                pending: true,
                error: false
            };
        case "GET_ACCOUNTS_SUCCESS":
            return {
                ...state,
                success: true,
                pending: false,
                error: false,
                accounts: action.payload
            };
        case "GET_ACCOUNTS_FAILED":
            return {
                ...state,
                success: false,
                pending: false,
                error: true
            };
        default:
            return state;
    }
}

export const saveAccountReducer = (state = initialState, action: AppAction) => {
    switch (action.type) {
        case "SAVE_ACCOUNT_START":
            return {
                ...state,
                success: false,
                pending: true,
                error: false

            };
        case "SAVE_ACCOUNT_SUCCESS":
            return {
                ...state,
                success: true,
                pending: false,
                error: false,
            }
        case "SAVE_ACCOUNT_FAILED":
            return {
                ...state,
                success: false,
                pending: false,
                error: true
            }
        default:
            return state;
    }
}

export const deleteAccountReducer = (state = initialState, action: AppAction) => {
    switch (action.type) {
        case "DELETE_ACCOUNT_START":
            return {
                ...state,
                success: false,
                pending: true,
                error: false

            };
        case "DELETE_ACCOUNT_SUCCESS":
            return {
                ...state,
                success: true,
                pending: false,
                error: false,
            }
        case "DELETE_ACCOUNT_FAILED":
            return {
                ...state,
                success: false,
                pending: false,
                error: true
            }
        default:
            return state;
    }
}
