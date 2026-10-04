import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  nextJS,
  html,
  css,
  reactjs,
  Brain,
  WandR,
  redux,
  blockchain,
  solana,
  redis,
  tailwind,
  opensource,
  nodejs,
  mongodb,
  android,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  DevQuera,
  jobit,
  tripguide,
  threejs,
  python,
  postgres,
  pgvector,
  pytest,
  MuZiK,
  ImAIGem,
  bitcoin,
  ShopPiT,
  PortFolio,
  nextjs,
  ChatApp,
  Threads,
} from "../assets";

export const navLinks = [
  {
    id: "highlights",
    title: "Highlights",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "journey",
    title: "Journey",
  },
  {
    id: "writing",
    title: "Writing",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Safety & Evaluation",
    icon: Brain,
  },
  {
    title: "Open Source Engineering",
    icon: opensource,
  },
  {
    title: "Agent Security Tooling",
    icon: backend,
  },
  {
    title: "Full Stack Engineering",
    icon: web,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Redis",
    icon: redis, // NEW: Assuming a 'redis' icon is defined
  },
  {
    name: "Docker",
    icon: docker, // NEW: Assuming a 'docker' icon is defined
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
    name: "React Native",
    icon: reactjs, // Using 'reactjs' icon as a placeholder for React Native
  },
  {
    name: "Expo",
    icon: reactjs, // Using 'reactjs' icon as a placeholder for Expo
  },
];
const technologies_starter = [
  { name: "Python", icon: python },
  { name: "TypeScript", icon: typescript },
  { name: "PostgreSQL", icon: postgres },
  { name: "pgvector", icon: pgvector },
  { name: "pytest", icon: pytest },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "React", icon: reactjs },
  { name: "Next.js", icon: nextJS },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Redis", icon: redis },
  { name: "Three.js", icon: threejs },
  { name: "Tailwind", icon: tailwind },
];

const technologies_adv = [
  {
    name: "Blockchain Technology",
    icon: blockchain, // NEW: Assuming a 'blockchain' icon is defined
  },
  {
    name: "Solana",
    icon: solana, // NEW: Assuming a 'solana' icon is defined
  },
  {
    name: "Bitcoin",
    icon: bitcoin, // NEW: Assuming a 'bitcoin' icon is defined
  },
];

