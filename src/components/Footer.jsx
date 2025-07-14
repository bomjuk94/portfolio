import { getYear } from '../utilities/getDate';
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-[var(--color-surface)] py-4 px-2 border-none border-[var(--color-border)]" id='footerContact'>
            <div className="flex flex-col gap-3 items-center">
                <div className="flex items-center gap-4">
                    <a
                        href="mailto:bomju.kim@outlook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition duration-150"
                    >
                        <HiOutlineMail className="w-[var(--spacing-twenty-five)] h-[var(--spacing-twenty-five)]" />
                    </a>
                    <a
                        href="https://github.com/bomjuk94"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition duration-150"
                    >
                        <BsGithub className="w-[var(--spacing-twenty-five)] h-[var(--spacing-twenty-five)]" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/bomju-kim/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition duration-150"
                    >
                        <BsLinkedin className="w-[var(--spacing-twenty-five)] h-[var(--spacing-twenty-five)]" />
                    </a>
                </div>

                <p className="text-sm text-[var(--color-muted)] font-heading">
                    {`© ${getYear()} || Bomju "BK" Kim`}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
