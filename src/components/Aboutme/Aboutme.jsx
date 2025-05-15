import React from "react";
import styles from "./Aboutme.module.scss"


function Aboutme() {
    return <div className={styles.container_aboutme}>
        <div className={styles.content_aboutme}>
            <h1 className={styles.aboutme_text}>About Me</h1>
            <br></br>
            <p>I am currently a 4th year student studying in Vellore Institute of Technology, Vellore.
                From very early on in my life, I have been interested in Technology and Computers.
                Hence, I am currently pursuing this interest as a Computer Science student.</p>
            <br></br>
            <p> I have a strong foundation in Web Development, App Development and Competitive Programming, and 
                I am constantly seeking opportunities to learn new concepts, technologies, and tools 
                to create the best possible user experience. I am driven to continuously improve my 
                skills and stay up to date with the latest advancements in technology.</p>
        </div>
    </div>
}   

export default Aboutme;