import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    threejs,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    travelAgency,
    gsapPortfolio,
    swcpCms,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "AI Engineer (LLM Integration)",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#2A2520",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E8DDD0",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining mobile applications using React Native and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#2A2520",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E8DDD0",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "AI Engineer (LLM Integration)",
        company_name: "InnovateTech AI",
        icon: creator,
        iconBg: "#915EFF",
        date: "Feb 2024 - Present",
        points: [
            "Integrating Large Language Models and AI APIs into MERN stack applications.",
            "Implementing RAG (Retrieval Augmented Generation) patterns with Vector databases for intelligent search.",
            "Building AI-powered features including chatbots, recommendation engines, and content generation.",
            "Optimizing LLM responses and managing token usage for cost-effective production deployments.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Sahil integrated LLMs into our MERN app seamlessly. His approach to AI-powered features in 2025 set us apart from competitors. Real game-changer for our user experience.",
        name: "Vikram Reddy",
        designation: "Tech Lead",
        company: "Innovate Solutions",
        image: "./assets/vikram-reddy.png",
    },
    {
        testimonial:
            "Building with Sahil on AI-driven analytics platform was incredible. His fullstack expertise combined with AI knowledge made everything scalable and production-ready from day one.",
        name: "Priya Nair",
        designation: "AI Product Manager",
        company: "TechVision Labs",
        image: "./assets/priya-nair.png",
    },
    {
        testimonial:
            "Sahil's RAG and Vector Search implementation in our MERN stack brought intelligent search to life. His technical depth in modern AI + web development is exceptional.",
        name: "Karthik Iyer",
        designation: "CTO",
        company: "Digital Momentum",
        image: "./assets/karthik-iyer.png",
    },
    {
        testimonial:
            "Outstanding work combining MERN stack with OpenAI APIs. Sahil built our chatbot feature with prompt engineering that rivals enterprise solutions. His LLM optimization reduced our token costs by 40%.",
        name: "Anjali Krishnan",
        designation: "Founder",
        company: "AI Nexus",
        image: "./assets/anjali-krishnan.png",
    },
];

const projects = [
    {
        name: "3D GSAP Storytelling Portfolio",
        description:
            "An interactive 3D storytelling portfolio built using GSAP, Three.js, and React to create immersive visual experiences and smooth narrative scroll animations.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            {
                name: "gsap",
                color: "pink-text-gradient",
            },
        ],
        image: gsapPortfolio,
        source_code_link: "https://github.com/sahilaslam-art/3d-gsap-porfolio",
        demo_link: "https://3d-gsap-porfolio.vercel.app/",
    },
    {
        name: "SWCP Headless CMS",
        description:
            "A visual editor for existing websites that allows users to change website content in real-time without touching the code.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: swcpCms,
        source_code_link: "https://github.com/sahilaslam-art/swcp-headless-cms",
        demo_link: "https://swcp-headless-cms.vercel.app/login",
    },
    {
        name: "Tourest Travel Agency",
        description:
            "A dedicated travel agency website where users can explore holiday destinations and book their trips.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: travelAgency,
        source_code_link: "https://github.com/sahilaslam-art/travel-agency",
        demo_link: "https://travel-agency-ten-phi.vercel.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };
