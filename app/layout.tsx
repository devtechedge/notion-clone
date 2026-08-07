import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The AI workspace that works for you. | Notion",
  description: "Where teams and agents build together."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
