import { NavLink } from "react-router-dom";
import Button from "./Button";
import { MdCatchingPokemon } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { GiMagnifyingGlass } from 'react-icons/gi';

const ProjectCard = ({ project }) => {
    const { title, slug, thumbnailImg, technologies, excerpt, liveUrl, githubUrls, githubUrl, moreInfo } = project;

    return (
        <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-md flex flex-col h-full">
            <img
                src={thumbnailImg}
                alt={title}
                className="w-full h-52 object-cover"
            />

            <div className="p-6 flex flex-col gap-3 flex-grow">
                <h3 className="text-xl font-heading text-[var(--color-primary)] font-semibold">{title}</h3>
                <p className="text-sm text-[var(--color-muted)] italic">
                    Tools: {technologies.join(', ')}
                </p>
                <p className="text-base text-[var(--color-text)]">{excerpt}</p>

                <div className="mt-auto pt-4 flex flex-row flex-wrap justify-center md:justify-start gap-3">
                    {liveUrl && (
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="primary">
                                <span className="flex items-center gap-2">
                                    <MdCatchingPokemon className="text-lg" />
                                    Live Site
                                </span>
                            </Button>
                        </a>
                    )}
                    {
                        githubUrls.client && (
                            <a href={githubUrls.client} target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost">
                                    <span className="flex items-center gap-2">
                                        <FaGithub className="text-lg" />
                                        GitHub
                                    </span>
                                </Button>
                            </a>
                        )
                    }
                    {
                        githubUrls.server && (
                            <a href={githubUrls.server} target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost">
                                    <span className="flex items-center gap-2">
                                        <FaGithub className="text-lg" />
                                        Server Repo
                                    </span>
                                </Button>
                            </a>
                        )
                    }
                    {moreInfo && (
                        <NavLink to={`/project/${slug}`}>
                            <Button variant="accent">
                                <span className="flex items-center gap-2">
                                    <GiMagnifyingGlass className="text-lg" />
                                    More Info
                                </span>
                            </Button>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
