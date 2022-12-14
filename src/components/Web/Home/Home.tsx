import React from "react";
import classes from "./Home.module.scss";
import { Animated } from "react-animated-css";
import Button from "../../UI/Button/Button";
import Navbar from "../../UI/Navbar/Navbar";
import gitprofile from "../../../helpers/GitProfile.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Home = () => {
  return (
    <>
      <Navbar className={classes.fixed} />
      <div className={classes.homeContainer}>
        <div className={classes.title}>
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            animationInDuration={1800}
            animationOutDuration={200}
            isVisible={true}
          >
            <h1>
              Lets create <span>an</span> amazing{" "}
              <span>
                <br />
                Git
              </span>
              Profile in minutes
            </h1>
            <p>
              In a few minutes you can present your skills,
              <br /> and the projects, so go ahead what are you waiting for?{" "}
            </p>
          </Animated>
          <Animated
            animationIn="fadeIn"
            animationOut="fadeIn"
            isVisible={true}
            animationInDuration={3800}
          >
            <div className={classes.btnArea}>
              <Button
                link={"/createProfile"}
                className={classes.btnOne}
                style={{ fontWeight: "300" }}
              >
                Create Profile
              </Button>
              <Button
                className={classes.btnTwo}
                href={"https://github.com/RoniJackVituli/gitprofile"}
                style={{ fontWeight: "300" }}
              >
                Source codes
              </Button>
            </div>
          </Animated>
        </div>
      </div>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <div className={classes.gitprofile + " "}>
          <img src={gitprofile} alt="" />
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <div className={classes.what_we_do}>
          <h1>
            What <span>We</span> Do?
          </h1>
          <h3>
            we make your git profile look amazing
            <br /> and more professional
          </h3>
        </div>
      </AnimationOnScroll>
    </>
  );
};

export default Home;
