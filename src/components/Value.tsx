import React from "react";
import {selectValue, useAppSelector} from "../selectors/selectors";

export const Value = () => {
    const value = useAppSelector(selectValue);
    return (
        <div>Значение: {value}</div>
    );
};
