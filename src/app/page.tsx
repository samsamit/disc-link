import { Button } from "@nextui-org/react";
import Link from "next/link";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Disc<span className="text-[hsl(280,100%,70%)]">Link</span>
        </h1>
        <ThemeSwitcher />
      </div>
    </main>
  );
}
