import React from "react";
import Spinner from "../../common/Spinner";
import styles from "./ResultLoadingIndicator.module.scss";

const ResultLoadingIndicator = () => {
  return (
    <div className={`${styles.resultLoadingIndicator} flex-column-container`}>
      <Spinner />
      <h3>Finding profile</h3>
    </div>
  );
};

export default ResultLoadingIndicator;
