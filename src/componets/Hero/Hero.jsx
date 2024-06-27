import React from 'react'

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Atiqah</h1>
            <p className={styles.description}>
           Full Stack Developer
            </p>

           {/*  <a href="mailto:Ikanezam76@gmail.com" className={styles.contactBtn}
            >Contact Me</a>
            <br></br> */}
        
     
          <a className={styles.contactBtn} href="../assets/hero/Resume Nurul Atiqah Binti Mohd Nezam.pdf" download = "Resume Nurul Atiqah.pdf">
            Download Resume
        </a>

        </div>
        <img src={getImageUrl("hero/girl.png")} 
        alt="Hero Image of me" 
        className={styles.heroImg} 
        />
        <div className={styles.toBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
