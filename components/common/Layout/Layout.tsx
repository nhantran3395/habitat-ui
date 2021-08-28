import React from "react";
import Image from "next/image";
import { ILayoutProps } from "./interfaces";
import { Pane, majorScale } from "evergreen-ui";
import Header from "../Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Pane
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      justifySelf="center"
      flexDirection="column"
    >
      <Pane className={styles.bottomLeftCorner}>
        <Image src="/images/bottom-left-corner.svg" width={420} height={330} />
      </Pane>

      <Pane className={styles.topRightCorner}>
        <Image src="/images/top-right-corner.svg" width={420} height={330} />
      </Pane>

      <Header />
      <Pane
        width="80%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Pane>
    </Pane>
  );
};

export default Layout;
