// Contributions to other people's projects, newest first.
//
// To add one: append an object here and push to main.
//   state: "merged" | "open" | "fork"
//   date:  "YYYY-MM" (month the PR was opened, or the fork branch last pushed)
export const contributions = [
  {
    org: "newmarcel",
    project: "KeepingYouAwake",
    summary:
      "Activation durations that end at a time of day, the feature requested in upstream issue #161.",
    href: "https://github.com/austin-rt/KeepingYouAwake/tree/until-time",
    state: "fork",
    date: "2026-09",
    language: "Objective-C",
  },
  {
    org: "crocodilestick",
    project: "Calibre-Web-Automated",
    summary:
      "Fixed reverse-proxy detection so Kobo sync works behind Cloudflare Tunnel.",
    href: "https://github.com/crocodilestick/Calibre-Web-Automated/pull/1143",
    state: "merged",
    date: "2026-08",
    language: "Python",
  },
  {
    org: "janeczku",
    project: "calibre-web",
    summary: "The same reverse-proxy fix, submitted to the original project.",
    href: "https://github.com/janeczku/calibre-web/pull/3595",
    state: "open",
    date: "2026-02",
    language: "Python",
  },
  {
    org: "kevinroberts",
    project: "city-timezones",
    summary:
      "Added Oxford, Starkville and College Station so Who Clinches can resolve kickoff time zones.",
    href: "https://github.com/kevinroberts/city-timezones/pull/37",
    state: "merged",
    date: "2025-12",
    language: "JavaScript",
  },
];
