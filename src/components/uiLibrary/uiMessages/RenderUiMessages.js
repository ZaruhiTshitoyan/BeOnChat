import React from "react";

import "@/styles/UiMessages.css";

const RenderUiMessages = ({
  className, type, userMessage, children
}) => {
  if (!userMessage) return null;
  let classname;
  switch (type) {
  case "error":
    classname = className;
    break;
  case "success":
    break;
  case "info":
    break;
  case "warning":
    classname = className;
    break;
  default:
  }
  return <div className={classname}>{children}</div>;
};

export default RenderUiMessages;
