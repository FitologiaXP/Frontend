import React from 'react';
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

  return (
    <div className="session">
      <div className="auth">
        <div className="title">
          <EcoIcon fontSize="large" />
          <h1>Login</h1>
        </div>
        <form action="">
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
              value=""
              // onChange={handleChange('name')}
            />
            <TextField
              className="input-field"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              // onChange={handleChange('name')}
            />
          </ThemeProvider>
          <div className="action">
            <button>Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
};