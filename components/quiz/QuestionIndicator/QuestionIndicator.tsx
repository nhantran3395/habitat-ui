import React from "react";
import {
  StatusIndicator as StatusIndicatorUI,
  StatusIndicatorProps,
} from "evergreen-ui";
import styles from "./QuestionIndicator.module.scss";

const QuestionIndicator = (props: StatusIndicatorProps) => {
  return (
    <StatusIndicatorUI {...props} className={styles.indicator} dotSize={24} />
  );
};

export default QuestionIndicator;
