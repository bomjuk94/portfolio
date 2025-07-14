import { NavLink } from 'react-router-dom';
import Button from './Button';
import { GiMagnifyingGlass } from 'react-icons/gi';

const ExploreProjectsCTA = () => {
    return (
        <section className="bg-[var(--color-surface)] py-12 px-6 border-none">
            <div className="max-w-desktop mx-auto text-center flex flex-col items-center gap-6 max-w-desktop">
                <h2 className="text-3xl font-heading text-[var(--color-primary)]">
                    Explore My Work
                </h2>
                <p className="text-[var(--color-text)] max-w-xl text-base font-pixel">
                    From creative experiments to polished products, my projects reflect my journey as a developer. Curious?
                </p>
                <NavLink to="/projects">
                    <Button variant="accent">
                        <span className="flex items-center gap-2">
                            <GiMagnifyingGlass className="text-lg" />
                            View Projects
                        </span>
                    </Button>
                </NavLink>
            </div>
        </section>
    );
};

export default ExploreProjectsCTA;
