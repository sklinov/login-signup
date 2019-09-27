import { SIGNUP } from './actionTypes'

export function signup(payload) {
    return {
      type: SIGNUP,
      payload
    };
}