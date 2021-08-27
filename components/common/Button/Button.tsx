import React from "react";
import { Button as ButtonUI, ButtonProps } from "evergreen-ui";
import styles from "./Button.module.scss";

const Button = (props: ButtonProps) => {
  return <ButtonUI {...props} className={styles.button} />;
};

export default Button;
