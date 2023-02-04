import React from "react";
import classes from "./Preview.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { gitHubGraph, githubStatsTheme, Badges } from "../../../helpers/Badge";
const Preview = () => {
  const introduction = useSelector((state: RootState) => state.intro);
  const skills = useSelector((state: RootState) => state.skills.skills);
  const socials = useSelector((state: RootState) => state.social);
  const badgesStats = useSelector((state: RootState) => state.badgesStats);

  return (
    <div className={classes.previewContainer}>
      {introduction.fullName && (
        <h1>
          Hi! <span>👋🏻 </span> My name is {introduction.fullName}
        </h1>
      )}
      {introduction.subtitle && <h4>{introduction.subtitle}</h4>}
      {badgesStats.indexsBadges.length > 0 && 
      badgesStats.indexsBadges.map((indexBadget) => {
        return <img src={Badges[indexBadget] } alt=""/>
      })
      }
      {introduction.description && <p>{introduction.description}</p>}
      <ul>
        {introduction.location && (
          <li>
            <span>🌍</span>I'm actually from {introduction.location}
          </li>
        )}
        {introduction.portfolio_name && introduction.portfolio_url && (
          <li>
            <span>🖥️</span> See my portfolio at{" "}
            <a href={"https://" + introduction.portfolio_url}>
              {introduction.portfolio_name}
            </a>
          </li>
        )}
        {introduction.email && (
          <li>
            <span>✉️</span> You can contact me at{" "}
            <a href={`mailto: ${introduction.email}`}>{introduction.email}</a>
          </li>
        )}
        {introduction.project_name && introduction.project_url && (
          <li>
            <span>🚀 </span> I'm currently working on{" "}
            <a href={"https://" + introduction.project_url}>
              {introduction.project_name}
            </a>
          </li>
        )}
        {introduction.learning && (
          <li>
            <span>🧠</span> I'm learning {introduction.learning}
          </li>
        )}
        {introduction.collaborating && (
          <li>
            <span>🤝</span> I'm open to collaborating on{" "}
            {introduction.collaborating}
          </li>
        )}
        {introduction.else && (
          <li>
            <span>⚡</span> {introduction.else}
          </li>
        )}
      </ul>
      {skills.length > 0 && <h1>Skills</h1>}
      <div className={classes.skill}>
        {skills.length > 0 &&
          skills.map((skill, i) => {
            return (
              <a
                href={skill.link}
                target="_blank"
                rel="noreferrer noopener"
                key={i}
              >
                <img src={skill.path + skill.name + "-color.svg"} alt="" />
              </a>
            );
          })}
      </div>
      <br />
      {(socials.github.userName ||
        socials.instagram.userName ||
        socials.facebook.userName ||
        socials.linkedin.userName ||
        socials.stackoverflow.userName ||
        socials.twitch.userName ||
        socials.twitter.userName ||
        socials.youtube.userName) && <h1>You Can Find Me Here</h1>}
      <div className={classes.social}>
        {Object.keys(socials).map((s, i) => {
          const social = (socials as any)[s];
          if (social.userName) {
            return (
              <a href={social.link + social.userName} key={i}>
                <img src={social.path + social.name + ".svg"} alt="" />
              </a>
            );
          }
          return <></>;
        })}
      </div>
      <br />
      <br />
      <br />
      {badgesStats.indexGitStats !== null && socials.github.userName && (
        <img
          width="400px"
          src={`https://github-readme-stats.vercel.app/api?username=${
            socials.github.userName
          }&show_icons=true&theme=${
            githubStatsTheme[badgesStats.indexGitStats]
          }`}
          alt=""
        />
      )}
      {badgesStats.indexLanguageStats !== null && socials.github.userName &&(
        <img
          width="250px"
          src={`https://github-readme-stats.vercel.app/api/top-langs?username=${
            socials.github.userName
          }&show_icons=true&theme=${
            githubStatsTheme[badgesStats.indexLanguageStats]
          }`}
          alt=""
        />
      )}
      {badgesStats.indexGraph !== null && socials.github.userName &&(
        <img
          width="650px"
          src={`https://github-readme-activity-graph.cyclic.app/graph?username=${
            socials.github.userName
          }&theme=${gitHubGraph[badgesStats.indexGraph]}`}
          alt=""
        />
      )}
    </div>
  );
};

export default Preview;
