import React, {useState} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";

import "./styles.css";
import {AppStateType} from "./store";
import {Value} from "./components/Value";
import {Button} from "./components/Button";
import {
    cancelOperation,
    decrementAsync,
    decrementByValueAsync,
    incrementAsync,
    incrementByValueAsync
} from "./ducks/actions";
import {Loader} from "./components/Loader/Loader";

const mapStateToProps = (state: AppStateType) => ({
    stateValue: state.value,
    isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    increment: () => dispatch(incrementAsync()),
    decrement: () => dispatch(decrementAsync()),
    incrementByValue: (value: number) => dispatch(incrementByValueAsync(value)),
    decrementByValue: (value: number) => dispatch(decrementByValueAsync(value)),
    cancelOperation: () => dispatch(cancelOperation())
});

type AppPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

function App({
                 increment,
                 decrement,
                 incrementByValue,
                 decrementByValue,
                 cancelOperation,
                 stateValue,
                 isLoading,
             }: AppPropsType) {
    const [value, setValue] = useState(stateValue);

    return (
        <div className="App">
            <Value/>
            <div style={{marginBottom: 16}}>
                <Button text="Увеличить" onClick={increment} disabled={isLoading}/>
                <Button text="Уменьшить" onClick={decrement} disabled={isLoading}/>
            </div>
            <div>
                <input
                    type="number"
                    placeholder="изменить на значение"
                    value={value}
                    onChange={({target}) => {
                        setValue(+target.value);
                    }}
                />
                <div>
                    <Button
                        text="Увеличить на значение"
                        onClick={() => {
                            incrementByValue(value);
                        }}
                        disabled={isLoading}
                    />
                    <Button
                        text="Уменьшить на значение"
                        onClick={() => {
                            decrementByValue(value);
                        }}
                        disabled={isLoading}
                    />
                </div>
                <Loader isActive={isLoading} callback={cancelOperation}/>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
