import { NavLink } from 'react-router-dom';
import { navLinks } from '../utilities/Constants';
import { BsChatDots } from 'react-icons/bs';

const Nav = ({ menu, setMenu }) => {
    return (
        <nav
            className={`${menu ? 'absolute' : 'hidden'
                } top-[77px] left-0 right-0 bg-[var(--color-surface)] z-50 shadow-md`}
        >
            <ul className="flex flex-col gap-2 items-center py-4">
                {navLinks.map(({ name, path, icon: Icon }) => (
                    <NavLink
                        to={path}
                        key={name}
                        onClick={() => setMenu(false)}
                        className="flex items-center gap-2 text-[var(--color-text)] hover:text-[var(--color-primary)] font-heading text-base transition duration-150"
                    >
                        <Icon className="text-lg" />
                        {name}
                    </NavLink>
                ))}
                <button
                    onClick={() => {
                        setMenu(false);
                        document.getElementById('footerContact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 text-[var(--color-text)] hover:text-[var(--color-primary)] font-heading text-base transition duration-150 cursor-pointer"
                >
                    <BsChatDots />
                    Contact
                </button>
            </ul>
        </nav>
    );
};

export default Nav;
