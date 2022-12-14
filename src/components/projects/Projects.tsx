import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import uniqid from 'uniqid';
import Project from './Project';
import MoreProjects from './MoreProjects';
import projectPreviews from '../../util/projectPreviews';

interface Props {
    scrollView: number;
}

function Projects({ scrollView }: Props) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (scrollView < 35) {
            setInView(false);
        } else if (scrollView >= 35 && scrollView <= 95) {
            setInView(true);
        } else if (scrollView > 95) {
            setInView(false);
        }
    }, [scrollView]);

    const projectsInView = <motion.div 
            className='projects-container'
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className='projects-header'>
                <p className='number'>03.</p>
                <h2>Projects</h2>
            </div>
            <div className='projects-list'>
                {projectPreviews.map((project) => {
                    return (
                        <Project 
                            key={uniqid()} 
                            project={project}
                        />
                    )
                })}
            </div>
            <MoreProjects />
        </motion.div>
    
    const projectsOutView = <motion.div 
            className='projects-container'
            animate={{ scale: 0.6 }}
            transition={{ duration: 0.8 }}
        >
            <div className='projects-header'>
                <p className='number'>03.</p>
                <h2>Projects</h2>
            </div>
            <div className='projects-list'>
                {projectPreviews.map((project) => {
                    return (
                        <Project 
                            key={uniqid()} 
                            project={project}
                        />
                    )
                })}
            </div>
            <MoreProjects />
        </motion.div>

    return (
        <div className='projects' id='projects'>
            {inView ? projectsInView : projectsOutView}
        </div>
    )
}

export default Projects;