import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Malenia from '../components/Image/malenia.png'

import Auth from '../utils/auth';
import { Button, Card, Container, Grid, TextField } from '@material-ui/core';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div
    style={{
      backgroundImage: `url(${Malenia})`,
      backgroundSize: 'cover',
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: "-1"
    }}
    >
    <Container>
      <Grid
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
        <Card>
          <h4 className="card-header">Login</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <TextField
                placeholder="dog@turtle.com"
                name="email"
                type="email"
                id="email"
                label="Email Address"
                fullWidth
                style={{ margin: 8 }}
                variant="filled" 
                value={formState.email}
                onChange={handleChange}
              />
              <TextField
                placeholder="******"
                name="password"
                type="password"
                id="password"
                label="Password"
                fullWidth
                style={{ margin: 8 }}
                variant="filled" 
                value={formState.password}
                onChange={handleChange}
              />
              <Button variant="contained" size='large' color="default" style={{ margin: 8 }} type="submit">
                Submit
              </Button>
            </form>
            <Button variant="contained" size='large' color="primary" style={{ margin: 8 }} href="/signup">
                Sign-Up
              </Button>
            {error && <div>Login failed</div>}
          </div>
        </Card>
      </Grid>
    </Container>
    </div>
  );
};

export default Login;
