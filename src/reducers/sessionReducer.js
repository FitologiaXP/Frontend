const INITIAL_STATE = {
  email: '',
  password: ''
}

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SESSION_LOGIN':
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password
      }
    default:
      return state;
  }
}

export default sessionReducer;