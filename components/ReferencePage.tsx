import { loadReferenceMarkup } from "../lib/reference-loader";

export function ReferencePage() {
  const { head, body } = loadReferenceMarkup();

  return (
    <>
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: head }} />
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
