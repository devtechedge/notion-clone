import { readFileSync } from "node:fs";
import path from "node:path";

const BODY_OPEN = /<body[^>]*>/i;

export function loadReferenceMarkup() {
  const source = readFileSync(path.join(process.cwd(), "public", "reference.html"), "utf8");
  const bodyMatch = BODY_OPEN.exec(source);

  if (!bodyMatch || bodyMatch.index === undefined) {
    throw new Error("The source-backed reference document is missing its body.");
  }

  return {
    head: source.slice(source.indexOf(">") + 1, bodyMatch.index),
    body: source.slice(bodyMatch.index + bodyMatch[0].length)
  };
}
