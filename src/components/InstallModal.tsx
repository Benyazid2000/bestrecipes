import React from 'react';
import { Language } from '../types/recipe';
import { AppLogo } from './AppLogo';
import { X, Smartphone, Download, CheckCircle, Share2, PlusSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { BeforeInstallPromptEvent } from '../hooks/usePWAInstall';

interface InstallModalProps {
  isOpen: boolean;
  lang: Language;
  isInstallable: boolean;
  isInstalled: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  onInstall: () => Promise<boolean>;
  onClose: () => void;
}

export const InstallModal: React.FC<InstallModalProps> = ({
  isOpen,
  lang,
  isInstallable,
  isInstalled,
  isIOS,
  isAndroid,
  onInstall,
  onClose,
}) => {
  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="install-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] text-[#18181B] rounded-2xl border border-pink-200 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 bg-[#FCE7F3] border-b border-pink-200">
          <div className="flex items-center gap-3">
            <AppLogo className="w-9 h-9 rounded-full bg-white p-0.5 border border-pink-200" />
            <div>
              <h2 id="install-modal-title" className="text-sm font-bold text-stone-900">
                {lang === 'ar'
                  ? 'تثبيت التطبيق على الهاتف (APK / أندرويد)'
                  : 'Install App on Phone (APK / Android / iOS)'}
              </h2>
              <p className="text-[11px] text-stone-600 font-medium">
                bestrecipes أحسن الأطباق
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Status banner */}
          {isInstalled ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-emerald-950">
                  {lang === 'ar' ? 'التطبيق مثبت بالفعل!' : 'Application Already Installed!'}
                </p>
                <p className="text-xs text-emerald-800 mt-1">
                  {lang === 'ar'
                    ? 'يعمل التطبيق الآن كبرنامج أصلي على شاشة هاتفك مع العمل بدون إنترنت.'
                    : 'The app is running in standalone mode with full offline access.'}
                </p>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-pink-100/70 border border-pink-200 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-[#9A3412]">
                  {lang === 'ar' ? 'تطبيق أندرويد متكامل (WebAPK)' : 'Full Android App (WebAPK / PWA)'}
                </p>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {lang === 'ar'
                    ? 'يمكنك تثبيت التطبيق بنقرة واحدة ليعمل كملف APK أصلي على هاتفك مع أيقونة مستقلة وسرعة فائقة.'
                    : 'Install directly on your smartphone as a native Android WebAPK with offline support.'}
                </p>
              </div>
              <Smartphone className="w-8 h-8 text-[#9A3412] shrink-0" />
            </div>
          )}

          {/* Action Button for 1-Tap Android / Chromium Install */}
          {isInstallable && !isInstalled && (
            <button
              type="button"
              onClick={async () => {
                const installed = await onInstall();
                if (installed) onClose();
              }}
              className="w-full py-3.5 px-5 rounded-xl text-sm font-semibold text-white bg-[#15803D] hover:bg-[#166534] transition-colors flex items-center justify-center gap-2.5 shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>
                {lang === 'ar'
                  ? 'تثبيت الآن على أندرويد (تنزيل الحزمة فوراً)'
                  : 'Install Now on Android (One-Tap WebAPK)'}
              </span>
            </button>
          )}

          {/* Step-by-Step Instructions */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-600">
              {lang === 'ar'
                ? 'طريقة التثبيت على الهاتف (أندرويد / آيفون)'
                : 'How to Install on Phone (Android / iPhone)'}
            </h3>

            {/* Android Guide */}
            <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-3">
              <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs">
                <Smartphone className="w-4 h-4 text-emerald-700" />
                <span>
                  {lang === 'ar'
                    ? 'على هاتف أندرويد (متصفح كروم / سامسونج)'
                    : 'On Android Phone (Chrome / Samsung Internet)'}
                </span>
              </div>
              <ol className="text-xs text-stone-600 space-y-2 list-decimal list-inside leading-relaxed">
                <li>
                  {lang === 'ar'
                    ? 'اضغط على زر الخيارات (الثلاث نقاط ⋮) في أعلى أو أسفل المتصفح.'
                    : 'Tap the browser menu (three dots ⋮) in Chrome.'}
                </li>
                <li>
                  {lang === 'ar'
                    ? 'اختر "تثبيت التطبيق" (Installer l\'application) أو "إضافة إلى الشاشة الرئيسية".'
                    : 'Select "Install app" or "Add to Home screen".'}
                </li>
                <li>
                  {lang === 'ar'
                    ? 'يقوم نظام أندرويد تلقائياً بإنشاء وتثبيت حزمة APK كاملة على هاتفك باسم bestrecipes.'
                    : 'Android automatically compiles and installs the official WebAPK package on your home screen.'}
                </li>
              </ol>
            </div>

            {/* iOS Guide */}
            <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-3">
              <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs">
                <Share2 className="w-4 h-4 text-sky-700" />
                <span>
                  {lang === 'ar'
                    ? 'على هواتف آيفون (Safari)'
                    : 'On iPhone / iPad (Safari)'}
                </span>
              </div>
              <ol className="text-xs text-stone-600 space-y-2 list-decimal list-inside leading-relaxed">
                <li>
                  {lang === 'ar'
                    ? 'اضغط على زر المشاركة (Share ⎋) في شريط Safari السفلي.'
                    : 'Tap the Share icon at the bottom of Safari.'}
                </li>
                <li>
                  {lang === 'ar'
                    ? 'مرر لأسفل واضغط على "إضافة إلى الصفحة الرئيسية" (Sur l\'écran d\'accueil).'
                    : 'Scroll down and tap "Add to Home Screen".'}
                </li>
              </ol>
            </div>

            {/* APK File Export / Builder Guide */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center gap-2 text-stone-800 font-semibold text-xs">
                <ShieldCheck className="w-4 h-4 text-[#9A3412]" />
                <span>
                  {lang === 'ar'
                    ? 'تحويل إلى ملف APK مستقل (.apk)'
                    : 'Generate Standalone .APK File'}
                </span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {lang === 'ar'
                  ? 'هذا التطبيق مزود بملف Manifest معتمد وأيقونات 512x512 متوافقة. يمكنك استخدام أدوات مثل PWABuilder أو Bubblewrap لتحويل هذا الرابط إلى ملف APK مُوقّع متوافق مع متجر Google Play.'
                  : 'This application is fully PWA-certified with compliant manifest and icons. You can also package it into a signed .apk file using PWABuilder or Bubblewrap for sideloading or Google Play distribution.'}
              </p>
            </div>

            {/* Netlify Drop & Custom Domain (best-recipes.digital) Help */}
            <div className="p-4 rounded-xl bg-pink-50 border border-pink-200 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs">
                  <Download className="w-4 h-4 text-[#9A3412]" />
                  <span>
                    {lang === 'ar'
                      ? 'ملف النشر الجاهز لـ Netlify Drop (dist.zip)'
                      : 'Deploy to Netlify Drop (Pre-built dist.zip)'}
                  </span>
                </div>
                <a
                  href="/best-recipes-dist.zip"
                  download="best-recipes-dist.zip"
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#9A3412] text-white hover:bg-[#7C2D12] transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'تحميل dist.zip' : 'Download dist.zip'}</span>
                </a>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {lang === 'ar'
                  ? 'ملاحظة مهمة: عند استخدام Netlify Drop يجب سحب مجلد dist المبني فقط (وليس ملفات المشروع الأصلية). قم بتحميل هذا الملف المضغوط (best-recipes-dist.zip) وضعه مباشرة في netlify.com/drop وسيعمل موقعك best-recipes.digital فوراً!'
                  : 'Important for Netlify Drop: You must drop the compiled "dist" folder, not the raw source code. Download this ready-to-deploy zip (best-recipes-dist.zip) and drop it directly onto netlify.com/drop, and best-recipes.digital will work instantly!'}
              </p>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-200 hover:bg-stone-300 rounded-lg transition-colors cursor-pointer"
            >
              {lang === 'ar' ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
