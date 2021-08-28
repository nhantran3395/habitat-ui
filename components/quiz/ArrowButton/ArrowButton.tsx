import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Pane, Heading } from "evergreen-ui";
import styles from "./ArrowButton.module.scss";

const ArrowButton = () => {
  return (
    <NextLink href="/quiz/results">
      <Pane
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={styles.arrowButton}
      >
        <Image src="/images/arrow-right.svg" width={45} height={45} />
        <Heading>View results</Heading>
      </Pane>
    </NextLink>
  );
};

export default ArrowButton;
