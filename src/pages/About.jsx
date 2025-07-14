import { motion } from 'framer-motion';
import Skills from "../components/Skills";

const About = () => {
    return (
        <section className="min-h-screen flex flex-col justify-between bg-[var(--color-bg)] text-[var(--color-text)] py-12 px-6">
            <div className="flex-grow max-w-desktop mx-auto">
                <motion.h1
                    className="text-4xl font-heading font-bold text-[var(--color-primary)] mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h1>

                <motion.div
                    className="mb-12 space-y-4 text-base font-pixel leading-relaxed max-w-3xl mx-auto text-center md:text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <p>
                        Hey, I’m BK, a frontend developer with a love for clean code, expressive interfaces, and a little Pokémon-style fun along the way.
                    </p>
                    <p>
                        I focus on building accessible, performant, and visually engaging web experiences using modern tools like React, Tailwind, and TypeScript. My journey into tech was fueled by curiosity and the joy of solving real problems with design and code.
                    </p>
                    <p>
                        Outside of work, I enjoy solo hikes, experimenting with indie app/game ideas, and challenging myself with fitness and personal growth goals.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <Skills />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
