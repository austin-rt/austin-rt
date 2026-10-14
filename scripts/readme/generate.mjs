// Writes the GitHub profile README from the site's data. Run with
// `npm run readme`; .github/workflows/readme.yml runs it on every push to main.
import { writeFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { BsFileEarmarkText, BsGlobe } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { fileURLToPath } from "node:url";
import { about, contactOptions, hero, sections, SITE_URL } from "../../src/data/profile.js";
import { projects } from "../../src/data/projects.js";
import contributions from "../../src/data/openSource.json";
import { stackIcons } from "../../src/data/stackIcons.js";
import { linkTypes } from "../../src/data/linkTypes.js";
import { cardsFrom, fetchPullRequests } from "../../src/data/contributionStatus.js";
import { API } from "../../src/utils/constants.js";
import { renderReadme } from "../../src/readme/renderReadme.js";

// The profile's banner; the site's header uses the headshot instead.
const BANNER = "images/github-banner.png";

// Badge colours per link type; icons come from the same react-icons the site uses.
const BADGE_COLORS = {
  info: "555555",
  appstore: "0D96F6",
  playstore: "414141",
  web: "2F3E46",
  webapp: "2F3E46",
  storybook: "FF4785",
  // GitHub's own #181717 disappears on the dark theme.
  repo: "444D56",
};

// A shields.io badge whose logo is the react-icons SVG, drawn white.
const badge = (label, Icon, color) => {
  const svg = renderToStaticMarkup(createElement(Icon, { color: "#fff" }));
  const logo = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
  const text = encodeURIComponent(label.replace(/-/g, "--").replace(/_/g, "__"));
  return `https://img.shields.io/badge/${text}-${color}?style=flat-square&logo=${encodeURIComponent(logo)}`;
};

const badges = {
  ...Object.fromEntries(
    Object.entries(linkTypes).map(([type, { Icon, label }]) => [type, badge(label, Icon, BADGE_COLORS[type])]),
  ),
  site: badge(new URL(SITE_URL).host, BsGlobe, "84A98C"),
  resume: badge("Resume", BsFileEarmarkText, "52796F"),
  email: badge("Email", MdOutlineEmail, "52796F"),
};

const labelsOf = (table) => Object.fromEntries(Object.entries(table).map(([key, { label }]) => [key, label]));

const pulls = await fetchPullRequests(contributions, process.env.GITHUB_TOKEN).catch((error) => {
  console.warn(`PR status unavailable, writing cards without it: ${error.message}`);
  return null;
});

const readme = renderReadme({
  hero,
  banner: BANNER,
  about,
  sections,
  contactOptions,
  projects,
  cards: cardsFrom(contributions, pulls),
  stackLabels: labelsOf(stackIcons),
  linkLabels: labelsOf(linkTypes),
  badges,
  siteUrl: SITE_URL,
  resumeUrl: API.resumeExport,
});

await writeFile(fileURLToPath(new URL("../../README.md", import.meta.url)), readme);
console.log("README.md written");
