import React, { useEffect, useRef } from "react";
import classes from "./Markdown.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import useCopyToClipboard from "../../../hooks/useCopyToClipboard";
import { toast } from "react-toastify";
import { Badges, gitHubGraph, githubStatsTheme } from "../../../helpers/Badge";
const Markdown = () => {
  const [, copy] = useCopyToClipboard();
  const intro = useSelector((state: RootState) => state.intro);
  const skills = useSelector((state: RootState) => state.skills.skills);
  const socials = useSelector((state: RootState) => state.social);
  const copy_v = useSelector((state: RootState) => state.state.copy);
  const badgesStats = useSelector((state: RootState) => state.badgesStats);
  const markdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (copy_v === "copy") {
      const copyMe = markdownRef.current?.innerText;
      copy(copyMe!.toString())
        .then((res) => {
          toast("🦄 Wow so easy!");
        })
        .catch((e) => {
          console.log("error!");
        });
    }
  }, [copy_v, copy]);

  return (
    <div className={classes.markdownContainer}>
      <div ref={markdownRef}>
        {intro.fullName && (
          <span>{`# Hi! 👋🏻  My name is ${intro.fullName}\n`}</span>
        )}
        <br />
        {badgesStats.indexsBadges.length > 0 && (
          <span>
            {`<p>`}
            {badgesStats.indexsBadges.map((badge) => {
              return <>{`<img src ="${Badges[badge]}"/>`}</>;
            })}
            {`</p>`}
          </span>
        )}
        <br />
        <br />
        {intro.subtitle && <span>{`## ${intro.subtitle}\n`}</span>}
        <br />
        <br />
        {intro.description && <span>{`${intro.description}\n\n`}</span>}
        <br />
        <br />
        {intro.location && (
          <span>{` * 🌍 I'm actually from ${intro.location}\n`}</span>
        )}
        <br />
        {intro.portfolio_name && intro.portfolio_url && (
          <span>{` * 🖥️  See my portfolio at [${intro.portfolio_name}](${intro.portfolio_url})\n`}</span>
        )}
        <br />
        {intro.email && (
          <span>{` * ✉️ You can contact me at [${intro.email}](mailto:${intro.email})\n`}</span>
        )}
        <br />
        {intro.project_name && intro.project_url && (
          <span>{` * 🚀 I'm currently working on [${intro.project_name}](${intro.project_url})\n`}</span>
        )}
        <br />
        {intro.learning && (
          <span>{` * 🧠 I'm learning ${intro.learning}\n`}</span>
        )}
        <br />
        {intro.collaborating && (
          <span>{` * 🤝 I'm open to collaborating ${intro.collaborating}\n`}</span>
        )}
        <br />
        {intro.else && <span>{` * ⚡ ${intro.else}\n`}</span>}
        <br />
        <br />
        {skills.length > 0 && (
          <span>
            <span>
              {`### My Skills\n\n\n`}
              <br />
              <br />
            </span>
            {`<p align="left">`}
            <span>
              {skills.map((skill) => {
                return (
                  <>{`<a href="${
                    skill.link
                  }" target="_blank" rel="noreferrer"><img src=${
                    skill.path + skill.name + "-color.svg"
                  } alt="" width="45px" height="45px"/>`}</>
                );
              })}
            </span>
            {`</p>`}
          </span>
        )}
        <br />
        <br />
        <br />
        {(socials.github.userName ||
          socials.instagram.userName ||
          socials.facebook.userName ||
          socials.linkedin.userName ||
          socials.stackoverflow.userName ||
          socials.twitch.userName ||
          socials.twitter.userName ||
          socials.youtube.userName) && (
          <span>
            <span>{`### Find Me Also Here\n\n`}</span>
            <br />
            <br />
            <span>
              {`<p align="left">`}
              <span>
                {Object.keys(socials).map((key) => {
                  const social = (socials as any)[key];
                  if (social.userName) {
                    return (
                      <>{`<a href=${
                        social.link + social.userName
                      } target="_blank" rel="noreferrer"><img src=${
                        social.path + social.name + ".svg"
                      } width="45px" height="45px" /></a>`}</>
                    );
                  }
                  return <></>;
                })}
              </span>
              {`</p>`}
            </span>
          </span>
        )}
        <br />
        <br />
        <span>
          {badgesStats.indexGitStats !== null &&
            socials.github.userName &&
            `![GitProfile-Stats](https://github-readme-stats.vercel.app/api?username=${
              socials.github.userName
            }&show_icons=true&theme=${
              githubStatsTheme[badgesStats.indexGitStats]
            })`}
        </span>
        <br />
        <br />
        <span>
          {badgesStats.indexLanguageStats !== null &&
            socials.github.userName &&
            `![GitProfile-Stats](https://github-readme-stats.vercel.app/api/top-langs?username=${
              socials.github.userName
            }&show_icons=true&theme=${
              githubStatsTheme[badgesStats.indexLanguageStats]
            })`}
        </span>
        <br />
        <br />
        <span>
          {badgesStats.indexGraph !== null &&
            socials.github.userName &&
            `![GitProfile-Graph](https://github-readme-activity-graph.cyclic.app/graph?username=${
              socials.github.userName
            }&theme=${gitHubGraph[badgesStats.indexGraph]})`}
        </span>

        <br />
        <br />
        <span>{`-`} This Profile Created By {`<a href="https://profilegit.netlify.app/">`}GitProfile{`</a>`}</span>
      </div>
    </div>
  );
};

export default Markdown;
