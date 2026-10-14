import { PR_LABEL, PR_STATE } from "../data/contributionStatus";
import { renderReadme } from "./renderReadme";

const project = (overrides = {}) => ({
  name: "Thing",
  tagline: "Tag",
  description: "Desc",
  stack: ["react", "vercel"],
  links: [
    { type: "web", href: "https://thing.example" },
    { type: "repo", href: "https://github.com/me/thing" },
  ],
  ...overrides,
});

const card = (overrides = {}) => ({
  name: "Proj",
  product: "Part",
  summary: "Did a thing.",
  language: "TypeScript",
  href: "https://github.com/o/r/pull/1",
  repo: "o/r",
  number: 1,
  ...overrides,
});

const render = (overrides = {}) =>
  renderReadme({
    hero: { greeting: "Hi", name: "Me", role: "Dev" },
    banner: "images/banner.png",
    about: { title: "About", paragraphs: ["One.", "Two."] },
    sections: { projects: { title: "Projects" }, openSource: { title: "Open Source" }, contact: { title: "Contact" } },
    projects: [project()],
    cards: [card()],
    contactOptions: [],
    stackLabels: { react: "React", vercel: "Vercel" },
    linkLabels: { web: "Website", repo: "GitHub" },
    badges: {
      site: "site.svg",
      resume: "resume.svg",
      web: "web.svg",
      repo: "repo.svg",
      email: "email.svg",
      phone: "phone.svg",
      pr: { [PR_STATE.merged]: (label) => `merged:${label}`, unknown: (label) => `unknown:${label}` },
    },
    siteUrl: "https://me.example",
    resumeUrl: "https://resume.example",
    ...overrides,
  });

describe("renderReadme", () => {
  it("leaves out contact options marked off GitHub", () => {
    const readme = render({
      contactOptions: [
        { type: "email", title: "Email", cta: "Write", href: "mailto:me@example.com", onGitHub: true },
        { type: "phone", title: "Phone", cta: "Call", href: "tel:+15550000000", onGitHub: false },
      ],
    });
    expect(readme).toContain("[![Email](email.svg)](mailto:me@example.com)");
    expect(readme).not.toContain("tel:+15550000000");
  });

  it("titles a project with its first link and lists every link as a badge", () => {
    const readme = render();
    expect(readme).toContain("### [Thing](https://thing.example)");
    expect(readme).toContain("[![Website](web.svg)](https://thing.example) [![GitHub](repo.svg)](https://github.com/me/thing)");
  });

  it("names the stack by label", () => {
    expect(render()).toContain("Built with React · Vercel");
  });

  it("shows a project image linked to the first link, and none when the project has no image", () => {
    expect(render({ projects: [project({ image: "src/assets/projects/thing.webp" })] })).toContain(
      '<a href="https://thing.example"><img src="src/assets/projects/thing.webp"',
    );
    expect(render()).not.toContain('<a href="https://thing.example"><img');
  });

  it("badges a contribution with its PR state and month, linked to the PR", () => {
    const readme = render({ cards: [card({ state: PR_STATE.merged, date: "2026-10" })] });
    const label = `${PR_LABEL[PR_STATE.merged]} Oct 2026`;
    expect(readme).toContain(`[![${label}](merged:${label})](https://github.com/o/r/pull/1)`);
  });

  it("gives a contribution a plain PR badge when GitHub couldn't be reached", () => {
    expect(render()).toContain("[![Pull Request](unknown:Pull Request)](https://github.com/o/r/pull/1)");
  });

  it("refreshes the PR preview image when the PR's state changes", () => {
    const merged = render({ cards: [card({ state: PR_STATE.merged, date: "2026-10" })] });
    expect(merged).toContain(`https://opengraph.githubassets.com/${PR_STATE.merged}/o/r/pull/1`);
    expect(render()).toContain("https://opengraph.githubassets.com/pr/o/r/pull/1");
  });
});
