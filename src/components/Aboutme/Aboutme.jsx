import React, { useRef, useEffect, useState } from "react";
import styles from "./Aboutme.module.scss";
import { motion, useInView } from "framer-motion";
import { variants } from "../../../assets/js/variants";

function Aboutme() {
    const ref = React.useRef();
    const isInView = useInView(ref, { once: true });
    
      return (
        <motion.div
          ref={ref}
          className={styles.container_aboutme}
          variants={variants.containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className={styles.content_aboutme} variants={variants.textVariants}>
            <h1 className={styles.aboutme_text}>About Me</h1><br></br>
            <p>
              I am currently a 4th year student studying in Vellore Institute of
              Technology, Vellore. From very early on in my life, I have been
              interested in Technology and Computers. Hence, I am currently pursuing
              this interest as a Computer Science student.
            </p>
            <br></br>
            <p>
              I have a strong foundation in Web Development, App Development and
              Competitive Programming, and I am constantly seeking opportunities to
              learn new concepts, technologies, and tools to create the best
              possible user experience. I am driven to continuously improve my
              skills and stay up to date with the latest advancements in technology.
            </p>
          </motion.div>
        </motion.div>
      );  } 

export default Aboutme;
