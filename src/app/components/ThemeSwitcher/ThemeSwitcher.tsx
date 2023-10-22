"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Theme } from "themeConfig";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      <p>Switch to:</p>
      {(theme as Theme) === "dark" ? (
        <Button onClick={() => setTheme("light")}>Light Mode</Button>
      ) : (
        <Button onClick={() => setTheme("dark")}>Dark Mode</Button>
      )}
    </div>
  );
}
