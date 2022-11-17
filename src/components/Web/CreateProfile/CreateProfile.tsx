import React, { Fragment, useEffect, useState } from "react";
import ComingSoon from "../../UI/ComingSoon/ComingSoon";
import Navbar from "../../UI/Navbar/Navbar";
import Intro from "../Introduction/Intro";
import ReadMe from "../ReadMe/ReadMe";
import Skills from "../Skills/Skills";
import Social from "../Social/Social";
import classes from "./CreateProfile.module.scss";
export const SECTIONS = [Intro, Skills, Social, ComingSoon];

const CreateProfile = () => {

  const [currect, setCurrect] = useState(0);
  const moveForward = () => {
    setCurrect((prev)=>{
      return prev < SECTIONS.length - 1 ? prev + 1 : prev;
    })
  };

  const backForward = () =>{
    setCurrect((prev) => {
      return prev > 0 ? prev - 1 : 0;
    })
  }

  return (
    <>
    <Navbar/>
    <div className={classes.createContainer}>
      <div className={classes.fields}>
        {SECTIONS.map((Section, i) => {
          if (i === currect) {
            return (
              <Fragment key={i}>
                <Section moveForward={moveForward} backForward={backForward}/>
              </Fragment>
            );
          }
          return <Fragment key={i} />;
        })}

      </div>
      <div className={classes.readme}>
        <ReadMe/>
      </div>
    </div>
        </>
  );
};

export default CreateProfile;
