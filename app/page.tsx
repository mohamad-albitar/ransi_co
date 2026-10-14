import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServicesBento } from "@/components/modules/ServicesBento";
import { HowWeWork } from "@/components/modules/HowWeWork";

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] bg-white dark:bg-[#0B0F19] transition-colors duration-300 overflow-hidden">
      
      {/* قسم المقدمة (Hero Section) */}
      <section className="mx-auto max-w-4xl px-4 pt-24 pb-20 text-center sm:px-6">
        
        <h1 className="text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-white sm:text-7xl sm:leading-[1.1] transition-colors duration-300">
          شريكك الرقمي لتطوير <span className="text-[#5315F6] dark:text-[#7C3AED]">أقوى الأنظمة</span>
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-slate-400 sm:text-xl max-w-2xl mx-auto transition-colors duration-300">
          أسرع، أكثر أماناً، وأكثر ذكاءً. في شركة <span className="font-bold text-[#0F172A] dark:text-white">Ransi</span> نبني لك مواقع الويب، تطبيقات الهواتف، والحلول البرمجية المتكاملة بمعايير عالمية لا تقبل المساومة.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          
          <div className="relative w-full sm:w-auto group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-600 opacity-40 blur-md group-hover:opacity-85 transition duration-500"></div>

            <Link
              href="/contact"
              className="relative w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-[#5315F6] dark:bg-[#7C3AED] px-8 py-4 text-base font-bold text-white shadow-xl shadow-purple-500/30 transition-all hover:bg-[#4309D0] dark:hover:bg-[#6D28D9]"
            >
              <span>ابدأ مشروعك الآن</span>
              <ArrowRight className="h-5 w-5 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-violet-400 to-transparent rounded-full shadow-[0_0_12px_#7c3aed] animate-pulse"></div>
          </div>

          <Link
            href="/services"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 px-8 py-4 text-base font-bold text-gray-800 dark:text-slate-200 transition-all hover:bg-gray-50 dark:hover:bg-slate-800 hover:border-gray-300 dark:hover:border-slate-700"
          >
            <span>استعراض الخدمات</span>
          </Link>
        </div>

      </section>

      {/* قسم خدمات البينتو */}
      <ServicesBento />

      {/* قسم كيف نعمل (مراحل التنفيذ) */}
      <HowWeWork />

    </div>
  );
}