import React from "react";
import classes from "./ScreenTextArea.module.css";

function ScreenTextArea(props) {
  return (
    <div className={classes.mainArea}>
      <div className={classes.topArea}>{props.expression}</div>
      <div className={classes.bottomArea}>{props.currentNumber}</div>
    </div>
  );
}

export default ScreenTextArea;
