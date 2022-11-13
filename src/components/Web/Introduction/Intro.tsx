import React from "react";
import classes from "./Intro.module.scss";
import { TextareaAutosize, TextField } from "@mui/material";
import { IntroFields, AboutMeFields } from "./IntroFields";
const Intro = () => {
  return (
    <div className={classes.introContainer}>
      <div className={classes.titleSection}>
        <h1>Introduction</h1>
        <p>
          This is the stage to introduce yourself, tell them who you are and
          what you like to do &#129299;
        </p>
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
                name={field.name}
                size="small"
                focused={false}
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
          if (field.name === "portfolio" || field.name === "project") {
            return (
              <div className={classes.field} key={i}>
                <p>
                  <span>{field.icon} </span>
                  {field.label.toLocaleUpperCase()}
                </p>
                <TextField
                  name={field.name}
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
                  name={field.name2}
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
                  placeholder={field.placeholder2}
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
                name={field.name}
                size="small"
                focused={false}
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
      </div>
    </div>
  );
};

export default Intro;
