import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectData } from '../data/projectData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndividualProject = () => {
    const { slug } = useParams();
    const project = projectData.find((proj) => proj.slug === slug);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    };

    if (!project) {
        return (
            <div className="flex-grow flex flex-col items-center justify-center py-12 px-6 text-[var(--color-text)]">
                <h2 className="text-3xl font-heading font-bold mb-4">Project Not Found</h2>
                <Link to="/projects" className="text-[var(--color-primary)] hover:underline">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="flex-grow flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
            {/* Banner Image */}
            {project.bannerImg && (
                <div className="w-full h-[300px] overflow-hidden">
                    <img
                        src={project.bannerImg}
                        alt={`${project.title} banner`}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Main Content */}
            <div className="max-w-desktop mx-auto py-12 px-6 flex-grow flex flex-col">
                {/* Title */}
                <motion.h1
                    className="text-4xl font-heading font-bold text-[var(--color-primary)] mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {project.title}
                </motion.h1>

                {/* Skills & Roles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <h2 className="text-xl font-bold text-[var(--color-primary)] mb-2">Skills & Tools</h2>
                        <ul className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                                <li
                                    key={i}
                                    className="bg-[var(--color-surface)] px-3 py-1 rounded-full text-sm border border-[var(--color-border)]"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-[var(--color-primary)] mb-2">Roles</h2>
                        <ul className="list-disc ml-5">
                            {project.roles.map((role, i) => (
                                <li key={i}>{role}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mb-10">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--color-primary)] text-[var(--color-bg)] px-6 py-2 rounded font-bold hover:opacity-90 transition"
                        >
                            Live Site
                        </a>
                    )}
                    {project.githubUrls.client && (
                        <a
                            href={project.githubUrls.client}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-2 rounded font-bold hover:bg-[var(--color-surface)] transition"
                        >
                            GitHub Repo
                        </a>
                    )}
                    {project.githubUrls.server && (
                        <a
                            href={project.githubUrls.server}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-2 rounded font-bold hover:bg-[var(--color-surface)] transition"
                        >
                            Server Repo
                        </a>
                    )}
                </div>

                {/* Project Sections */}
                {project.overview && (
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Overview</h2>
                        <p>{project.overview}</p>
                    </section>
                )}

                {project.design && (
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Design</h2>
                        <p>{project.design}</p>
                    </section>
                )}

                {project.development && (
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Development</h2>
                        <p>{project.development}</p>
                    </section>
                )}

                {project.reflection && (
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Reflection</h2>
                        <p>{project.reflection}</p>
                    </section>
                )}
            </div>

            {/* Screenshot Slider */}
            {project.screenshots && project.screenshots.length > 0 && (
                <div className="w-full py-8 bg-[var(--color-surface)]">
                    <div className="max-w-desktop mx-auto px-6">
                        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Screenshots</h2>
                        <div style={{ maxWidth: "100%", overflow: "hidden" }}>
                            <Slider {...sliderSettings}>
                                {project.screenshots.map((src, index) => (
                                    <div key={index} className="px-2">
                                        <img
                                            src={src}
                                            alt={`Screenshot ${index + 1}`}
                                            className="w-full rounded-lg shadow-md object-cover max-h-[500px] mx-auto"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            )}

            {/* Pagination */}
            <div className="max-w-desktop mx-auto px-6 pt-8 pb-12">
                <div className="flex justify-between gap-10">
                    {project.prevLink ? (
                        <Link
                            to={`/project/${project.prevLink.replace('/', '')}`}
                            className="text-[var(--color-primary)] hover:underline"
                        >
                            ← Previous
                        </Link>
                    ) : <div></div>}

                    {project.nextLink && (
                        <Link
                            to={`/project/${project.nextLink.replace('/', '')}`}
                            className="text-[var(--color-primary)] hover:underline"
                        >
                            Next →
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IndividualProject;
