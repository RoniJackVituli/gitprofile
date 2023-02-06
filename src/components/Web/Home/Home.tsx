import React from "react";
import classes from "./Home.module.scss";
import { Animated } from "react-animated-css";
import Button from "../../UI/Button/Button";
import Navbar from "../../UI/Navbar/Navbar";
import gitprofile from "../../../helpers/GitProfile.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Footer from "../../UI/Footer/Footer";
import Container from "../../UI/Container/Container";
import { icons, socialIcons } from "../../../helpers/icons";

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
      <div className={classes.gitprofile + " "}>
        <img src={gitprofile} alt="" loading="lazy" />
      </div>
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
      <Container>
        <section className={classes.sectionOne}>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOnce={true}
            className={classes.titleOne}
          >
            <h1>
              Show off your <span>knowledge</span>
            </h1>
            <span id={classes.subtitle}>
              Highlight your skillset and let your knowledge shine with our
              customizable design options.
            </span>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOnce={true}
          >
            <div className={classes.boxIcons}>
              {icons.map((line) => {
                return (
                  <div className={classes.line}>
                    {line.map((icon) => {
                      return (
                        <img
                          src={`https://raw.githubusercontent.com/RoniJackVituli/gitprofile/main/src/helpers/icons/programming/${icon}-color.svg`}
                          alt=""
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </AnimationOnScroll>
        </section>
        <section className={classes.sectionTwo}>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOnce={true}
            className={classes.boxIcons}
          >
              {socialIcons.map((line) => {
                return (
                  <div className={classes.line}>
                    {line.map((socialIcon) => {
                      return (
                        <img
                          src={`https://raw.githubusercontent.com/RoniJackVituli/gitprofile/main/src/helpers/icons/socials/${socialIcon}.svg`}
                          alt=""
                        />
                      );
                    })}
                  </div>
                );
              })}
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOnce={true}
            className={classes.titleTwo}
          >
            <h1>
              Add your <span>socials</span>
            </h1>
            <span id={classes.subtitle}>
              Quickly showcase your online presence by linking all of your
              social profiles{" "}
            </span>
          </AnimationOnScroll>
        </section>
      </Container>
      <Footer className={classes.fixed} />
    </>
  );
};

export default Home;
