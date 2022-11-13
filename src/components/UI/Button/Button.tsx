import React from 'react'
import classes from './Button.module.scss';
import {Link} from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: (props?: any) => void; 
  link?: string;
  href?: string;
}

const Button:React.FC<Props> = ({children, className,onClick, link, href}) => {

  if(link){
    return (
      <div className={classes.btn +` ${className}`} onClick={onClick}>
       <Link to={link} style={{textDecoration:'none'}}>
         {children}
        </Link> 
      </div>
    ) 
  }

  if(href){
    return (
      <div className={classes.btn +` ${className}`} onClick={onClick}>
       <a href={href} style={{textDecoration:'none'}}>
         {children}
        </a> 
      </div>
    ) 
  }

  return (
    <div className={classes.btn +` ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}

export default Button