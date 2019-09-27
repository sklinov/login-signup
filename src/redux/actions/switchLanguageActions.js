import { SWITCH_LANGUAGE } from './actionTypes'

export function switchLanguage(payload) {
    return {
      type: SWITCH_LANGUAGE,
      payload
    };
}