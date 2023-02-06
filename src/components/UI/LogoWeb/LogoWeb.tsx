import React from 'react'
import { Link } from 'react-router-dom'
import classes from './LogoWeb.module.scss';


const LogoWeb = () => {
  return (
    <div className={classes.LogoFooter}>
        <h2>
          <Link to={"/"}>
            <span>Git</span>Profile
          </Link>
        </h2>
        
      </div>
  )
}

export default LogoWeb