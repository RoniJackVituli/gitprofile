import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./Social.module.scss";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { TextField } from "@mui/material";
import { SocialActions } from "../../../slices/Social-slice";
type Props = {
  moveForward?: () => void;
  backForward?: () => void;
};

const Social: React.FC<Props> = ({ moveForward, backForward }) => {
  const dispatch = useDispatch();
  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const {name, value} = event.target;
    dispatch(SocialActions.update({ index, value, name }));
  };
  const socials = useSelector((state: RootState) => state.social);
  return (
    <div className={classes.socialContainer}>
      <div className={classes.titleSection}>
        <h1>Social</h1>
        <p>
          It's time to show off, you can choose all the languages, frameworks,
          software you specialize in, and you can also add the social networks
          you're active.
        </p>
        <div className={classes.divBtn}>
          <Button
            className={classes.btn}
            iconLeft={<MdArrowBackIosNew />}
            onClick={backForward}
          >
            Back section
          </Button>
          <Button
            className={classes.btn}
            iconRight={<MdArrowForwardIos />}
            onClick={moveForward}
          >
            Next section
          </Button>
        </div>
      </div>
      <div className={classes.fillFields}>
        {Object.keys(socials).map((s, i) => {
          const social = (socials as any)[s];
          return (
            <div className={classes.field} key={i}>
              <div className={classes.label}>
                <img src={social.path + social.name + ".svg"} alt="" />
                <p>{social.label.toLocaleUpperCase()}</p>
              </div>
              <TextField
                value={`${social.userName ? social.userName : ""}`}
                name={social.name}
                size="small"
                focused={false}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  changeHandler(e, i);
                }}
                sx={{
                  input: { color: "white", height: "20px", fontSize: "13px" },
                  width: "100%",
                  border: "1px solid white",
                  borderRadius: "5px",
                  background: "#ffffff07",
                }}
                InputProps={{
                  startAdornment: (
                    <div style={{ fontSize: "15px", opacity: "0.9" }}>
                      {social.link}
                    </div>
                  ),
                }}
                placeholder={"yourname"}
                variant="outlined"
              />
            </div>
          );
        })}

        <div className={classes.divBtn}>
          <Button
            className={classes.btn}
            iconLeft={<MdArrowBackIosNew />}
            onClick={backForward}
          >
            Back section
          </Button>
          <Button
            className={classes.btn}
            iconRight={<MdArrowForwardIos />}
            onClick={moveForward}
          >
            Next section
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Social;
