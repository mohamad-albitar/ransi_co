import Link from "next/link";
import { Terminal, Shield, Cpu, HardDrive } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#1E2638] bg-[#0A0D14] py-12 text-[#94a3b8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-[#2870BD]" />
              <span className="font-mono text-base font-bold text-[#F8FAFC]">RANSI</span>
            </div>
            <p className="text-xs leading-relaxed text-[#94a3b8]">
              هندسة برمجيات متقدمة، بنى تحتية سحابية مرنة، وأنظمة رقمية عالية الموثوقية للمؤسسات التقنية.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#FDD1EA] pt-2">
              <Shield className="h-3.5 w-3.5" />
              <span>Zero-Trust Architecture</span>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F8FAFC]">القدرات الهندسية</h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li><Link href="/services" className="hover:text-[#F8FAFC]">High-Concurrency Systems</Link></li>
              <li><Link href="/services" className="hover:text-[#F8FAFC]">Full-Stack Web Architectures</Link></li>
              <li><Link href="/services" className="hover:text-[#F8FAFC]">Cloud & DevOps Pipelines</Link></li>
              <li><Link href="/services" className="hover:text-[#F8FAFC]">Security & Performance Audits</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F8FAFC]">البيئة التشغيلية</h4>
            <ul className="mt-4 space-y-2 text-xs font-mono">
              <li className="flex items-center gap-1.5"><Cpu className="h-3.5 w-3.5 text-[#2870BD]" /> Next.js App Router (RSC)</li>
              <li className="flex items-center gap-1.5"><HardDrive className="h-3.5 w-3.5 text-[#2870BD]" /> Edge Runtime Ready</li>
              <li>Type Safety: 100% Strict Mode</li>
              <li>SLA: 99.99% Availability</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F8FAFC]">التواصل</h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li><Link href="/contact" className="hover:text-[#F8FAFC]">حجز استشارة معمارية</Link></li>
              <li><Link href="/privacy" className="hover:text-[#F8FAFC]">سياسة الخصوصية والأمان</Link></li>
              <li><Link href="/terms" className="hover:text-[#F8FAFC]">شروط تقديم الخدمات</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-[#1E2638] pt-6 text-xs md:flex-row">
          <p>© {new Date().getFullYear()} RANSI. جميع الحقوق محفوظة.</p>
          <p className="font-mono text-[11px] text-[#64748b]">Engineered for high performance and durability.</p>
        </div>
      </div>
    </footer>
  );
}