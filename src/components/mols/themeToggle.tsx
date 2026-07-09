"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isMounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  if (!isMounted) return null;

  //handle ThemeToggle
  const handleToggle = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="outline"
      className="p-0 flex h-9 w-9 items-center bg-transparent justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
      onClick={handleToggle}
    >
      {resolvedTheme === "dark" ? (
        <>
          <Sun className="h-5 w-5" />
          <span className="sr-only">light theme</span>
        </>
      ) : (
        <>
          <Moon className="h-5 w-5" />
          <span className="sr-only">dark theme</span>
        </>
      )}
    </Button>
  );
}
