import React from "react";
import classes from "./Button.module.scss";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: (props?: any) => void;
  link?: string;
  href?: string;
  iconLeft?: any;
  iconRight?: any;
  style?: React.CSSProperties;
};

const useAnalyticsEventTracker = (category: any) => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};

const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
  link,
  href,
  iconLeft,
  iconRight,
  style,
}) => {
  const gaEventTracker = useAnalyticsEventTracker('');

  if (link) {
    return (
      <div
        className={classes.btn + ` ${className}`}
        onClick={onClick}
        style={style}
      >
        <Link to={link} style={{ textDecoration: "none" }}>
          <span className={classes.iconLeft}>{iconLeft}</span>
          {children}
          <span className={classes.iconRight}>{iconRight}</span>
        </Link>
      </div>
    );
  }

  if (href) {
    return (
      <div
        className={classes.btn + ` ${className}`}
        onClick={() => {
          if (onClick) {
            onClick();
          }
          gaEventTracker(children?.toLocaleString())
        }}
        style={style}
      >
        <a href={href} style={{ textDecoration: "none" }}>
          <span className={classes.iconLeft}>{iconLeft}</span>
          {children}
          <span className={classes.iconRight}>{iconRight}</span>
        </a>
      </div>
    );
  }

  return (
    <div
      className={classes.btn + ` ${className}`}
      onClick={onClick}
      style={style}
    >
      <span className={classes.iconLeft}>{iconLeft}</span>
      {children}
      <span className={classes.iconRight}>{iconRight}</span>
    </div>
  );
};

export default Button;
