import React from 'react';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, imageUrl }: { title: string, description: string, imageUrl: string }) => (
  <div className={styles.projectCard}>
    <img src={imageUrl} alt={title} className={styles.projectImage} />
    <div className={styles.projectInfo}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Projects = () => {
  return (
    <motion.div 
      className={styles.contentWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>My Work</h1>
      <div className={styles.projectsGrid}>
        <ProjectCard 
          title="Project One" 
          description="A web application for managing tasks and projects." 
          imageUrl="https://picsum.photos/seed/project1/400/300" 
        />
        <ProjectCard 
          title="Project Two" 
          description="An e-commerce platform with a modern UI/UX." 
          imageUrl="https://picsum.photos/seed/project2/400/300" 
        />
        <ProjectCard 
          title="Project Three" 
          description="A mobile app for tracking fitness goals." 
          imageUrl="https://picsum.photos/seed/project3/400/300" 
        />
      </div>
    </motion.div>
  );
};

export default Projects;
