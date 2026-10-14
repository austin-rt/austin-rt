// Lets Node import the site's CRA source as-is: image imports become their
// repo-relative path (what the README links to), JSON loads without an import
// attribute, and extensionless relative imports resolve to .js.
import { readFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "../../..");
const ASSET = /\.(png|jpe?g|gif|webp|svg)$/;

export async function resolve(specifier, context, nextResolve) {
  try {
    return await nextResolve(specifier, context);
  } catch (error) {
    if (!specifier.startsWith(".") || path.extname(specifier)) throw error;
    return nextResolve(`${specifier}.js`, context);
  }
}

export async function load(url, context, nextLoad) {
  if (ASSET.test(url)) {
    const relative = path.relative(ROOT, fileURLToPath(url)).split(path.sep).join("/");
    return { format: "module", source: `export default ${JSON.stringify(relative)};`, shortCircuit: true };
  }
  if (url.endsWith(".json") && url.startsWith(pathToFileURL(ROOT).href)) {
    const json = await readFile(fileURLToPath(url), "utf8");
    return { format: "module", source: `export default ${json};`, shortCircuit: true };
  }
  return nextLoad(url, context);
}
