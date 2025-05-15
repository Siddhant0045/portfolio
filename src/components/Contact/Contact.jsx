import React from "react";
import styles from "./Contact.module.scss";

function Contact(){
    return <div className={styles.whole_contact_page}>
        <div className={styles.contact_heading_div}>
            <div className={styles.whiteline_contact}></div>
            <h1 className={styles.contact_name}>Contact Me</h1>
        </div>
        <div className={styles.social}>
            <ul className={styles.contact_list}>
                <li>siddhantshinde75576@gmail.com</li>
                <li>Siddhant</li>
                <li>siddhant0045</li>
                <li>siddhant.7980</li>
            </ul>
        </div>
    </div>
}

export default Contact;