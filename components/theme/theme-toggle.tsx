"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-14 rounded-full bg-slate-200/50 dark:bg-slate-800 animate-pulse" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      dir="ltr"
      className="relative flex h-8 w-14 items-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 p-1 shadow-inner transition-colors duration-300 focus:outline-none"
      aria-label="تبديل الوضع الليلي"
    >
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-[#5315F6] text-slate-800 dark:text-white shadow-md transition-transform duration-300 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-amber-500" />
        )}
      </div>
    </button>
  );
}