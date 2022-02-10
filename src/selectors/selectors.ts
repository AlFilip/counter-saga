import {useSelector} from "react-redux";
import {AppStateType} from "../store";

export function useAppSelector<T>(selector: (state: AppStateType) => T): T {
    return useSelector(selector)
}

export const selectValue = (state: AppStateType) => state.value