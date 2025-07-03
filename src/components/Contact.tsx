import React from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      className={styles.contentWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Get in Touch</h1>
      <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. If you'd like to get in touch, please fill out the form below.</p>
      <form className={styles.form}>
        <input type="text" placeholder="Your Name" className={styles.input} />
        <input type="email" placeholder="Your Email" className={styles.input} />
        <textarea placeholder="Your Message" className={styles.textarea}></textarea>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </motion.div>
  );
};

export default Contact;
