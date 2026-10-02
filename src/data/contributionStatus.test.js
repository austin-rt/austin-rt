import contributions from "./openSource.json";
import {
  GITHUB_USER,
  PR_STATE,
  cardsFrom,
  fetchPullRequests,
  parsePullUrl,
  searchQuery,
  stateOf,
} from "./contributionStatus";

const pull = ({ repo = "owner/repo", number = 7, state = "open", draft = false, mergedAt = null, createdAt = "2026-03-01T00:00:00Z" } = {}) => ({
  repository_url: `https://api.github.com/repos/${repo}`,
  number,
  state,
  draft,
  created_at: createdAt,
  pull_request: { merged_at: mergedAt },
});

const entry = (href = "https://github.com/owner/repo/pull/7") => ({ name: "Name", href });

describe("openSource.json", () => {
  it.each(contributions.map((c) => [c.name, c.href]))("%s links to a pull request", (_, href) => {
    expect(() => parsePullUrl(href)).not.toThrow();
  });
});

describe("parsePullUrl", () => {
  it("reads the repo and PR number from a pull request link", () => {
    expect(parsePullUrl("https://github.com/RocketChat/Apps.Github22/pull/159")).toEqual({
      repo: "RocketChat/Apps.Github22",
      number: 159,
    });
  });

  it("rejects a link that isn't a pull request", () => {
    expect(() => parsePullUrl("https://github.com/owner/repo/issues/7")).toThrow("owner/repo/issues/7");
  });
});

describe("stateOf", () => {
  it("reports a merged PR as merged even though GitHub marks it closed", () => {
    expect(stateOf(pull({ state: "closed", mergedAt: "2026-10-03T00:00:00Z" }))).toBe(PR_STATE.merged);
  });

  it("reports a PR closed without merging as closed", () => {
    expect(stateOf(pull({ state: "closed" }))).toBe(PR_STATE.closed);
  });

  it("reports an open draft as a draft", () => {
    expect(stateOf(pull({ draft: true }))).toBe(PR_STATE.draft);
  });
});

describe("cardsFrom", () => {
  it("dates a merged PR by the month it merged", () => {
    const [card] = cardsFrom([entry()], [pull({ state: "closed", mergedAt: "2026-10-04T00:00:00Z" })]);
    expect(card).toMatchObject({ state: PR_STATE.merged, date: "2026-10" });
  });

  it("dates an open PR by the month it opened", () => {
    const [card] = cardsFrom([entry()], [pull()]);
    expect(card).toMatchObject({ state: PR_STATE.open, date: "2026-03" });
  });

  it("takes status only from the card's own PR, not another PR in the same repo", () => {
    const [card] = cardsFrom([entry()], [pull({ number: 9, state: "closed" })]);
    expect(card.state).toBeUndefined();
  });

  it("takes status only from the card's own repo, not a PR with the same number elsewhere", () => {
    const [card] = cardsFrom([entry()], [pull({ repo: "other/repo" })]);
    expect(card.state).toBeUndefined();
  });

  it("matches the repo regardless of case", () => {
    const [card] = cardsFrom([entry("https://github.com/Owner/Repo/pull/7")], [pull({ repo: "owner/REPO" })]);
    expect(card.state).toBe(PR_STATE.open);
  });

  it("keeps every card in order, with its link and repo, when GitHub can't be reached", () => {
    const cards = cardsFrom([entry("https://github.com/a/b/pull/1"), entry("https://github.com/c/d/pull/2")], null);
    expect(cards.map(({ href, repo, state, date }) => ({ href, repo, state, date }))).toEqual([
      { href: "https://github.com/a/b/pull/1", repo: "a/b", state: undefined, date: undefined },
      { href: "https://github.com/c/d/pull/2", repo: "c/d", state: undefined, date: undefined },
    ]);
  });
});

describe("searchQuery", () => {
  it("asks for the user's PRs once per repo", () => {
    expect(
      searchQuery([entry("https://github.com/a/b/pull/1"), entry("https://github.com/a/b/pull/2"), entry("https://github.com/c/d/pull/3")]),
    ).toBe(`is:pr author:${GITHUB_USER} repo:a/b repo:c/d`);
  });
});

describe("fetchPullRequests", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("rejects when GitHub answers with an error", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({ ok: false, status: 403 });
    await expect(fetchPullRequests([entry()])).rejects.toThrow("403");
  });

  it("returns the search result items", async () => {
    const items = [pull()];
    jest.spyOn(global, "fetch").mockResolvedValue({ ok: true, json: async () => ({ items }) });
    await expect(fetchPullRequests([entry()])).resolves.toBe(items);
  });
});
