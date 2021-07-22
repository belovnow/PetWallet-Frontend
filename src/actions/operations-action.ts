import { IOperation, IOperationItem } from "../types/domain";

export const getOperationsType = {
    GET_OPERATIONS_START: "GET_OPERATIONS_START",
    GET_OPERATIONS_SUCCESS: "GET_OPERATIONS_SUCCESS",
    GET_OPERATIONS_FAILED: "GET_OPERATIONS_FAILED"
};

export const getOperationsStart = () => {
    return { type: getOperationsType.GET_OPERATIONS_START }
};

export const getOperationsSuccess = (operations: IOperation[]) => {
    return {
        type: getOperationsType.GET_OPERATIONS_SUCCESS,
        payload: operations
    }
};

export const getOperationsFailed = (error: Event) => {
    return {
        type: getOperationsType.GET_OPERATIONS_FAILED,
        payload: error
    }
};

export const saveOperationType = {
    SAVE_OPERATION_START: "SAVE_OPERATION_START",
    SAVE_OPERATION_SUCCESS: "SAVE_OPERATION_SUCCESS",
    SAVE_OPERATION_FAILED: "SAVE_OPERATION_FAILED"
};

export const saveOperationStart = (operation: IOperationItem) => {
    return {
        type: saveOperationType.SAVE_OPERATION_START,
        payload: operation
    }
};

export const saveOperationSuccess = () => {
    return {
        type: saveOperationType.SAVE_OPERATION_SUCCESS
    }
};

export const saveOperationFailed = (error: Event) => {
    return {
        type: saveOperationType.SAVE_OPERATION_FAILED,
        payload: error
    }
};

export const deleteOperationType = {
    DELETE_OPERATION_START: "DELETE_OPERATION_START",
    DELETE_OPERATION_SUCCESS: "DELETE_OPERATION_SUCCESS",
    DELETE_OPERATION_FAILED: "DELETE_OPERATION_FAILED"
};

export const deleteOperationStart = (id: number) => {
    return {
        type: deleteOperationType.DELETE_OPERATION_START,
        payload: id
    }
};

export const deleteOperationSuccess = () => {
    return {
        type: deleteOperationType.DELETE_OPERATION_SUCCESS
    }
};

export const deleteOperationFailed = (error: Event) => {
    return {
        type: deleteOperationType.DELETE_OPERATION_FAILED,
        payload: error
    }
};
