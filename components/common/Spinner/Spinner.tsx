import React from "react";
import { Spinner as SpinnerUI, SpinnerProps } from "evergreen-ui";
import styles from "./Spinner.module.scss";

const Spinner = (props: SpinnerProps) => {
  return <SpinnerUI {...props} className={styles.spinner} />;
};

export default Spinner;
