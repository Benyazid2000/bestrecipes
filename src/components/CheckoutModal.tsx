import React, { useState } from 'react';
import { Language, PaymentReceipt, Recipe } from '../types/recipe';
import { UI_TEXT, CUISINES } from '../data/translations';
import { AppLogo } from './AppLogo';
import { X, CreditCard, CheckCircle2, RotateCcw } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  lang: Language;
  pendingRecipe: Recipe | null;
  receipt: PaymentReceipt | null;
  onClose: () => void;
  onCompletePayment: (receipt: PaymentReceipt) => void;
  onResetDemoLock: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  lang,
  pendingRecipe,
  receipt,
  onClose,
  onCompletePayment,
  onResetDemoLock,
}) => {
  const [method, setMethod] = useState<'visa' | 'paypal'>('visa');
  const [cardHolder, setCardHolder] = useState('Abdessamie El Hassane');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8841');
  const [cardExpiry, setCardExpiry] = useState('09/29');
  const [cardCvv, setCardCvv] = useState('842');
  const [paypalEmail, setPaypalEmail] = useState('abdessamie.myelhassane@gmail.com');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const t = UI_TEXT[lang];

  const handleFormatCardNumber = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 16);
    const groups = digits.match(/.{1,4}/g);
    setCardNumber(groups ? groups.join(' ') : digits);
    setErrorMsg(null);
  };

  const handleFormatExpiry = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) {
      setCardExpiry(`${digits.slice(0, 2)}/${digits.slice(2)}`);
    } else {
      setCardExpiry(digits);
    }
    setErrorMsg(null);
  };

  const fillDemoVisa = () => {
    setCardHolder('Abdessamie El Hassane');
    setCardNumber('4539 7812 3490 6124');
    setCardExpiry('11/28');
    setCardCvv('739');
    setErrorMsg(null);
  };

  const handleSubmitVisa = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanDigits = cardNumber.replace(/[^0-9•]/g, '');
    if (!cardHolder.trim() || cleanDigits.length < 12) {
      setErrorMsg(
        lang === 'ar'
          ? 'يرجى إدخال اسم حامل البطاقة ورقم بطاقة فيزا صحيح.'
          : 'Please enter a valid cardholder name and Visa card number.'
      );
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      const last4 = cardNumber.trim().slice(-4) || '6124';
      const newReceipt: PaymentReceipt = {
        orderId: `BR-${Math.floor(100000 + Math.random() * 900000)}`,
        method: 'visa',
        amountUsd: 7.0,
        paidAtIso: new Date().toISOString(),
        payerLabel: cardHolder.trim(),
        cardLast4: last4,
      };
      setIsProcessing(false);
      onCompletePayment(newReceipt);
    }, 350);
  };

  const handleSubmitPaypal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paypalEmail.includes('@')) {
      setErrorMsg(
        lang === 'ar'
          ? 'يرجى إدخال بريد إلكتروني صحيح لحساب PayPal.'
          : 'Please enter a valid PayPal account email address.'
      );
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      const newReceipt: PaymentReceipt = {
        orderId: `PP-${Math.floor(100000 + Math.random() * 900000)}`,
        method: 'paypal',
        amountUsd: 7.0,
        paidAtIso: new Date().toISOString(),
        payerLabel: paypalEmail.trim(),
      };
      setIsProcessing(false);
      onCompletePayment(newReceipt);
    }, 350);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FDF2F8] text-[#18181B] rounded-xl border border-pink-200 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 bg-[#FCE7F3] border-b border-pink-200">
          <div className="flex items-center gap-2.5">
            <AppLogo className="w-8 h-8 rounded-full bg-white p-0.5 border border-pink-200" />
            <h2 id="checkout-modal-title" className="text-sm font-bold text-stone-900">
              {receipt ? t.receiptTitle : t.checkoutTitle}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.closeModal}
            className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {receipt ? (
            /* Post-Order Verification & Receipt View */
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-emerald-950/5 border border-emerald-800/20 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-emerald-950">
                    {t.receiptActiveStatus}
                  </p>
                  <p className="text-xs text-stone-600 mt-1">
                    {lang === 'ar'
                      ? 'جميع الأطباق الـ ٦٠ (٢٠ مغربي، ٢٠ فرنسي، ٢٠ صيني) مفتوحة الآن بالكامل على جهازك.'
                      : 'All 60 authentic recipes (20 Moroccan, 20 French, 20 Chinese) are now permanently unlocked.'}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-stone-200 divide-y divide-stone-200 text-sm">
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="text-stone-500">{t.receiptOrderLabel}</span>
                  <span className="font-mono-num font-semibold text-stone-900">
                    #{receipt.orderId}
                  </span>
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="text-stone-500">{t.receiptMethodLabel}</span>
                  <span className="font-semibold text-stone-900">
                    {receipt.method === 'visa'
                      ? `VISA •••• ${receipt.cardLast4 || '8841'}`
                      : 'PayPal Express'}
                  </span>
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="text-stone-500">{t.receiptAccountLabel}</span>
                  <span className="font-medium text-stone-800">
                    {receipt.payerLabel}
                  </span>
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="text-stone-500">{t.receiptAmountLabel}</span>
                  <span className="font-mono-num text-base font-bold text-[#9A3412]">
                    $7.00 USD
                  </span>
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="text-stone-500">{t.receiptDateLabel}</span>
                  <span className="font-mono-num text-xs text-stone-600">
                    {new Date(receipt.paidAtIso).toLocaleDateString(
                      lang === 'ar' ? 'ar-MA' : 'en-US',
                      { year: 'numeric', month: 'short', day: 'numeric' }
                    )}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={onResetDemoLock}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-200/70 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.resetPassBtn}</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-[#18181B] hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
                >
                  {t.closeModal}
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form: Visa or PayPal ($7.00 One-Time) */
            <>
              {/* Selected Dish Preview if triggered by clicking a locked dish */}
              {pendingRecipe && (
                <div className="p-3.5 rounded-lg bg-white border border-stone-200 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono-num text-[#9A3412] font-semibold">
                      #{String(pendingRecipe.number).padStart(2, '0')} ·{' '}
                      {CUISINES[pendingRecipe.cuisine].name[lang]}
                    </span>
                    <p className="text-sm font-bold text-stone-900 truncate">
                      {pendingRecipe.title[lang]}
                    </p>
                  </div>
                  <span className="font-mono-num text-sm font-bold text-stone-900 shrink-0">
                    $7.00 USD
                  </span>
                </div>
              )}

              <p className="text-xs text-stone-600 leading-relaxed">
                {t.checkoutSubtitle}
              </p>

              {/* Segmented Payment Selector: Visa vs PayPal */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-stone-200/80 rounded-lg">
                <button
                  type="button"
                  onClick={() => {
                    setMethod('visa');
                    setErrorMsg(null);
                  }}
                  className={`py-2.5 px-4 rounded-md text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    method === 'visa'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-[#1A1F71]" />
                  <span>{t.paymentMethodVisa}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMethod('paypal');
                    setErrorMsg(null);
                  }}
                  className={`py-2.5 px-4 rounded-md text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    method === 'paypal'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <span className="font-bold text-[#003087] tracking-tight">PayPal</span>
                  <span>{t.paymentMethodPaypal}</span>
                </button>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800 font-medium">
                  {errorMsg}
                </div>
              )}

              {method === 'visa' ? (
                <form onSubmit={handleSubmitVisa} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-stone-700">
                      VISA · $7.00 USD
                    </span>
                    <button
                      type="button"
                      onClick={fillDemoVisa}
                      className="text-xs font-medium text-[#9A3412] hover:underline cursor-pointer"
                    >
                      {t.fillDemoVisa}
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {t.cardHolderLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#9A3412]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {t.cardNumberLabel}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        dir="ltr"
                        value={cardNumber}
                        onChange={(e) => handleFormatCardNumber(e.target.value)}
                        placeholder="4532 0000 0000 0000"
                        className="w-full px-3.5 py-2.5 text-sm font-mono-num bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#9A3412]"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold italic text-[#1A1F71] bg-stone-100 px-2 py-0.5 rounded">
                        VISA
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        {t.cardExpiryLabel}
                      </label>
                      <input
                        type="text"
                        required
                        dir="ltr"
                        value={cardExpiry}
                        onChange={(e) => handleFormatExpiry(e.target.value)}
                        placeholder="MM/YY"
                        className="w-full px-3.5 py-2.5 text-sm font-mono-num bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#9A3412]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        {t.cardCvvLabel}
                      </label>
                      <input
                        type="text"
                        required
                        dir="ltr"
                        maxLength={4}
                        value={cardCvv}
                        onChange={(e) =>
                          setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 4))
                        }
                        placeholder="123"
                        className="w-full px-3.5 py-2.5 text-sm font-mono-num bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#9A3412]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-3 px-5 rounded-lg text-sm font-semibold text-white bg-[#9A3412] hover:bg-[#7C2D12] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t.payNowVisaBtn}</span>
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmitPaypal} className="space-y-4">
                  <div className="p-4 rounded-lg bg-[#003087]/[0.04] border border-[#003087]/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#003087]">
                        PayPal Express Checkout
                      </span>
                      <span className="font-mono-num text-sm font-bold text-stone-900">
                        $7.00 USD
                      </span>
                    </div>
                    <p className="text-xs text-stone-600">{t.paypalRedirectNote}</p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {t.paypalEmailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      dir="ltr"
                      value={paypalEmail}
                      onChange={(e) => setPaypalEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#003087]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-3 px-5 rounded-lg text-sm font-semibold text-white bg-[#003087] hover:bg-[#001F5C] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t.payNowPaypalBtn}</span>
                  </button>
                </form>
              )}

              <p className="text-[11px] text-center text-stone-500 pt-1">
                {t.securityNote}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
