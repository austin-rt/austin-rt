// Writes the GitHub profile README from the site's data. Run with
// `npm run readme`; .github/workflows/readme.yml runs it on every push to main.
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { about, contactOptions, hero, sections, SITE_URL } from "../../src/data/profile.js";
import { projects } from "../../src/data/projects.js";
import contributions from "../../src/data/openSource.json";
import { stackIcons } from "../../src/data/stackIcons.js";
import { linkTypes } from "../../src/data/linkTypes.js";
import { cardsFrom, fetchPullRequests } from "../../src/data/contributionStatus.js";
import { API } from "../../src/utils/constants.js";
import { renderReadme } from "../../src/readme/renderReadme.js";

const labelsOf = (table) => Object.fromEntries(Object.entries(table).map(([key, { label }]) => [key, label]));

const pulls = await fetchPullRequests(contributions, process.env.GITHUB_TOKEN).catch((error) => {
  console.warn(`PR status unavailable, writing cards without it: ${error.message}`);
  return null;
});

const readme = renderReadme({
  hero,
  about,
  sections,
  contactOptions,
  projects,
  cards: cardsFrom(contributions, pulls),
  stackLabels: labelsOf(stackIcons),
  linkLabels: labelsOf(linkTypes),
  siteUrl: SITE_URL,
  resumeUrl: API.resumeExport,
});

await writeFile(fileURLToPath(new URL("../../README.md", import.meta.url)), readme);
console.log("README.md written");
