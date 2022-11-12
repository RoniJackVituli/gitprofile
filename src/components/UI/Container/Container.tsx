import React from 'react'
import classes from './Container.module.scss';
type Props = {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({children, className}) => {
  return (
    <div className={classes.container + ` ${className}`}>
      {children}
    </div>
  )
}

export default Container