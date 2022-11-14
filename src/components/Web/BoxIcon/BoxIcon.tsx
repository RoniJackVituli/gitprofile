import React from "react";
import { useDispatch } from "react-redux";
import { SkillActions } from "../../../slices/Skill-slice";
import classes from "./BoxIcon.module.scss";
import { Tooltip } from "@mui/material";

type Props = {
  title: string;
  list: any;
  iconTitle: any;
};

const BoxIcon: React.FC<Props> = ({ title, iconTitle, list }) => {
  const dispatch = useDispatch();

  const AddToSkill = (index: number) => {
    dispatch(SkillActions.addSkill({ key: title, index }));
  };
  const removeFromSkill = (index: number) => {
    dispatch(SkillActions.removeSkill({ key: title, index }));
  };

  return (
    <div className={classes.boxiconContainer}>
      <div className={classes.titlebox}>
        <h1>{title}</h1>
      </div>
      <div className={classes.list}>
        {list.map((icon: any, i: number) => {
          if (!icon.clicked) {
            return (
              <Tooltip title={icon.toolTip}>
                <img
                  src={icon.path + icon.name + ".svg"}
                  alt=""
                  key={icon.name}
                  onClick={() => {
                    AddToSkill(i);
                  }}
                />
              </Tooltip>
            );
          }
          return (
            <Tooltip title={icon.toolTip} >
              <img
                src={icon.path + icon.name + "-color.svg"}
                key={i}
                alt=""
                onClick={() => {
                  removeFromSkill(i);
                }}
              />
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default BoxIcon;
