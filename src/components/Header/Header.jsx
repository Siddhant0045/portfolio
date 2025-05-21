import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 0);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `
    ${styles.header} 
    ${isScrolled ? styles.scrolled : ""} 
    ${!isVisible ? styles.hidden : ""}
  `;

  return (
    <header className={headerClasses}>
      <div className={styles.myname}>Siddhant Shinde</div>
      <div className={styles.navigation}>
        <ul>
          <li className={styles.menuu}>Resume</li>
          <li className={styles.menuu}>About Me</li>
          <li className={styles.menuu}>Skills</li>
          <li className={styles.menuu}>Project</li>
          <li className={styles.menuu}>Contact Me</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
