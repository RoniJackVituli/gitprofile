import React from 'react'
import Intro from '../Introduction/Intro';
import classes from './CreateProfile.module.scss';
const CreateProfile = () =>{

  return (
    <div className={classes.createContainer}>
      <div className={classes.fields}>
        <Intro/>     
      </div>
      <div className={classes.readme}>ReadMe</div>
    </div>
  )
}

export default CreateProfile;