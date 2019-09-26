import { LOGIN } from './actionTypes'

export function login(payload) {
    return {
      type: LOGIN,
      payload
    };
  }