import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { IArrowButtonProps } from "./interfaces";
import styles from "./ArrowButton.module.scss";

const ArrowButton = ({ goToPage }: IArrowButtonProps) => {
  return (
    <NextLink href={goToPage}>
      <div className={`${styles.arrowButton} flex-column-container`}>
        <Image src="/images/arrow-right.svg" width={45} height={45} />
        <h3>View results</h3>
      </div>
    </NextLink>
  );
};

export default ArrowButton;
