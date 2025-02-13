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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  MuZiK,
  ImAIGem,
  ShopPiT,
  PortFolio,
  Threads,
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
    title: "Full Stack Web Developer",
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

  // {
  //   name: "git",
  //   icon: git,
  // },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
];
const technologies_starter = [
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

  // {
  //   name: "git",
  //   icon: git,
  // },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const technologies_adv = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "TypeScript",
    icon: nextJS,
  },
];

const experiences = [
  {
    title: "React.js Web Developer",
    company_name: "Self-Learned And Applied",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Learning and applying since (December 2022) - (Present)",
    points: [
      "Developing and maintaining web applications while learning from online platforms and sources plus  YoUTuBE and building web apps using React.js and other related technologies like FrameWorks->M-E-R-N & Libraries->Tailwind CSS.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ever Since i started watching tutorials for learning dev,  i always imagined the fututristic scope of each project and everytime i would complete it, with all those thoughtfull designs and functionlaity. i would always feel like this is it, I thought it and here i did it , So all my projects are well versed over just this mindset of mine   ,   i Imagined all of them while building them and took them to NexT-LeveL with my own imagination.",
    name: "MySelf",
  },
];

const projects = [
  {
    name: "3D PortFolio",
    description:
      "This is a Three.js project used for showcasing your life's work (a.k.a. PORTFOLIO). You are experiencing it right now. You can share your experience through email.",

    ProblemsFaced:
      "Here, I dealt with a real-world React.js project for the first time after coming out of the world of plain HTML, CSS, and JavaScript. Using Three.js seemed a bit overwhelming at first, but the 3D aspect really excited me to develop this project. Here, I learned how to apply 2D images over 3D shapes using decals and many more things like the positioning of 3D models and playing with their placement and tilt effects. This entire experience has been amazing, and my tutor played a huge role in helping me learn and overcome challenges. ",
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
    source_code_link: "https://github.com/PRAteek-singHWY/10-MyPortFolio",
    access_link: "https://prateekswys.cloud/",
    deprecated: false,
  },
  {
    name: "MuZiK   ",
    description:
      "A web-based music application that enables users to search and play songs by top artists, listen to trending top hits, and explore related songs to a specific track.",
    ProblemsFaced:
      "During the development of this project, I encountered a challenge with the API. The API used in the tutorial was no longer available for free, so I had to find a suitable alternative using Rapid API. It was my first time working with a REST API, so I had to familiarize myself with the API structure and understand how to use the different API endpoints effectively. Despite the initial hurdle, I was able to create a better version of my application and gained valuable experience in working with API endpoints. Throughout the development process, the use of { console.log() } and { Chat-GPT's asistance }played crucial roles in my learning journey.",
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
    source_code_link: "https://github.com/PRAteek-singHWY/7--MuZiK.git",
    access_link: "https://muzikswys.online/",
    deprecated: true,
  },
  {
    name: "iMAiGeM",
    description:
      " Yeah AI's å GeM. This is a clean but modern  web application where users can enter prompts and generate their own imaginative thoughts as images. These generated images can be shared in real-time, allowing users to express their creativity and share their unique creations with others on the post page and even save their generated images by downloading them.",
    ProblemsFaced:
      "Here, this was my first interaction with OpenAI's { DALL·E } after { CHAT-GPT } , from thinking that the only way of generating imaginative images and designs was to pay and use Paid -Ai-image Tools/ , to finally creating my Own Ai text to Image Generator Tool, with the Image sharing Facility this project made me understand the power of Ai's DALL·E and flexibility it provides to users. ",
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
    access_link: "https://imaigem.online/",
    deprecated: true,
  },
  {
    name: "ShöpPiT",
    description:
      "A more advanced and user-friendly web-appication providing user's more flexibility withOpen AI's DALL·E 2. This project moves started on to much better version of previous one with more advanced features like , allowing users to use opeAI to bring their imaginative styles & deisgns to reality.",
    ProblemsFaced:
      "Now, , Here, this' by far is the longest project i have ever worked on After getting to learn and develop the the Home_Page and Customise from YouTubE all other pages including designs_page,demo_shopping_page,contact and size selection ,merchant_selection and many more UI elements and even the confirmation page have been implemented by me using all my past learnings about hook usage, the backend POST and GET calls, the mongoose and mongoDB. ",
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
    deprecated: false,
  },
  {
    name: "THREADS",
    description:
      "Threads Clone , This is an upcoming Next.js Project  integrated with TypeScript, with all the facilities of Threads Application and much more. ",

    ProblemsFaced: "Enjoying the process currently.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "react.js",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Threads,
    source_code_link: "",
    access_link: "",
    deprecated: false,
    upcoming: true,
  },
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
