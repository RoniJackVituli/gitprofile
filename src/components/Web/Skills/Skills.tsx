import React from 'react'
import Button from '../../UI/Button/Button';
import classes from './Skills.module.scss';

type Props = {
  moveForward?: () => void;
  backForward?: () => void;
}


const Skills:React.FC<Props> = ({moveForward, backForward}) => {
  return (
    <div className={classes.introContainer}>
      <div className={classes.titleSection}>
        <h1>Skills</h1>
        <p>
          This is the stage to introduce yourself, tell them who you are and
          what you like to do &#129299;
        </p>
        <div className={classes.divBtn}>
          <Button className={classes.btn} onClick={backForward}>Back section</Button>
          <Button className={classes.btn} onClick={moveForward}>Next section</Button>
        </div>
      </div>
      <div className={classes.fillFields}>
       
      </div>
    </div>
  )
}

export default Skills