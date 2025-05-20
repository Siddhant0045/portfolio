import React from "react";
import styles from "./Contact.module.scss";

function Contact() {
    return (
        <div className={styles.whole_contact_page}>
            <h1 className={styles.contact_name}>Contact Me</h1>
            <h6 className={styles.lets_get_in_touch}>LET'S GET IN TOUCH!!</h6>
            <a href="mailto:siddhantshinde76676@gmail.com" style={{ fontSize: "32px", marginTop: "48px", color: "white", textDecoration: "none" }}>
                siddhantshinde76676@gmail.com
            </a>            
            <div className={styles.email_line}></div>
            <div className={styles.external_link_div}>
                <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                    <span className={styles.link_text}>Linkedin</span>
                </a>
                <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                    <span className={styles.link_text}>Github</span>
                </a>
            </div>
        </div>
    );
}

export default Contact;
