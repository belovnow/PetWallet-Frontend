import { IOperation } from "../types/domain";
import { AppAction, MainState } from "../types/redux";

const initialState: MainState = {
    success: false,
    pending: false,
    error: false
};

export interface OperationsState extends MainState {
    operations: Array<IOperation> | null;    
}

const initialOperationsState: OperationsState = {
    operations: null,
    success: false,
    pending: false,
    error: false
};

export const getOperationsReducer = (state = initialOperationsState, action: AppAction) => {
    switch (action.type) {
        case "GET_OPERATIONS_START":
            return {
                ...state,
                success: false,
                pending: true,
                error: false
            };
        case "GET_OPERATIONS_SUCCESS":            
            return {
                ...state,
                success: true,
                pending: false,
                error: false,
                operations: action.payload
            };
        case "GET_OPERATIONS_FAILED":
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

export const saveOperationReducer = (state = initialState, action: AppAction) => {
    switch (action.type) {
        case "SAVE_OPERATION_START":
            return {
                ...state,
                success: false,
                pending: true,
                error: false

            };
        case "SAVE_OPERATION_SUCCESS":
            return {
                ...state,
                success: true,
                pending: false,
                error: false,
            }
        case "SAVE_OPERATION_FAILED":
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

export const deleteOperationReducer = (state = initialState, action: AppAction) => {
    switch (action.type) {
        case "DELETE_OPERATION_START":
            return {
                ...state,
                success: false,
                pending: true,
                error: false
            };
        case "DELETE_OPERATION_SUCCESS":
            return {
                ...state,
                success: true,
                pending: false,
                error: false,
            }
        case "DELETE_OPERATION_FAILED":
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
