import { toolkit } from "../utilities/Constants";

const Skills = () => {
    return (
        <div className="mt-1">
            <h2 className="text-2xl font-heading font-semibold text-[var(--color-primary)] text-center md:text-left mb-8">
                Skills & Tools
            </h2>
            <ul className="grid grid-cols-2 justify-items-center sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm font-pixel text-[var(--color-muted)]">
                {toolkit.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
