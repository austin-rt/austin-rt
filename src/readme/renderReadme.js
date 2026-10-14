import { PR_LABEL, formatMonth } from "../data/contributionStatus";

export const GENERATED_NOTICE =
  "<!-- Generated from src/data by scripts/readme/generate.mjs. Edit the site data, not this file. -->";

const link = (label, href) => `[${label}](${href})`;

const renderHero = ({ hero, banner, siteUrl, resumeUrl }) => [
  '<div align="center">',
  "",
  `<img src="${banner}" alt="${hero.name}" />`,
  "",
  hero.greeting,
  "",
  `# ${hero.name}`,
  "",
  hero.role,
  "",
  [link(new URL(siteUrl).host, siteUrl), link("Download Resume", resumeUrl)].join(" · "),
  "",
  "</div>",
];

const renderAbout = ({ about }) => [`## ${about.title}`, "", about.paragraphs.join("\n\n")];

const renderProject = (project, { stackLabels, linkLabels }) => {
  const primary = project.links[0];
  const lines = [`### ${link(project.name, primary.href)}`, ""];
  if (project.image) {
    lines.push(`<a href="${primary.href}"><img src="${project.image}" width="600" alt="${project.name} screenshot" /></a>`, "");
  }
  lines.push(
    `**${project.tagline}**`,
    "",
    project.description,
    "",
    `Built with ${project.stack.map((slug) => stackLabels[slug]).join(" · ")}`,
    "",
    project.links.map(({ type, href }) => link(linkLabels[type], href)).join(" · "),
  );
  return lines.join("\n");
};

const renderProjects = ({ sections, projects, ...labels }) => [
  `## ${sections.projects.title}`,
  "",
  projects.map((project) => renderProject(project, labels)).join("\n\n"),
];

// A card with no state means GitHub couldn't be reached; it shows without a status.
const renderContribution = (card) => {
  const status = card.state ? ` · ${PR_LABEL[card.state]} ${formatMonth(card.date)}` : "";
  return `- **${link(`${card.name}: ${card.product}`, card.href)}**<br />\`${card.repo}\` · ${card.language}${status}<br />${card.summary}`;
};

const renderOpenSource = ({ sections, cards }) => [
  `## ${sections.openSource.title}`,
  "",
  cards.map(renderContribution).join("\n"),
];

const renderContact = ({ sections, contactOptions }) => [
  `## ${sections.contact.title}`,
  "",
  contactOptions
    .filter((option) => option.onGitHub)
    .map(({ title, cta, href }) => `${link(title, href)}: ${cta}`)
    .join("<br />\n"),
];

export const renderReadme = (content) =>
  [
    GENERATED_NOTICE,
    "",
    ...renderHero(content),
    "",
    ...renderAbout(content),
    "",
    ...renderProjects(content),
    "",
    ...renderOpenSource(content),
    "",
    ...renderContact(content),
    "",
  ].join("\n");
