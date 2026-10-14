import headshot from "../assets/2023-headshot-no-bg.png";

// Copy shared by the site and the GitHub profile README (scripts/readme).
export const SITE_URL = "https://austinrt.io";

export const hero = {
  greeting: "Hey there, I'm",
  name: "Austin Taylor",
  role: "and I'm a Software Developer.",
  image: headshot,
};

export const about = {
  kicker: "Get To Know Me",
  title: "A Little About Me",
  paragraphs: [
    "From the lens of a camera to the lines of code, I've always been driven by my passion for understanding what makes things tick. I bring a unique blend of technical and creative abilities to my work, whether writing code, working on vintage bikes, or shooting and developing my own film photography. This curiosity and a desire to connect led me to bridge gaps in the film industry and now in the tech world.",
    "As a design-focused software engineer, I bring my technical skills, artistic eye, and creative problem-solving to the table in equal measure. My constant drive to evolve and my passion for mentoring others make me a valuable asset to any team.",
    "After a successful tenure in the film industry, I am further cultivating my curiosity and creative spirit by crafting code and connecting communities.",
  ],
};

export const sections = {
  projects: { kicker: "Things I've Shipped", title: "Projects" },
  openSource: { kicker: "Giving Back", title: "Open Source" },
  contact: { kicker: "Let's Connect", title: "Contact Me" },
};

// onGitHub: false keeps an option on the site but out of the profile README.
export const contactOptions = [
  {
    type: "email",
    title: "Email",
    cta: "Drop Me A Line",
    href: "mailto:austinrtaylor91@gmail.com?subject=Hi%20Austin!",
    onGitHub: true,
  },
  {
    type: "linkedin",
    title: "LinkedIn",
    cta: "Send Me A Message",
    href: "https://www.linkedin.com/in/austinrt",
    onGitHub: false,
  },
  {
    type: "phone",
    title: "Phone",
    cta: "Ring Me",
    href: "tel:+12292219699",
    onGitHub: false,
  },
];
