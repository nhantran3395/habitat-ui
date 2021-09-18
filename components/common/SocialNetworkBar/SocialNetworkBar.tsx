import React from "react";
import Image from "next/image";
import styles from "./SocialNetworkBar.module.scss";

const SocialNetworkBar = () => {
  return (
    <div className={styles.socialNetworkBar}>
      <div className={styles.socialNetworkIconContainer}>
        <Image
          src="/images/facebook.svg"
          width={48}
          height={48}
          layout="fixed"
        />
      </div>
      <div className={styles.socialNetworkIconContainer}>
        <Image
          src="/images/twitter.svg"
          width={48}
          height={48}
          layout="fixed"
        />
      </div>
      <div className={styles.socialNetworkIconContainer}>
        <Image
          src="/images/instagram.svg"
          width={48}
          height={48}
          layout="fixed"
        />
      </div>
      <div className={styles.socialNetworkIconContainer}>
        <Image
          src="/images/whatsapp.svg"
          width={48}
          height={48}
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default SocialNetworkBar;
