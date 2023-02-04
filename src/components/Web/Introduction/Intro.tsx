import React from "react";
import classes from "./Intro.module.scss";
import { TextareaAutosize, TextField } from "@mui/material";
import { IntroFields, AboutMeFields } from "./IntroFields";
import Button from "../../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { IntroductionActions } from "../../../slices/introduction-slice";
import { RootState } from "../../../store/store";
import {MdArrowForwardIos} from 'react-icons/md';

type Props = {
  moveForward?: () => void;
  backForward?: () => void;
};

const Intro: React.FC<Props> = ({ moveForward }) => {
  const dispatch = useDispatch();
  const introduction = useSelector((state: RootState) => state.intro);
  
  
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name , value} = event.target;
    dispatch(IntroductionActions.update({name, value}))
  }

  return (
    <div className={classes.introContainer}>
      <div className={classes.titleSection}>
        <h1>Introduction</h1>
        <p>
        Take the opportunity to make a great first impression! This is where you can showcase your unique personality, share your passions, and let others get to know you. So don't be shy, let your voice be heard and tell the world who you are and what you're all about 💻🚀
        </p>
        <div className={classes.divBtn}>
          <Button className={classes.btn} iconRight={<MdArrowForwardIos/>} onClick={moveForward}>
            Next section
          </Button>
        </div>
      </div>
      <div className={classes.fillFields}>
        {IntroFields.map((field, i) => {
          if (field.label === "description") {
            return (
              <div className={classes.field} key={i}>
                <p>
                  <span>{field.icon}</span>
                  {field.label.toLocaleUpperCase()}
                </p>
                <TextareaAutosize
                  maxRows={4}
                  value={introduction.description}
                  onChange={changeHandler}
                  aria-label="maximum height"
                  name={field.name}
                  placeholder={field.placeholder}
                  style={{
                    width: "100%",
                    background: "#ffffff07",
                    padding: "10px",
                    border: "1px solid white",
                    borderRadius: "5px",
                    outline: "none",
                    maxHeight: "60px",
                  }}
                />
              </div>
            );
          }
          return (
            <div className={classes.field} key={i}>
              <p>
                <span>{field.icon} </span>
                {field.label.toLocaleUpperCase()}
              </p>
              <TextField
                value={(introduction as any)[field.name]}
                name={field.name}
                size="small"
                focused={false}
                onChange={changeHandler}
                sx={{
                  input: { color: "white", height: "20px", fontSize: "13px" },
                  width: "100%",
                  border: "1px solid white",
                  borderRadius: "5px",
                  background: "#ffffff07",
                }}
                placeholder={field.placeholder}
                variant="outlined"
              />
            </div>
          );
        })}
        <h1>more about me</h1>
        {AboutMeFields.map((field, i) => {
          if (field.name === "portfolio_name" || field.name === "project_name") {
            return (
              <div className={classes.field} key={i}>
                <p>
                  <span>{field.icon} </span>
                  {field.label.toLocaleUpperCase()}
                </p>
                <TextField
                  value={field.name === 'portfolio_name' ? introduction.portfolio_name : introduction.project_name}
                  name={field.name}
                  onChange={changeHandler}
                  size="small"
                  focused={false}
                  sx={{
                    input: {
                      color: "white",
                      height: "20px",
                      fontSize: "13px",
                    },
                    width: "100%",
                    border: "1px solid white",
                    borderRadius: "5px",
                    background: "#ffffff07",
                    marginBottom: "10px",
                  }}
                  placeholder={field.placeholder}
                  variant="outlined"
                />
                <TextField
                  name={field.site?.name}
                  value={field.name === 'portfolio_name' ? introduction.portfolio_url : introduction.project_url}
                  onChange={changeHandler}
                  size="small"
                  focused={false}
                  sx={{
                    input: {
                      color: "white",
                      height: "20px",
                      fontSize: "13px",
                    },
                    width: "100%",
                    border: "1px solid white",
                    borderRadius: "5px",
                    background: "#ffffff07",
                  }}
                  InputProps={{
                    startAdornment: <div>https://</div>,
                  }}
                  placeholder={field.site?.value}
                  variant="outlined"
                />
              </div>
            );
          }

          return (
            <div className={classes.field} key={i}>
              <p>
                <span>{field.icon} </span>
                {field.label.toLocaleUpperCase()}
              </p>
              <TextField
                value={(introduction as any)[field.name]}
                name={field.name}
                size="small"
                focused={false}
                onChange={changeHandler}
                sx={{
                  input: { color: "white", height: "20px", fontSize: "13px" },
                  width: "100%",
                  border: "1px solid white",
                  borderRadius: "5px",
                  background: "#ffffff07",
                }}
                placeholder={field.placeholder}
                variant="outlined"
              />
            </div>
          );
        })}
        <div className={classes.divBtn}>
          <Button className={classes.btn} onClick={moveForward}>
            Next section
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
