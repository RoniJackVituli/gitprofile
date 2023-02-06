import React from "react";
import classes from "./Navbar.module.scss";
import { AiFillGithub } from "react-icons/ai";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import LogoWeb from "../LogoWeb/LogoWeb";
type Props = {
  className?: string;
}

const Navbar:React.FC<Props> = ({className}) => {
  return (
    <Container className={`${className} ` + classes.headerContainer }>
     <LogoWeb/>
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
    </Container>
  );
};

export default Navbar;
