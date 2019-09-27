import { SWITCH_LANGUAGE } from '../actions/actionTypes';

export const initialState = {
    language: 'en'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_LANGUAGE: 
        {
            return (
                {...state, language : action.payload }
            )
        }
        default:
            return state;
    }

}