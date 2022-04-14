import React from 'react';
import Maidenless from '../components/Image/no-maidens.jpg';
import { Grid } from '@material-ui/core';

const NoMatch = () => {
  return (
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
      <div
      style={{ justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
        <p
        style={{ fontSize: '5rem', color: '#d9b969', fontFamily: 'Lora'}}>404: Maidenless</p>
        <img src={Maidenless} alt='maidenless' />
      </div>
    </Grid>
  );
};

export default NoMatch;