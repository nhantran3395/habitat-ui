import React from "react";
import NextLink from "next/link";
import { Pane, Heading, Link, majorScale } from "evergreen-ui";
import NavigationBar from "../NavigationBar";
import styles from "./Header.module.css";

const appName = process.env.NEXT_PUBLIC_APP_NAME;

const Header = () => {
  return (
    <Pane
      width="80%"
      height="100px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin={majorScale(3)}
    >
      <NextLink href="/">
        <Link
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          margin={majorScale(2)}
          cursor="pointer"
        >
          <Heading size={900} className={styles.heading}>
            {appName}
          </Heading>
        </Link>
      </NextLink>
      <NavigationBar />
    </Pane>
  );
};

export default Header;
