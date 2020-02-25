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
import { LoginAction } from '../../actions/SessionAction';
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

  const handleSession = async event => {
    event.preventDefault();
    const {email, password} = props.user;
    const user = await axios.get(`/user/login?email=${email}&password=${password}`);
    console.log(user)
    if(user.data.error){
      setError(user.data.error);
      setTimeout( () => {
        setError('');
      }, 5000);
      return 
    }
    props.history.push('/')
  } 

  return (
    <div className="session">
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
        <form onSubmit={handleSession}>
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
                onChange={event => props.LoginAction({
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
              <span>
                <button type="submit">Cadastrar</button>
                <p>Já tem conta? <a href="/login">Login</a></p>
              </span>
            ) 
            :
            (
              <span>
                <button type="submit">Entrar</button>
                <p>Não possui conta? <a href="/login">Cadastre-se</a></p>
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
  bindActionCreators({ LoginAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Session);

