import { PR_LABEL, formatMonth } from "../data/contributionStatus";

export const GENERATED_NOTICE =
  "<!-- Generated from src/data by scripts/readme/generate.mjs. Edit the site data, not this file. -->";

const link = (label, href) => `[${label}](${href})`;
const badgeLink = (label, src, href) => `[![${label}](${src})](${href})`;

const renderHero = ({ hero, banner, badges, siteUrl, resumeUrl }) => [
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
  [badgeLink(new URL(siteUrl).host, badges.site, siteUrl), badgeLink("Download Resume", badges.resume, resumeUrl)].join(" "),
  "",
  "</div>",
];

const renderAbout = ({ about }) => [`## ${about.title}`, "", about.paragraphs.join("\n\n")];

const renderProject = (project, { stackLabels, linkLabels, badges }) => {
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
    project.links.map(({ type, href }) => badgeLink(linkLabels[type], badges[type], href)).join(" "),
  );
  return lines.join("\n");
};

const renderProjects = ({ sections, projects, ...labels }) => [
  `## ${sections.projects.title}`,
  "",
  projects.map((project) => renderProject(project, labels)).join("\n\n"),
];

export const FORK_LABEL = "Fork";

// GitHub's social preview card for the PR, or for the fork when the card links
// a branch. The first path segment only busts caches, so it carries the state
// and the image refreshes when the PR merges.
const previewImage = (card) =>
  card.branch
    ? `https://opengraph.githubassets.com/fork/${card.repo}`
    : `https://opengraph.githubassets.com/${card.state ?? "pr"}/${card.repo}/pull/${card.number}`;

// badges.pr[state] turns a label into that state's badge. A PR card with no
// state means GitHub couldn't be reached; it gets a plain "Pull Request" badge.
const renderContribution = (card, badges) => {
  const label = card.state
    ? `${PR_LABEL[card.state]} ${formatMonth(card.date)}`
    : card.branch
      ? FORK_LABEL
      : "Pull Request";
  const status = badgeLink(label, badges.pr[card.state ?? "unknown"](label), card.href);
  const alt = card.branch ? `${card.repo} branch ${card.branch}` : `${card.repo} pull request ${card.number}`;
  return [
    `### ${link(card.name, card.href)}`,
    "",
    `<a href="${card.href}"><img src="${previewImage(card)}" width="600" alt="${alt}" /></a>`,
    "",
    `**${card.product}**`,
    "",
    card.summary,
    "",
    `Built in ${card.language} · \`${card.repo}\``,
    "",
    status,
  ].join("\n");
};

const renderOpenSource = ({ sections, cards, badges }) => [
  `## ${sections.openSource.title}`,
  "",
  cards.map((card) => renderContribution(card, badges)).join("\n\n"),
];

const renderContact = ({ sections, contactOptions, badges }) => [
  `## ${sections.contact.title}`,
  "",
  contactOptions
    .filter((option) => option.onGitHub)
    .map(({ type, title, href }) => badgeLink(title, badges[type], href))
    .join(" "),
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
