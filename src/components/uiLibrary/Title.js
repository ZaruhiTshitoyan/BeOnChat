import React from "react";

import styles from "@/styles/Title.css";

const Title = ({
  className, size, children, ...rest
}) => {
  const classname = `${styles.title} ${className}`;
  let headerOption;

  switch (size) {
  case "x-large":
    headerOption = (
      <h1 {...rest} className={classname}>
        {children}
      </h1>
    );
    break;
  case "medium":
    headerOption = (
      <h3 {...rest} className={classname}>
        {children}
      </h3>
    );
    break;
  case "small":
    headerOption = (
      <h4 {...rest} className={classname}>
        {children}
      </h4>
    );
    break;
  default:
  }

  return <>{headerOption}</>;
};

export default Title;
