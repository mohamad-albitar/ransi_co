"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Compass, Cpu, Layers, Rocket, ShieldCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    number: "01",
    title: "الاكتشاف والتحليل",
    description: "فهم الهدف التجاري، تحديد احتياجات المستخدمين بدقة، دراسة المتطلبات والقيود، وصياغة خارطة طريق واضحة وقابلة للقياس.",
    icon: Compass,
    highlights: ["تحديد الأهداف الاستراتيجية", "دراسة الجمهور المستهدف", "وضع الجدول الزمني والميزانية"],
  },
  {
    id: 2,
    number: "02",
    title: "التخطيط وهندسة التصميم",
    description: "هندسة تجربة المستخدم (UX) وتصميم واجهات تفاعلية مذهلة (UI) تعكس هوية علامتك التجارية وتضمن تجربة مستخدم سلسة.",
    icon: Layers,
    highlights: ["تصاميم UI/UX عصرية", "بناء نماذج أولية (Wireframes)", "هندسة هيكل البيانات والنظام"],
  },
  {
    id: 3,
    number: "03",
    title: "التنفيذ والتطوير البرمجي",
    description: "كتابة أكواد نظيفة، قياسية وقابلة للتوسع باستخدام أحدث التقنيات لضمان أعلى أداء وسرعة استجابة وأمان متقدم.",
    icon: Cpu,
    highlights: ["تطوير الواجهات الخلفية والأمامية", "معايير أمان صارمة", "كود نظيف وخالٍ من العشوائية"],
  },
  {
    id: 4,
    number: "04",
    title: "الاختبار الشامل والإطلاق",
    description: "خضوع النظام لاختبارات دقيقة للأداء، الأمان، والتوافق عبر مختلف الأجهزة والمتصفحات تمهيداً لإطلاق ناجح وسلس.",
    icon: ShieldCheck,
    highlights: ["اختبارات الأداء والسرعة", "فحص الثغرات والأمان", "الإطلاق السلس بدون توقف"],
  },
  {
    id: 5,
    number: "05",
    title: "القياس، الصيانة والتحسين",
    description: "متابعة مؤشرات الأداء الرئيسية (KPIs)، تقديم الدعم المستمر، وتطوير التحديثات والميزات الجديدة بناءً على سلوك المستخدمين.",
    icon: Rocket,
    highlights: ["دعم فني وصيانة دورية", "تحليل الأداء وسلوك المستخدمين", "تطوير مستمر وميزات إضافية"],
  },
];

export function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);

  const current = steps[activeStep];
  const IconComponent = current.icon;

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50/50 dark:bg-[#0B0F19]/50 transition-colors duration-300">
      {/* خلفية جمالية متناسقة مع الموقع */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 to-violet-600/10 dark:from-purple-900/20 dark:to-violet-900/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* عنوان القسم */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-4 shadow-sm">
            <span>رحلة النجاح الرقمي</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white sm:text-5xl">
            مراحل التنفيذ <span className="text-[#5315F6] dark:text-[#7C3AED]">الاحترافية</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-400">
            مسار عمل مدروس بدقة يبدأ بفهم الهدف وينتهي بمنتج رقمي استثنائي قابل للتشغيل والتطوير.
          </p>
        </div>

        {/* المحتوى الرئيسي: مقسم لتفاصيل المرحلة والخطوات التفاعلية */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* الجانب الأيمن: تفاصيل المرحلة النشطة */}
          <div className="lg:col-span-7 bg-white dark:bg-[#111827] rounded-3xl p-8 sm:p-10 border border-gray-200 dark:border-[#1F2937] shadow-xl relative transition-all duration-300">
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-bold text-purple-600 dark:text-purple-400 tracking-wider">
                المرحلة {current.number} / 0{steps.length}
              </span>
              <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                <IconComponent className="w-7 h-7" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white mb-4">
              {current.title}
            </h3>

            <p className="text-gray-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {current.description}
            </p>

            {/* النقاط البارزة في المرحلة */}
            <div className="space-y-3 mb-8 pt-4 border-t border-gray-100 dark:border-gray-800">
              {current.highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* أزرار التنقل والتحكم */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex gap-2">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    aria-label={` الانتقال إلى المرحلة ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeStep === idx 
                        ? "w-8 bg-[#5315F6] dark:bg-[#7C3AED]" 
                        : "w-2.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prevStep}
                  aria-label="المرحلة السابقة"
                  className="p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-slate-200 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={nextStep}
                  aria-label="المرحلة التالية"
                  className="p-3 rounded-xl bg-[#5315F6] dark:bg-[#7C3AED] text-white hover:bg-[#4309D0] dark:hover:bg-[#6D28D9] transition-colors shadow-lg shadow-purple-500/20"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* الجانب الأيسر: قائمة المراحل التفاعلية */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex items-center gap-4 ${
                    isActive
                      ? "bg-white dark:bg-[#111827] border-purple-500 dark:border-purple-500 shadow-lg shadow-purple-500/10 scale-[1.02]"
                      : "bg-white/60 dark:bg-[#111827]/60 border-gray-200 dark:border-[#1F2937] hover:border-purple-300 dark:hover:border-purple-800 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                    isActive 
                      ? "bg-[#5315F6] dark:bg-[#7C3AED] text-white shadow-md shadow-purple-500/30" 
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-slate-400"
                  }`}>
                    {step.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-bold text-base truncate transition-colors ${
                      isActive ? "text-[#0F172A] dark:text-white" : "text-gray-700 dark:text-slate-300"
                    }`}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-slate-400 truncate mt-0.5">
                      {step.highlights[0]}
                    </p>
                  </div>
                  <StepIcon className={`w-5 h-5 shrink-0 ${isActive ? "text-purple-600 dark:text-purple-400" : "text-gray-400 dark:text-gray-600"}`} />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}