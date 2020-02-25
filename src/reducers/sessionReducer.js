const INITIAL_STATE = {
  email: '',
  password: '',
  username: ''
}

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SESSION_LOGIN':
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password
      }
      case 'SESSION_SIGN_IN':
        return {
          ...state,
          email: action.payload.email,
          password: action.payload.password,
          username: action.payload.username,
        }
    default:
      return state;
  }
}

export default sessionReducer;