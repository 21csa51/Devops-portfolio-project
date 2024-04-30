import React from "react";

import styles from "./Experience.module.css";


export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.box}>
        <ul className={styles.list}>
          <li>Google Cloud career readiness Associate Cloud Engineer Track</li>
          <li>Docker For Developers</li>
          <li>Responsive Web Design</li>
        </ul>
      </div>
     

    </section>
  );
};
