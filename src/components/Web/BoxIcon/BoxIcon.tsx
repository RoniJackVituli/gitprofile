import React  from "react";
import classes from "./BoxIcon.module.scss";
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
      
    </div>
  );
};

export default BoxIcon;
