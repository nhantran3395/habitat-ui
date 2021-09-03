import React from "react";
import Image from "next/image";
import { ILayoutProps } from "./interfaces";
import Header from "../Header";
import SocialNetworkBar from "../SocialNetworkBar";
import styles from "./Layout.module.scss";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="flex-column-container w-100 min-h-100vh">
      <div className={styles.topRightCorner}>
        <Image src="/images/top-right-corner.svg" width={419} height={330} />
      </div>

      <Header />

      <div className="flex-container-column w-80 min-h-100vh">{children}</div>

      <SocialNetworkBar />

      <div className={styles.bottomLeftCorner}>
        <Image src="/images/bottom-left-corner.svg" width={419} height={330} />
      </div>
    </div>
  );
};

export default Layout;
