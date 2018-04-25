export function currentuserReducer(state = [], action) {
  switch(action.type) {
    case 'LOGIN_USER' :
      return [...action.payload]
    default:
      return state
  }
}
