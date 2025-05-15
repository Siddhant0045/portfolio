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
        // scrolling down
        setIsVisible(false);
      } else {
        // scrolling up
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
          <li>Resume</li>
          <li>About Me</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
