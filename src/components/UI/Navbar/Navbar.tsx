import React from "react";
import classes from "./Navbar.module.scss";
import { AiFillGithub } from "react-icons/ai";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <header className={classes.headerContainer}>
      <div className={classes.leftHeader}>
        <h2>
          <span>Git</span>Profile
        </h2>
      </div>
      <div className={classes.rightHeader}>
        <ul>
          <li>
            <Button className={classes.btn}>Create Profile</Button>
          </li>
          <li
            onClick={() => {
              console.log("ADD LINK TO GIT REPO");
            }}
          >
            <AiFillGithub />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
