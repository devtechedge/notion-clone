import type { Metadata } from "next";
import "./globals.css";
import { ThemeToggle } from "../components/ThemeToggle";

const PAGE_TITLE = "The AI workspace that works for you. | Notion";
const PAGE_DESCRIPTION = "Where teams and agents build together.";
const SITE_URL = "https://notion-clone-devtechedge1.vercel.app";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  // Shared links (LinkedIn, Slack, email) render a bare URL without these.
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    images: [{ url: 'https://notion-clone-devtechedge1.vercel.app/og.png', width: 1200, height: 630, alt: 'The AI workspace that works for you. | Notion' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://notion-clone-devtechedge1.vercel.app/og.png'],
  }
};

const THEME_BOOT = `(function(){try{var k="notion-clone-theme";var t=localStorage.getItem(k);if(t!=="light"&&t!=="dark")t="light";var r=document.documentElement;r.setAttribute("data-theme",t);r.style.colorScheme=t;if(t==="dark")r.classList.add("dark");else r.classList.remove("dark");}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
      </head>
      <body>
        <div className="app-chrome">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
