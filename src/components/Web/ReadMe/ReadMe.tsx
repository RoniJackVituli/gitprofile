import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Markdown from "./Markdown";
import Preview from "./Preview";
import classes from "./ReadMe.module.scss";
import {AiOutlineArrowDown ,AiOutlineEye} from 'react-icons/ai';
const ReadMe = () => {
  const [choice, setChoice] = useState({ name: "preview", choice: true });
  const chooseOptionHandler = (name: string) => {
    setChoice((prev)=>{
      return prev.name === name ? prev : {name, choice: !prev.choice};
    })
  };

  return (
    <div className={classes.readme}>
      <div className={classes.chooseOptions}>
        <Button
          className={`${choice.choice ? classes.original : classes.grey}`}
          onClick={() => {
            chooseOptionHandler("preview");
          }}
          iconLeft={<AiOutlineEye/>}
        >
          <span>Preview</span>
        </Button>
        <Button
          className={`${choice.choice ? classes.grey : classes.original}`}
          onClick={() => {
            chooseOptionHandler("markdown");
          }}
          iconLeft={<AiOutlineArrowDown/>}
        >
          Markdown
        </Button>
      </div>
      <div>
        {choice.choice && <Preview/>}
        {!choice.choice && <Markdown/>}
      </div>
    </div>
  );
};

export default ReadMe;
