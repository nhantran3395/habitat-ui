import React from "react";
import { Button as ButtonUI, ButtonProps } from "evergreen-ui";
import styles from "./Option.module.scss";

const Option = (props: ButtonProps) => {
  return <ButtonUI {...props} className={styles.option} />;
};

export default Option;
