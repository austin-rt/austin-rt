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
    siteUrl: "https://me.example",
    resumeUrl: "https://resume.example",
    ...overrides,
  });

describe("renderReadme", () => {
  it("leaves out contact options marked off GitHub", () => {
    const readme = render({
      contactOptions: [
        { title: "Email", cta: "Write", href: "mailto:me@example.com", onGitHub: true },
        { title: "Phone", cta: "Call", href: "tel:+15550000000", onGitHub: false },
      ],
    });
    expect(readme).toContain("[Email](mailto:me@example.com): Write");
    expect(readme).not.toContain("tel:+15550000000");
  });

  it("titles a project with its first link and lists every link by label", () => {
    const readme = render();
    expect(readme).toContain("### [Thing](https://thing.example)");
    expect(readme).toContain("[Website](https://thing.example) · [GitHub](https://github.com/me/thing)");
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

  it("shows a contribution's PR status and month", () => {
    const readme = render({ cards: [card({ state: PR_STATE.merged, date: "2026-10" })] });
    expect(readme).toContain(`\`o/r\` · TypeScript · ${PR_LABEL[PR_STATE.merged]} Oct 2026`);
  });

  it("shows a contribution without status when GitHub couldn't be reached", () => {
    expect(render()).toContain("`o/r` · TypeScript<br />Did a thing.");
  });
});
