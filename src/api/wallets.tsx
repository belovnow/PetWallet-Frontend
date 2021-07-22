import { IWallet, IWalletItem } from "../types/domain";
import { createInstance } from "./instance";

const instance = () => createInstance("wallets");

export const getWallets = () =>
  instance()
    .get<IWallet[]>("")
    .then((res) => res.data);

export const getWallet = (id: number) =>
  instance()
    .get<IWallet>(`/${id}`)
    .then((res) => res.data);

export const saveWallet = (form: IWalletItem) =>
  instance()
    .post<IWalletItem>("", form)
    .then((res) => res.data);

export const editWallet = (data: { id: number; form: IWallet }) =>
  instance()
    .put<IWallet>(`/${data.id}`, data.form)
    .then((res) => res.data);

export const deleteWallet = (id: number) =>
  instance()
    .delete(`/${id}`)
    .then((res) => res.status);
