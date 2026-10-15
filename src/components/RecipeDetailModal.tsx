import React, { useState, useEffect } from 'react';
import { Recipe, Language } from '../types/recipe';
import { UI_TEXT, CUISINES } from '../data/translations';
import { DishVisual } from './DishVisual';
import { X, Minus, Plus, Check, Globe } from 'lucide-react';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  lang: Language;
  onToggleLang: () => void;
  isUnlocked: boolean;
  onClose: () => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  recipe,
  lang,
  onToggleLang,
  isUnlocked,
  onClose,
}) => {
  const [servings, setServings] = useState<number>(4);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (recipe) {
      setServings(recipe.servings);
      setCheckedIngredients({});
      setCompletedSteps({});
    }
  }, [recipe]);

  if (!recipe) return null;

  const t = UI_TEXT[lang];
  const cuisineMeta = CUISINES[recipe.cuisine];
  const otherLang: Language = lang === 'en' ? 'ar' : 'en';
  const scaleFactor = servings / recipe.servings;

  const formatAmount = (amount: number) => {
    const scaled = amount * scaleFactor;
    if (Number.isInteger(scaled)) return String(scaled);
    return scaled.toFixed(1).replace(/\.0$/, '');
  };

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleStep = (stepNum: number) => {
    setCompletedSteps((prev) => ({ ...prev, [stepNum]: !prev[stepNum] }));
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="recipe-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FDF2F8] text-[#18181B] rounded-xl border border-pink-200 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header Bar */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-pink-200 bg-[#FCE7F3] shrink-0">
          <div className="flex items-center gap-2 text-xs text-stone-600 font-medium">
            <span className="font-mono-num font-semibold text-[#9A3412]">
              #{String(recipe.number).padStart(2, '0')}
            </span>
            <span aria-hidden="true">·</span>
            <span>{cuisineMeta.name[lang]}</span>
            <span aria-hidden="true">·</span>
            <span>{recipe.region[lang]}</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-800 font-semibold">
              {recipe.isFree ? t.freeBadge : t.unlockedBadge}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#9A3412]" />
              <span>{lang === 'en' ? 'عربي (Arabic)' : 'English (إنجليزي)'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.closeModal}
              className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Recipe Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Hero Split inside Modal */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="md:col-span-5 rounded-lg overflow-hidden">
              <DishVisual
                recipe={recipe}
                lang={lang}
                isUnlocked={isUnlocked}
                className="w-full h-full min-h-[240px]"
              />
            </div>

            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-xs font-medium text-stone-500 mb-1">
                  {recipe.course[lang]} · {recipe.difficulty[lang]}
                </p>
                <h2
                  id="recipe-modal-title"
                  className={`text-2xl md:text-3xl font-bold text-stone-900 leading-tight text-balance ${
                    lang === 'ar' ? 'font-display-ar' : 'font-display-en'
                  }`}
                >
                  {recipe.title[lang]}
                </h2>
                <p
                  className={`text-sm text-stone-500 mt-1 ${
                    otherLang === 'ar' ? 'font-display-ar' : 'font-display-en italic'
                  }`}
                >
                  {recipe.title[otherLang]} ({recipe.nativePhonetic})
                </p>
                <p className="text-sm text-stone-700 leading-relaxed mt-3">
                  {recipe.summary[lang]}
                </p>
              </div>

              {/* Clean Tabular Metrics Row (Zero-Pill) */}
              <div className="grid grid-cols-4 gap-3 pt-4 border-t border-stone-200 text-xs">
                <div>
                  <span className="block text-stone-500">{t.prepLabel}</span>
                  <span className="font-mono-num text-sm font-semibold text-stone-900">
                    {recipe.prepTimeMinutes} {t.minUnit}
                  </span>
                </div>
                <div>
                  <span className="block text-stone-500">{t.cookLabel}</span>
                  <span className="font-mono-num text-sm font-semibold text-stone-900">
                    {recipe.cookTimeMinutes} {t.minUnit}
                  </span>
                </div>
                <div>
                  <span className="block text-stone-500">{t.servingsLabel}</span>
                  <span className="font-mono-num text-sm font-semibold text-stone-900">
                    {servings}
                  </span>
                </div>
                <div>
                  <span className="block text-stone-500">{t.caloriesLabel}</span>
                  <span className="font-mono-num text-sm font-semibold text-stone-900">
                    {recipe.caloriesPerServing}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Origin & Chef's Secret (No thick left borders — clean surface contrast & hairline border) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg bg-white border border-stone-200/80 space-y-1.5">
              <h3 className="text-xs font-semibold text-stone-500 tracking-wide">
                {t.culturalOriginTitle}
              </h3>
              <p className="text-sm text-stone-800 leading-relaxed">
                {recipe.culturalNote[lang]}
              </p>
            </div>
            <div className="p-5 rounded-lg bg-[#9A3412]/[0.05] border border-[#9A3412]/20 space-y-1.5">
              <h3 className="text-xs font-semibold text-[#9A3412] tracking-wide">
                {t.chefSecretTitle}
              </h3>
              <p className="text-sm text-stone-800 leading-relaxed">
                {recipe.chefSecret[lang]}
              </p>
            </div>
          </div>

          {/* Ingredients & Steps Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2 border-t border-stone-200">
            {/* Left Column: Scaled Ingredients */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-stone-900">
                    {t.ingredientsTitle}
                  </h3>
                  <p className="text-xs text-stone-500">{t.checkAllIngredients}</p>
                </div>

                {/* Portion Scaler */}
                <div className="flex items-center gap-2 bg-white border border-stone-200 rounded-lg px-2.5 py-1">
                  <button
                    type="button"
                    onClick={() => setServings((s) => Math.max(1, s - 1))}
                    aria-label="Decrease servings"
                    className="p-1 text-stone-600 hover:text-stone-900 cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono-num text-xs font-semibold text-stone-900 min-w-[2.2rem] text-center">
                    {servings}p
                  </span>
                  <button
                    type="button"
                    onClick={() => setServings((s) => Math.min(24, s + 1))}
                    aria-label="Increase servings"
                    className="p-1 text-stone-600 hover:text-stone-900 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <ul className="divide-y divide-stone-200/80 border-t border-b border-stone-200/80">
                {recipe.ingredients.map((ing, idx) => {
                  const isChecked = !!checkedIngredients[idx];
                  return (
                    <li key={idx}>
                      <button
                        type="button"
                        onClick={() => toggleIngredient(idx)}
                        className="w-full py-3 flex items-center justify-between gap-3 text-start hover:bg-stone-100/70 px-2 rounded transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                              isChecked
                                ? 'bg-[#9A3412] border-[#9A3412] text-white'
                                : 'border-stone-300 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </span>
                          <span
                            className={`text-sm ${
                              isChecked
                                ? 'line-through text-stone-400'
                                : 'text-stone-800 font-medium'
                            }`}
                          >
                            {ing.name[lang]}
                          </span>
                        </div>
                        <span className="font-mono-num text-xs font-semibold text-stone-600 shrink-0">
                          {formatAmount(ing.amount)} {ing.unit[lang]}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right Column: Step-by-Step Instructions */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-base font-bold text-stone-900">
                {t.stepsTitle}
              </h3>

              <div className="space-y-4">
                {recipe.steps.map((step) => {
                  const isDone = !!completedSteps[step.stepNumber];
                  return (
                    <div
                      key={step.stepNumber}
                      onClick={() => toggleStep(step.stepNumber)}
                      className={`p-5 rounded-lg border transition-colors cursor-pointer ${
                        isDone
                          ? 'bg-stone-100/70 border-stone-200 opacity-75'
                          : 'bg-white border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`font-mono-num text-xs font-semibold px-2 py-0.5 rounded ${
                              isDone
                                ? 'bg-emerald-700 text-white'
                                : 'bg-stone-100 text-stone-800'
                            }`}
                          >
                            0{step.stepNumber}
                          </span>
                          <h4
                            className={`text-sm font-bold ${
                              isDone ? 'line-through text-stone-500' : 'text-stone-900'
                            }`}
                          >
                            {step.title[lang]}
                          </h4>
                        </div>
                        {step.durationMinutes && (
                          <span className="font-mono-num text-xs text-stone-500 shrink-0">
                            {step.durationMinutes} {t.minUnit}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-stone-700 leading-relaxed">
                        {step.instruction[lang]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
