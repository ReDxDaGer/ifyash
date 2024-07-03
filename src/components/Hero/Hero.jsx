import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yash Mehrotra</h1>
        <p className={styles.description}>
        Tech enthusiast crafting websites and Android apps. Teaching computers to see in my spare time - robot assistants, anyone? Let's chat about code, AI, or why my toaster won't learn facial recognition. Open to exciting opportunities!
        </p>
        <a href="https://redxdager.github.io/resume/" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/avatar-removebg-preview.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
