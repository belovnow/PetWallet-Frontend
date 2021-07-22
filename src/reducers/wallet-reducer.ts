import { IWallet } from "../types/domain";
import { AppAction, MainState } from "../types/redux";

const initialState: MainState = {
    success: false,
    pending: false,
    error: false
};

export interface WalletsState extends MainState {
    wallets: Array<IWallet> | null;    
}

const initialWalletsState: WalletsState = {
    wallets: null,
    success: false,
    pending: false,
    error: false
};

export const getWalletsReducer = (state = initialWalletsState, action: AppAction) => {
    switch (action.type) {
        case "GET_WALLETS_START":
            return {
                ...state,
                success: false,
                pending: true,
                error: false
            };
        case "GET_WALLETS_SUCCESS":
            return {
                ...state,
                success: true,
                pending: false,
                error: false,
                wallets: action.payload
            };
        case "GET_WALLETS_FAILED":
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

export const saveWalletReducer = (state = initialState, action: AppAction) => {
    switch (action.type) {
        case "SAVE_WALLET_START":
            return {
                ...state,
                success: false,
                pending: true,
                error: false

            };
        case "SAVE_WALLET_SUCCESS":
            return {
                ...state,
                success: true,
                pending: false,
                error: false,
            }
        case "SAVE_WALLET_FAILED":
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

export const deleteWalletReducer = (state = initialState, action: AppAction) => {
    switch (action.type) {
        case "DELETE_WALLET_START":
            return {
                ...state,
                success: false,
                pending: true,
                error: false

            };
        case "DELETE_WALLET_SUCCESS":
            return {
                ...state,
                success: true,
                pending: false,
                error: false,
            }
        case "DELETE_WALLET_FAILED":
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
