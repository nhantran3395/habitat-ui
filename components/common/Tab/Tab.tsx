import React from "react";
import { ITabProps } from "./interfaces";
import styles from "./Tab.module.scss";

const Tab = ({ onSelect, isSelected, children }: ITabProps) => {
  const getClasses = () => {
    let className = "";
    if (isSelected) {
      className += `${styles.tabSelected}`;
    }
    return className;
  };

  return (
    <div onClick={onSelect} className={`${getClasses()} m-3`}>
      {children}
    </div>
  );
};

export default Tab;
