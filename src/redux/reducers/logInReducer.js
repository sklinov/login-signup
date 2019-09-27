import { LOGIN_ASYNC } from '../actions/actionTypes';

const initialState = {
    status: undefined
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ASYNC: 
        {
            return (
                {...state, status : action.status }
            )
        }
        default:
            return state
    }
}