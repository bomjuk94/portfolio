import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Switch from 'react-switch';
import logo from '../assets/icon.svg';
import Nav from './Nav';
import { MdCatchingPokemon } from 'react-icons/md';
import { TbPokeball } from 'react-icons/tb';
import { PiSunHorizonFill } from 'react-icons/pi';

const Header = ({ theme, toggleTheme }) => {
    const [menu, setMenu] = useState(false);

    const handleMenuClick = () => {
        setMenu((prev) => !prev);
    };

    return (
        <header className="bg-[var(--color-bg)] relative">
            <div className="max-w-desktop flex items-center justify-between mx-auto py-4 px-5">
                <NavLink to="/" onClick={() => setMenu(false)}>
                    <img src={logo} alt="logo" className="w-[var(--spacing-fourty)]" />
                </NavLink>

                <div className="flex items-center gap-4">
                    <Switch
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                        onColor="#EF5350"
                        offColor="#FDD835"
                        checkedIcon={
                            <div className="flex items-center justify-center h-full pl-1 text-white text-base">
                                <TbPokeball />
                            </div>
                        }
                        uncheckedIcon={
                            <div className="flex items-center justify-center h-full pl-1 text-yellow-700 text-base">
                                <PiSunHorizonFill />
                            </div>
                        }
                        handleDiameter={20}
                        height={22}
                        width={48}
                    />

                    {menu ? (
                        <TbPokeball
                            className="cursor-pointer w-[var(--spacing-twenty-five)] h-[var(--spacing-twenty-five)] text-[var(--color-primary)]"
                            onClick={handleMenuClick}
                        />
                    ) : (
                        <MdCatchingPokemon
                            className="cursor-pointer w-[var(--spacing-twenty-five)] h-[var(--spacing-twenty-five)] text-[var(--color-primary)]"
                            onClick={handleMenuClick}
                        />
                    )}

                    <Nav menu={menu} setMenu={setMenu} />
                </div>
            </div>
        </header>
    );
};

export default Header;
