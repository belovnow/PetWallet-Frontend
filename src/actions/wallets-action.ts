import { IWallet, IWalletItem } from "../types/domain";

export const getWalletsType = {
    GET_WALLETS_START: "GET_WALLETS_START",
    GET_WALLETS_SUCCESS: "GET_WALLETS_SUCCESS",
    GET_WALLETS_FAILED: "GET_WALLETS_FAILED"
};

export const getWalletsStart = () => {
    return { type: getWalletsType.GET_WALLETS_START }
};

export const getWalletsSuccess = (wallets: IWallet[]) => {
    return {
        type: getWalletsType.GET_WALLETS_SUCCESS,
        payload: wallets
    }
};

export const getWalletsFailed = (error: Event) => {
    return {
        type: getWalletsType.GET_WALLETS_FAILED,
        payload: error
    }
};

export const saveWalletType = {
    SAVE_WALLET_START: "SAVE_WALLET_START",
    SAVE_WALLET_SUCCESS: "SAVE_WALLET_SUCCESS",
    SAVE_WALLET_FAILED: "SAVE_WALLET_FAILED"
};

export const saveWalletStart = (wallet: IWalletItem) => {
    return {
        type: saveWalletType.SAVE_WALLET_START,
        payload: wallet
    }
};

export const saveWalletSuccess = () => {
    return {
        type: saveWalletType.SAVE_WALLET_SUCCESS        
    }
};

export const saveWalletFailed = (error: Event) => {
    return {
        type: saveWalletType.SAVE_WALLET_FAILED,
        payload: error
    }
};

export const deleteWalletType = {
    DELETE_WALLET_START: "DELETE_WALLET_START",
    DELETE_WALLET_SUCCESS: "DELETE_WALLET_SUCCESS",
    DELETE_WALLET_FAILED: "DELETE_WALLET_FAILED"
};

export const deleteWalletStart = (id: number) => {
    return {
        type: deleteWalletType.DELETE_WALLET_START,
        payload: id
    }
};

export const deleteWalletSuccess = () => {
    return {
        type: deleteWalletType.DELETE_WALLET_SUCCESS        
    }
};

export const deleteWalletFailed = (error: Event) => {
    return {
        type: deleteWalletType.DELETE_WALLET_FAILED,
        payload: error
    }
};
