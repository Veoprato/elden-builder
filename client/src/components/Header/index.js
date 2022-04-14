import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));


const Header = () => {
  const classes = useStyles();

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
  <AppBar position="static"
  style={{
    backgroundColor: "transparent",
    boxShadow: "none"
  }}>
    <Toolbar>
      {Auth.loggedIn() ? (
            <>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (<></>)}
      {/* <Button size='large' color="inherit">Login</Button> */}
    </Toolbar>
  </AppBar>
  );
};

export default Header;
