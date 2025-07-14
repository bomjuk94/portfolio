import ProjectCard from './ProjectCard';
import { projectData } from '../data/projectData';

const FeaturedProjects = () => {
    return (
        <section className="py-12 px-6 bg-[var(--color-surface)]">
            <div className="max-w-desktop mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-[var(--color-primary)]">Featured Projects</h2>
                <div className="grid gap-10 md:grid-cols-2 items-stretch">
                    {projectData
                        .filter((project) => project.featured)
                        .map((project, index) => (
                            <div key={index} className="h-full">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
