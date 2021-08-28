import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import styles from "./ArrowButton.module.scss";

const ArrowButton = () => {
  return (
    <NextLink href="/quiz/results">
      <div className={`${styles.arrowButton} flex-column-container`}>
        <Image src="/images/arrow-right.svg" width={45} height={45} />
        <h3>View results</h3>
      </div>
    </NextLink>
  );
};

export default ArrowButton;
