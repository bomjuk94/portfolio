/* 
    Project Fields

    slug: string [REQUIRED]
    title: string [REQUIRED]
    featured: boolean [REQUIRED]
    excerpt: string [REQUIRED]
    technologies: string[]
    roles: string[]
    category: string[]
    thumbnailImg: string [REQUIRED]
    bannerImg: string 
    liveUrl: string
    githubUrl: string
    moreInfo: boolean [REQUIRED]
    overview: string
    development: string
    reflection: string
    screenshots: string[]
    prevLink: string [REQUIRED]
    nextLink: string [REQUIRED]
*/

// DexQuest
import dexquestThumbnailImg from '../assets/projects/dexquest/featured-dexquest.webp';
import dexquestBannerImg from '../assets/projects/dexquest/banner-dexquest.webp';
import dexquestScreenshot1 from '../assets/projects/dexquest/screenshots/dexquest-carousel-1.webp';
import dexquestScreenshot2 from '../assets/projects/dexquest/screenshots/dexquest-carousel-2.webp';
import dexquestScreenshot3 from '../assets/projects/dexquest/screenshots/dexquest-carousel-3.webp';
import dexquestScreenshot4 from '../assets/projects/dexquest/screenshots/dexquest-carousel-5.webp';

// Cinephile
import cinephileThumbnailImg from '../assets/projects/cinephile/featured-cinephile.webp';
import cinephileBannerImg from '../assets/projects/cinephile/banner-cinephile.webp';
import cinephileScreenshot1 from '../assets/projects/cinephile/screenshots/cinephile-carousel-1.webp';
import cinephileScreenshot2 from '../assets/projects/cinephile/screenshots/cinephile-carousel-2.webp';
import cinephileScreenshot3 from '../assets/projects/cinephile/screenshots/cinephile-carousel-3.webp';

// TypeScript To Do App
import typeScriptToDoThumbnailImg from '../assets/projects/to-do-app/featured-typescript-to-do-app.webp';

// Hi Low
import hiLowThumbnailImg from '../assets/projects/javascript-game/featured-hi-low-game.webp';

// Portfolio
import portfolioThumbnailImg from '../assets/projects/portfolio/featured-portfolio.webp';
import portfolioBannerImg from '../assets/projects/portfolio/banner-portfolio.webp';
import portfolioScreenshot1 from '../assets/projects/portfolio/screenshots/portfolio-carousel-1.webp';
import portfolioScreenshot2 from '../assets/projects/portfolio/screenshots/portfolio-carousel-2.webp';
import portfolioScreenshot3 from '../assets/projects/portfolio/screenshots/portfolio-carousel-3.webp';

// Weather App
import weatherAppThumbnailImg from '../assets/projects/weather-app/featured-weather-app.webp';

