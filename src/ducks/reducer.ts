import {ReducerActionType} from "./actions";

const initialState = {
    value: 0,
    isLoading: false
};

type ReducerStateType = typeof initialState;

export const reducer = (state = initialState, action: ReducerActionType): ReducerStateType => {
    switch (action.type) {
        case "OPERATION_LOADING":
            return {
                ...state,
                isLoading: true
            };
        case "OPERATION_SUCCESS":
            return {
                ...state,
                value: state.value + action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};
