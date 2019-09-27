import { SWITCH_LANGUAGE } from '../actions/actionTypes'
import switchLanguageReducer, { initialState } from './switchLanguageReducer'

describe('Switch language reducer', ()=> {
    it('should return default state', () => {
        const newState = switchLanguageReducer(undefined, {});
        expect(newState).toEqual(initialState);
    })

    it('should return correct state if SWITCH_LANGUAGE action received', () => {
        const referenceState = {
            language: 'ru'
        } 
        const action = {
            type: SWITCH_LANGUAGE,
            payload: 'ru'
        }
        const newState = switchLanguageReducer(undefined, action);
        expect(newState).toEqual(referenceState);
    })
})