const experiences = [
  {
    title: "Contributor, Module C (The Librarian)",
    company_name: "OWASP Foundation / OpenCRE  ·  Google Summer of Code 2026",
    icon: opensource,
    iconBg: "#1B2028",
    date: "Nov 2025 - Present",
    points: [
      "Built the link decision engine, Module C of OpenCRE's four-module pipeline, deciding where each incoming piece of security content belongs in a graph that joins ASVS, NIST 800-53, PCI-DSS, WSTG and other standards.",
      "Shipped candidate retrieval over pgvector, a cross-encoder reranker, and a decision layer gated on expected calibration error: 96.5% auto-link precision at a 0.80 threshold and 98% retrieval recall against a 319-chunk hand-labelled golden set.",
      "Designed the system to escalate rather than guess. Below-threshold candidates route to human review, and the graph writer stays blocked until a safety detector exists. 247 hermetic tests run in under 4 seconds as a regression gate on every PR.",
      "Ran 13 reranker interventions that all regressed against the cosine baseline, root-caused it to 427 of 428 CREs having empty descriptions, and published the negative result instead of shipping an unvalidated fix.",
      "Review recall held at 5 of 5: every chunk that needed a human reached one, and the engine never wrongly auto-linked a chunk that needed review. Each decision is written to the queue Module D reads before the source row is marked consumed.",
      "100+ commits and second-highest contributor to the repository (GitHub).",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Evaratus (Scaler AI Labs)",
    icon: Brain,
    iconBg: "#1B2028",
    date: "May 2026 - Present",
    points: [
      "Build high-fidelity RL environments replicating live web platforms, MCP servers and enterprise applications for frontier AI labs, from custom state-machine specifications.",
      "Engineer the evaluations, benchmarks and reward functions that score those environments.",
      "Curate verified, high-quality training data through end-to-end sourcing-to-delivery pipelines.",
    ],
  },
  {
    title: "President, Open Source Committee",
    company_name: "Scaler School of Technology",
    icon: creator,
    iconBg: "#1B2028",
    date: "2025 - Present",
    points: [
      "Previously Core Member and Mentorship Lead. Mentor 5+ students toward GSoC and other paid open source programs: contribution blockers, proposal writing, securing stipends.",
      "Mentored incoming OWASP contributors through their first merged PRs and production contribution norms.",
      "Run build days and onboarding sessions on making real open source contributions rather than following tutorials.",
    ],
  },
];

// Note: Ensure you define the icon variables (e.g., reactjs, opensource, nextjs, android)
// by importing them at the top of your file.

const testimonials = [
  {
    testimonial:
      "Prateek explains how he worked on 'Smart Content Mapping' Module C, The Librarian: the component that decides what every incoming piece of security content means, and, more importantly, decides when it should not decide at all. In other words: a smart human in the loop, to prevent AI slop in the form of mappings that make no sense.",
    name: "OWASP OpenCRE",
    designation: "Official project account",
    company: "OWASP Foundation",
  },
];

const projects = [
  {
    name: "DevQuerA (in development)",
    year: "2024",
    description:
      "A feature-rich Q&A platform for developers built with Next.js 14. It combines community-driven discussions with AI-powered assistance. Users can ask questions, earn reputation badges, and use a recommendation engine to find relevant answers quickly.",

    ProblemsFaced:
      "Handling the complex many-to-many relationships between tags, questions, and users in MongoDB required a robust aggregation strategy to ensure query performance. Implementing the custom recommendation algorithm was also tricky; I had to balance recency and relevance to ensure users saw the most helpful content without overwhelming the server resources.",
    tags: [
      {
        name: "next.js 16",
        color: "blue-text-gradient",
      },
      {
        name: "server actions",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb & ai",
        color: "green-text-gradient",
      },
    ],
    image: DevQuera, // Make sure to import this image variable at the top of your file
    source_code_link: "https://github.com/PRAteek-singHWY/DevQuErA",
    access_link: "", // Update if your link is different
  },
  {
    name: "3D Portfolio",
    year: "2024",
    description:
      "An interactive 3D portfolio built with Three.js and React. The resume becomes a scene: a desk computer, a tech grid, a globe and a star field, each tied to a section of the page. This site still runs on it.",

    ProblemsFaced:
      "Transitioning from 2D web development to a 3D environment was my biggest hurdle. I struggled initially with Three.js concepts like scene rendering, camera positioning, and applying decals to 3D models. Understanding how to integrate these heavy graphical elements within a React component lifecycle without causing performance issues was tricky. However, overcoming these challenges taught me valuable lessons in geometry manipulation and the importance of optimized rendering loops.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },

      {
        name: "three.js",
        color: "green-text-gradient",
      },
    ],
    image: PortFolio,
    source_code_link: "https://github.com/PRAteek-singHWY/MY_PORTFOLIO",
    access_link: "https://prateekswys.netlify.app/",
  },
  {
    name: "Sec2ndBrain AI",
    year: "2024",
    description:
      "An intelligent, RAG-powered knowledge base built with Next.js and the MERN stack. It lets users store and chat with their personal content (notes, tweets, videos) through vector embeddings. The system integrates Pinecone for high-speed retrieval and LLaMA 3.1 via Groq to generate context-aware, human-like responses.",

    ProblemsFaced:
      "Implementing the Retrieval-Augmented Generation (RAG) pipeline was the primary challenge. Synchronizing data between MongoDB (for raw storage) and Pinecone (for vector embeddings) required robust error handling to prevent data drift. Additionally, optimizing the query latency was critical; I had to refine the interaction between Jina AI's embedding generation and Groq's inference engine to ensure the chat experience remained near-instant.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "pinecone & groq",
        color: "green-text-gradient",
      },
    ],
    image: Brain, // Make sure to import this image variable at the top of your file
    source_code_link: "https://github.com/PRAteek-singHWY/Sec2ndBraiN",
    access_link: "https://sec2ndbrain-client.onrender.com/",
  },
  {
    name: "Scaled Real-time Chat App",
    year: "2024",
    description:
      "A horizontally scalable, room-based chat application. It demonstrates a production-ready architecture where multiple Node.js server instances run in parallel, coordinated by a central Redis Pub/Sub message broker to ensure stateless synchronization.",

    ProblemsFaced:
      "The biggest challenge wasn't building the chat, but making it scale. My initial implementation used in-memory Maps to store room data, which worked locally but failed in distributed environments. I had to completely rethink the architecture to be stateless. I tackled this by implementing Redis Pub/Sub as a central message broker. This decoupled the state from the application logic, allowing me to spin up infinite server instances that all stay in sync instantly, regardless of the port.",
    tags: [
      {
        name: "web-sockets",
        color: "green-text-gradient",
      },
      {
        name: "node.js & ws",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "redis pub/sub",
        color: "green-text-gradient",
      },
    ],
    image: ChatApp,
    source_code_link: "https://github.com/PRAteek-singHWY/chat-rooms-app",
    access_link: "https://chat-rooms-app-frontend.onrender.com/",
  },
  {
    name: "WandR (Mobile App)",
    year: "2024",
    description:
      "A cross-platform mobile application built with Expo for finding travel buddies and traveling cheaper together. The app features a comprehensive onboarding flow, user authentication, a post creation system for travel plans, and a dedicated section for viewing and managing posts from other users.",
    ProblemsFaced:
      "Integrating seamless navigation and state management across multiple screens (Onboarding, Login, Home, Create Post, View Posts) within the Expo framework. Ensuring optimal image handling and responsiveness for different mobile screen sizes and platforms (iOS/Android) was also a key challenge.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "cross-platform",
        color: "pink-text-gradient",
      },
    ],
    image: WandR, // Make sure to import this image variable (or the appropriate variable) at the top of your file
    source_code_link: "https://github.com/PRAteek-singHWY/WandR", // Placeholder for actual repo link
    access_link: "", // Add store link or deployed link if available
  },

  {
    name: "ShöpPiT",
    year: "2023",
    description:
      "An advanced e-commerce platform that integrates OpenAI's DALL·E 2 for product customization. Users generate their own AI designs for t-shirts and products at checkout.",
    ProblemsFaced:
      "This was the most complex full-stack application I had built to date, requiring a deep dive into MERN architecture. The main challenge was orchestrating the data flow between the frontend, the MongoDB database, and the external OpenAI API. Implementing the custom design tool involved complex state management and UI logic. Furthermore, ensuring secure backend communication for the AI generation requests while maintaining a smooth user experience required rigorous debugging and optimization.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
    ],
    image: ShopPiT,
    source_code_link: "https://github.com/PRAteek-singHWY/9-SHopPiT",
    access_link: "https://shoppitswys.store/",
  },
  {
    name: "iMAiGeM",
    year: "2023",
    description:
      "A MERN stack application built on OpenAI's DALL·E. Users can generate unique images from text prompts and share them with a community. It features a gallery of creative works, allowing users to download, share, and draw inspiration from others.",
    ProblemsFaced:
      "The primary challenge here was understanding how to effectively communicate with third-party AI APIs. I had to learn how to handle asynchronous requests efficiently to prevent the UI from freezing during image generation. Additionally, storing these generated images and their associated prompts in MongoDB while maintaining fast load times for the community feed required a well-structured database schema. This project bridged the gap for me between standard web apps and AI integration.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
    ],
    image: ImAIGem,
    source_code_link: "https://github.com/PRAteek-singHWY/8-ImAiGem",
    access_link: "https://iamaigem.netlify.app/",
  },
  {
    name: "MuZiK",
    year: "2022",
    description:
      "A sleek, web-based music streaming application that allows users to search for top artists, listen to trending hits, and explore related tracks. It uses third-party APIs behind a responsive React interface.",
    ProblemsFaced:
      "The major roadblock occurred when the original API from the tutorial became paid-only. I had to pivot to RapidAPI, which forced me to learn how to read and adapt to new API documentation on the fly. Mapping the new data structure to my existing React components was difficult and required extensive debugging. This experience was crucial as it taught me how to be flexible with backend services and the importance of understanding HTTP methods and JSON parsing in a real-world context.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: MuZiK,
    source_code_link: "https://github.com/PRAteek-singHWY/7--MuZiK-WeB-APP",
    access_link: "https://muzikswys.online/",
  },
  // {
  //   name: "THREADS",
  //   description:
  //     "Threads Clone , This is an upcoming Next.js Project  integrated with TypeScript, with all the facilities of Threads Application and much more. ",

  //   ProblemsFaced: "Enjoying the process currently.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "react.js",
  //       color: "blue-text-gradient",
  //     },

  //     {
  //       name: "tailwind CSS",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: Threads,
  //   source_code_link: "",
  //   access_link: "",
  //   upcoming: true,
  // },
];

export {
  services,
  technologies,
  technologies_starter,
  technologies_adv,
  experiences,
  testimonials,
  projects,
};
