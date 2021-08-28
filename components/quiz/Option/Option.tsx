import React from "react";
import { Paragraph as ParagraphUI, ParagraphProps } from "evergreen-ui";
import styles from "./Option.module.scss";

const Option = (props: ParagraphProps) => {
  return <ParagraphUI {...props} className={styles.option} />;
};

export default Option;
