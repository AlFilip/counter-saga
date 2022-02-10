import {call, cancel, fork, ForkEffect, put, take, takeEvery} from "redux-saga/effects";
import {Task} from "redux-saga";

import {
    DecrementByValueAsyncActionType,
    IncrementByValueAsyncActionType,
    operationLoading,
    operationSuccess
} from "./actions";
import {makeOperation} from "../api";

function* changeValueHandle(value: number) {
    try {
        yield put(operationLoading());
        yield call(makeOperation);
        yield put(operationSuccess(value));
    } catch (e) {
        console.log(e)
    }
}

function* checkCancelAction(task: Task) {
    yield take("CANCEL_OPERATION")
    yield cancel(task)
    yield put(operationSuccess(0));
}

function* increment(): Generator<ForkEffect, void, Task> {
    const task = yield fork(changeValueHandle, 1)
    yield fork(checkCancelAction, task)
}

function* decrement(): Generator<ForkEffect, void, Task> {
    const task = yield fork(changeValueHandle, -1)
    yield fork(checkCancelAction, task)
}

function* incrementByValue({payload}: IncrementByValueAsyncActionType): Generator<ForkEffect, void, Task> {
    const task = yield fork(changeValueHandle, payload)
    yield fork(checkCancelAction, task)
}

function* decrementByValue({payload}: DecrementByValueAsyncActionType): Generator<ForkEffect, void, Task> {
    const task = yield fork(changeValueHandle, -payload)
    yield fork(checkCancelAction, task)
}

export function* rootSaga(): Generator {
    yield takeEvery("INCREMENT_ASYNC", increment);
    yield takeEvery("DECREMENT_ASYNC", decrement);
    yield takeEvery("INCREMENT_BY_VALUE_ASYNC", incrementByValue);
    yield takeEvery("DECREMENT_BY_VALUE_ASYNC", decrementByValue);
}
