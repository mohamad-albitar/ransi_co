"use client";

import React from "react";
import Link from "next/link";
import { Globe, Smartphone, Code2, ShieldCheck, ArrowUpRight, Sparkles } from "lucide-react";

export function ServicesBento() {
  const services = [
    {
      id: "web",
      title: "تطوير المواقع والمنصات",
      description: "بناء مواقع ويب تفاعلية وفائقة السرعة متوافقة مع جميع الشاشات ومصممة لتحقيق نتائج تجارية حقيقية.",
      icon: Globe,
      badge: "Web Dev",
      href: "/services/web",
    },
    {
      id: "mobile",
      title: "تطبيقات الهواتف الذكية",
      description: "تطوير تطبيقات مخصصة ونشطة لنظامي iOS و Android بتصاميم عصرية وأداء سلس.",
      icon: Smartphone,
      badge: "Mobile Apps",
      href: "/services/mobile",
    },
    {
      id: "custom",
      title: "حلول وأنظمة مخصصة",
      description: "برمجة أنظمة إدارة الشركات ولوحات التحكم المعقدة المصممة خصيصاً لتلبية احتياجات عملك بدقة.",
      icon: Code2,
      badge: "Software",
      href: "/services/custom",
    },
    {
      id: "security",
      title: "الأمان وحماية البيانات",
      description: "تأمين شامل ضد الثغرات، تشفير البيانات المتقدم، وربط سلس للواجهات البرمجية APIs.",
      icon: ShieldCheck,
      badge: "Cyber Security",
      href: "/services/security",
    },
  ];

  return (
    <section className="relative py-20 bg-[#FAF8F5] dark:bg-[#0B0F19] transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* ترويسة القسم */}
        <div className="mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 dark:border-purple-900/50 bg-violet-50 dark:bg-purple-950/40 px-4 py-1 text-xs font-semibold text-violet-700 dark:text-purple-400">
            <Sparkles className="h-3.5 w-3.5 text-violet-600 dark:text-purple-400" />
            <span>خدماتنا المعتمدة</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#1C1917] dark:text-white tracking-tight leading-tight">
            مسارات و{" "}
            <span className="relative inline-block px-1">
              {/* النص المميز باللون البنفسجي */}
              <span className="relative z-10 text-violet-600 dark:text-purple-400">حلول تقنية متكاملة</span>
              
              {/* خطين متحرّكين باللون البنفسجي */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-4 overflow-visible"
                viewBox="0 0 250 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C60 2 190 2 248 10"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="text-violet-600 dark:text-purple-400 animate-pulse"
                />
                <path
                  d="M10 14C70 6 180 6 240 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-violet-400/60 dark:text-purple-400/60"
                />
              </svg>
            </span>
          </h2>

          <p className="text-stone-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed pt-2">
            مزيج الخدمات الاحترافية التي ندمجها بعناية لترقية نشاطك الرقمي وضمان أعلى عائد على الاستثمار.
          </p>
        </div>

        {/* شبكة البطاقات الديناميكية بالدرجات البنفسجية */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group relative p-8 rounded-3xl bg-white dark:bg-[#111827] border border-stone-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:border-violet-300 dark:hover:border-purple-800"
              >
                <div className="space-y-6">
                  {/* الشريط العلوي للبطاقة (الأيقونة + السهم) */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 dark:bg-purple-950/60 text-violet-600 dark:text-purple-400 group-hover:bg-violet-600 group-hover:text-white dark:group-hover:bg-purple-600 transition-colors duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 dark:border-slate-800 text-stone-400 dark:text-slate-500 group-hover:text-violet-600 dark:group-hover:text-purple-400 group-hover:border-violet-300 dark:group-hover:border-purple-800 transition-all duration-300">
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* نصوص وتفاصيل البطاقة */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-purple-400">
                      {service.badge}
                    </span>
                    <h3 className="text-xl font-bold text-[#1C1917] dark:text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 dark:text-slate-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}