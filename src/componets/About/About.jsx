import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
   <section className={styles.container} id="about">
    <h2 className={styles.title}>Meet Atiqah</h2>
    <div className={styles.content}>
        <img 
        src={getImageUrl("about/aboutImage.png")}
        alt="Me sitting with a laptop"
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")}
                alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>About</h3>
                    <p>
                    I’m Nurul Atiqah, 
                    a dedicated Full Stack Developer with a passion for creating dynamic and responsive web applications.
                    My goal is to continuously enhance my skills in front-end and back end development and explore new technologies and frameworks. I aim to contribute to innovative projects that push the boundaries of web development,
                    and I am eager to collaborate with other professionals to achieve outstanding results.
                    </p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")}
                alt="Server icon" />
                <div className={styles.aboutItemText}>
                    <h3>Education</h3>
                    <p>
                    I am a recent graduate from Universiti Teknologi MARA (UiTM) with a Bachelor of Information Science (Hons) majoring in Records Management.
                    I have recently transitioned into the field of Java programming by obtaining the Java OCA (Oracle Certified Associate) certification. 
                    </p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")}
                alt="UI icon" />
                <div className={styles.aboutItemText}>
                    <h3>Certificate</h3>
                    <p>                    
                    • CCSD Java Certificate | CCSD COUNCIL - Convergence Certification and Skill
                    Development Council <br></br>
                    • Oracle Certified Foundations Associate (IZ0-811) | Oracle Academy
                    </p>
                </div>
            </li>

        </ul>
    </div>
   </section>
  );
};
