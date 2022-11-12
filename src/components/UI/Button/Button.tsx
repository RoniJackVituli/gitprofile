import React from 'react'
import classes from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: (props?: any) => void; 
}

const Button:React.FC<Props> = ({children, className,onClick}) => {
  return (
    <div className={classes.btn +` ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}

export default Button