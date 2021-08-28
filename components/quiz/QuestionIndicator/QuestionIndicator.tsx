import React from "react";
import { StatusIndicator as StatusIndicatorUI } from "evergreen-ui";
import { IQuestionIndicatorProps } from "./interfaces";
import styles from "./QuestionIndicator.module.scss";

const QuestionIndicator = (props: IQuestionIndicatorProps) => {
  const { isCurrent, isPrevious } = props;

  const getIndicatorClasses = () => {
    let classes = "";

    if (isCurrent) {
      classes += `${styles.indicatorCurrent}`;
    } else if (isPrevious) {
      classes += `${styles.indicatorPrevious}`;
    }

    return classes;
  };

  return (
    <StatusIndicatorUI
      {...props}
      className={getIndicatorClasses()}
      dotSize={24}
    />
  );
};

export default QuestionIndicator;
