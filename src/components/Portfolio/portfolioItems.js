// import brtr from "../../assets/brtr-1.png";
import blockInvaders from "../../assets/block-invaders-5.png";
import blueSkies from "../../assets/blue-skies-2.png";
// import ratedOur from "../../assets/rated-our-2.png";
// import crappleMaps from "../../assets/crapple-maps-1.png";
import butterBehavior from "../../assets/butter-behavior-1.png";
import stayPuft from "../../assets/stay-puft-forms-1.png";
// import hoverstateUniversity from "../../assets/hoverstate-university-1.png";
import { DiHtml5, DiCss3, /* DiJavascript, */ DiReact } from "react-icons/di";
import {
  // SiPostgresql,
  // SiMongodb,
  // SiExpress,
  SiFirebase,
  // SiHeroku,
  // SiRailway,
  SiNetlify,
  SiReacthookform,
  // SiVercel,
  SiRedux,
  SiStorybook,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { FaNodeJs, FaFly } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";

export const portfolioItems = [
  {
    image: stayPuft,
    title: "Stay Puft Forms",
    github: "https://gitlab.com/nerds-with-charisma/stay-puft",
    demo: "https://staypuftforms.netlify.app/",
    stack: [
      <SiTypescript />,
      <DiReact />,
      <SiReacthookform />,
      <TbBrandTailwind />,
      <SiStorybook />,
      <SiZod />,
    ],
  },
  {
    image: blueSkies,
    title: "Blue Skies",
    github: "https://github.com/austin-rt/weather-app-case-study",
    demo: "https://blue-skies-weather.netlify.app/",
    stack: [<SiTypescript />, <DiReact />, <TbBrandTailwind />, <SiNetlify />],
  },
  {
    image: butterBehavior,
    title: "Butter Behavior",
    github: "https://butterbehavior.com/",
    demo: "https://thunderbird-68145.web.app/",
    stack: [
      <SiFirebase />,
      <DiReact />,
      <SiRedux />,
      <FaNodeJs />,
      <TbBrandTailwind />,
    ],
  },
  // {
  //   image: brtr,
  //   title: "brtr",
  //   github: "https://github.com/austin-rt/brtr-frontend",
  //   demo: "https://brtr.vercel.app/",
  //   stack: [
  //     <SiPostgresql />,
  //     <SiExpress />,
  //     <DiReact />,
  //     <FaNodeJs />,
  //     <SiVercel />,
  //     <SiRailway />,
  //   ],
  // },
  // {
  //   image: hoverstateUniversity,
  //   title: "Hoverstate University",
  //   github: "https://github.com/austin-rt/hoverstate-university",
  //   demo: "https://hoverstate-university.netlify.app/",
  //   stack: [
  //     <SiPostgresql />,
  //     <SiExpress />,
  //     <DiReact />,
  //     <SiRedux />,
  //     <FaNodeJs />,
  //     <TbBrandTailwind />,
  //     <SiNetlify />,
  //     <SiRailway />,
  //   ],
  // },
  // {
  //   image: ratedOur,
  //   title: "Rated Our",
  //   github: "https://github.com/austin-rt/rated-our-frontend",
  //   demo: "https://rated-our.vercel.app/",
  //   oneline:
  //     "Rated Our is movie rating app. It's a full-stack PERN app that uses JWT tokens and Local Storage to authenticate and authorize users.",
  //   stack: [
  //     <SiPostgresql />,
  //     <SiExpress />,
  //     <DiReact />,
  //     <FaNodeJs />,
  //     <SiVercel />,
  //     <SiRailway />,
  //   ],
  // },
  {
    image: blockInvaders,
    title: "Block Invaders",
    github: "https://github.com/austin-rt/blockinvaders",
    demo: "https://block-invaders.fly.dev/",
    oneline:
      "Block Invaders is a multi-level, in-browser version of the classic arcade game Space Invaders. The user controls a block that can shoot and move left or right while the enemy descends toward the player. As the level increments, the speed of the invaders' descension increases.",
    stack: [<DiHtml5 />, <DiCss3 />, <SiTypescript />, <FaFly />],
  },
  // {
  //   image: crappleMaps,
  //   title: "Crapple Maps",
  //   github: "https://github.com/austin-rt/crapple-maps",
  //   demo: "https://crapple-maps.herokuapp.com/",
  //   oneline:
  //     "Crapple Maps is a simple, crowdsourced, full-stack, public restroom locator. This was built using the MERN stack. When a user is in need of a public restroom, they will be able to access the database in list form. If a listing is perceived as inaccurate, users will be able to update or delete the listing.",
  //   stack: [
  //     <SiMongodb />,
  //     <SiExpress />,
  //     <DiReact />,
  //     <FaNodeJs />,
  //     <SiHeroku />,
  //   ],
  // },
];
