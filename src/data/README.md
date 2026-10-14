# Site content

The site renders from the data in this folder, and so does the GitHub profile README at the repo
root. No component changes are needed to add, reorder or retire an item.

- `profile.js`: hero, About paragraphs, section headings and contact options
- `projects.js`: Projects
- `openSource.json`: Open Source

## Profile README

The root `README.md` is generated. Never edit it by hand. `.github/workflows/readme.yml` runs
`npm run readme` on every push to `main` that touches this folder, `src/assets`, `src/readme` or
`scripts/readme`, and once a day to refresh the Open Source PR statuses, then commits the README if
it changed. `vercel.json` skips the Vercel build for a commit that only changes `README.md`.

- Layout lives in `src/readme/renderReadme.js`.
- A contact option with `onGitHub: false` stays on the site and out of the README.
- To preview locally: `GITHUB_TOKEN=$(gh auth token) npm run readme`. Without a token the GitHub
  search API rate-limits quickly and the Open Source list is written without statuses.

## Add a project

1. Make a 1200x750 card image (16:10) and save it as WebP in `src/assets/projects/`. The current
   cards are composed images (brand gradient, title, framed screenshot), not raw screenshots. A plain
   capture works too:
   ```sh
   npx playwright screenshot --browser chromium --viewport-size=1200,750 https://example.com shot.png
   cwebp -q 82 shot.png -o src/assets/projects/example.webp
   ```
2. Import it at the top of `projects.js` and append an object to the array. Fields:
   - `status`: `"live"` or `"finished"`
   - `links`: the first entry is the card's primary button; types come from `linkTypes.js`
     (`appstore`, `playstore`, `webapp`, `web`, `storybook`, `repo`, `info`). Only list links that resolve;
     Crapple Maps gets `playstore` once the Play listing is published.
   - `stack`: slugs from `stackIcons.js` (add a slug there if it is missing)
   - `image`: optional; without it the card shows a stack-icon tile
   - `featured`: `true` renders the wide two-column card
3. Push to `main`. Vercel builds and deploys.

## Add an open source contribution

Append an object to `openSource.json`. Order is display order.

- `name`: the product or company, shown as the card title (`Bitwarden`)
- `product`: the part of it you worked on (`Browser Extension`)
- `summary`: one sentence
- `language`: the main language of the change
- `href`: the pull request link, `https://github.com/owner/repo/pull/123`. When the PR closed without
  merging, the branch on your fork instead, `https://github.com/austin-rt/repo/tree/branch`: the card
  then shows the fork, a Fork badge and no status

The card shows the repo from `href`. On page load the site asks the GitHub search API for
austin-rt's PRs in those repos (see `contributionStatus.js`) and gives each card its PR's status
badge and date: the merge month for a merged PR, otherwise the month it opened. If GitHub can't be
reached the card shows without a badge or date.
