import { loadReferenceMarkup } from "../lib/reference-loader";

export default function HomePage() {
  const { head, body } = loadReferenceMarkup();

  return (
    <>
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: head }} />
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
