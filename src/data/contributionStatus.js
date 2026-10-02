// Live status for the Open Source cards. Each card is a fixed PR link in
// openSource.json; GitHub supplies that PR's state and date on page load.

export const GITHUB_USER = "austin-rt";
const SEARCH_URL = "https://api.github.com/search/issues";

export const PR_STATE = {
  merged: "merged",
  open: "open",
  draft: "draft",
  closed: "closed",
};

const PULL_URL = /^https:\/\/github\.com\/([^/]+\/[^/]+)\/pull\/(\d+)$/;

export const parsePullUrl = (href) => {
  const match = href.match(PULL_URL);
  if (!match) throw new Error(`Not a GitHub pull request link: ${href}`);
  return { repo: match[1], number: Number(match[2]) };
};

const repoOf = (item) =>
  item.repository_url.split("/repos/")[1].toLowerCase();

export const stateOf = (item) => {
  if (item.pull_request?.merged_at) return PR_STATE.merged;
  if (item.state === "closed") return PR_STATE.closed;
  if (item.draft) return PR_STATE.draft;
  return PR_STATE.open;
};

// `items` is the search result, or null when the request failed. A card whose
// PR isn't in the result keeps its link and shows no status or date.
export const cardsFrom = (contributions, items) =>
  contributions.map((entry) => {
    const card = { ...entry, ...parsePullUrl(entry.href) };
    const pull = items?.find(
      (item) =>
        item.number === card.number && repoOf(item) === card.repo.toLowerCase(),
    );
    if (!pull) return card;
    return {
      ...card,
      state: stateOf(pull),
      date: (pull.pull_request?.merged_at ?? pull.created_at).slice(0, 7),
    };
  });

export const searchQuery = (contributions) => {
  const repos = new Set(contributions.map((entry) => parsePullUrl(entry.href).repo));
  return ["is:pr", `author:${GITHUB_USER}`, ...[...repos].map((repo) => `repo:${repo}`)].join(" ");
};

export const fetchPullRequests = async (contributions) => {
  const url = `${SEARCH_URL}?per_page=100&q=${encodeURIComponent(searchQuery(contributions))}`;
  const response = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!response.ok) throw new Error(`GitHub search returned ${response.status}`);
  return (await response.json()).items;
};
