import React, { useState, useEffect, useMemo, useRef } from 'react';
import { CuisineId, Language, PaymentReceipt, Recipe } from './types/recipe';
import {
  ALL_RECIPES,
  CUISINES,
  HERO_TRIPTYCH_IMAGE,
  UI_TEXT,
} from './data/translations';
import { DishVisual } from './components/DishVisual';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { CheckoutModal } from './components/CheckoutModal';
import { InstallModal } from './components/InstallModal';
import { AppLogo } from './components/AppLogo';
import { usePWAInstall } from './hooks/usePWAInstall';
import { Search, Lock, Unlock, Globe, Check, CreditCard, Smartphone } from 'lucide-react';

const STORAGE_KEY_RECEIPT = 'bestrecipes_unlock_receipt_v1';
const STORAGE_KEY_LANG = 'bestrecipes_lang_v1';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LANG);
      return saved === 'ar' || saved === 'en' ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const [showBilingualTitles, setShowBilingualTitles] = useState<boolean>(true);
  const [selectedCuisine, setSelectedCuisine] = useState<'all' | CuisineId>('all');
  const [accessFilter, setAccessFilter] = useState<'all' | 'free' | 'premium'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [receipt, setReceipt] = useState<PaymentReceipt | null>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_RECEIPT);
      return raw ? (JSON.parse(raw) as PaymentReceipt) : null;
    } catch {
      return null;
    }
  });

  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [pendingUnlockRecipe, setPendingUnlockRecipe] = useState<Recipe | null>(null);
  const [installModalOpen, setInstallModalOpen] = useState<boolean>(false);

  const { isInstallable, isInstalled, isIOS, isAndroid, install } = usePWAInstall();

  const catalogRef = useRef<HTMLElement | null>(null);

  const isUnlocked = Boolean(receipt);
  const t = UI_TEXT[lang];
  const otherLang: Language = lang === 'en' ? 'ar' : 'en';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem(STORAGE_KEY_LANG, lang);
    } catch {
      // ignore storage errors
    }
  }, [lang]);

  const handleSelectCuisineNav = (cuisine: 'all' | CuisineId, filter: 'all' | 'free' | 'premium' = 'all') => {
    setSelectedCuisine(cuisine);
    setAccessFilter(filter);
    catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCardAction = (recipe: Recipe) => {
    if (recipe.isFree || isUnlocked) {
      setActiveRecipe(recipe);
    } else {
      setPendingUnlockRecipe(recipe);
      setCheckoutOpen(true);
    }
  };

  const handleCompletePayment = (newReceipt: PaymentReceipt) => {
    setReceipt(newReceipt);
    try {
      localStorage.setItem(STORAGE_KEY_RECEIPT, JSON.stringify(newReceipt));
    } catch {
      // ignore storage errors
    }
    if (pendingUnlockRecipe) {
      const target = pendingUnlockRecipe;
      setPendingUnlockRecipe(null);
      setCheckoutOpen(false);
      setActiveRecipe(target);
    }
  };

  const handleResetDemoLock = () => {
    setReceipt(null);
    try {
      localStorage.removeItem(STORAGE_KEY_RECEIPT);
    } catch {
      // ignore
    }
    setCheckoutOpen(false);
  };

  const filteredRecipes = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ALL_RECIPES.filter((r) => {
      if (selectedCuisine !== 'all' && r.cuisine !== selectedCuisine) return false;
      if (accessFilter === 'free' && !r.isFree) return false;
      if (accessFilter === 'premium' && r.isFree) return false;
      if (!q) return true;

      const haystack = [
        r.title.en,
        r.title.ar,
        r.nativePhonetic,
        r.region.en,
        r.region.ar,
        r.summary.en,
        r.summary.ar,
        ...r.ingredients.map((i) => `${i.name.en} ${i.name.ar}`),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [selectedCuisine, accessFilter, searchQuery]);

  const groupedCuisines: CuisineId[] = useMemo(() => {
    if (selectedCuisine === 'all') {
      return ['moroccan', 'french', 'chinese'];
    }
    return [selectedCuisine];
  }, [selectedCuisine]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCE7F3] text-[#18181B]">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-30 bg-[#FCE7F3]/95 backdrop-blur-xs border-b border-pink-300/80">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
          {/* Zone 1: Brand Logo & Wordmark */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setSelectedCuisine('all');
              setAccessFilter('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 text-lg font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 font-display-en"
          >
            <AppLogo className="w-11 h-11 rounded-full bg-white p-0.5 shadow-xs border border-emerald-600/25" />
            <span>bestrecipes أحسن الأطباق</span>
          </a>

          {/* Zone 2: 5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
            <button
              type="button"
              onClick={() => handleSelectCuisineNav('moroccan')}
              className={`hover:text-stone-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCuisine === 'moroccan' ? 'text-[#9A3412] font-semibold underline' : ''
              }`}
            >
              {t.navMoroccan}
            </button>
            <button
              type="button"
              onClick={() => handleSelectCuisineNav('french')}
              className={`hover:text-stone-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCuisine === 'french' ? 'text-[#9A3412] font-semibold underline' : ''
              }`}
            >
              {t.navFrench}
            </button>
            <button
              type="button"
              onClick={() => handleSelectCuisineNav('chinese')}
              className={`hover:text-stone-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCuisine === 'chinese' ? 'text-[#9A3412] font-semibold underline' : ''
              }`}
            >
              {t.navChinese}
            </button>
            <button
              type="button"
              onClick={() => handleSelectCuisineNav('all', 'free')}
              className={`hover:text-stone-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                accessFilter === 'free' ? 'text-[#9A3412] font-semibold underline' : ''
              }`}
            >
              {t.navFree}
            </button>
            <button
              type="button"
              onClick={() => {
                setPendingUnlockRecipe(null);
                setCheckoutOpen(true);
              }}
              className="hover:text-stone-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.navPass}
            </button>
            <button
              type="button"
              onClick={() => {
                if (isInstallable && isAndroid) {
                  install();
                } else {
                  setInstallModalOpen(true);
                }
              }}
              className="hover:text-stone-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1 text-emerald-800 font-semibold"
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{t.navInstall}</span>
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => {
                if (isInstallable && isAndroid) {
                  install();
                } else {
                  setInstallModalOpen(true);
                }
              }}
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-emerald-800/10 text-emerald-900 hover:bg-emerald-800/20 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{t.navInstall}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setPendingUnlockRecipe(null);
                setCheckoutOpen(true);
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isUnlocked
                  ? 'bg-emerald-900 text-white hover:bg-emerald-800'
                  : 'bg-[#9A3412] text-white hover:bg-[#7C2D12]'
              }`}
            >
              {isUnlocked ? t.ctaUnlocked : t.ctaUnlock}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="top" className="flex-1">
        {/* Section 1: Storefront Hero & Bilingual Switcher */}
        <section className="max-w-[1320px] mx-auto px-6 pt-8 pb-12">
          {/* Language & Display Mode Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-pink-300/80">
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-[#9A3412]" />
              <span className="text-xs font-medium text-stone-700">
                {t.langSwitchLabel}:
              </span>
              <div className="inline-flex items-center gap-1 p-1 bg-pink-200/80 rounded-lg">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    lang === 'en'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLang('ar')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer font-body-ar ${
                    lang === 'ar'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  العربية
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setShowBilingualTitles((v) => !v)}
                className="flex items-center gap-2 text-xs font-medium text-stone-700 hover:text-stone-900 cursor-pointer"
              >
                <span
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    showBilingualTitles
                      ? 'bg-[#9A3412] border-[#9A3412] text-white'
                      : 'bg-white border-stone-300'
                  }`}
                >
                  {showBilingualTitles && <Check className="w-3 h-3" />}
                </span>
                <span>{t.bilingualToggle}</span>
              </button>
            </div>
          </div>

          {/* 2-Column Hero Split (items-stretch for symmetrical vertical alignment) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6 py-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-16 h-16 rounded-2xl bg-white p-1.5 shadow-sm border border-pink-200 flex items-center justify-center shrink-0">
                    <AppLogo className="w-full h-full" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-[#9A3412]">
                      {t.heroKicker}
                    </p>
                    <p className="text-sm font-bold text-emerald-900 mt-0.5">
                      bestrecipes أحسن الأطباق
                    </p>
                  </div>
                </div>
                <h1
                  className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-stone-900 leading-[1.15] text-balance ${
                    lang === 'ar' ? 'font-display-ar' : 'font-display-en'
                  }`}
                >
                  {t.heroHeadline}
                </h1>
                <p className="text-base text-stone-600 leading-relaxed max-w-[65ch]">
                  {t.heroSubhead}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      catalogRef.current?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      })
                    }
                    className="px-5 py-3 text-sm font-semibold text-white bg-[#18181B] hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {t.heroPrimaryBtn}
                  </button>

                  {!isUnlocked && (
                    <button
                      type="button"
                      onClick={() => {
                        setPendingUnlockRecipe(null);
                        setCheckoutOpen(true);
                      }}
                      className="px-5 py-3 text-sm font-semibold text-[#9A3412] bg-[#9A3412]/10 hover:bg-[#9A3412]/15 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>{t.heroSecondaryBtn}</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      if (isInstallable && isAndroid) {
                        install();
                      } else {
                        setInstallModalOpen(true);
                      }
                    }}
                    className="px-5 py-3 text-sm font-semibold text-emerald-950 bg-emerald-700/15 hover:bg-emerald-700/25 border border-emerald-700/30 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2"
                  >
                    <Smartphone className="w-4 h-4 text-emerald-800" />
                    <span>{t.heroInstallBtn}</span>
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                  <span>VISA</span>
                  <span aria-hidden="true">·</span>
                  <span>PayPal</span>
                  <span aria-hidden="true">·</span>
                  <span>
                    {lang === 'ar'
                      ? 'الأطباق ٠١–٠٥ مجانية في كل مطبخ'
                      : 'Dishes #01–#05 Free in Every Cuisine'}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    {lang === 'ar'
                      ? 'الأطباق ٠٦–٢٠ تُفتح بدفعة واحدة $7.00'
                      : 'Dishes #06–#20 Unlock for $7.00 One-Time'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: 16:9 Editorial Triptych Image */}
            <div className="lg:col-span-6 rounded-xl overflow-hidden bg-stone-900 relative min-h-[280px]">
              <img
                src={HERO_TRIPTYCH_IMAGE}
                alt="Moroccan Tagine, French Copper Cocotte, and Chinese Bamboo Steamer"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + '/images/hero_triptych.jpg') {
                    target.src = '/images/hero_triptych.jpg';
                  }
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4 text-white">
                <div>
                  <p className="text-xs text-amber-200 font-medium">
                    bestrecipes أحسن الأطباق
                  </p>
                  <p className="text-sm font-semibold mt-0.5">
                    {lang === 'ar'
                      ? '٢٠ طبقاً مغربياً · ٢٠ طبقاً فرنسياً · ٢٠ طبقاً صينياً'
                      : '20 Moroccan · 20 French · 20 Chinese Signature Dishes'}
                  </p>
                </div>
                <span className="font-mono-num text-xs bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded border border-white/15">
                  60 / 60 {lang === 'ar' ? 'وصفة' : 'Recipes'}
                </span>
              </div>
            </div>
          </div>

          {/* Full-width 4-Column Summary Strip below Hero Split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 pt-8 border-t border-pink-300/80">
            <div>
              <p className="font-mono-num text-base font-bold text-stone-900">
                {t.statTotalDishes}
              </p>
              <p className="text-xs text-stone-500 mt-1">{t.statTotalSub}</p>
            </div>
            <div>
              <p className="font-mono-num text-base font-bold text-emerald-800">
                {t.statFreeDishes}
              </p>
              <p className="text-xs text-stone-500 mt-1">{t.statFreeSub}</p>
            </div>
            <div>
              <p className="font-mono-num text-base font-bold text-[#9A3412]">
                {t.statOneTimePrice}
              </p>
              <p className="text-xs text-stone-500 mt-1">{t.statOneTimeSub}</p>
            </div>
            <div>
              <p className="text-base font-bold text-stone-900">
                {t.statLanguages}
              </p>
              <p className="text-xs text-stone-500 mt-1">{t.statLanguagesSub}</p>
            </div>
          </div>
        </section>

        {/* Section 2: Interactive Filter Toolbar & 60-Dish Compendium */}
        <section
          ref={catalogRef}
          className="max-w-[1320px] mx-auto px-6 py-10 border-t border-pink-300/80 space-y-10"
        >
          {/* Filter Controls Bar */}
          <div className="bg-[#FDF2F8] p-5 rounded-xl border border-pink-200 space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Cuisine Segmented Control */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-pink-200/60 rounded-lg">
                {(
                  [
                    { id: 'all', label: t.filterAllCuisines },
                    { id: 'moroccan', label: t.filterMoroccan },
                    { id: 'french', label: t.filterFrench },
                    { id: 'chinese', label: t.filterChinese },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedCuisine(tab.id)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedCuisine === tab.id
                        ? 'bg-[#18181B] text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Free vs Premium Segmented Control */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-pink-200/60 rounded-lg">
                {(
                  [
                    { id: 'all', label: t.accessFilterAll },
                    { id: 'free', label: t.accessFilterFree },
                    { id: 'premium', label: t.accessFilterPremium },
                  ] as const
                ).map((af) => (
                  <button
                    key={af.id}
                    type="button"
                    onClick={() => setAccessFilter(af.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      accessFilter === af.id
                        ? 'bg-white text-stone-900 shadow-xs font-semibold'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {af.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search
                className={`w-4 h-4 text-stone-400 absolute top-1/2 -translate-y-1/2 ${
                  lang === 'ar' ? 'right-3.5' : 'left-3.5'
                }`}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className={`w-full py-2.5 text-sm bg-white border border-pink-200 rounded-lg focus:outline-none focus:border-[#9A3412] ${
                  lang === 'ar' ? 'pr-10 pl-4' : 'pl-10 pr-4'
                }`}
              />
            </div>
          </div>

          {/* Empty Search State */}
          {filteredRecipes.length === 0 ? (
            <div className="py-16 text-center space-y-3 bg-white rounded-xl border border-stone-200">
              <p className="text-base font-medium text-stone-700">
                {t.emptySearchTitle}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCuisine('all');
                  setAccessFilter('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#9A3412] rounded-lg cursor-pointer"
              >
                {t.emptySearchReset}
              </button>
            </div>
          ) : (
            /* Cuisine Chapters */
            <div className="space-y-16">
              {groupedCuisines.map((cuisineId) => {
                const cuisineRecipes = filteredRecipes.filter(
                  (r) => r.cuisine === cuisineId
                );
                if (cuisineRecipes.length === 0) return null;
                const meta = CUISINES[cuisineId];

                return (
                  <div key={cuisineId} className="space-y-6">
                    {/* Cuisine Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-pink-300/80">
                      <div>
                        <p className="text-xs font-medium text-[#9A3412]">
                          {meta.subtitle[lang]}
                        </p>
                        <h2
                          className={`text-2xl md:text-3xl font-bold text-stone-900 mt-1 ${
                            lang === 'ar' ? 'font-display-ar' : 'font-display-en'
                          }`}
                        >
                          {meta.name[lang]}
                          {showBilingualTitles && (
                            <span className="text-lg font-normal text-stone-500 mx-2">
                              — {meta.name[otherLang]}
                            </span>
                          )}
                        </h2>
                        <p className="text-sm text-stone-600 mt-1 max-w-3xl">
                          {meta.heritage[lang]}
                        </p>
                      </div>

                      <div className="text-xs text-stone-500 font-mono-num shrink-0">
                        {lang === 'ar'
                          ? 'الأطباق ٠١–٠٥ مجانية · ٠٦–٢٠ باقة $7'
                          : '01–05 Free · 06–20 ($7 Pass)'}
                      </div>
                    </div>

                    {/* 3-Column Recipe Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                      {cuisineRecipes.map((recipe) => {
                        const canOpen = recipe.isFree || isUnlocked;
                        return (
                          <article
                            key={recipe.id}
                            onClick={() => handleCardAction(recipe)}
                            className="group bg-[#FDF2F8] rounded-xl border border-pink-200/90 overflow-hidden flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
                          >
                            <div>
                              {/* 65-70% Card Height Lead Imagery */}
                              <DishVisual
                                recipe={recipe}
                                lang={lang}
                                isUnlocked={isUnlocked}
                              />

                              <div className="p-5 space-y-2.5">
                                {/* Clean Unboxed Metadata Line (Zero-Pill Rule) */}
                                <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-500">
                                  <span className="font-mono-num font-semibold text-stone-800">
                                    #{String(recipe.number).padStart(2, '0')}
                                  </span>
                                  <span aria-hidden="true">·</span>
                                  <span>{recipe.region[lang]}</span>
                                  <span aria-hidden="true">·</span>
                                  <span
                                    className={
                                      recipe.isFree
                                        ? 'text-emerald-800 font-semibold'
                                        : isUnlocked
                                        ? 'text-emerald-800 font-semibold'
                                        : 'text-[#9A3412] font-semibold'
                                    }
                                  >
                                    {recipe.isFree
                                      ? t.freeBadge
                                      : isUnlocked
                                      ? t.unlockedBadge
                                      : t.lockedBadge}
                                  </span>
                                </div>

                                {/* Primary Dish Title */}
                                <h3
                                  className={`text-lg font-bold text-stone-900 leading-snug ${
                                    lang === 'ar'
                                      ? 'font-display-ar text-xl'
                                      : 'font-display-en text-xl'
                                  }`}
                                >
                                  {recipe.title[lang]}
                                </h3>

                                {/* Optional Bilingual Subtitle */}
                                {showBilingualTitles && (
                                  <p
                                    className={`text-xs text-stone-500 ${
                                      otherLang === 'ar'
                                        ? 'font-body-ar'
                                        : 'font-body-en'
                                    }`}
                                  >
                                    {recipe.title[otherLang]}
                                  </p>
                                )}

                                {/* Summary */}
                                <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                                  {recipe.summary[lang]}
                                </p>
                              </div>
                            </div>

                            {/* Card Footer Action */}
                            <div className="px-5 pb-5 pt-3 border-t border-pink-200/60 flex items-center justify-between gap-3">
                              <div className="text-xs text-stone-500 font-mono-num">
                                {recipe.ingredients.length}{' '}
                                {lang === 'ar' ? 'مكونات' : 'ingredients'} ·{' '}
                                {recipe.caloriesPerServing} {t.caloriesLabel}
                              </div>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCardAction(recipe);
                                }}
                                className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                                  canOpen
                                    ? 'bg-stone-900 text-white group-hover:bg-[#9A3412]'
                                    : 'bg-[#9A3412]/10 text-[#9A3412] group-hover:bg-[#9A3412] group-hover:text-white'
                                }`}
                              >
                                {canOpen ? (
                                  <>
                                    <Unlock className="w-3.5 h-3.5" />
                                    <span>{t.openRecipeBtn}</span>
                                  </>
                                ) : (
                                  <>
                                    <Lock className="w-3.5 h-3.5" />
                                    <span>{t.unlockDishBtn}</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Section 3: One-Time $7 Pass Callout Banner */}
        <section className="max-w-[1320px] mx-auto px-6 pb-16">
          <div className="p-8 md:p-10 rounded-xl bg-[#18181B] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-mono-num text-amber-300 tracking-wide">
                VISA &amp; PAYPAL · $7.00 USD ONE-TIME PASS
              </p>
              <h2
                className={`text-2xl md:text-3xl font-bold text-balance ${
                  lang === 'ar' ? 'font-display-ar' : 'font-display-en'
                }`}
              >
                {t.checkoutTitle}
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed">
                {t.checkoutSubtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setPendingUnlockRecipe(null);
                setCheckoutOpen(true);
              }}
              className="px-6 py-3.5 text-sm font-semibold text-[#18181B] bg-amber-300 hover:bg-amber-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {isUnlocked ? t.ctaUnlocked : t.ctaUnlock}
            </button>
          </div>
        </section>
      </main>

      {/* Quiet Editorial Footer */}
      <footer className="border-t border-pink-300/80 bg-[#FDF2F8] py-8 px-6">
        <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-3">
            <AppLogo className="w-9 h-9 rounded-full bg-white p-0.5 border border-pink-200" />
            <p className="font-semibold text-stone-800">
              bestrecipes أحسن الأطباق — 20 Moroccan · 20 French · 20 Chinese Dishes
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="hover:text-stone-900 underline cursor-pointer"
            >
              {lang === 'en' ? 'التبديل إلى اللغة العربية' : 'Switch to English'}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => {
                if (isInstallable && isAndroid) {
                  install();
                } else {
                  setInstallModalOpen(true);
                }
              }}
              className="hover:text-stone-900 underline cursor-pointer text-emerald-800 font-medium"
            >
              {lang === 'ar' ? 'تثبيت كملف APK / أندرويد' : 'Install APK / Mobile App'}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => {
                setPendingUnlockRecipe(null);
                setCheckoutOpen(true);
              }}
              className="hover:text-stone-900 underline cursor-pointer"
            >
              {isUnlocked ? t.ctaUnlocked : '$7.00 Visa / PayPal Pass'}
            </button>
          </div>
        </div>
      </footer>

      {/* Recipe Detail Modal */}
      <RecipeDetailModal
        recipe={activeRecipe}
        lang={lang}
        onToggleLang={() => setLang((l) => (l === 'en' ? 'ar' : 'en'))}
        isUnlocked={isUnlocked}
        onClose={() => setActiveRecipe(null)}
      />

      {/* Visa & PayPal $7 Checkout / Receipt Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        lang={lang}
        pendingRecipe={pendingUnlockRecipe}
        receipt={receipt}
        onClose={() => {
          setCheckoutOpen(false);
          setPendingUnlockRecipe(null);
        }}
        onCompletePayment={handleCompletePayment}
        onResetDemoLock={handleResetDemoLock}
      />

      {/* APK / PWA Mobile Install Modal */}
      <InstallModal
        isOpen={installModalOpen}
        lang={lang}
        isInstallable={isInstallable}
        isInstalled={isInstalled}
        isIOS={isIOS}
        isAndroid={isAndroid}
        onInstall={install}
        onClose={() => setInstallModalOpen(false)}
      />
    </div>
  );
}
