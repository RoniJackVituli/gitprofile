import React from "react";
import classes from "./Navbar.module.scss";
import { AiFillGithub } from "react-icons/ai";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
}

const Navbar:React.FC<Props> = ({className}) => {
  return (
    <header className={classes.headerContainer + ` ${className}`}>
      <div className={classes.leftHeader}>
        <h2>
          <Link to={"/"}>
            <span>Git</span>Profile
          </Link>
        </h2>
      </div>
      <div className={classes.rightHeader}>
        <ul>
          <Button link="/createProfile" className={classes.btn} style={{padding:'8px'}}>
            Create Profile
          </Button>
          <a href={"https://github.com/RoniJackVituli/gitprofile/"}>
            <AiFillGithub />
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
