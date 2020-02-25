import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import EcoIcon from '@material-ui/icons/Eco';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: 'linear-gradient(120deg, #09523B 10%, #11A558 100%)', 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          { window.location.pathname !== "/login" && window.location.pathname !== "/cadastrar" ?
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> 
            : ""
          }
          <EcoIcon />
          <Typography variant="h6" className={classes.title}>
            FitologiaAdmin
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
