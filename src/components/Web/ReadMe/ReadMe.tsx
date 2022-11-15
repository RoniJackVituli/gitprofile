import React from "react";
import Button from "../../UI/Button/Button";
import { AiOutlineArrowDown, AiOutlineEye } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import classes from "./ReadMe.module.scss";
import { StateActions } from "../../../slices/State-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Preview from "./Preview";
import Markdown from "./Markdown";

const ReadMe = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.state);
  const chooseOptionHandler = (name: string) => {
    dispatch(StateActions.changeState({ name }));
    dispatch(StateActions.triggerCpy({ copy: "" }));
  };
  const copyHandler = () => {
    dispatch(StateActions.changeState({ name: "markdown" }));
    dispatch(StateActions.triggerCpy({ copy: "copy", num: "d" }));
  };
  return (
    <div className={classes.readme}>
      <div className={classes.chooseOptions}>
        <div className={classes.optionOne}>
          <Button
            className={`${
              state.name === "preview" ? classes.original : classes.grey
            }`}
            onClick={() => {
              chooseOptionHandler("preview");
            }}
            iconLeft={<AiOutlineEye />}
          >
            <span>Preview</span>
          </Button>
          <Button
            className={`${
              state.name === "markdown" ? classes.original : classes.grey
            }`}
            onClick={() => {
              chooseOptionHandler("markdown");
            }}
            iconLeft={<AiOutlineArrowDown />}
          >
            Markdown
          </Button>
        </div>
        <div className={classes.optionTwo}>
          <Button
            className={`${state.copy === "copy" ? classes.copy : classes.grey}`}
            iconRight={<FiCopy />}
            style={{ width: `${state.copy === "copy" ? '100px' : '80px'}` }}
            onClick={copyHandler}
          >
            {state.copy === "copy" ? 'Copied' : 'Copy'}
          </Button>
        </div>
      </div>
      <div>
        {state.name === "preview" && <Preview />}
        {state.name === "markdown" && <Markdown />}
      </div>
    </div>
  );
};

export default ReadMe;
