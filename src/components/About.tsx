import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className={styles.contentWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>About Me</h1>
      <p>
        I am a skilled and experienced graphic designer and front-end developer with a passion for creating innovative and user-friendly designs. Proficient in Adobe Photoshop and Premiere Pro, I blend creativity with technical precision. My knowledge of HTML, CSS, and JavaScript enables me to craft seamless, interactive experiences that resonate with users.
      </p>
      <p>
        As the Design Lead of IEEE MEA SB, I spearhead creative projects, mentor aspiring designers, and foster a collaborative environment. My dedication to continuous learning and innovation drives me to deliver impactful designs and solutions.
      </p>
    </motion.div>
  );
};

export default About;
