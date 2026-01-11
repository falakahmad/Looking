import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import TranslationLoader from "@/components/TranslationLoader";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const viewport: Viewport = {
  themeColor: "#1d5fe8",
};

export const metadata: Metadata = {
  title: "Looking Marketplace | Innovative Digital Future",
  description:
    "Looking Marketplace provides high-end, scalable digital solutions for the next generation of business excellence.",
  keywords: [
    "Looking Marketplace",
    "Digital Solutions",
    "Next.js",
    "i18n",
    "Responsive Design",
  ],
  icons: {
    icon: "/tabLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){document.documentElement.classList.add('translate-cloak');})()`,
          }}
        />
      </head>
      <body className={outfit.className} suppressHydrationWarning>
        <TranslationLoader />
        {children}
      </body>
    </html>
  );
}
