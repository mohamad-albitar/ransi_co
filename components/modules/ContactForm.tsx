"use client";

import { useState } from "react";
import { Send, Check, Smartphone, Globe, Code2, Sparkles } from "lucide-react";

const serviceOptions = [
  { id: "web", title: "موقع إلكتروني / تطبيق ويب", icon: Globe },
  { id: "mobile", title: "تطبيق هواتف ذكية", icon: Smartphone },
  { id: "custom", title: "نظام برمجي متكامل / ERP", icon: Code2 },
  { id: "other", title: "استشارة وتطوير آخر", icon: Sparkles },
];

const budgetRanges = [
  "أقل من $3,000",
  "$3,000 - $7,000",
  "$7,000 - $15,000",
  "+$15,000",
];

export function ContactForm() {
  const [selectedService, setSelectedService] = useState("web");
  const [selectedBudget, setSelectedBudget] = useState("$3,000 - $7,000");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // محاكاة إرسال البيانات
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-[#1F2937] rounded-3xl p-10 text-center shadow-xl">
        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-2">
          تم استلام طلبك بنجاح!
        </h3>
        <p className="text-gray-600 dark:text-slate-400 max-w-md mx-auto mb-8">
          شكراً لتواصلك مع Ransi. سيتواصل معك أحد مستشارينا التقنيين خلال ساعات لمناقشة التفاصيل.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 font-semibold border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
        >
          إرسال طلب آخر
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-[#1F2937] rounded-3xl p-8 sm:p-10 shadow-xl space-y-8">
      
      {/* 1. اختيار نوع الخدمة */}
      <div>
        <label className="block text-sm font-bold text-[#0F172A] dark:text-white mb-3">
          1. ما هي الخدمة التي تحتاجها؟
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {serviceOptions.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedService === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedService(item.id)}
                className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-center gap-3 ${
                  isSelected
                    ? "bg-purple-50/60 dark:bg-purple-950/40 border-purple-600 dark:border-purple-500 text-purple-900 dark:text-purple-200 shadow-sm"
                    : "bg-gray-50/50 dark:bg-gray-800/40 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-slate-300 hover:border-purple-300 dark:hover:border-purple-800"
                }`}
              >
                <div className={`p-2 rounded-xl ${isSelected ? "bg-[#5315F6] text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-slate-400"}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* 3. البيانات الشخصية والمشروع */}
      <div className="space-y-4 pt-2">
        <label className="block text-sm font-bold text-[#0F172A] dark:text-white">
          3. تفاصيل التواصل والمشروع
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              required
              placeholder="الاسم الكامل *"
              className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-800 text-[#0F172A] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#5315F6] dark:focus:border-[#7C3AED] transition-colors text-sm"
            />
          </div>
          <div>
            <input
              type="email"
              required
              placeholder="البريد الإلكتروني *"
              className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-800 text-[#0F172A] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#5315F6] dark:focus:border-[#7C3AED] transition-colors text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="tel"
              placeholder="رقم الهاتف / الواتساب"
              className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-800 text-[#0F172A] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#5315F6] dark:focus:border-[#7C3AED] transition-colors text-sm"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="اسم الشركة / النشاط (اختياري)"
              className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-800 text-[#0F172A] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#5315F6] dark:focus:border-[#7C3AED] transition-colors text-sm"
            />
          </div>
        </div>

        <div>
          <textarea
            rows={4}
            required
            placeholder="اشرح لنا فكرة مشروعك، الأهداف، وأي متطلبات خاصة... *"
            className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-800 text-[#0F172A] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#5315F6] dark:focus:border-[#7C3AED] transition-colors text-sm resize-none"
          />
        </div>
      </div>

      {/* زر الإرسال */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-2xl bg-[#5315F6] dark:bg-[#7C3AED] hover:bg-[#4309D0] dark:hover:bg-[#6D28D9] text-white font-bold text-base shadow-xl shadow-purple-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {isSubmitting ? (
          <span>جاري الإرسال...</span>
        ) : (
          <>
            <span>إرسال الطلب والتواصل</span>
            <Send className="w-5 h-5 rotate-180" />
          </>
        )}
      </button>

    </form>
  );
}