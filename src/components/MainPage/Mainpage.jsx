import React from "react";
import styles from "./Mainpage.module.scss";

function Mainpage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.mypfp} src="./src/assets/mypfp.jpg" alt="My Profile" />
        <div className={styles.aboutme}><h2 className={styles.hello}>Hello, I'm</h2>
        <h1 className={styles.siddhant}>Siddhant Shinde</h1>
        <h2 className={styles.description}>A Web and App Developer and</h2>
        <h2 className={styles.description}>Competitive Coder</h2></div>
      </div>
    </div>
  );
}

export default Mainpage;
