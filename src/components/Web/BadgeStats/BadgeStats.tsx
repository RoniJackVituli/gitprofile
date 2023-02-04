import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./BadgeStats.module.scss";
import OK from "./OK.svg";
import { MdArrowBackIosNew } from "react-icons/md";
import { Badges, gitHubGraph, githubStatsTheme } from "../../../helpers/Badge";
import { useDispatch, useSelector } from "react-redux";
import { BadgesStatsActions } from "../../../slices/BadgesStats-slice";
import { RootState } from "../../../store/store";
type Props = {
  moveForward?: () => void;
  backForward?: () => void;
};

const BadgeStats: React.FC<Props> = ({ moveForward, backForward }) => {
  const githubUser = useSelector((state: RootState) => state.social.github);
  const badgesStats = useSelector((state: RootState) => state.badgesStats);
  const dispatch = useDispatch();
  const choiceGraph = (index: number) => {
    dispatch(BadgesStatsActions.addIndexGraph({ index }));
  };
  const choiceGitHubStats = (index: number) => {
    dispatch(BadgesStatsActions.addIndexGitStats({ index }));
  };
  const choicePopularLanguages = (index: number) => {
    dispatch(BadgesStatsActions.addIndexPopularLanguages({ index }));
  };
  const choiceBadges = (index: number) => {
    dispatch(BadgesStatsActions.addIndexBadges({ index }));
  };
  const clearBadge = () => {
    dispatch(BadgesStatsActions.clearIndexBadges());
  }
  return (
    <div className={classes.socialContainer}>
      <div className={classes.titleSection}>
        <h1>Stats / Badge</h1>
        <p>
          you can showcase your achievements, highlight your skills, and let
          others see what you're capable of. Whether you've earned badges,
          completed courses, or simply have a lot of experience, this is your
          chance to showcase your expertise and stand out from the crowd 💪
        </p>
        <div className={classes.divBtn}>
          <Button
            className={classes.btn}
            iconLeft={<MdArrowBackIosNew />}
            onClick={backForward}
          >
            Back section
          </Button>
        </div>
      </div>
      <div className={classes.fillFields}>
        {!githubUser.userName && (
          <div className={classes.messageError}>
            <h3>
              Please enter your{" "}
              <span className={classes.openGitHubSocial} onClick={backForward}>
                GitHub username in the socials section
              </span>{" "}
              to unlock access to the badge and stats features.
            </h3>
          </div>
        )}
        <div className={githubUser.userName ? "" : classes.disabled}>
          <h1>Badge</h1>
          <Button className={classes.clear} onClick={clearBadge}>Clear ALL</Button>
          <div className={classes.choiceBadge}>
            {Badges.map((badge, i) => {
              if (badgesStats.indexsBadges.includes(i)) {
                return (
                  <div
                    className={classes.imgdiv}
                    key={i}
                    onClick={() => {
                      choiceBadges(i);
                    }}
                  >
                    <img src={OK} alt="" className={classes.svgOk} />
                    <img src={`${badge}`} alt="" />
                  </div>
                );
              }
              return (
                <div
                  className={classes.imgdiv}
                  key={i}
                  onClick={() => {
                    choiceBadges(i);
                  }}
                >
                  <img src={`${badge}`} alt="" />
                </div>
              );
            })}
          </div>
          <h1>GitHub Stats</h1>
          <div className={classes.choiceGitHubStats}>
            {githubStatsTheme.map((stats, i) => {
              if (i === badgesStats.indexGitStats) {
                return (
                  <div
                    className={classes.imgdiv}
                    key={i}
                    onClick={() => {
                      choiceGitHubStats(i);
                    }}
                  >
                    <img src={OK} alt="" className={classes.svgOk} />
                    <img
                      src={`https://github-readme-stats.vercel.app/api?username=RoniJackVituli&show_icons=true&theme=${stats}`}
                      alt=""
                    />
                  </div>
                );
              }
              return (
                <div
                  className={classes.imgdiv}
                  key={i}
                  onClick={() => {
                    choiceGitHubStats(i);
                  }}
                >
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=RoniJackVituli&show_icons=true&theme=${stats}`}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
          <h1>GitHub Popular Languages </h1>
          <div className={classes.choice}>
            {githubStatsTheme.map((stats, i) => {
              if (i === badgesStats.indexLanguageStats) {
                return (
                  <div
                    key={i}
                    className={classes.imgdiv}
                    onClick={() => {
                      choicePopularLanguages(i);
                    }}
                  >
                    <img src={OK} alt="" className={classes.svgOk} />
                    <img
                      src={`https://github-readme-stats.vercel.app/api/top-langs?username=RoniJackVituli&show_icons=true&theme=${stats}`}
                      alt=""
                    />
                  </div>
                );
              }
              return (
                <div
                  key={i}
                  className={classes.imgdiv}
                  onClick={() => {
                    choicePopularLanguages(i);
                  }}
                >
                  <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs?username=RoniJackVituli&show_icons=true&theme=${stats}`}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
          <h1>GitHub Graph</h1>
          <div className={classes.choiceGraph}>
            {gitHubGraph.map((graph, i) => {
              if (i === badgesStats.indexGraph) {
                return (
                  <div
                    key={i}
                    className={classes.imgdiv}
                    onClick={() => {
                      choiceGraph(i);
                    }}
                  >
                    <img src={OK} alt="" className={classes.svgOk} />
                    <img
                      src={`https://github-readme-activity-graph.cyclic.app/graph?username=Ashutosh00710&theme=${graph}`}
                      alt=""
                    />
                  </div>
                );
              }
              return (
                <div
                  className={classes.imgdiv}
                  onClick={() => {
                    choiceGraph(i);
                  }}
                  key={i}
                >
                  <img
                    src={`https://github-readme-activity-graph.cyclic.app/graph?username=Ashutosh00710&theme=${graph}`}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.divBtn}>
          <Button
            className={classes.btn}
            iconLeft={<MdArrowBackIosNew />}
            onClick={backForward}
          >
            Back section
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BadgeStats;
