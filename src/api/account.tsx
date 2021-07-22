import { IAccount, IAccountItem } from "../types/domain";
import { createInstance } from "./instance";

const instance = () => createInstance("accounts");

export const getAccounts = () =>
  instance()
    .get<IAccount[]>("")
    .then((res) => res.data);

export const getAccount = (id: number) =>
  instance()
    .get<IAccount>(`/${id}`)
    .then((res) => res.data);

export const saveAccount = (form: IAccount) =>
  instance()
    .post<IAccountItem>("", form)
    .then((res) => res.data);

export const editAccount = (data: { id: number; form: IAccount }) =>
  instance()
    .put<IAccount>(`/${data.id}`, data.form)
    .then((res) => res.data);

export const deleteAccount = (id: number) =>
  instance()
    .delete(`/${id}`)
    .then((res) => res.status);
