import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ms.Sangeetha Nagaraj</h1>
        <p className={styles.description}>
         PROFESSIONAL DEVOPS ENGINEER
        </p>
        <a href="https://drive.google.com/file/d/1m_-M5PL9uylnYam6ZdBpFY-Z1aZO-zUc/view?usp=drivesdk" className={styles.contactBtn}>
         Download resume 
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
