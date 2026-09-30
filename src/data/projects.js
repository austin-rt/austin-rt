import blockInvaders from "../assets/projects/block-invaders.webp";
import blueSkies from "../assets/projects/blue-skies.webp";
import crappleMaps from "../assets/projects/crapple-maps.webp";
import endsTo from "../assets/projects/ends-to.webp";
import slimer from "../assets/projects/slimer.gif";
import stayPuftForms from "../assets/projects/stay-puft-forms.webp";
import whoClinches from "../assets/projects/who-clinches.webp";

// Things I've built that are finished or live, in display order.
//
// To add one: drop a 1200x750 screenshot in src/assets/projects/, import it
// above, append an object here, push to main. Fields:
//   status:   "live" | "finished"
//   links:    first entry is the card's primary action; use types from
//             src/data/linkTypes.js
//   stack:    slugs from src/data/stackIcons.js
//   image:    optional; the card falls back to a stack-icon tile without it
//   featured: true renders the wide two-column card
export const projects = [
  {
    slug: "crapple-maps",
    name: "Crapple Maps",
    tagline: "Find the nearest public restroom, fast.",
    description:
      "Nearly 100,000 mapped restrooms with door codes, accessibility, and whether you have to buy something first. One Expo codebase ships the iOS app and the web app.",
    status: "live",
    year: "2026",
    links: [
      {
        type: "appstore",
        href: "https://apps.apple.com/us/app/crapple-maps/id6795301489",
      },
      { type: "web", href: "https://crapplemaps.com" },
      { type: "repo", href: "https://github.com/austin-rt/crapple-maps" },
    ],
    stack: ["expo", "react-native", "typescript", "supabase", "postgis", "vercel"],
    image: crappleMaps,
    featured: true,
  },
  {
    slug: "who-clinches",
    name: "Who Clinches",
    tagline: "Simulate the rest of the season and see who clinches.",
    description:
      "Override any remaining game, college or NFL, and watch the standings recompute under the official tiebreaker rules, with live scores on game day and an AI analyst for what-if questions.",
    status: "live",
    year: "2025",
    links: [
      { type: "web", href: "https://whoclinches.com" },
      { type: "repo", href: "https://github.com/austin-rt/who-clinches" },
    ],
    stack: ["nextjs", "typescript", "redis", "vercel"],
    image: whoClinches,
    featured: true,
  },
  {
    slug: "ends-to",
    name: "ends.to",
    tagline: "Short links with a fully custom preview.",
    description:
      "Choose the title, description and thumbnail a link shows when it's shared, then point it anywhere. The preview is encoded in the URL, so there's no database.",
    status: "live",
    year: "2026",
    links: [
      { type: "web", href: "https://ends.to" },
      { type: "repo", href: "https://github.com/austin-rt/prank-link" },
    ],
    stack: ["nextjs", "typescript", "vercel"],
    image: endsTo,
  },
  {
    slug: "picture-frame",
    name: "Picture Frame",
    tagline: "A cheap Android photo frame turned into a self-hosted kiosk.",
    description:
      "Rooted, stripped of its stock software, and rebuilt around Termux: rclone pulls photos and videos from cloud storage, ffmpeg resizes them, and a small kiosk APK plays the slideshow. Deploys over Tailscale from CI.",
    status: "finished",
    year: "2026",
    links: [{ type: "repo", href: "https://github.com/austin-rt/picture-frame" }],
    stack: ["bash", "android", "rclone", "ffmpeg", "rust"],
  },
  {
    slug: "stay-puft-forms",
    name: "Stay Puft Forms",
    tagline: "Typesafe, accessible React form components.",
    description:
      "A form component library built for an e-commerce app: schema-driven validation, keyboard and screen-reader friendly, documented in Storybook.",
    status: "live",
    year: "2024",
    links: [
      { type: "storybook", href: "https://staypuftforms.netlify.app/" },
      { type: "repo", href: "https://github.com/austin-rt/stay-puft" },
    ],
    stack: ["typescript", "react", "react-hook-form", "tailwind", "storybook", "zod"],
    image: stayPuftForms,
  },
  {
    slug: "slimer",
    name: "Slimer Component Library",
    tagline: "Tailwind and React building blocks with Storybook docs.",
    description:
      "The shared component library behind Stay Puft Forms and the apps that use it: tokens, primitives and composed components, all documented in Storybook.",
    status: "live",
    year: "2024",
    links: [
      { type: "storybook", href: "https://slimer.netlify.app/" },
    ],
    stack: ["typescript", "react", "tailwind", "storybook"],
    image: slimer,
  },
  {
    slug: "blue-skies",
    name: "Blue Skies",
    tagline: "Current conditions and a three-day forecast, wherever you are.",
    description:
      "A weather app case study: geolocated current conditions, highs and lows for the next three days, and a deliberately calm interface.",
    status: "live",
    year: "2023",
    links: [
      { type: "web", href: "https://blue-skies-weather.netlify.app/" },
      {
        type: "repo",
        href: "https://github.com/austin-rt/weather-app-case-study",
      },
    ],
    stack: ["typescript", "react", "redux", "tailwind", "netlify"],
    image: blueSkies,
  },
  {
    slug: "block-invaders",
    name: "Block Invaders",
    tagline: "Multi-level browser Space Invaders in vanilla TypeScript.",
    description:
      "Move, shoot, survive. The invaders descend faster with every level. No framework, no canvas library, just the DOM.",
    status: "live",
    year: "2022",
    links: [
      { type: "web", href: "https://austin-rt.github.io/blockinvaders" },
      { type: "repo", href: "https://github.com/austin-rt/blockinvaders" },
    ],
    stack: ["html", "css", "typescript"],
    image: blockInvaders,
  },
];
