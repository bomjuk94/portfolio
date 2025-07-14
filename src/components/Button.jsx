const Button = ({ children, onClick, type = "button", variant = "primary" }) => {
    const base =
        "inline-block px-6 py-2 rounded-lg font-bold text-sm tracking-wide shadow-md transition-all duration-200 cursor-pointer";

    const variants = {
        primary: "bg-[var(--color-primary)] text-white hover:opacity-90",
        accent: "bg-[var(--color-accent)] text-[var(--color-text-secondary)] hover:opacity-90",
        ghost:
            "bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] " +
            "hover:bg-[var(--color-primary)] hover:text-white",
        surface: "bg-[var(--color-surface)] text-[var(--color-text)] hover:opacity-90",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${base} ${variants[variant] || variants.primary}`}
        >
            {children}
        </button>
    );
};

export default Button;
