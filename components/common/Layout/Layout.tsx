import React from "react";
import Image from "next/image";
import { ILayoutProps } from "./interfaces";
import { Pane, majorScale } from "evergreen-ui";
import Header from "../Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="flex-column-container w-100">
      <div className={styles.topRightCorner}>
        <Image src="/images/top-right-corner.svg" width={419} height={330} />
      </div>

      <Header />
      <div className="flex-container-column w-80">{children}</div>

      <div className={styles.bottomLeftCorner}>
        <Image src="/images/bottom-left-corner.svg" width={419} height={330} />
      </div>
    </div>
  );
};

export default Layout;
