import { AccountType } from "../components/account-add-form/types";

export interface IWallet {
    id: number
    name: string,
    amount: number
}

export interface IWalletItem {
    name: string,
    amount: number
}

export interface IOperation {
    id: number,
    type: OperationType,
    amount: number,
    walletId: number,
    accountId: number,
    executed: Date
}

export interface IOperationItem {
    type: OperationType,
    amount: number,
    walletId: number,
    accountId: number,
}

export interface IAccount {
    id: number,
    type: AccountType,
    name: string,
    amount: number,
}

export interface IAccountItem {
    type: AccountType,
    name: string,
    amount: number,
}
