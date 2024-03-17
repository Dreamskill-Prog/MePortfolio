import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  git,
  figma,
  docker,
  gym,
  htmlwordpress,
  REXDEX,
  chatgpt,
  OxentNFT,
  starbucks,
  tesla,
  shopify,
  EcommerceWebsiteForFabrics,
  blockchain,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
   {
    title: "Next & React Expert",
    icon: web,
  },
  {
    title: "WordPress Developer",
    icon: backend,
  },
  {
    title: "Shopify Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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

const experiences: TExperience[] = [
  {
    title: "Blockchain Developer & FullStack Developer",
    companyName: "Freelancer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js & Next.js Developer",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2017 - Jan 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "WordPress & Shopify Developer",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2016 - March 2017",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "DeFi plus NFT Marketplace",
    description:
      "I built full defi system including swap, farming, staking, nft marketplace and gaming system. I built the platform on multichain which covers bsc, eth, and fantom. It works its own governance token with interesting tokenomics. NFT Marketplace and Gaming system are another good utilities for this defi system. You can see the system from the following link. https://keyswap.exchange/ All are full customized from the client's requirement. We really had serious discussion for the features of this system. I like to discuss and recommend some good ideas to the clients. I am always open for the new projects. Please no hesitate to call me for your new projects. Best regards!",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "NFT LauchPad",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blockchain,
    sourceCodeLink: "https://keyswap.exchange/",
  },

  {
    name: "Build a Oxent NFT Platform!",
    description:
      "Welcome to the Oxent NFT Platform, your gateway to the world of non-fungible tokens (NFTs) powered by blockchain technology. At Oxent, we've created a vibrant marketplace where creators, collectors, and enthusiasts come together to explore, buy, sell, and trade unique digital assets. With a focus on innovation, security, and user experience, Oxent NFT Platform offers a seamless and rewarding environment for the NFT community.",
    tags: [
      {
        name: "Ethereum",
        color: "blue-text-gradient",
      },
      {
        name: "NFT LauchPad",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: OxentNFT,
    sourceCodeLink: "",
  },
  {
    name: "Rex Dex Finance",
    description:
      "RexDex Finance is a cutting-edge DeFi platform built on the Wanchain blockchain, harnessing the power of Uniswap v2 protocols. This project showcases my expertise in blockchain development, DeFi, and custom feature integration. ---",
    tags: [
      {
        name: "DEX",
        color: "blue-text-gradient",
      },
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "Rust",
        color: "pink-text-gradient",
      },
    ],
    image: REXDEX,
    sourceCodeLink: "https://rexdex.finance",
  },

  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "ChatGPT Application",
    description:
      "We have developed an advanced AI-driven application using the latest technologies, including ChatGPT 4.0. This cutting-edge solution offers a range of features such as document editing and saving, chat creation, and much more. Our application represents the forefront of AI technology, providing users with a powerful tool for document management and communication.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "ChatGPT4.0 API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chatgpt,
    sourceCodeLink: "https://",
  },
  {
    name: "Gym website",
    description:
      "React-based gym website, featuring Framer Motion for enhanced animations, is a comprehensive fitness platform accessible at https://gym-site-project.pages.dev/. It encompasses all necessary functionalities, including seamless membership management. The site offers a visually appealing and dynamic user interface, ensuring an engaging experience. With a focus on aesthetic design and practicality, this project provides users with an interactive and user-friendly space for their fitness journey.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gym,
    sourceCodeLink: "https://gym-site-project.pages.dev/",
  },
  {
    name: "Ecommerce website for fabrics",
    description:
      "I crafted a robust fabric e-commerce platform leveraging the MERN stack, integrating top-tier functionalities essential for a thriving online marketplace. This dynamic website boasts a comprehensive suite of e-commerce features, seamlessly catering to real-life project demands. Through meticulous development, I engineered a user-centric interface ensuring a seamless browsing experience. The platform embodies secure user authentication, streamlined product cataloging, intuitive search capabilities, and a hassle-free checkout process, elevating user satisfaction. Robust backend functionalities enable inventory management, order tracking, and seamless payment integration, ensuring operational efficiency. Moreover, I incorporated responsive design principles, ensuring compatibility across diverse devices, empowering users to engage effortlessly with the site.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: EcommerceWebsiteForFabrics,
    sourceCodeLink: "https://",
  },
  {
    name: "Convert Html To Wordpress-Theme",
    description:
      "This Job was Converting an Html Template into a powerful WordPress Theme. That was about an online Course booking Website. So the client wants to make this HTML template into a WordPress Compitable theme and make all the features Working on this theme from the WordPress backend. So, after that, I go ahead and convert the Templat into a powerful WordPress theme.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: htmlwordpress,
    sourceCodeLink: "https://",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
