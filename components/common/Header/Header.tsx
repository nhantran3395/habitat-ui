import React from "react";
import NextLink from "next/link";
import NavigationBar from "../NavigationBar";
import styles from "../Header/Header.module.scss";

const appName = process.env.NEXT_PUBLIC_APP_NAME;

const Header = () => {
  return (
    <div className="w-80 h-20 flex-column-container">
      <NextLink href="/">
        <a>
          <h1 className={styles.appHeading}>{appName}</h1>
        </a>
      </NextLink>
      <NavigationBar />
    </div>
  );
};

export default Header;
