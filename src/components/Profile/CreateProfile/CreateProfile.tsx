import React, { Fragment, useState } from "react";
import BadgeStats from "../../Web/BadgeStats/BadgeStats";
import Navbar from "../../UI/Navbar/Navbar";
import Intro from "../../Web/Introduction/Intro";
import ReadMe from "../../Web/ReadMe/ReadMe";
import Skills from "../../Web/Skills/Skills";
import Social from "../../Web/Social/Social";
import classes from "./CreateProfile.scss";
export const SECTIONS = [Intro, Skills, Social, BadgeStats];

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
