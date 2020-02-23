import React, { useState } from 'react';
import './style.css';
import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import EcoIcon from '@material-ui/icons/Eco';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function Session() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSession = event => {
    event.preventDefault();
    console.log(email, password);
  } 

  return (
    <div className="session">
      <div className="auth">
        <div className="title">
          <EcoIcon fontSize="large" />
          <h1>Login</h1>
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
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              className="input-field"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </ThemeProvider>
          <div className="action">
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
};