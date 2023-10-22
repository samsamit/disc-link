import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "./Providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
