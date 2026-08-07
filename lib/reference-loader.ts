import { readFileSync } from "node:fs";
import path from "node:path";

const BODY_OPEN = /<body[^>]*>/i;
const HTML_OPEN = /<html[^>]*>/i;

export function loadReferenceMarkup() {
  const source = readFileSync(path.join(process.cwd(), "public", "reference.html"), "utf8");
  const htmlMatch = HTML_OPEN.exec(source);
  const bodyMatch = BODY_OPEN.exec(source);

  if (!htmlMatch || htmlMatch.index === undefined || !bodyMatch || bodyMatch.index === undefined) {
    throw new Error("The source-backed reference document is missing its html or body element.");
  }

  return {
    head: source.slice(htmlMatch.index + htmlMatch[0].length, bodyMatch.index),
    body: source.slice(bodyMatch.index + bodyMatch[0].length)
  };
}
