import { useState } from 'react';
import { motion } from 'framer-motion';
import { projectData } from '../data/projectData';
import ProjectCard from '../components/ProjectCard';
import Filters from '../components/Filters';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects =
        activeFilter === 'All'
            ? projectData
            : projectData.filter((project) => project.tags.includes(activeFilter));

    return (
        <section className="min-h-screen flex flex-col justify-between bg-[var(--color-bg)] text-[var(--color-text)] py-12 px-6">
            <div className="flex-grow max-w-desktop mx-auto">
                <motion.h1
                    className="text-4xl font-heading font-bold text-[var(--color-primary)] mb-4 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Projects
                </motion.h1>

                <motion.p
                    className="text-base font-pixel text-[var(--color-muted)] max-w-2xl mx-auto text-center mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    An assortment of projects I have helped to develop over the years. The list is updated throughout the year, so stay tuned for more!
                </motion.p>

                <Filters setActiveFilter={setActiveFilter} activeFilter={activeFilter} />

                <motion.div
                    className="grid gap-10 md:grid-cols-2 items-stretch"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="h-full"
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
