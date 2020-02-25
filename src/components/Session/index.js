import React, { useState } from 'react';
import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import EcoIcon from '@material-ui/icons/Eco';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginAction, SignInAction, ClearAction } from '../../actions/SessionAction';
import Alert from '@material-ui/lab/Alert';

import './style.css';
import axios from '../../services/axios';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function Session(props) {

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleLogin = async event => {
    event.preventDefault();
    const {email, password} = props.user;
    const user = await axios.get(`/user/login?email=${email}&password=${password}`);
    if(user.data.error){
      setError(user.data.error);
      setTimeout( () => {
        setError('');
      }, 5000);
      return 
    }
    props.history.push('/');
  } 

  const handleSignup = async event => {
    event.preventDefault();
    const {email, password, username} = props.user;
    const user = await axios.post('/user', {
      email,
      password,
      username 
    });
    if(user.data.error){
      setError(user.data.error);
      setTimeout( () => {
        setError('');
      }, 5000);
      return 
    }


    setSuccess('Usuário cadastrado com sucesso!');
    setTimeout( () => {
      setSuccess('');
    }, 5000);

    props.ClearAction();
    props.history.push('/login');
  }

  return (
    <div className="session">
      {success 
        ? (
          <div className="success">
            <Alert severity="success">{success}</Alert>
          </div> 
        )
        : ""
      }
      {error 
        ? (
          <div className="error">
            <Alert severity="error">{error}</Alert>
          </div> 
        )
        : ""
      }
      <div className="auth">
        <div className="title">
          <EcoIcon fontSize="large" />
          <h1>{props.name}</h1>
        </div>
        <form onSubmit={props.name === "Cadastrar" ? handleSignup : handleLogin}>
          <ThemeProvider theme={theme}>
            <TextField
              autoFocus
              color="primary"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              value={props.user.email}
              onChange={event => props.LoginAction({
                email: event.target.value,
                password: props.user.password,
                username: props.user.username
              })}
            />
            { props.name === 'Cadastrar' ? 
              <TextField
                color="primary"
                label="Username"
                type="text"
                name="username"
                margin="normal"
                variant="outlined"
                value={props.user.username}
                onChange={event => props.SignInAction({
                  email: props.user.email,
                  password: props.user.password,
                  username: event.target.value
                })}
              /> : ""
            }
            <TextField
              className="input-field"
              label="Senha"
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              value={props.user.password}
              onChange={event => props.LoginAction({
                email: props.user.email,
                password: event.target.value,
                username: props.user.username
              })}
            />
          </ThemeProvider>
          <div className={ props.name === "Cadastrar" ? "action signup" : "action signin"}>
          { props.name === "Cadastrar" ?
            (
              <span className="action-wrapper">
                <button type="submit">Cadastrar</button>
                <p>Já tem conta? <a href="/login">Login</a></p>
              </span>
            ) 
            :
            (
              <span className="action-wrapper">
                <button type="submit">Entrar</button>
                <p>Não possui conta? <a href="/cadastrar">Cadastre-se</a></p>
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  )
};

const mapStateToProps = store => ({
  user: store.sessionState
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ LoginAction, SignInAction, ClearAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Session);

