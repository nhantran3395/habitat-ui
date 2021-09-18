import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { IArrowButtonProps } from "./interfaces";
import styles from "./ArrowButton.module.scss";

const ForwardArrowButton = ({ goToPage }: IArrowButtonProps) => {
  return (
    <NextLink href={goToPage}>
      <div className={`${styles.arrowButton} flex-column-container`}>
        <div className={styles.arrowIcon} />
        <h3>View results</h3>
      </div>
    </NextLink>
  );
};

export default ForwardArrowButton;
