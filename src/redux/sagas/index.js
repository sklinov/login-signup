import { takeEvery, put, delay } from 'redux-saga/effects'
import { LOGIN_ASYNC, SIGNUP_ASYNC } from '../actions/actionTypes'

const logInSaga = function* (action) {
     console.log('Values received for login:', action.payload)
     const status = 'success'
     yield delay(3000)
     yield put({type: LOGIN_ASYNC, status: status})
}

const signUpSaga = function* (action) {
    console.log('Values received for signup:', action.payload)
    const status = 'success'
    yield delay(3000)
    yield put({type: SIGNUP_ASYNC, status: status})
}
export function* watchLogIn() {
    yield takeEvery('LOGIN', logInSaga)
}

export function* watchSignUp() {
    yield takeEvery('SIGNUP', signUpSaga)
}