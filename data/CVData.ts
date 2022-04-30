import {
  Gi3DMeeple,
  GiChaingun,
  GiCardJoker,
  GiDeathStar,
} from "react-icons/gi";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";

const data = {
  name: "David Recheni",
  role: "Fullstack + web3 developer / lead developer",
  about:
    "Hallo! I’m a 30 y.o. Argentinian that lives in Berlin since February 2020. I’m always eager to learn new things. I feel comfortable accepting responsibilities and coordinating teams. Due to my studies as Designer and Dev, and my long experience working as freelancer, I can ideate, design, develop and deploy solutions from scratch. I’ve worked as Full-stack developer most of my carreer but I decided to specialize in Frontend. I’ve been working exclusively with React since I arrived to Germany",

  certificates: [
    {
      name: "Agile methodologies expert",
      details: "Accenture",
    },
    {
      name: ".NET MVC 5 Dev",
      details: "ComunidadIT",
    },
  ],

  experience: [
    {
      date: { start: "08/2021", end: "Current" },
      place: "Berlin, DE",
      institution: {
        name: "Lhotse Technologies GmbH",
        link: "https://www.lhotse.de/en/",
      },
      title: "Lead Front-end Developer",
      stack: "React, Typescript, TailwindCSS, React-query, Storybooks",
      description:
        "• Design and implement a new version of their MVP from scratch . • Delegate tasks and control progress • Perform code reviews and enforce high quality coding standards. • Built a front-end team. • Mentor Front-end devs • Validate UX Design decisions and propose solutions. ",
    },
    {
      date: { start: "03/2020", end: "08/2021" },
      place: "Berlin, DE",
      institution: {
        name: "Facturee CWMK GmbH",
        link: "https://www.facturee.de/",
      },
      title: "Senior Full-Stack Developer",
      stack:
        "ReactJS, Styled-components, Storybooks /  Angular, Bootstrap, Parse Server",
      description:
        "• Develop micro-frontend tools for company suppliers (ReactJS) • Expand and maintain employee app (Angular). • Company Hardware maintainance. • Mentor dev intern. • Help ideate and create creative solutions to company problems. • UX / UI Designer",
    },
    {
      date: { start: "12/2018", end: "03/2020" },
      place: "La Plata, ARG",
      institution: { name: "Avanade", link: "https://www.avanade.com/" },
      title: "Lead Full-Stack Developer",
      stack: "AngularJS, NodeJS, Bootstrap, .NET",
      description:
        "• Develop web-apps in a very fast moving enviroment • Perform code reviews and enforce high quality coding standards. • Delegate tasks and control progress • Mentor new joiners  • Help the team implement SCRUM     ",
    },
    {
      date: { start: "06/2018", end: "12/2018" },
      place: "La Plata, ARG",
      institution: { name: "Avanade", link: "https://www.avanade.com/" },
      title: "Sr Full-Stack Developer",
      stack: "AngularJS, NodeJS, Bootstrap, .NET",
      description:
        "• Develop web-apps in a very fast moving enviroment • Mentor new joiners",
    },
  ],

  githubUsername: "DavidRecheni",

  languages: [
    {
      name: "Spanish",
      details: "Native",
    },
    {
      name: "English",
      details: "Fluent",
    },
    {
      name: "German",
      details: "Basic",
    },
  ],

  linkedinProfile: "david-recheni",

  projects: [
    {
      icon: GiChaingun,
      name: "Chaintree - web3 project (WIP)",
      url: "https://chaintree.xyz/",
    },

    {
      icon: BsFillCreditCard2FrontFill,
      name: "3d card customizer",
      url: "https://3d-card-viewer.netlify.app/",
      gitUrl: "https://github.com/DavidRecheni/3d-card-customizable",
    },
    {
      icon: GiCardJoker,
      name: "DavidRecheni.dev",
      url: "https://davidrecheni.dev/",
      gitUrl: "https://github.com/DavidRecheni/portfolio-next",
    },
    {
      icon: GiDeathStar,
      name: "Star wars force graph",
      url: "https://sw-forcegraph.netlify.app/",
      gitUrl: "https://github.com/DavidRecheni/SW-Force-Graph",
    },
    {
      icon: Gi3DMeeple,
      name: "3d viewer",
      url: "http://simple-react-three-viewer.netlify.app/",
      gitUrl: "https://github.com/DavidRecheni/react-3d-viewr",
    },
  ],

  skills: [
    "AWS Amplify",
    "Scrum",
    "Ethers.js",
    "Express",
    "GIT",
    "GraphQL",
    "Mongodb",
    "Mongoose",
    "Node.js",
    "React",
    "React query",
    "REST",
    "SASS",
    "Solidity",
    "Tailwindcss",
    "Three.js",
    "Truffle",
    "Typescript",
    "Styled components",
    "Team management",
    "UX Design",
    "Web3.js",
  ],

  studies: [
    {
      date: { start: "", end: "" },
      place: "La Plata, ARG",
      institution: {
        name: "Universidad Nacional de La Plata",
        link: "https://unlp.edu.ar/",
      },
      title: "Lic. Multimedia Design",
      stack: "5 years",
      description:
        "Five-year studies where I learned about Aesthetics, UX / UI and front-end development. It also enabled me to develop my knowledge in IoT and electronics through Processing and Arduino.",
    },
    {
      date: { start: "", end: "" },
      place: "Trelew, ARG",
      institution: {
        name: "Universidad Nacional de la Patagonia",
        link: "http://www.unp.edu.ar/",
      },
      title: "Lic. Computer Science",
      stack: "5 years (incomplete)",
      description:
        "While studying here I learn the computer science lower levels, like to code Assembler and how a microprocessor works internally. After studying for two years I dropped out because I had to move to a different city, La Plata",
    },
    {
      date: { start: "", end: "" },
      place: "Trelew, ARG",
      institution: {
        name: "Colegio 724",
        link: "https://www.facebook.com/esetp724/",
      },
      title: "IT Technician",
      stack: "3 years",
      description:
        "Three-year studies where I learned about basic electronics and how to code HTML/CSS, PHP, C and VB.",
    },
  ],
};

export default data;
