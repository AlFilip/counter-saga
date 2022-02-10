export const incrementAsync = () => ({
    type: "INCREMENT_ASYNC"
} as const);

export const incrementByValueAsync = (value: number) => ({
    type: "INCREMENT_BY_VALUE_ASYNC",
    payload: value
} as const);

export const decrementAsync = () => ({
    type: "DECREMENT_ASYNC"
} as const);

export const decrementByValueAsync = (value: number) => ({
    type: "DECREMENT_BY_VALUE_ASYNC",
    payload: value
} as const);

export const operationLoading = () => ({
    type: "OPERATION_LOADING"
} as const);

export const operationSuccess = (value: number) => ({
    type: "OPERATION_SUCCESS",
    payload: value
} as const);

export const cancelOperation = () => ({
    type: "CANCEL_OPERATION"
} as const);

export type OperationSuccessActionType = ReturnType<typeof operationSuccess>;
export type CancelOperationActionType = ReturnType<typeof cancelOperation>;

export type ReducerActionType =
    OperationLoadingActionType
    | OperationSuccessActionType

export type IncrementAsyncActionType = ReturnType<typeof incrementAsync>;
export type IncrementByValueAsyncActionType = ReturnType<typeof incrementByValueAsync>;
export type DecrementByValueAsyncActionType = ReturnType<typeof decrementByValueAsync>;
export type OperationLoadingActionType = ReturnType<typeof operationLoading>;

export type SagasActionType =
    IncrementAsyncActionType
    | IncrementByValueAsyncActionType
    | DecrementByValueAsyncActionType
    | CancelOperationActionType;
