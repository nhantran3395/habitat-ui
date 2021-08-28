import React from "react";
import Image from "next/image";
import styles from "./SocialNetworkBar.module.scss";

const SocialNetworkBar = () => {
  return (
    <div className={styles.bottomRightCorner}>
      <Image src="/images/facebook.svg" width={54} height={54} />
      <Image src="/images/twitter.svg" width={47} height={47} />
      <Image src="/images/instagram.svg" width={46} height={46} />
      <Image src="/images/whatsapp.svg" width={38} height={38} />
    </div>
  );
};

export default SocialNetworkBar;
