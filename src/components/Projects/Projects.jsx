import React from "react";
import styles from "./Projects.module.scss";

function Projects() {
    return (
        <div className={styles.container}>

            <div className={styles.project_heading_div}>
                <h1 className={styles.projects_name}>Projects</h1>
                <div className={styles.whiteline_projects}></div>
            </div>

            <div className={`${styles.project} ${styles.normal}`}>
                <div className={styles.box}></div>
                <div className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </div>

            <div className={`${styles.project} ${styles.reversed}`}>
                <div className={styles.box}></div>
                <div className={styles.text}>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>

            <div className={`${styles.project} ${styles.normal}`}>
                <div className={styles.box}></div>
                <div className={styles.text}>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </div>
            </div>

            <div className={`${styles.project} ${styles.reversed}`}>
                <div className={styles.box}></div>
                <div className={styles.text}>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                </div>
            </div>

            <div className={`${styles.project} ${styles.normal}`}>
                <div className={styles.box}></div>
                <div className={styles.text}>
                    Excepteur sint occaecat cupidatat non proident.
                </div>
            </div>

        </div>
    );
}

export default Projects;
