import React from "react";
import Image from "next/image";
import { ILayoutProps } from "./interfaces";
import { Pane, majorScale } from "evergreen-ui";
import Header from "../Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Pane
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      justifySelf="center"
      flexDirection="column"
    >
      <Pane className={styles.bottomLeftCorner}>
        <Image src="/images/bottom-left-corner.svg" width={400} height={400} />
      </Pane>

      <Pane className={styles.topRightCorner}>
        <Image src="/images/top-right-corner.svg" width={400} height={400} />
      </Pane>

      <Pane
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        margin={majorScale(5)}
        className={styles.bottomRightCorner}
      >
        <Image src="/images/facebook.svg" width={54} height={54} />
        <Image src="/images/twitter.svg" width={47} height={47} />
        <Image src="/images/instagram.svg" width={46} height={46} />
        <Image src="/images/whatsapp.svg" width={38} height={38} />
      </Pane>

      <Header />
      <Pane
        width="80%"
        height="100%"
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
