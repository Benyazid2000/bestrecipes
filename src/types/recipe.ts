export type CuisineId = 'moroccan' | 'french' | 'chinese';
export type Language = 'en' | 'ar';

export type VesselStyle =
  | 'tagine'
  | 'couscoussier'
  | 'pastilla'
  | 'tangia'
  | 'harira'
  | 'cocotte'
  | 'gratin'
  | 'skillet'
  | 'tarte'
  | 'souffle'
  | 'steamer'
  | 'wok'
  | 'peking'
  | 'porcelain_bowl'
  | 'claypot';

export interface BilingualText {
  en: string;
  ar: string;
}

export interface RecipeIngredient {
  name: BilingualText;
  amount: number;
  unit: BilingualText;
  note?: BilingualText;
}

export interface RecipeStep {
  stepNumber: number;
  title: BilingualText;
  instruction: BilingualText;
  durationMinutes?: number;
}

export interface Recipe {
  id: string;
  number: number; // 1 to 20 within each cuisine
  cuisine: CuisineId;
  isFree: boolean; // First 5 (1-5) are true, 6-20 are false ($7 one-time unlock)
  title: BilingualText;
  nativePhonetic: string;
  region: BilingualText;
  course: BilingualText;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  caloriesPerServing: number;
  difficulty: {
    en: 'Accessible' | 'Traditional' | 'Masterclass';
    ar: 'سهل التحضير' | 'تقليدي أصيل' | 'احترافي متقن';
  };
  summary: BilingualText;
  culturalNote: BilingualText;
  chefSecret: BilingualText;
  vessel: VesselStyle;
  palette: {
    primary: string;
    secondary: string;
    garnish: string;
    rim: string;
  };
  photoUrl?: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
}

export interface PaymentReceipt {
  orderId: string;
  method: 'visa' | 'paypal';
  amountUsd: number;
  paidAtIso: string;
  payerLabel: string;
  cardLast4?: string;
}
