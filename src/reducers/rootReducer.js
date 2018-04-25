import { combineReducers } from 'redux'
import { currentuserReducer} from './currentuserReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  currentUser: currentuserReducer,
  form: formReducer
})

export default rootReducer;
