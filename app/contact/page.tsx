import { ContactForm } from "@/components/modules/ContactForm";
import { CheckCircle2, Clock, ShieldCheck, Zap } from "lucide-react";

export const metadata = {
  title: "ابدأ مشروعك الآن | Ransi",
  description: "دعنا نحول فكرتك إلى نظام رقمي متكامل بمعايير عالمية. تواصل مع فريق Ransi اليوم.",
};

const features = [
  {
    icon: Clock,
    title: "استجابة سريعة",
    description: "نتواصل معك خلال أقل من 24 ساعة لتقييم مشروعك ومناقشة التفاصيل.",
  },
  {
    icon: ShieldCheck,
    title: "اتفاقية عدم إفصاح (NDA)",
    description: "أفكارك وبيانات مشروعك محمية تماماً بأعلى معايير السرية والأمان.",
  },
  {
    icon: Zap,
    title: "استشارة تقنية مجانية",
    description: "نقدم لك تحليلاً وافياً واقتراحات تقنية تناسب حجم أهدافك وميزانيتك.",
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0B0F19] transition-colors duration-300 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* خلفية جمالية ملائمة للمشروع */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-purple-500/10 via-violet-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* العناوين الرئيسية */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-4 shadow-sm">
            <span>تواصل معنا</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white sm:text-6xl">
            لنبدأ ببناء <span className="text-[#5315F6] dark:text-[#7C3AED]">مشروعك القادم</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-400">
            أخبرنا برؤيتك وسيتولى فريقنا التقني تحويلها إلى واقع ملموس وبأعلى معايير الجودة.
          </p>
        </div>

        {/* شبكة الصفحة (النموذج + معالم الثقة والتفاصيل) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* الجانب الأيمن: مميزات ومعلومات التواصل */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-gray-50/70 dark:bg-[#111827]/70 border border-gray-200 dark:border-[#1F2937] rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-6">
                لماذا تبدأ رحلتك مع Ransi؟
              </h2>
              <div className="space-y-6">
                {features.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0F172A] dark:text-white text-base">
                          {feat.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-slate-400 mt-1 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* بطاقة الدعم السريع والواتساب / البريد */}
            <div className="bg-gradient-to-br from-[#5315F6] to-[#7C3AED] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <h3 className="text-xl font-bold mb-2">تفضل المحادثة المباشرة؟</h3>
              <p className="text-purple-100 text-sm mb-6 leading-relaxed">
                يمكنك التواصل المباشر مع مستشارينا التقنيين مناقشة الأفكار بشكل أسرع.
              </p>
              <div className="space-y-3 font-medium text-sm">
                <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-2xl backdrop-blur-md">
                  <CheckCircle2 className="w-5 h-5 text-purple-200" />
                  <span>البريد الإلكتروني: contact@ransi.co</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-2xl backdrop-blur-md">
                  <CheckCircle2 className="w-5 h-5 text-purple-200" />
                  <span>واتساب الأعمال: 966500000000+</span>
                </div>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: النموذج التفاعلي المتقدم */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}