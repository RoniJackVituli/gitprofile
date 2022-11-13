import React from "react";
import classes from "./Preview.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const Preview = () => {
  const introduction = useSelector((state: RootState) => state.intro);

  return (
    <div className={classes.previewContainer}>
      {introduction.fullName && (
        <h1>
          Hi! <span>👋🏻 </span> My name is {introduction.fullName}
        </h1>
      )}
      {introduction.subtitle && <h4>{introduction.subtitle}</h4>}
      {introduction.description && <p>{introduction.description}</p>}
      <ul>
        {introduction.location && (
          <li>
            <span>🌍</span>I'm actually from {introduction.location}
          </li>
        )}
        {introduction.portfolio_name && introduction.portfolio_url && (
          <li>
            <span>🖥️</span> See my portfolio at {" "}
            <a href={'https://' + introduction.portfolio_url}>
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
           <span>🚀 </span> I'm currently working on {" "}
            <a href={'https://' + introduction.project_url}>
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
            <span>🤝</span> I'm open to collaborating on {introduction.collaborating}
          </li>
        )}
        {introduction.else && (
          <li>
            <span>⚡</span> {introduction.else}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Preview;
