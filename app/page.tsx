import { ReferencePage } from "../components/ReferencePage";

/**
 * `loadReferenceMarkup` reads the source document with `readFileSync` at module
 * load, so nothing here depends on the request. Pinning the route static means
 * Vercel serves the prerendered HTML from the edge instead of rendering it on
 * every visit, which was the bulk of the time to first byte.
 */
export const dynamic = "force-static";
export const revalidate = 86400;

export default function HomePage() {
  return <ReferencePage />;
}
