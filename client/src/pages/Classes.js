import { Grid } from '@material-ui/core';
import React from 'react';
import useClasses from '../hooks/useClasses';

const Classes = () => {
  const { error, loading, data } = useClasses();
  
  if(loading) return <div>Loading...</div>

  if(error) return <div>AHHHHHHHHHHHHHHHHHHHHHHHHHHH</div>
  
  return (
    <Grid 
    container
    direction="row"
    justifyContent="space-evenly"
    alignItems="center">
      {data.getAllClass.map((allClass) => {
        return (
        <div key={allClass._id}>
          <img src={allClass.image} alt="Starter Class Gear"/>
        </div>
        );
      })}
    </Grid>
  );
};

export default Classes;
