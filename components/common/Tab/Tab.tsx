import React from "react";
import { Tab as TabUI, TabProps } from "evergreen-ui";
import styles from "./Tab.module.scss";

const Tab = (props: TabProps) => {
  return <TabUI {...props} className={styles.tab} />;
};

export default Tab;