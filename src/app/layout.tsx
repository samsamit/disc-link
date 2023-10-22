import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Providers } from "./Providers";
import AppShell from "./components/appShell/AppShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "DiscLink",
  description: "Link your self to the discgolf community!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-foreground bg-background dark">
      <body className={`font-sans ${inter.variable}`}>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
