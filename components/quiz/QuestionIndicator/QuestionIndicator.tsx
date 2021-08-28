import React from "react";
import { StatusIndicator as StatusIndicatorUI } from "evergreen-ui";
import { IQuestionIndicatorProps } from "./interfaces";
import styles from "./QuestionIndicator.module.scss";

const QuestionIndicator = (props: IQuestionIndicatorProps) => {
  const { isCurrent } = props;
  return (
    <StatusIndicatorUI
      {...props}
      className={isCurrent ? styles.indicatorCurrent : styles.indicator}
      dotSize={24}
    />
  );
};

export default QuestionIndicator;
