import React, { Fragment } from "react";
import classes from "./BoxIcon.module.scss";
import {Lang} from '../Skills/icons/Lang/langSvg';
type Props = {
  title: string;
  list: any;
  iconTitle: any;
};

const BoxIcon: React.FC<Props> = ({ title, iconTitle, list }) => {
  return (
    <div className={classes.boxiconContainer}>
      <div className={classes.titlebox}>
        <h1>{title}</h1>
      </div>
      <div className={classes.list} style={{}}>
        {Object.keys(Lang).map((key) =>{
          return <>{(Lang as any)[key]}</>
        })}
      </div>
    </div>
  );
};

export default BoxIcon;
