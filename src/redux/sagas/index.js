import { takeEvery, put, delay } from 'redux-saga/effects'
import { LOGIN_ASYNC, SIGNUP_ASYNC } from '../actions/actionTypes'

const logInSaga = function* (action) {
     //const { payload } = action;
     const status = 'success'
     yield delay(5000)
     yield put({type: LOGIN_ASYNC, status: status});
}

const signUpSaga = function* (action) {
    //const { payload } = action;
    const status = 'success'
    yield delay(5000)
    yield put({type: SIGNUP_ASYNC, status: status});
}
export function* watchLogIn() {
    yield takeEvery('LOGIN', logInSaga);
}

export function* watchSignUp() {
    yield takeEvery('SIGNUP', signUpSaga);
}