import { filters } from "../utilities/Constants"

const Filters = ({ setActiveFilter, activeFilter }) => {
    return (
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {
                filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 text-sm font-heading border-2 border-[var(--color-primary)] rounded-md shadow-md transition cursor-pointer duration-200  
              ${activeFilter === filter
                                ? 'bg-[var(--color-primary)] text-white'
                                : 'bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white'
                            }
            `}
                    >
                        {filter}
                    </button>
                ))
            }
        </div>
    )
}

export default Filters