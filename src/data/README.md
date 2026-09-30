# Site content

The Projects and Open Source sections render from the plain-object arrays in this folder. No
component changes are needed to add, reorder or retire an item.

## Add a project

1. Capture a 1200x750 screenshot (16:10) and save it as WebP in `src/assets/projects/`.
   ```sh
   npx playwright screenshot --browser chromium --viewport-size=1200,750 https://example.com shot.png
   cwebp -q 82 shot.png -o src/assets/projects/example.webp
   ```
2. Import it at the top of `projects.js` and append an object to the array. Fields:
   - `status`: `"live"` or `"finished"`
   - `links`: the first entry is the card's primary button; types come from `linkTypes.js`
   - `stack`: slugs from `stackIcons.js` (add a slug there if it is missing)
   - `image`: optional; without it the card shows a stack-icon tile
   - `featured`: `true` renders the wide two-column card
3. Push to `main`. Vercel builds and deploys.

## Add an open source contribution

Append an object to `openSource.js`: `org`, `project`, one-sentence `summary`, `href` (the PR, or
the fork branch), `state` (`"merged"`, `"open"` or `"fork"`), `date` as `YYYY-MM`, and `language`.
Order is display order.
