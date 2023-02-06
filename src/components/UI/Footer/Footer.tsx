import React, { FC } from "react";
import { AiFillGithub } from "react-icons/ai";
import Container from "../Container/Container";
import LogoWeb from "../LogoWeb/LogoWeb";
import classes from "./Footer.module.scss";
type Props = {
  className?: string;
};

const Footer: FC<Props> = () => {
  const year = new Date().getFullYear();
  return (
    <div className={classes.footerContainer}>
      <Container className={classes.footerContainer}>
        <div className={classes.content}>
          <div className={classes.leftFooter}>
            <LogoWeb />
            <span className={classes.copyright}>
              © Copyright {year} GitProfile. All rights reserved.
            </span>
          </div>
          <div className={classes.rightFooter}>
            <a href={"https://github.com/RoniJackVituli/gitprofile/"}>
              <AiFillGithub />
            </a>
            <span>Developed by Roni Jack Vituli © {year}</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
