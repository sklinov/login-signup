import { combineReducers} from 'redux';
import language from './switchLanguageReducer'
import login from './logInReducer'
import signup from './signUpReducer'

export default combineReducers({
  language,
  login,
  signup
});