export const projectData = [
    {
        slug: 'dexquest',
        title: 'Dexquest',
        featured: true,
        excerpt:
            'A full-stack application where users can search, build teams, and track favorites. Built with React, TypeScript, and MongoDB, DexQuest blends game-inspired UI with real-world data architecture.',
        technologies: [
            'React',
            'TypeScript',
            'Zustand',
            'React Router',
            'Vite',
            'Tailwind CSS',
            'JWT',
            'MongoDB',
            'Node.js/Express.js',
            'dotenv',
            'Multer'
        ],
        roles: [
            "Development",
            "Architecture",
            "Design"
        ],
        tags: [
            'All',
            'Fullstack',
        ],
        thumbnailImg: dexquestThumbnailImg,
        bannerImg: dexquestBannerImg,
        liveUrl: 'https://dex-quest-client.vercel.app/',
        githubUrls: {
            client: 'https://github.com/dennisk94/DexQuest-Client',
            server: 'https://github.com/dennisk94/DexQuest-API',
        },
        moreInfo: true,
        overview: "DexQuest is a full-stack Pokémon web app that lets users explore creatures, build custom teams, save favorites, and view detailed stats. While creature data is sourced from the PokéAPI, it’s cached and stored in MongoDB to improve performance, support custom features, and reduce redundant fetches. The project is designed as a living portfolio piece — something technically robust, visually playful, and easily expandable",
        design: "DexQuest’s interface blends retro aesthetics with modern design practices. The color scheme, typography, and component layout draw inspiration from handheld-era Pokédex menus, while still ensuring accessibility and responsiveness. Animations and subtle effects give the app a game-like feel without compromising usability on desktop or mobile.",
        development: "DexQuest is split into a React + TypeScript frontend and a Node.js + Express backend. Zustand was used for state management due to its simplicity and scalability compared to Redux. MongoDB stores pokemon and user data, including favorites and saved teams. JWT-based authentication is implemented to manage login sessions securely. The app includes a dynamic stat visualizer, a real-time team builder with validation, and a silhouette guessing mini-game. Caching and lazy-loading were used to improve performance and reduce API calls.",
        reflection: "DexQuest gave me the space to experiment with real-world full-stack architecture while layering in creative, game-inspired interactions. It pushed me to think deeply about frontend-backend data flow, especially caching strategies and schema design. Working with Zustand was a refreshing change from Redux, and integrating MongoDB as a persistent layer unlocked ideas I couldn’t explore with just an API. This app reaffirmed that thoughtful technical structure and visual storytelling can coexist in one project.",
        screenshots: [
            dexquestScreenshot1,
            dexquestScreenshot2,
            dexquestScreenshot3,
            dexquestScreenshot4,
        ],
        prevLink: '/portfolio',
        nextLink: '/cinephile'
    },
    {
        slug: 'cinephile',
        title: 'Cinephile',
        featured: true,
        excerpt:
            'A sleek single-page React app for browsing and favoriting movies. Cinephile fetches real-time data from the TMDB API and delivers a responsive, filterable UI with persistent favorites powered by localStorage.',
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'React.js',
            'Redux'
        ],
        roles: [
            "Development",
            "Architecture",
            "Design"
        ],
        tags: [
            'All',
            'Frontend',
        ],
        thumbnailImg: cinephileThumbnailImg,
        bannerImg: cinephileBannerImg,
        // TODO: update url
        liveUrl: 'https://bomjukim.com/cinephile/',
        githubUrls: {
            client: 'https://github.com/dennisk94/Cinephile',
            server: '',
        },
        moreInfo: true,
        overview: "Cinephile is a single-page React application that allows users to explore popular, top-rated, upcoming, and now-playing films using real-time data from the TMDB API. Visitors can browse movie categories, view detailed film information, and save their favorites. The app is fully responsive and designed to offer an intuitive and fast movie discovery experience. It was built as an early exercise in API integration, dynamic UI rendering, and modular React development.",
        design: "The design merges modern web UI with a dark, cinematic feel. A black-and-indigo palette sets the tone, complemented by vibrant accent colors for calls to action and category highlights. High-fidelity mockups were created in Adobe Photoshop, followed by an interactive prototype in Adobe XD to map out UX flows. The layout emphasizes clarity, responsiveness, and ease of use across devices — particularly mobile, where swipeable carousels and touch-friendly components shine.",
        development: "Cinephile was built with React and styled using CSS3, with Redux powering the global state for favorited movies. Data is fetched from the TMDB API and rendered dynamically using useState and useEffect. A rotating banner carousel showcases top-rated films, while filters let users quickly switch between movie categories. The “Add to Favorites” feature uses Redux to track selections across components, storing them in localStorage for persistence. Routing is handled via React Router, and the overall component structure follows a clean, modular pattern.",
        reflection: "Cinephile was my first deep dive into React, and it challenged me to think in components and data flows. Working with a live API taught me how to handle asynchronous data and conditional rendering gracefully. Implementing a global state with Redux clarified the importance of separation between UI and data logic. While it began as a UI-focused project, Cinephile ultimately helped me internalize some of the core patterns that now guide my front-end work. If I were to revisit it, I’d refactor it using Zustand or Context for lighter state management and potentially migrate to TypeScript for more scalability.",
        screenshots: [
            cinephileScreenshot1,
            cinephileScreenshot2,
            cinephileScreenshot3
        ],
        prevLink: '/dexquest',
        nextLink: '/portfolio'
    },
    {
        slug: 'typescript-to-do-app',
        title: 'TypeScript To Do App',
        featured: false,
        excerpt:
            'A fully responsive to-do app built with TypeScript, React, and Redux. Features full CRUD functionality, localStorage persistence, and a clean, mobile-first design.',
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'React.js',
            'Redux',
            'TypeScript'
        ],
        roles: [
            "Development",
            "Architecture",
            "Design"
        ],
        tags: [
            'All',
            'Frontend',
        ],
        thumbnailImg: typeScriptToDoThumbnailImg,
        bannerImg: '',
        // TODO: update url
        liveUrl: 'https://bomjukim.com/todo-app/',
        githubUrls: {
            client: 'https://github.com/dennisk94/Todo-App',
            server: '',
        },
        moreInfo: false,
        overview: "",
        design: "",
        development: "",
        reflection: "",
        prevLink: '',
        nextLink: ''
    },
    {
        slug: 'hi-low-game',
        title: 'Hi-Low Game',
        featured: false,
        excerpt:
            'A simple number guessing game built with vanilla JavaScript and styled using HTML and Bootstrap. This was my first hands-on JavaScript project, focused on DOM manipulation, event handling, and game logic fundamentals.',
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript'
        ],
        roles: [
            "Development",
            "Architecture",
            "Design"
        ],
        tags: [
            'All',
            'Frontend'
        ],
        thumbnailImg: hiLowThumbnailImg,
        bannerImg: '',
        // TODO: update url
        liveUrl: 'https://bomjukim.com/hi-low-game/',
        githubUrls: {
            client: 'https://github.com/dennisk94/Hi-Low',
            server: '',
        },
        moreInfo: false,
        overview: "",
        design: "",
        development: "",
        reflection: "",
        prevLink: '',
        nextLink: ''
    },
    {
        slug: 'portfolio',
        title: 'Portfolio',
        featured: false,
        excerpt:
            'A custom-built React portfolio inspired by Pokémon aesthetics and RPG design systems. Highlights key projects with motion transitions, dark/light themes, and individual detail pages — all built with modern web tech.',
        technologies: [
            'JavaScript',
            'React',
            'Tailwind CSS',
            'Vite',
            'Framer Motion',
        ],
        roles: [
            "Development",
            "Architecture",
            "Design"
        ],
        tags: [
            'All',
            'Frontend',
        ],
        // TODO: update images
        thumbnailImg: portfolioThumbnailImg,
        bannerImg: portfolioBannerImg,
        liveUrl: 'https://bomjukim.com/',
        // TODO: Create new repo for portfolio 2025, get images and screenshots, new details too
        githubUrls: {
            client: 'https://github.com/dennisk94/Portfolio',
            server: '',
        },
        moreInfo: true,
        overview: "This portfolio was built from scratch using React and Vite to showcase my most meaningful projects in a space that reflects both my personality and technical growth. The structure follows a clean layout with individual project pages, smooth route transitions, and a custom theming system. The overall design and tone are heavily inspired by Pokémon UI patterns — especially the layout and hierarchy of Pokédex interfaces — blending nostalgic design with modern execution.",
        design: "The site channels a playful yet focused energy, drawing inspiration from classic Pokémon game menus and RPG status screens. This influence shows up in the color palettes, button shapes, iconography, and even the card layouts. A pixel-styled display font complements a monospaced or clean sans-serif body font for readability. Dark and light mode themes are available, each with distinct Pokémon-inspired palettes. Framer Motion is used to create smooth UI transitions and subtle animations that give the app a responsive, game-like feel.",
        development: "Built with React, TypeScript, and Tailwind CSS, the site uses modular, component-driven development for easy expansion. Project data is centrally managed through a single source of truth (projectData), enabling dynamic generation of detail pages via React Router v6. Framer Motion powers route and element transitions, while CSS variables control color theming. Accessibility and semantic markup were a priority from the beginning, and the entire site is mobile-first and fully responsive. The project is hosted statically and deploys instantly with build tooling powered by Vite.",
        reflection: "This portfolio wasn’t just about putting work on display — it was a creative outlet where I could combine nostalgic influences with current development practices. Designing it through the lens of Pokémon helped keep it personal and visually distinct while still professional. I improved my skills in state management, route handling, theming, and animation libraries — and refined how I communicate technical projects to a broader audience. Going forward, I’d love to expand the portfolio to include interactive features like a blog, or build a personal Pokédex-style system to organize even more project metadata.",
        screenshots: [
            portfolioScreenshot1,
            portfolioScreenshot2,
            portfolioScreenshot3,
        ],
        prevLink: '/cinephile',
        nextLink: '/dexquest'
    },
    {
        slug: 'weather-app',
        title: 'Weather App',
        featured: false,
        excerpt:
            'A responsive weather app built with React and Redux that fetches real-time weather data by city. Background images update dynamically using the Unsplash API to visually match the searched location.',
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'React',
            'Redux'
        ],
        roles: [
            "Development",
            "Architecture",
            "Design"
        ],
        tags: [
            'All',
            'Fun'
        ],
        // TODO: update image to Toronto
        thumbnailImg: weatherAppThumbnailImg,
        bannerImg: '',
        // TODO: update url
        liveUrl: 'https://bomjukim.com/weather-app/',
        githubUrls: {
            client: 'https://github.com/dennisk94/Weather-app',
            server: '',
        },
        moreInfo: false,
        overview: "",
        design: "",
        development: "",
        reflection: "",
        prevLink: '',
        nextLink: ''
    },
];