import React from "react";
import classes from "./Button.module.scss";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: (props?: any) => void;
  link?: string;
  href?: string;
  iconLeft?: any;
  iconRight?: any;
  style? : React.CSSProperties;
};

const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
  link,
  href,
  iconLeft,
  iconRight,
  style
}) => {
  if (link) {
    return (
      <div className={classes.btn + ` ${className}`} onClick={onClick} style={style}>
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
      <div className={classes.btn + ` ${className}`} onClick={onClick} style={style}>
        <a href={href} style={{ textDecoration: "none" }} >
          <span className={classes.iconLeft}>{iconLeft}</span>
          {children}
          <span className={classes.iconRight}>{iconRight}</span>
        </a>
      </div>
    );
  }

  return (
    <div className={classes.btn + ` ${className}`} onClick={onClick} style={style}>
      <span className={classes.iconLeft}>{iconLeft}</span>
      {children}
      <span className={classes.iconRight}>{iconRight}</span>
    </div>
  );
};

export default Button;
