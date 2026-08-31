import type { Metadata } from "next";
import "./globals.css";
import { ThemeToggle } from "../components/ThemeToggle";

export const metadata: Metadata = {
  title: "The AI workspace that works for you. | Notion",
  description: "Where teams and agents build together."
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
