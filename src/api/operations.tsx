import { IOperation, IOperationItem } from "../types/domain";
import { createInstance } from "./instance";

const instance = () => createInstance("operations");

export const getOperations = () =>
  instance()
    .get<IOperation[]>("")
    .then((res) => res.data);

export const getOperation = (id: number) =>
  instance()
    .get<IOperation>(`/${id}`)
    .then((res) => res.data);

export const saveOperation = (form: IOperationItem) =>
  instance()
    .post<IOperationItem>("", form)
    .then((res) => res.data);

export const editOperation = (data: { id: number; form: IOperation }) =>
  instance()
    .put<IOperation>(`/${data.id}`, data.form)
    .then((res) => res.data);

export const deleteOperation = (id: number) =>
  instance()
    .delete(`/${id}`)
    .then((res) => res.status);
