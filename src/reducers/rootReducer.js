import { combineReducers } from 'redux'
import { currentuserReducer} from './currentuserReducer'

const rootReducer = combineReducers({
  currentUser: currentuserReducer
})

export default rootReducer;
