
export const LoginAction = value => ({
  type: 'SESSION_LOGIN',
  payload: value
});

export const SignInAction = value => ({
  type: 'SESSION_SIGN_IN',
  payload: value
});

export const ClearAction = () => ({
  type: 'SESSION_CLEAR'
});