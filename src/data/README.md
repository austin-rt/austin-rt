# Site content

The Projects and Open Source sections render from the plain-object arrays in this folder. No
component changes are needed to add, reorder or retire an item.

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
- `href`: the pull request link, `https://github.com/owner/repo/pull/123`

The card shows the repo from `href`. On page load the site asks the GitHub search API for
austin-rt's PRs in those repos (see `contributionStatus.js`) and gives each card its PR's status
badge and date: the merge month for a merged PR, otherwise the month it opened. If GitHub can't be
reached the card shows without a badge or date.
