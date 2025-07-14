import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/banner_home.webp';
import Button from './Button';

const Banner = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-[var(--color-surface)] py-12 px-6">
            <div className="max-w-desktop mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Image Section */}
                <div className="md:w-1/2">
                    <img
                        src={heroImg}
                        alt="Banner"
                        className="w-full"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4 text-[var(--color-primary)] font-heading">
                        Hi, my name is BK
                    </h1>
                    <p className="mb-6 text-[var(--color-muted)] font-pixel">
                        Frontend developer crafting accessible, high-performance digital experiences.
                    </p>
                    <Button variant="primary" onClick={() => navigate('/projects')}>
                        View Projects
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
