import React from "react";
import Button from "../Button/Button";
import classes from "./ComingSoon.module.scss";
import { MdArrowBackIosNew } from "react-icons/md";
import comingsoon from "../../../helpers/comingsoon.png";
type Props = {
  moveForward?: () => void;
  backForward?: () => void;
};

const ComingSoon: React.FC<Props> = ({ moveForward, backForward }) => {
  return (
    <div className={classes.socialContainer}>
      <div className={classes.titleSection}>
        <h1>Stats / Badge</h1>
        <p>Coming Soon!</p>
        <div className={classes.divBtn}>
          <Button
            className={classes.btn}
            iconLeft={<MdArrowBackIosNew />}
            onClick={backForward}
          >
            Back section
          </Button>
        </div>
      </div>
      <div className={classes.fillFields}>
        <div className={classes.comingsoonImg}>
          <img src={comingsoon} alt="" width={"500px"} />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
