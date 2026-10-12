"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Menu, X, ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "الخدمات الهندسية" },
    { href: "/case-studies", label: "دراسات الحالة" },
    { href: "/architecture", label: "المعمارية التقنية" },
    { href: "/about", label: "عن الشركة" },
  ];

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-6xl px-4">
      <nav className="flex items-center justify-between rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-[#111827]/85 px-5 py-2.5 shadow-lg shadow-slate-200/50 dark:shadow-black/40 backdrop-blur-md transition-colors duration-300">
        
        {/* الشعار */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 dark:bg-cyan-950/50 text-[#00B4D8] transition-transform group-hover:scale-105">
            <Terminal className="h-4 w-4" />
          </div>
          <span className="font-mono text-base font-bold text-slate-900 dark:text-white">
            RANSI<span className="text-[#00B4D8]">.</span>
          </span>
        </Link>

        {/* روابط سطح المكتب */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* أزرار الإجراءات ويزر الثيم لسطح المكتب */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-[#00B4D8] px-4 py-2 text-sm font-medium text-white shadow-md shadow-cyan-500/20 transition-all hover:bg-[#0096C7]"
          >
            <span>بدء مشروع</span>
            <ArrowRight className="h-4 w-4 rotate-180" />
          </Link>
        </div>

        {/* زر قائمة الجوال وزر الثيم */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* القائمة المنسدلة للجوال */}
      {isOpen && (
        <div className="mt-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#111827]/95 p-4 shadow-xl backdrop-blur-md md:hidden transition-colors duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#00B4D8] px-4 py-2.5 text-sm font-medium text-white"
            >
              <span>بدء مشروع</span>
              <ArrowRight className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}