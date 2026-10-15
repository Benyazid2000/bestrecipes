import { Recipe } from '../types/recipe';
import frenchGastronomyImg from '../assets/images/cuisine_french_gastronomy_1791548513273.jpg';
import heroTriptychImg from '../assets/images/hero_culinary_triptych_1791548489306.jpg';
import coqAuVinImg from '../assets/images/dish_french_coq_au_vin_1792075663906.jpg';
import ratatouilleImg from '../assets/images/dish_french_ratatouille_1792075684152.jpg';
import bouillabaisseImg from '../assets/images/dish_french_bouillabaisse_1792076621256.jpg';
import confitCanardImg from '../assets/images/dish_french_confit_canard_1792076649997.jpg';
import quicheLorraineImg from '../assets/images/dish_french_quiche_lorraine_1792075733301.jpg';
import onionSoupImg from '../assets/images/dish_french_onion_soup_1792075707166.jpg';

export const FRENCH_IMAGE_GASTRONOMY = frenchGastronomyImg;
export const FRENCH_IMAGE_COQ_AU_VIN = coqAuVinImg;
export const FRENCH_IMAGE_RATATOUILLE = ratatouilleImg;
export const FRENCH_IMAGE_BOUILLABAISSE = bouillabaisseImg;
export const FRENCH_IMAGE_CONFIT_CANARD = confitCanardImg;
export const FRENCH_IMAGE_QUICHE_LORRAINE = quicheLorraineImg;
export const FRENCH_IMAGE_ONION_SOUP = onionSoupImg;
export const HERO_TRIPTYCH_IMAGE = heroTriptychImg;

export const frenchRecipes: Recipe[] = [
  {
    id: 'fr-01',
    number: 1,
    cuisine: 'french',
    isFree: true,
    title: {
      en: 'Traditional Boeuf Bourguignon',
      ar: 'بيف بورغينيون الفرنسي الكلاسيكي',
    },
    nativePhonetic: 'Bœuf Bourguignon',
    region: { en: 'Burgundy (Bourgogne)', ar: 'منطقة بورغندي الفرنسية' },
    course: { en: 'Heritage Braise', ar: 'طبق رئيسي فرنسي عريق' },
    prepTimeMinutes: 30,
    cookTimeMinutes: 150,
    servings: 6,
    caloriesPerServing: 620,
    difficulty: { en: 'Traditional', ar: 'تقليدي أصيل' },
    summary: {
      en: 'Marbled beef chuck slowly braised in a velvety Burgundy reduction with bouquet garni, caramelized pearl onions, and butter-seared cremini mushrooms.',
      ar: 'قطع لحم البقر الفتية المطهوة ببطء في مرق غني مع أعشاب البوكيه غارني والجزر والبصل اللؤلؤي المكرمل والفطر المحمر بالزبدة.',
    },
    culturalNote: {
      en: 'Codified by Auguste Escoffier and celebrated across Parisian bistros, this Burgundy dish turns humble cuts into silk.',
      ar: 'من أشهر أطباق المطبخ الفرنسي الكلاسيكي عالمياً، يتميز بصلصته الداكنة اللامعة ولحمه الذي يذوب في الفم.',
    },
    chefSecret: {
      en: 'Sauté the mushrooms and glaze the pearl onions separately in browned butter, folding them into the cocotte only in the final 15 minutes.',
      ar: 'يُحمر الفطر والبصل اللؤلؤي في مقلاة منفصلة بالزبدة ويُضافان في آخر ١٥ دقيقة ليحتفظا بقوامهما ونكهتهما المركزة.',
    },
    vessel: 'cocotte',
    palette: { primary: '#581C87', secondary: '#7F1D1D', garnish: '#15803D', rim: '#3B0764' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'Beef chuck roast, cut into 5cm cubes', ar: 'لحم بقر مقطع مكعبات كبيرة' }, amount: 1200, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Pearl onions & button mushrooms', ar: 'بصل لؤلؤي صغير وفطر طازج' }, amount: 500, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Carrots, garlic & bouquet garni (thyme, bay, parsley)', ar: 'جزر، ثوم وباقة أعشاب عطرية (زعتر، ورق غار، بقدونس)' }, amount: 300, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Rich beef stock & red grape/Burgundy reduction base', ar: 'مرق لحم بقر مركز وعصير عنب أحمر غير محلى للطهي' }, amount: 750, unit: { en: 'ml', ar: 'مل' } },
      { name: { en: 'Unsalted Normandy butter & flour (Beurre Manié)', ar: 'زبدة فرنسية غير مملحة ودقيق' }, amount: 60, unit: { en: 'g', ar: 'غرام' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Sear Beef Cubes in Cast-Iron Cocotte', ar: 'تحمير مكعبات اللحم في قدر الحديد الزهر' },
        instruction: {
          en: 'Pat beef cubes bone-dry and sear in batches in a heavy cast-iron cocotte until deeply crusted on all sides. Remove and sauté carrots and shallots.',
          ar: 'تُجفف مكعبات اللحم جيداً وتُحمر على دفعات في قدر ثقيل حتى تكتسب لوناً بنياً عميقاً، ثم يُشوح الجزر والبصل.',
        },
        durationMinutes: 25,
      },
      {
        stepNumber: 2,
        title: { en: 'Deglaze & Slow Oven Braise', ar: 'الطهي البطيء مع الأعشاب العطرية' },
        instruction: {
          en: 'Sprinkle flour, toast for 2 minutes, deglaze with rich stock and burgundy base, add bouquet garni and garlic, cover, and braise at 160°C for 2 hours.',
          ar: 'يُرش الدقيق ويُقلب لدقيقتين، ثم يُضاف المرق الساخن وباقة الأعشاب العطرية والثوم، ويُغطى القدر ليُطهى على حرارة هادئة لمدة ساعتين.',
        },
        durationMinutes: 110,
      },
      {
        stepNumber: 3,
        title: { en: 'Fold in Glazed Pearl Onions & Mushrooms', ar: 'إضافة البصل اللؤلؤي المكرمل والفطر' },
        instruction: {
          en: 'Caramelize pearl onions and mushrooms in butter, fold into the glossy beef reduction, and garnish with flat-leaf parsley.',
          ar: 'يُضاف البصل الصغير المكرمل والفطر المحمر بالزبدة إلى القدر، ويُزين الطبق بالبقدونس المفروم ويُقدم ساخناً.',
        },
        durationMinutes: 15,
      },
    ],
  },
  {
    id: 'fr-02',
    number: 2,
    cuisine: 'french',
    isFree: true,
    title: {
      en: 'Coq au Vin de Bourgogne',
      ar: 'كوك أو فان - الدجاج الفرنسي المطهو بالأعشاب والفطر',
    },
    nativePhonetic: 'Coq au Vin',
    region: { en: 'Burgundy & Lyon', ar: 'بورغندي وليون' },
    course: { en: 'Bistro Classic', ar: 'طبق بيسترو كلاسيكي' },
    prepTimeMinutes: 25,
    cookTimeMinutes: 75,
    servings: 4,
    caloriesPerServing: 560,
    difficulty: { en: 'Traditional', ar: 'تقليدي أصيل' },
    summary: {
      en: 'Free-range chicken legs and breasts braised with smoky lardons, pearl onions, garlic, fresh thyme, and woodland mushrooms in a velvety mahogany jus.',
      ar: 'قطع الدجاج البلدي المطهوة مع شرائح اللحم المدخن والبصل الصغير والثوم والزعتر البري والفطر في صلصة فرنسية غنية.',
    },
    culturalNote: {
      en: 'A cornerstone of French country cooking where slow braising transforms farm poultry into a deeply aromatic feast.',
      ar: 'درة المطبخ الريفي الفرنسي، يجمع بين طراوة الدجاج ونكهة الزعتر البري والفطر المحمر بالزبدة.',
    },
    chefSecret: {
      en: 'Whisk a teaspoon of cold butter (monter au beurre) into the strained sauce right before serving for a mirror-like sheen.',
      ar: 'خفق قطعة صغيرة من الزبدة الباردة في الصلصة قبل التقديم مباشرة يمنحها لمعاناً حريرياً فاخراً.',
    },
    vessel: 'cocotte',
    palette: { primary: '#7F1D1D', secondary: '#92400E', garnish: '#16A34A', rim: '#450A0A' },
    photoUrl: FRENCH_IMAGE_COQ_AU_VIN,
    ingredients: [
      { name: { en: 'Free-range chicken pieces (thighs, drumsticks, breasts)', ar: 'دجاجة مقطعة إلى ٨ قطع' }, amount: 1400, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Smoked beef/veal lardons & button mushrooms', ar: 'شرائح لحم مدخن وفطر طازج' }, amount: 350, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Pearl onions, carrots & shallots', ar: 'بصل صغير، جزر وشالوت' }, amount: 300, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Rich poultry stock & dark grape reduction', ar: 'مرق دجاج غني وعصير عنب أحمر مركز للطهي' }, amount: 600, unit: { en: 'ml', ar: 'مل' } },
      { name: { en: 'Fresh thyme sprigs, bay leaf & butter', ar: 'أغصان زعتر طازج، ورق غار وزبدة' }, amount: 50, unit: { en: 'g', ar: 'غرام' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Crisp Lardons & Golden Chicken Skin', ar: 'تحمير الدجاج في الزبدة' },
        instruction: {
          en: 'Crisp the smoked lardons in butter, then brown the seasoned chicken pieces skin-side down until deeply golden.',
          ar: 'تُحمر شرائح اللحم المدخن في الزبدة، ثم تُشوح قطع الدجاج المتبلة من جهة الجلد حتى تصبح ذهبية ومقرمشة.',
        },
        durationMinutes: 20,
      },
      {
        stepNumber: 2,
        title: { en: 'Simmer with Bouquet Garni & Mushrooms', ar: 'الطهي مع الأعشاب والفطر' },
        instruction: {
          en: 'Add shallots, garlic, thyme, bay leaf, stock, and reduction base. Simmer covered for 45 minutes, then finish with butter-sautéed mushrooms.',
          ar: 'يُضاف الشالوت والثوم والزعتر وورق الغار والمرق، ويُغطى القدر لمدة ٤٥ دقيقة ثم يُضاف الفطر المحمر بالزبدة.',
        },
        durationMinutes: 55,
      },
    ],
  },
  {
    id: 'fr-03',
    number: 3,
    cuisine: 'french',
    isFree: true,
    title: {
      en: 'Ratatouille Provençale Confit (Tian de Légumes)',
      ar: 'راتاتوي بروفانسال بالخضار المشوية والأعشاب',
    },
    nativePhonetic: 'Ratatouille de Nice',
    region: { en: 'Nice & Provence', ar: 'نيس وإقليم بروفانس' },
    course: { en: 'Provençal Vegetable Tian', ar: 'طبق نباتي متوسطي فاخر' },
    prepTimeMinutes: 30,
    cookTimeMinutes: 55,
    servings: 4,
    caloriesPerServing: 260,
    difficulty: { en: 'Accessible', ar: 'سهل التحضير' },
    summary: {
      en: 'Alternating ribbons of zucchini, Japanese eggplant, and heirloom tomatoes baked over a sweet roasted bell pepper piperade with Herbes de Provence.',
      ar: 'حلقات متناسقة من الكوسة والباذنجان والطماطم المصفوفة فوق صلصة الفلفل الأحمر المشوي والريحان وزيت الزيتون البروفانسالي.',
    },
    culturalNote: {
      en: 'Born in Nice (Ratatouille Niçoise), this celebration of late-summer Mediterranean produce shines both warm and at room temperature.',
      ar: 'أيقونة مطبخ جنوب فرنسا المتوسطي، يحتفي بنضارة الخضروات الصيفية مع زيت الزيتون والزعتر البري والريحان.',
    },
    chefSecret: {
      en: 'Sauté or roast each vegetable family separately—or bake thinly sliced over a concentrated piperade under parchment—so every vegetable keeps its own identity.',
      ar: 'تحضير صلصة الفلفل والطماطم المحمرة في قاع الطبق وتغطية شرائح الخضار بورق الطهي أثناء الخبز يجعلها تذوب كالزبدة دون أن تجف.',
    },
    vessel: 'gratin',
    palette: { primary: '#DC2626', secondary: '#15803D', garnish: '#EAB308', rim: '#7F1D1D' },
    photoUrl: FRENCH_IMAGE_RATATOUILLE,
    ingredients: [
      { name: { en: 'Slender green zucchini, yellow squash & eggplant', ar: 'كوسة خضراء وصفراء وباذنجان رفيع' }, amount: 900, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Firm Roma tomatoes', ar: 'طماطم متماسكة مقطعة دوائر' }, amount: 500, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Roasted red & yellow bell peppers, onion & garlic (Piperade)', ar: 'فلفل أحمر وأصفر مشوي وبصل وثوم للصلصة' }, amount: 450, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Extra-virgin olive oil, fresh basil & thyme', ar: 'زيت زيتون بكر، ريحان طازج وزعتر بري' }, amount: 80, unit: { en: 'ml', ar: 'مل' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Prepare Sweet Bell Pepper Piperade', ar: 'تحضير صلصة البيبيراد العطرية' },
        instruction: {
          en: 'Simmer finely diced roasted peppers, onions, garlic, crushed tomatoes, and olive oil until thick and sweet, then spread across the baking dish.',
          ar: 'يُطهى الفلفل المشوي المفروم مع البصل والثوم والطماطم وزيت الزيتون حتى تتكون صلصة كثيفة تُفرش في قاع الطبق.',
        },
        durationMinutes: 20,
      },
      {
        stepNumber: 2,
        title: { en: 'Shingle Vegetables & Bake Confit', ar: 'ترتيب حلقات الخضار والخبز البطيء' },
        instruction: {
          en: 'Arrange thin rounds of eggplant, zucchini, squash, and tomato in concentric spirals. Drizzle with herb oil, cover with parchment, and bake at 180°C for 45 minutes.',
          ar: 'تُصف دوائر الباذنجان والكوسة والطماطم بالتناوب بشكل حلزوني، تُدهن بزيت الأعشاب وتُغطى وتُخبز لمدة ٤٥ دقيقة.',
        },
        durationMinutes: 45,
      },
    ],
  },
  {
    id: 'fr-04',
    number: 4,
    cuisine: 'french',
    isFree: true,
    title: {
      en: 'Bouillabaisse Marseillaise with Saffron Rouille',
      ar: 'بويابيس مرسيليا - حساء الأسماك بالزعفران والروي',
    },
    nativePhonetic: 'Bouillabaisse de Marseille',
    region: { en: 'Old Port of Marseille', ar: 'ميناء مرسيليا القديم' },
    course: { en: 'Mediterranean Fish Stew', ar: 'حساء بحري متوسطي فاخر' },
    prepTimeMinutes: 35,
    cookTimeMinutes: 45,
    servings: 6,
    caloriesPerServing: 510,
    difficulty: { en: 'Masterclass', ar: 'احترافي متقن' },
    summary: {
      en: 'Saffron, fennel, and orange-peel scented Mediterranean rockfish broth served with poached sea bream, mussels, potatoes, garlic croûtons, and spicy Rouille.',
      ar: 'مرق أسماك البحر الأبيض المتوسط الغني بالزعفران والشمر وقشر البرتقال، يُقدم مع قطع السمك وبلح البحر والخبز المحمص بصلصة الروي.',
    },
    culturalNote: {
      en: 'Protected by the Marseille Bouillabaisse Charter of 1980, traditionally served in two courses: first the saffron soup with croûtons, then the whole fish.',
      ar: 'درة مطبخ مدينة مرسيليا الساحلية، يُقدم المرق الذهبي أولاً مع خبز الثوم وصلصة الروي بالزعفران ثم قطع السمك الطازجة.',
    },
    chefSecret: {
      en: 'Add a strip of dried organic orange peel and wild fennel fronds to the simmering rockfish stock for authentic Provençal brightness.',
      ar: 'إضافة شريحة من قشر البرتقال مع الشمر والزعفران أثناء غلي مرق السمك هي السر الأصيل لبويابيس مرسيليا.',
    },
    vessel: 'cocotte',
    palette: { primary: '#C2410C', secondary: '#EAB308', garnish: '#15803D', rim: '#7C2D12' },
    photoUrl: FRENCH_IMAGE_BOUILLABAISSE,
    ingredients: [
      { name: { en: 'Assorted Mediterranean firm fish fillets (red mullet, sea bream, monkfish)', ar: 'تشكيلة فيليه أسماك بحرية متماسكة (قاجوج، بوري، لوط)' }, amount: 1200, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Fresh mussels & shell-on prawns', ar: 'بلح البحر (بوزروك) وروبيان كامل' }, amount: 500, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Fennel bulb, leeks, ripe tomatoes & saffron threads', ar: 'بسباس (شمر)، كراث، طماطم وشعيرات زعفران' }, amount: 600, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Garlic, saffron & olive oil emulsion (Sauce Rouille) + baguette slices', ar: 'صلصة الروي بالثوم والزعفران وزيت الزيتون مع خبز باجيت محمص' }, amount: 200, unit: { en: 'g', ar: 'غرام' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Extract Saffron-Fennel Fish Broth', ar: 'تحضير مرق الأسماك بالزعفران والشمر' },
        instruction: {
          en: 'Sauté leeks, fennel, garlic, tomatoes, orange zest, and saffron in olive oil. Simmer with fish stock for 25 minutes and blend until smooth.',
          ar: 'يُشوح الكراث والشمر والثوم والطماطم وقشر البرتقال والزعفران في زيت الزيتون، ويُغلى مع مرق السمك ٢٥ دقيقة ثم يُصفى.',
        },
        durationMinutes: 25,
      },
      {
        stepNumber: 2,
        title: { en: 'Poach Potatoes, Fish & Serve with Rouille', ar: 'طهي البطاطس والأسماك والتقديم مع صلصة الروي' },
        instruction: {
          en: 'Simmer saffron potato rounds in the broth, poach firm fish fillets and mussels for 8 minutes, and serve with toasted baguette spread with saffron-garlic Rouille.',
          ar: 'تُطهى دوائر البطاطس في المرق، ثم تُضاف قطع السمك وبلح البحر لمدة ٨ دقائق وتُقدم مع الباجيت المحمص المدهون بصلصة الروي.',
        },
        durationMinutes: 20,
      },
    ],
  },
  {
    id: 'fr-05',
    number: 5,
    cuisine: 'french',
    isFree: true,
    title: {
      en: 'Confit de Canard with Sarladaise Potatoes',
      ar: 'كونفي البط المقرمش مع بطاطس سارلاديز بالثوم',
    },
    nativePhonetic: 'Confit de Canard du Périgord',
    region: { en: 'Gascony & Dordogne', ar: 'غاسكونيا ودوردونيي (جنوب غرب فرنسا)' },
    course: { en: 'South-West Classic', ar: 'طبق فرنسي تقليدي فاخر' },
    prepTimeMinutes: 20,
    cookTimeMinutes: 135,
    servings: 4,
    caloriesPerServing: 690,
    difficulty: { en: 'Traditional', ar: 'تقليدي أصيل' },
    summary: {
      en: 'Herb-cured duck legs slow-poached until silky, then pan-seared until the skin shatters like glass, served over garlic-parsley Sarladaise potato coins.',
      ar: 'أفخاذ البط المتبلة بالملح البحري والزعتر والمطهوة ببطء شديد ثم المحمرة حتى تصبح قشرتها ذهبية مقرمشة، مع البطاطس المحمرة بالثوم والبقدونس.',
    },
    culturalNote: {
      en: 'Originally a preservation method in Gascony before refrigeration, duck confit remains the pride of Southwestern French gastronomy.',
      ar: 'فخر مطبخ جنوب غرب فرنسا، يجمع بين قرمشة الجلد الخارجية وطراوة اللحم الداخلية الفائقة.',
    },
    chefSecret: {
      en: 'Start the cooked duck legs skin-side down in a cold skillet and bring up the heat gradually so the skin renders evenly to a bronze crunch.',
      ar: 'ضع أفخاذ البط من جهة الجلد في مقلاة باردة ثم ارفع الحرارة تدريجياً ليذوب الدهن وتصبح القشرة مقرمشة كالزجاج.',
    },
    vessel: 'skillet',
    palette: { primary: '#92400E', secondary: '#D97706', garnish: '#15803D', rim: '#451A03' },
    photoUrl: FRENCH_IMAGE_CONFIT_CANARD,
    ingredients: [
      { name: { en: 'Whole duck legs (thigh & drumstick)', ar: 'أفخاذ بط كاملة' }, amount: 4, unit: { en: 'legs', ar: 'قطع' } },
      { name: { en: 'Coarse Guérande sea salt, thyme, bay leaf & garlic', ar: 'ملح بحري خشن، زعتر بري، ورق غار وثوم' }, amount: 40, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Waxy Yukon Gold potatoes, thinly sliced', ar: 'بطاطس صفراء مقطعة دوائر' }, amount: 800, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Rendered duck fat or clarified butter & flat-leaf parsley', ar: 'إدام البط أو الزبدة المصفاة وبقدونس مفروم' }, amount: 250, unit: { en: 'g', ar: 'غرام' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Herb Cure & Low-Temp Confit', ar: 'التتبيل والطهي البطيء على حرارة منخفضة' },
        instruction: {
          en: 'Rub duck legs with sea salt, crushed garlic, and thyme; rinse after curing, submerge in melted fat in a heavy pot, and poach at 135°C for 2 hours.',
          ar: 'تُتبل أفخاذ البط بالملح والثوم والزعتر، ثم تُغمر في إدام مذاب وتُطهى في فرن هادئ جداً (١٣٥ درجة) لمدة ساعتين.',
        },
        durationMinutes: 115,
      },
      {
        stepNumber: 2,
        title: { en: 'Crisp Skin & Sauté Sarladaise Potatoes', ar: 'تحمير الجلد وتحضير بطاطس سارلاديز' },
        instruction: {
          en: 'Sear duck legs skin-side down until crackling crisp. In the same pan, sauté sliced potatoes until golden and toss with minced garlic and parsley.',
          ar: 'تُحمر أفخاذ البط في المقلاة حتى تقرمش القشرة، وتُشوح دوائر البطاطس في نفس المقلاة مع الثوم المفروم والبقدونس.',
        },
        durationMinutes: 20,
      },
    ],
  },
  {
    id: 'fr-06',
    number: 6,
    cuisine: 'french',
    isFree: false,
    title: {
      en: 'Cassoulet de Castelnaudary',
      ar: 'كاسوليه كاستيلنوداري بالفاصوليا البيضاء والبط',
    },
    nativePhonetic: 'Cassoulet',
    region: { en: 'Languedoc & Toulouse', ar: 'لانغدوك وتولوز' },
    course: { en: 'Earthenware Cassole Bake', ar: 'طاجين فرنسي مخبوز في الفرن' },
    prepTimeMinutes: 35,
    cookTimeMinutes: 160,
    servings: 6,
    caloriesPerServing: 720,
    difficulty: { en: 'Masterclass', ar: 'احترافي متقن' },
    summary: {
      en: 'Creamy Tarbais white beans slow-baked in a tapered clay cassole with duck confit, garlic sausages, aromatic broth, and a golden breadcrumb crust.',
      ar: 'فاصوليا بيضاء كريمية مطهوة ببطء في وعاء فخاري فرنسي مع قطع البط المحمر والنقانق المتبلة بالثوم وطبقة مقرمشة من الخبز المحمص.',
    },
    culturalNote: {
      en: 'Named after the earthenware pot (Cassole) made in Issel, tradition calls for breaking the golden crust seven times during baking.',
      ar: 'من أعرق أطباق الشتاء في جنوب فرنسا، يُخبز في وعاء فخاري عميق حتى تتكون فوقه قشرة ذهبية مقرمشة.',
    },
    chefSecret: {
      en: 'Press the browned top crust gently back into the bubbling bean broth three times while baking to thicken the sauce naturally.',
      ar: 'كسر القشرة الذهبية العلوية بظهر الملعقة وإدخالها في المرق مرتين أثناء الخبز يمنح الفاصوليا قواماً كريمياً غنياً.',
    },
    vessel: 'cocotte',
    palette: { primary: '#9A3412', secondary: '#D97706', garnish: '#FEF08A', rim: '#7C2D12' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'Soaked white Tarbais or Great Northern beans', ar: 'فاصوليا بيضاء كبيرة منقوعة' }, amount: 600, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Duck confit pieces & artisanal garlic sausages', ar: 'قطع كونفي البط ونقانق متبلة بالثوم' }, amount: 800, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Rich poultry stock, tomato paste & bouquet garni', ar: 'مرق دجاج غني، طماطم مركزة وباقة أعشاب' }, amount: 900, unit: { en: 'ml', ar: 'مل' } },
      { name: { en: 'Fresh rustic breadcrumbs & parsley', ar: 'خبز محمص مطحون (شابلور) وبقدونس' }, amount: 100, unit: { en: 'g', ar: 'غرام' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Simmer White Beans with Aromatics', ar: 'سلق الفاصوليا البيضاء مع الأعشاب' },
        instruction: {
          en: 'Simmer soaked white beans with onion studded with cloves, garlic, bouquet garni, and poultry stock for 60 minutes until tender.',
          ar: 'تُطهى الفاصوليا البيضاء مع البصل المغروس بالقرنفل والثوم وباقة الأعشاب في المرق لمدة ٦٠ دقيقة حتى تلين.',
        },
        durationMinutes: 60,
      },
      {
        stepNumber: 2,
        title: { en: 'Layer in Cassole & Bake Golden Crust', ar: 'الترتيب في الفخار وتحمير الوجه' },
        instruction: {
          en: 'Layer beans, duck confit, and seared garlic sausages in an earthenware pot, ladle broth to the rim, top with breadcrumbs, and bake at 160°C for 90 minutes.',
          ar: 'تُرتب طبقات الفاصوليا والبط والنقانق المحمرة في الوعاء الفخاري، تُغمر بالمرق وتُرش بالخبز المطحون وتُخبز لمدة ٩٠ دقيقة.',
        },
        durationMinutes: 100,
      },
    ],
  },
  {
    id: 'fr-07',
    number: 7,
    cuisine: 'french',
    isFree: false,
    title: {
      en: 'Quiche Lorraine Authentique',
      ar: 'كيش لورين الفرنسي الأصيل بالكريمة والجبن',
    },
    nativePhonetic: 'Quiche Lorraine',
    region: { en: 'Nancy & Metz (Lorraine)', ar: 'إقليم لورين (شمال شرق فرنسا)' },
    course: { en: 'Savory Custard Tart', ar: 'فطيرة فرنسية مالحة' },
    prepTimeMinutes: 30,
    cookTimeMinutes: 40,
    servings: 6,
    caloriesPerServing: 480,
    difficulty: { en: 'Accessible', ar: 'سهل التحضير' },
    summary: {
      en: 'Buttery blind-baked Pâte Brisée tart shell filled with smoky crisped lardons, aged Gruyère, and a silky nutmeg-scented Crème Fraîche custard.',
      ar: 'عجينة تارت فرنسية هشة بالزبدة محشوة بشرائح اللحم المدخن وجبن الغرويير ومغطاة بمزيج كريمي ناعم من البيض والكريمة وجوزة الطيب.',
    },
    culturalNote: {
      en: 'Baked in Lorraine since the 16th century, its royal custard balance (Appareil à Quiche) melts like savory silk on the tongue.',
      ar: 'من أشهر المخبوزات المالحة في المخابز والبيسترو الفرنسي، تُقدم دافئة مع سلطة خضراء مقرمشة.',
    },
    chefSecret: {
      en: 'Brush the blind-baked tart shell with a whisper of beaten egg white during the last 2 minutes of pre-baking to waterproof the crust.',
      ar: 'دهن قاع التارت المخبوز جزئياً بمسحة خفيفة من بياض البيض يحفظ قرمشته ويمنع تشربه للسوائل.',
    },
    vessel: 'tarte',
    palette: { primary: '#EAB308', secondary: '#B45309', garnish: '#78350F', rim: '#92400E' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'All-butter Pâte Brisée shortcrust pastry', ar: 'عجينة البريزي الفرنسية بالزبدة' }, amount: 350, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Heavy cream & full-fat Crème Fraîche', ar: 'كريمة سائلة وكريم فريش ثقيلة' }, amount: 350, unit: { en: 'ml', ar: 'مل' } },
      { name: { en: 'Smoked beef/veal lardons & grated Gruyère', ar: 'شرائح لحم مدخن وجبن غرويير مبشور' }, amount: 250, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Farm eggs & freshly grated nutmeg', ar: '٣ بيضات كاملة + صفار بيضة ورشة جوزة الطيب' }, amount: 4, unit: { en: 'eggs', ar: 'حبات' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Blind-Bake Fluted Tart Crust', ar: 'خبز قاعدة التارت (الخبز الأعمى)' },
        instruction: {
          en: 'Line a fluted tart ring with chilled Pâte Brisée, prick with a fork, weight with baking beans, and blind-bake at 190°C for 18 minutes.',
          ar: 'تُفرد العجينة الباردة في قالب التارت وتُثقب بالشوكة، وتُخبز مع أثقال الخبيز لمدة ١٨ دقيقة حتى تتماسك.',
        },
        durationMinutes: 20,
      },
      {
        stepNumber: 2,
        title: { en: 'Pour Nutmeg Custard & Bake Until Trembling', ar: 'صب خليط الكريمة والخبز الذهبي' },
        instruction: {
          en: 'Scatter crisped lardons and Gruyère in the shell, pour in the whisked cream-egg-nutmeg custard, and bake at 175°C for 28 minutes until puffed.',
          ar: 'تُوزع شرائح اللحم المدخن والجبن في القالب، يُصب مزيج الكريمة والبيض وجوزة الطيب، ويُخبز ٢٨ دقيقة حتى يتحمر الوجه.',
        },
        durationMinutes: 28,
      },
    ],
  },
  {
    id: 'fr-08',
    number: 8,
    cuisine: 'french',
    isFree: false,
    title: {
      en: 'Soupe à l’Oignon Gratinée des Halles',
      ar: 'حساء البصل الفرنسي المكرمل بالجبن الذائب',
    },
    nativePhonetic: 'Soupe à l’Oignon Gratinée',
    region: { en: 'Les Halles, Paris', ar: 'حي لي هال، باريس' },
    course: { en: 'Parisian Bistro Soup', ar: 'حساء باريسي شهير' },
    prepTimeMinutes: 20,
    cookTimeMinutes: 65,
    servings: 4,
    caloriesPerServing: 440,
    difficulty: { en: 'Accessible', ar: 'سهل التحضير' },
    summary: {
      en: 'Sweet yellow onions caramelized for 45 minutes to deep mahogany in Normandy butter, simmered in rich beef stock and crowned with bubbling Comté cheese toast.',
      ar: 'بصل أصفر مكرمل ببطء لمدة ٤٥ دقيقة في الزبدة حتى يصبح بلون الكهرمان، مطهو في مرق اللحم الغني ومغطى بخبز الباجيت وجبن الكومتي الذائب.',
    },
    culturalNote: {
      en: 'Made legendary in the old market of Les Halles in Paris, where night workers gathered at dawn for steaming bowls of gratinéed onion soup.',
      ar: 'أشهر حساء في مطاعم باريس الكلاسيكية، يُقدم في أوعية فخارية فردية تخرج من الفرن والجبن يغلي فوقها.',
    },
    chefSecret: {
      en: 'Patience is everything: let the sliced onions caramelize slowly over medium-low heat for a full 40 minutes, deglazing fond with splash of water.',
      ar: 'سر هذا الحساء يكمن في الصبر على كرملة البصل بهدوء لمدة ٤٠ دقيقة كاملة حتى يفرز سكرياته الطبيعية ويتحول للون البني الداكن.',
    },
    vessel: 'cocotte',
    palette: { primary: '#78350F', secondary: '#EAB308', garnish: '#FDE68A', rim: '#451A03' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'Yellow onions, thinly sliced pole-to-pole', ar: 'بصل أصفر مقطع شرائح رفيعة طولياً' }, amount: 1000, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Unsalted butter & rich roasted beef stock', ar: 'زبدة طبيعية ومرق عظام بقر مركز' }, amount: 1200, unit: { en: 'ml', ar: 'مل' } },
      { name: { en: 'Toasted rustic baguette rounds', ar: 'شرائح خبز باجيت محمصة' }, amount: 8, unit: { en: 'slices', ar: 'شرائح' } },
      { name: { en: 'Aged Comté or Gruyère cheese, grated', ar: 'جبن كومتي أو غرويير فرنسي مبشور' }, amount: 220, unit: { en: 'g', ar: 'غرام' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Slow Mahogany Caramelization', ar: 'كرملة البصل البطيئة في الزبدة' },
        instruction: {
          en: 'Melt butter with thyme in a heavy pot and cook sliced onions slowly for 45 minutes, stirring often until deep amber and jammy.',
          ar: 'يُطهى البصل في الزبدة مع غصن زعتر على نار هادئة لمدة ٤٥ دقيقة مع التحريك حتى يصبح بلون الكراميل الداكن.',
        },
        durationMinutes: 45,
      },
      {
        stepNumber: 2,
        title: { en: 'Simmer Stock & Broil Comté Crust', ar: 'إضافة المرق وتحمير طبقة الجبن في الفرن' },
        instruction: {
          en: 'Dust with a spoon of flour, pour in hot beef stock, simmer 20 minutes, ladle into oven crocks, float garlic baguette slices and mounds of Comté, and broil until bubbling.',
          ar: 'يُضاف المرق الساخن ويُغلى ٢٠ دقيقة، ثم يُصب في زبادي الفرن وتُوضع شرائح الباجيت والجبن المبشور ويُحمر تحت الشواية.',
        },
        durationMinutes: 20,
      },
    ],
  },
  {
    id: 'fr-09',
    number: 9,
    cuisine: 'french',
    isFree: false,
    title: {
      en: 'Blanquette de Veau à l’Ancienne',
      ar: 'بلانكيت العجل الفرنسي بالصلصة البيضاء الكريمية',
    },
    nativePhonetic: 'Blanquette de Veau',
    region: { en: 'Paris & Normandy', ar: 'باريس ونورماندي' },
    course: { en: 'Velouté Braise', ar: 'طبق فرنسي كريمي تقليدي' },
    prepTimeMinutes: 25,
    cookTimeMinutes: 85,
    servings: 4,
    caloriesPerServing: 550,
    difficulty: { en: 'Traditional', ar: 'تقليدي أصيل' },
    summary: {
      en: 'Tender veal shoulder poached gently without browning in an aromatic white court-bouillon, bound with a silky lemon-egg yolk-cream velouté and button mushrooms.',
      ar: 'قطع لحم العجل الفتي المسلوقة بهدوء دون تحمير مع الجزر والكراث، والمغطاة بصلصة الفيلوتيه البيضاء الحريرية بالكريمة وصفار البيض والفطر.',
    },
    culturalNote: {
      en: 'A beloved Sunday family classic across France where neither the meat nor the butter roux is ever allowed to take on color.',
      ar: 'طبق العائلات الفرنسية المفضل يوم الأحد، يتميز بلونه الأبيض العاجي الفاخر ونعومة صلصته بالليمون.',
    },
    chefSecret: {
      en: 'Blanch the veal cubes in cold water brought briefly to a boil, then rinse before simmering in fresh stock so the broth stays crystal clear.',
      ar: 'وضع لحم العجل في ماء بارد حتى يغلي لدقيقتين ثم تصفيته قبل طهيه يضمن بقاء الصلصة بيضاء نقية كالحرير.',
    },
    vessel: 'cocotte',
    palette: { primary: '#D97706', secondary: '#FEF3C7', garnish: '#15803D', rim: '#92400E' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'Veal shoulder or tendron cubes', ar: 'مكعبات كتف العجل الفتي' }, amount: 1000, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Carrots, leek, pearl onions & button mushrooms', ar: 'جزر، كراث، بصل لؤلؤي وفطر أبيض' }, amount: 450, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Butter & flour for white roux', ar: 'زبدة ودقيق لتحضير الرو الأبيض' }, amount: 80, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Crème fraîche, 2 egg yolks & fresh lemon juice', ar: 'كريمة طازجة، صفار بيضتين وعصير ليمون' }, amount: 180, unit: { en: 'ml', ar: 'مل' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Gentle White Poach', ar: 'السلق الهادئ مع الخضار العطرية' },
        instruction: {
          en: 'Simmer blanched veal with carrots, leek, clove-studded onion, and bouquet garni for 70 minutes until tender.',
          ar: 'يُطهى لحم العجل المصفى مع الجزر والكراث والبصل والأعشاب العطرية على نار هادئة لمدة ٧٠ دقيقة.',
        },
        durationMinutes: 70,
      },
      {
        stepNumber: 2,
        title: { en: 'Bind Ivory Velouté Liaison', ar: 'ربط صلصة الفيلوتيه بالكريمة والليمون' },
        instruction: {
          en: 'Whisk strained poaching stock into a pale butter-flour roux, add poached mushrooms and pearl onions, and finish off-heat with egg yolks, cream, and lemon juice.',
          ar: 'يُضاف المرق المصفى إلى خليط الزبدة والدقيق الأبيض، يُضاف الفطر والبصل، ثم تُربط الصلصة خارج النار بصفار البيض والكريمة وعصير الليمون.',
        },
        durationMinutes: 15,
      },
    ],
  },
  {
    id: 'fr-10',
    number: 10,
    cuisine: 'french',
    isFree: false,
    title: {
      en: 'Sole Meunière au Beurre Noisette',
      ar: 'سمك موسى (صول مونيير) بالزبدة البنية والليمون',
    },
    nativePhonetic: 'Sole Meunière',
    region: { en: 'Normandy Coast & Paris', ar: 'ساحل نورماندي وباريس' },
    course: { en: 'Haute Brasserie Fish', ar: 'طبق بحري كلاسيكي فاخر' },
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    servings: 2,
    caloriesPerServing: 460,
    difficulty: { en: 'Accessible', ar: 'سهل التحضير' },
    summary: {
      en: 'Dover sole lightly dusted in flour, pan-seared to a delicate golden crust, and basted with foaming hazelnut-scented brown butter, lemon, and parsley.',
      ar: 'سمك موسى الطازج المغلف بطبقة خفيفة من الدقيق والمحمر في الزبدة البنية الرغوية بعطر البندق مع عصير الليمون والبقدونس.',
    },
    culturalNote: {
      en: 'The dish that famously inspired Julia Child’s lifelong love affair with French cuisine upon her arrival in Rouen in 1948.',
      ar: 'الطبق التاريخي الشهير الذي يعكس عبقرية البساطة في المطبخ الفرنسي بفضل الزبدة البنية وعصير الليمون الطازج.',
    },
    chefSecret: {
      en: 'Wait until the foaming butter smells distinctly of toasted hazelnuts (Beurre Noisette), then immediately squeeze fresh lemon juice so it crackles and emulsifies.',
      ar: 'انتظر حتى تفوح رائحة البندق من الزبدة الذهبية ثم أضف عصير الليمون فوراً لتتكون صلصة رغوية غنية تُصب فوق السمك.',
    },
    vessel: 'skillet',
    palette: { primary: '#CA8A04', secondary: '#FEF08A', garnish: '#15803D', rim: '#854D0E' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'Whole skinned Dover or lemon sole', ar: 'سمك موسى (صول) طازج منظف' }, amount: 700, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Normandy salted butter', ar: 'زبدة فرنسية عالية الجودة' }, amount: 90, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Fresh lemon juice, parsley & fine flour', ar: 'عصير ليمون طازج، بقدونس مفروم ودقيق' }, amount: 60, unit: { en: 'g', ar: 'غرام' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Dust & Pan-Sear in Clarified Butter', ar: 'تغليف السمك بالدقيق وتحميره' },
        instruction: {
          en: 'Season the sole, dredge lightly in flour, shake off excess, and sear in hot butter for 3.5 minutes per side until golden.',
          ar: 'يُتبل السمك ويُغلف بطبقة رقيقة جداً من الدقيق، ثم يُحمر في الزبدة لمدة ٣ دقائق ونصف لكل جانب.',
        },
        durationMinutes: 8,
      },
      {
        stepNumber: 2,
        title: { en: 'Foam Beurre Noisette & Lemon Splash', ar: 'تحضير الزبدة البنية الرغوية' },
        instruction: {
          en: 'Transfer fish to warm platter. Foam fresh butter in the pan until hazelnut-brown, add lemon juice and parsley, and pour sizzling over the sole.',
          ar: 'يوضع السمك في طبق دافئ، وتُذوب قطعة زبدة طازجة في المقلاة حتى تصبح بنية ذهبية، يُضاف الليمون والبقدونس وتُصب ساخنة فوق السمك.',
        },
        durationMinutes: 4,
      },
    ],
  },
  {
    id: 'fr-11',
    number: 11,
    cuisine: 'french',
    isFree: false,
    title: {
      en: 'Magret de Canard au Miel et Cinq Épices',
      ar: 'ماغريه البط المحمر بالعسل والتوابل العطرية',
    },
    nativePhonetic: 'Magret de Canard au Miel',
    region: { en: 'Bordeaux & Gascony', ar: 'بوردو وغاسكونيا' },
    course: { en: 'Gastronomic Entrée', ar: 'طبق رئيسي راقٍ' },
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 2,
    caloriesPerServing: 530,
    difficulty: { en: 'Traditional', ar: 'تقليدي أصيل' },
    summary: {
      en: 'Diamond-scored duck breast seared to rosy medium-rare with crispy skin, glazed in a balsamic, wildflower honey, and crushed black pepper reduction.',
      ar: 'صدر البط المشرح والمحمر بقشرة مقرمشة وقلب وردي طري، مع صلصة العسل الجبلي والخل البلسمي والفلفل الأسود المجروش.',
    },
    culturalNote: {
      en: 'Created in Gascony in the 1960s by Chef André Daguin, treating duck breast like a prime steak rather than a slow pot roast.',
      ar: 'ابتكار حديث من جنوب غرب فرنسا غيّر طريقة طهي صدر البط ليُعامل كأفخر قطع الستيك مع صلصة حلوة وحامضة.',
    },
    chefSecret: {
      en: 'Score the fat cap in a tight 5mm diamond lattice without cutting into the red meat, and rest the breast 8 minutes under foil before slicing.',
      ar: 'تشريح طبقة الدهن على شكل معينات صغيرة دون جرح اللحم وإراحة الصدر ٨ دقائق قبل التقطيع يحفظ عصارته الوردية.',
    },
    vessel: 'skillet',
    palette: { primary: '#991B1B', secondary: '#D97706', garnish: '#FDE68A', rim: '#450A0A' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'Plump Mulard duck breasts (Magrets)', ar: 'صدور بط (ماغريه) طازجة' }, amount: 700, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Wildflower honey & aged balsamic vinegar', ar: 'عسل طبيعي وخل بلسمي معتق' }, amount: 75, unit: { en: 'ml', ar: 'مل' } },
      { name: { en: 'Crushed black pepper, coriander seed & orange zest', ar: 'فلفل أسود مجروش، قزبر وبشر برتقال' }, amount: 2, unit: { en: 'tbsp', ar: 'ملاعق كبيرة' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Cold-Pan Fat Rendering', ar: 'تحمير طبقة الجلد بداية من مقلاة باردة' },
        instruction: {
          en: 'Place diamond-scored duck breasts skin-side down in a dry cold pan. Render over medium heat for 10 minutes until golden, then sear flesh side 3 minutes.',
          ar: 'يُوضع صدر البط من جهة الجلد في مقلاة باردة ويُطهى على نار متوسطة ١٠ دقائق حتى يقرمش، ثم يُقلب لـ ٣ دقائق.',
        },
        durationMinutes: 14,
      },
      {
        stepNumber: 2,
        title: { en: 'Reduce Honey-Balsamic Glaze & Slice', ar: 'تجهيز صلصة العسل والبلسميك والتقطيع' },
        instruction: {
          en: 'Pour off fat, deglaze pan with balsamic vinegar, honey, and orange zest, simmer until syrupy, and spoon over rosy slices of duck.',
          ar: 'يُصفى الدهن الزائد، ويُضاف الخل البلسمي والعسل وبشر البرتقال في المقلاة حتى تتعقد الصلصة وتُصب فوق شرائح البط.',
        },
        durationMinutes: 6,
      },
    ],
  },
  {
    id: 'fr-12',
    number: 12,
    cuisine: 'french',
    isFree: false,
    title: {
      en: 'Steak au Poivre with Crushed Peppercorn Cream',
      ar: 'ستيك أو بوافر بصلصة الفلفل الأسود والكريمة',
    },
    nativePhonetic: 'Steak au Poivre',
    region: { en: 'Parisian Brasseries', ar: 'مطاعم باريس الكلاسيكية' },
    course: { en: 'Brasserie Prime Cut', ar: 'ستيك فرنسي فاخر' },
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 2,
    caloriesPerServing: 610,
    difficulty: { en: 'Accessible', ar: 'سهل التحضير' },
    summary: {
      en: 'Prime beef tenderloin encrusted in cracked Tellicherry and green peppercorns, pan-seared in foaming butter with a velvety shallot-cream pan sauce.',
      ar: 'فيليه لحم البقر المغلف بحبيبات الفلفل الأسود والأخضر المجروشة، محمر في الزبدة مع صلصة الشالوت والكريمة الغنية.',
    },
    culturalNote: {
      en: 'A timeless late-night staple of Boulevard Saint-Germain brasseries, pairing bold peppery heat with rich Normandy cream.',
      ar: 'عنوان الفخامة السريعة في مطاعم باريس، حيث يلتقي الفلفل المجروش الحار بنعومة الكريمة الفرنسية.',
    },
    chefSecret: {
      en: 'Crush whole peppercorns coarsely with the bottom of a heavy saucepan rather than a fine grinder so you get aromatic crunch without dust.',
      ar: 'اجرش حبوب الفلفل الكاملة بكعب كاسرولة ثقيلة بدلاً من طحنها ناعماً لتحصل على قرمشة عطرية متوازنة.',
    },
    vessel: 'skillet',
    palette: { primary: '#44403C', secondary: '#B45309', garnish: '#22C55E', rim: '#1C1917' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'Center-cut beef tenderloin or strip steaks', ar: 'شرائح فيليه لحم بقر سميكة' }, amount: 500, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Coarsely cracked black & brined green peppercorns', ar: 'فلفل أسود مجروش وحبيبات فلفل أخضر' }, amount: 3, unit: { en: 'tbsp', ar: 'ملاعق كبيرة' } },
      { name: { en: 'Heavy cream, beef demi-glace & minced shallots', ar: 'كريمة سائلة، مرق لحم مركز وشالوت مفروم' }, amount: 220, unit: { en: 'ml', ar: 'مل' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Press Peppercorn Crust & Sear', ar: 'تغليف الفيليه بالفلفل وتحميره' },
        instruction: {
          en: 'Press cracked peppercorns firmly into both sides of the steaks. Sear in hot oil and butter for 3.5 minutes per side, basting continuously.',
          ar: 'تُضغط حبوب الفلفل المجروشة على وجهي الستيك، ويُحمر في الزبدة الساخنة لمدة ٣.٥ دقيقة لكل جانب مع السقي المستمر.',
        },
        durationMinutes: 8,
      },
      {
        stepNumber: 2,
        title: { en: 'Reduce Shallot & Green Pepper Cream', ar: 'تحضير صلصة الكريمة والفلفل الأخضر' },
        instruction: {
          en: 'Sauté minced shallots and green peppercorns in the pan drippings, add demi-glace and heavy cream, and boil 3 minutes until coating the back of a spoon.',
          ar: 'يُشوح الشالوت والفلفل الأخضر في نفس المقلاة، يُضاف المرق المركز والكريمة وتُغلى الصلصة ٣ دقائق حتى تتكاثف.',
        },
        durationMinutes: 7,
      },
    ],
  },
  {
    id: 'fr-13',
    number: 13,
    cuisine: 'french',
    isFree: false,
    title: {
      en: 'Gratin Dauphinois Traditionnel',
      ar: 'غراتان دوفينوا الفرنسي بالبطاطس والكريمة',
    },
    nativePhonetic: 'Gratin Dauphinois',
    region: { en: 'Grenoble & French Alps', ar: 'غرونوبل وجبال الألب الفرنسية' },
    course: { en: 'Alpine Bake', ar: 'غراتان فرنسي أصيل' },
    prepTimeMinutes: 20,
    cookTimeMinutes: 65,
    servings: 6,
    caloriesPerServing: 430,
    difficulty: { en: 'Accessible', ar: 'سهل التحضير' },
    summary: {
      en: 'Mandoline-thin potato coins baked in a garlic-rubbed earthenware dish with nutmeg-infused cream and whole milk until golden and custard-soft.',
      ar: 'شرائح البطاطس الرقيقة المطهوة في طبق فخاري مفروك بالثوم مع الكريمة الطازجة والحليب وجوزة الطيب حتى تتحمر وتذوب.',
    },
    culturalNote: {
      en: 'First recorded at a dinner in Gap in 1788, authentic Gratin Dauphinois relies solely on potato starch and heavy cream for its creamy liaison.',
      ar: 'يعود تاريخ هذا الطبق الألبي لعام ١٧٨٨، ويعتمد على نشا البطاطس الطبيعي والكريمة لتكوين قوام مخملي رائع.',
    },
    chefSecret: {
      en: 'Never rinse the sliced potatoes in water after cutting—the surface starch is essential to thicken the simmering garlic cream.',
      ar: 'لا تغسل شرائح البطاطس بالماء بعد تقطيعها أبداً، لأن النشا الطبيعي الموجود عليها هو سر تماسك الكريمة في الفرن.',
    },
    vessel: 'gratin',
    palette: { primary: '#D97706', secondary: '#FEF3C7', garnish: '#92400E', rim: '#78350F' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'Yukon Gold or Monalisa potatoes, sliced 2mm thin', ar: 'بطاطس صفراء مقطعة شرائح رقيقة جداً (٢ ملم)' }, amount: 1200, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Heavy cream & whole milk', ar: 'كريمة سائلة كاملة الدسم وحليب' }, amount: 650, unit: { en: 'ml', ar: 'مل' } },
      { name: { en: 'Garlic cloves, butter & freshly grated nutmeg', ar: 'فصوص ثوم، زبدة وجوزة الطيب مبشورة' }, amount: 60, unit: { en: 'g', ar: 'غرام' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Simmer Potato Coins in Garlic Cream', ar: 'تسخين البطاطس في الكريمة المنسمة بالثوم' },
        instruction: {
          en: 'Bring milk, cream, crushed garlic, salt, white pepper, and nutmeg to a simmer. Add thin potato slices and cook 8 minutes until starch releases.',
          ar: 'يُسخن الحليب والكريمة مع الثوم وجوزة الطيب والملح، ثم تُضاف شرائح البطاطس وتُطهى على نار هادئة ٨ دقائق.',
        },
        durationMinutes: 12,
      },
      {
        stepNumber: 2,
        title: { en: 'Bake in Garlic-Rubbed Gratin Dish', ar: 'الخبز في طبق الغراتان بالزبدة' },
        instruction: {
          en: 'Rub a ceramic gratin dish with a cut garlic clove and butter. Transfer potatoes and cream, dot with butter, and bake at 170°C for 55 minutes until blistered gold.',
          ar: 'يُفرك طبق الفرن بفص ثوم مقطوع ويُدهن بالزبدة، تُسكب البطاطس والكريمة وتُخبز على حرارة ١٧٠ درجة لمدة ٥٥ دقيقة.',
        },
        durationMinutes: 55,
      },
    ],
  },
  {
    id: 'fr-14',
    number: 14,
    cuisine: 'french',
    isFree: false,
    title: {
      en: 'Moules Marinières aux Échalotes & Crème',
      ar: 'بلح البحر على الطريقة البحرية الفرنسية بالثوم والكريمة',
    },
    nativePhonetic: 'Moules Marinières',
    region: { en: 'Brittany & Normandy', ar: 'بريتاني ونورماندي' },
    course: { en: 'Coastal Cocotte', ar: 'طبق بحري ساحلي' },
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    servings: 4,
    caloriesPerServing: 390,
    difficulty: { en: 'Accessible', ar: 'سهل التحضير' },
    summary: {
      en: 'Bouchot blue mussels steamed open in 6 minutes over finely diced shallots, salted Brittany butter, thyme, parsley, and a touch of crème fraîche.',
      ar: 'بلح البحر الأسود الطازج المطهو بالبخار مع الشالوت المفروم والزبدة المملحة والزعتر والبقدونس ولمسة من الكريمة الطازجة.',
    },
    culturalNote: {
      en: 'Served across the Atlantic ports of Brittany and Normandy in black enameled pots with crisp golden pommes frites.',
      ar: 'الطبق الساحلي الأشهر في موانئ شمال فرنسا، يُقدم في قدر أسود ساخن مع البطاطس المقلية المقرمشة.',
    },
    chefSecret: {
      en: 'Cook the mussels over high heat with the lid tightly closed for just 4 to 5 minutes, shaking the pot twice so they open while still plump.',
      ar: 'يُطهى بلح البحر على نار عالية مع تغطية القدر لـ ٥ دقائق فقط وهزه مرتين ليتفتح محتفظاً بطراوته وعصارته.',
    },
    vessel: 'cocotte',
    palette: { primary: '#1E293B', secondary: '#EAB308', garnish: '#16A34A', rim: '#0F172A' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'Scrubbed & debearded fresh blue mussels', ar: 'بلح البحر (بوزروك) طازج ومنظف جيداً' }, amount: 1600, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Finely minced shallots, garlic & celery heart', ar: 'شالوت وثوم وقلب كرفس مفروم ناعماً' }, amount: 150, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Salted butter, lemon broth & Crème Fraîche', ar: 'زبدة مملحة، مرق بالليمون وكريم فريش' }, amount: 250, unit: { en: 'ml', ar: 'مل' } },
      { name: { en: 'Flat-leaf parsley, finely chopped', ar: 'بقدونس طازج مفروم بكثرة' }, amount: 1, unit: { en: 'bunch', ar: 'ربطة' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Sweat Shallots in Brittany Butter', ar: 'تشويح الشالوت والثوم في الزبدة' },
        instruction: {
          en: 'Sweat minced shallots, garlic, celery heart, and thyme in salted butter until translucent without browning.',
          ar: 'يُشوح الشالوت والثوم والكرفس والزعتر في الزبدة المملحة لمدة ٤ دقائق حتى تذبل وتفوح رائحتها.',
        },
        durationMinutes: 5,
      },
      {
        stepNumber: 2,
        title: { en: 'Flash Steam Mussels & Swirl Cream', ar: 'الطهي السريع بالبخار وإضافة البقدونس' },
        instruction: {
          en: 'Add steaming liquid, bring to a rolling boil, dump in mussels, cover for 5 minutes until open, and swirl in crème fraîche and parsley.',
          ar: 'يُضاف المرق الساخن وبلح البحر ويُغطى القدر على نار قوية لـ ٥ دقائق حتى تتفتح الصدفات، ثم تُضاف الكريمة والبقدونس.',
        },
        durationMinutes: 7,
      },
    ],
  },
  {
    id: 'fr-15',
    number: 15,
    cuisine: 'french',
    isFree: false,
    title: {
      en: 'Filet de Boeuf en Croûte (French Beef Tenderloin Pastry)',
      ar: 'فيليه اللحم البقري بالعجين المورق والفطر (أون كروت)',
    },
    nativePhonetic: 'Filet de Bœuf en Croûte',
    region: { en: 'Lyon & Paris Haute Cuisine', ar: 'ليون وباريس' },
    course: { en: 'Grand Banquet Roast', ar: 'طبق ولائم احتفالي فاخر' },
    prepTimeMinutes: 45,
    cookTimeMinutes: 35,
    servings: 6,
    caloriesPerServing: 680,
    difficulty: { en: 'Masterclass', ar: 'احترافي متقن' },
    summary: {
      en: 'Center-cut beef tenderloin seared and coated in black truffle mushroom duxelles and herb crêpes, wrapped in golden lattice puff pastry.',
      ar: 'عرق فيليه البقر المحمر والمغلف بمعجون الفطر البري والكريب الفرنسي، والمخبوز داخل عجينة الباف باستري المورقة الذهبية.',
    },
    culturalNote: {
      en: 'Long before its English cousin, French Filet de Boeuf en Croûte wrapped prized tenderloin in thin herb crêpes and Pâte Feuilletée.',
      ar: 'تحفة المطبخ الفرنسي الراقي في الولائم الكبرى، حيث تحفظ الفطيرة المورقة عصارة الفيليه ونكهة الفطر البري.',
    },
    chefSecret: {
      en: 'Wrap the mushroom-coated beef inside a thin savory herb crêpe before rolling into the puff pastry—the crêpe absorbs moisture so the bottom pastry stays crisp.',
      ar: 'لف الفيليه والفطر داخل فطيرة كريب رقيقة قبل وضعه في عجين الباف باستري يمتص الرطوبة ويضمن قرمشة العجين من الأسفل.',
    },
    vessel: 'tarte',
    palette: { primary: '#B45309', secondary: '#991B1B', garnish: '#FDE68A', rim: '#78350F' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'Center-cut beef tenderloin (Chateaubriand)', ar: 'عرق فيليه لحم بقر كامل (شاتوبريان)' }, amount: 900, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Finely minced mushrooms & shallots (Duxelles)', ar: 'فطر طازج وشالوت مفروم ناعماً جداً (دوكسيل)' }, amount: 500, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'All-butter puff pastry (Pâte Feuilletée) & 2 thin herb crêpes', ar: 'عجينة باف باستري بالزبدة وفطيرتا كريب بالأعشاب' }, amount: 450, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Dijon mustard & egg yolks for glazing', ar: 'خردل ديجون وصفار بيض للتلميع' }, amount: 50, unit: { en: 'g', ar: 'غرام' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Sear Tenderloin & Cook Dry Mushroom Duxelles', ar: 'تحمير الفيليه وتجفيف معجون الفطر' },
        instruction: {
          en: 'Sear tenderloin for 60 seconds per side, brush with Dijon mustard, and chill. Sauté finely minced mushrooms and shallots until all moisture evaporates.',
          ar: 'يُحمر الفيليه سريعاً من جميع الجهات ويُدهن بخردل ديجون ويُبرد. يُطهى الفطر المفروم مع الشالوت حتى يتبخر ماؤه تماماً.',
        },
        durationMinutes: 25,
      },
      {
        stepNumber: 2,
        title: { en: 'Wrap in Crêpe & Puff Pastry and Bake', ar: 'التغليف بالعجين المورق والخبز' },
        instruction: {
          en: 'Spread mushroom duxelles on herb crêpes, wrap around beef, encase in puff pastry brushed with egg yolk, score a leaf pattern, and bake at 200°C for 30 minutes.',
          ar: 'يُلف الفيليه بالكريب والفطر ثم بعجينة الباف باستري، يُدهن بصفار البيض ويُنقش ويُخبز على حرارة ٢٠٠ درجة لمدة ٣٠ دقيقة.',
        },
        durationMinutes: 35,
      },
    ],
  },
  {
    id: 'fr-16',
    number: 16,
    cuisine: 'french',
    isFree: false,
    title: {
      en: 'Gougères Bourguignonnes au Comté Affiné',
      ar: 'غوجير بورغندي - معجنات الشو الفرنسية بجبن الكومتي',
    },
    nativePhonetic: 'Gougères au Fromage',
    region: { en: 'Dijon & Chablis', ar: 'ديجون وشابلي' },
    course: { en: 'Artisan Savory Pastry', ar: 'مقبلات فرنسية مخبوزة' },
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    servings: 6,
    caloriesPerServing: 280,
    difficulty: { en: 'Accessible', ar: 'سهل التحضير' },
    summary: {
      en: 'Airy golden Pâte à Choux puffs folded with 18-month aged Comté cheese, freshly grated nutmeg, and cracked black pepper.',
      ar: 'كرات عجينة الشو المنتفخة والهشة، الممزوجة بجبن الكومتي المعتق وجوزة الطيب والفلفل الأسود.',
    },
    culturalNote: {
      en: 'Served warm out of the oven across Burgundy cellars and bistros to welcome guests to the table.',
      ar: 'أشهر ضيافة ترحيبية في إقليم بورغندي الفرنسي، تتميز بقشرتها الذهبية المقرمشة وقلبها الدافئ الغني بالجبن.',
    },
    chefSecret: {
      en: 'Dry the flour-butter panade over medium heat for a full 90 seconds before beating in the eggs so the puffs rise high and hollow.',
      ar: 'تجفيف عجينة الشو فوق النار لمدة دقيقة ونصف قبل إضافة البيض يضمن انتفاخ الغوجير وبقاءه خفيفاً وهشاً.',
    },
    vessel: 'tarte',
    palette: { primary: '#D97706', secondary: '#FACC15', garnish: '#92400E', rim: '#78350F' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'Aged Comté or Gruyère cheese, finely grated', ar: 'جبن كومتي أو غرويير مبشور' }, amount: 180, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Water, milk & unsalted butter', ar: 'ماء، حليب وزبدة غير مملحة' }, amount: 250, unit: { en: 'ml', ar: 'مل' } },
      { name: { en: 'Sifted flour & 4 farm eggs', ar: 'دقيق منخول و ٤ بيضات' }, amount: 150, unit: { en: 'g', ar: 'غرام' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Cook Choux Panade & Incorporate Eggs', ar: 'تحضير عجينة الشو وإضافة البيض والجبن' },
        instruction: {
          en: 'Boil milk, water, butter, and salt; beat in flour vigorously until a smooth ball forms. Beat in eggs one by one, then fold in grated Comté and nutmeg.',
          ar: 'يُغلى الماء والحليب والزبدة، يُضاف الدقيق دفعة واحدة ويُحرك حتى يتجمع، ثم يُضاف البيض واحدة تلو الأخرى وأخيراً الجبن المبشور.',
        },
        durationMinutes: 15,
      },
      {
        stepNumber: 2,
        title: { en: 'Pipe Rings & Bake Golden Puffs', ar: 'التشكيل والخبز حتى الانتفاخ الذهبي' },
        instruction: {
          en: 'Pipe mounds on parchment, scatter extra Comté on top, and bake at 200°C for 25 minutes without opening the oven door.',
          ar: 'تُشكل كرات فوق ورق الطهي، تُرش بالجبن وتُخبز على حرارة ٢٠٠ درجة لمدة ٢٥ دقيقة دون فتح باب الفرن.',
        },
        durationMinutes: 25,
      },
    ],
  },
  {
    id: 'fr-17',
    number: 17,
    cuisine: 'french',
    isFree: false,
    title: {
      en: 'Salade Niçoise Authentique de la Côte d’Azur',
      ar: 'سلطة نيسواز الفرنسية الأصيلة بالتونة والزيتون',
    },
    nativePhonetic: 'Salade Niçoise',
    region: { en: 'Nice & French Riviera', ar: 'نيس والريفييرا الفرنسية' },
    course: { en: 'Riviera Composed Salad', ar: 'سلطة الريفييرا المتكاملة' },
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    servings: 4,
    caloriesPerServing: 410,
    difficulty: { en: 'Accessible', ar: 'سهل التحضير' },
    summary: {
      en: 'Sun-ripened tomatoes, crisp haricots verts, Niçoise Cailletier olives, oil-packed Ventresca tuna, soft-boiled eggs, and anchovy-basil vinaigrette.',
      ar: 'تشكيلة متوسطية منعشة من التونة الفاخرة والفاصوليا الخضراء المقرمشة وزيتون نيس الأسود والبيض والطماطم بصلصة الريحان وزيت الزيتون.',
    },
    culturalNote: {
      en: 'Celebrated along the Promenade des Anglais in Nice as a vibrant, sun-drenched meal on a platter.',
      ar: 'سفيرة مدينة نيس الساحلية حول العالم، وجبة صيفية متكاملة غنية بالألوان والنكهات المتوسطية الأصيلة.',
    },
    chefSecret: {
      en: 'Rub the wooden or porcelain serving platter with a bruised clove of garlic before arranging the ingredients.',
      ar: 'فرك صحن التقديم بفص ثوم مقطوع قبل ترتيب المكونات يمنح السلطة عبير الريفييرا الفرنسية الأصيل.',
    },
    vessel: 'skillet',
    palette: { primary: '#16A34A', secondary: '#DC2626', garnish: '#EAB308', rim: '#14532D' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'Olive-oil packed Ventresca tuna & anchovy fillets', ar: 'تونة فاخرة بزيت الزيتون وشرائح أنشوجة' }, amount: 300, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Crisp haricots verts, baby potatoes & tomatoes', ar: 'فاصوليا خضراء رفيعة، بطاطس صغيرة وطماطم' }, amount: 600, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Soft-boiled farm eggs & black Niçoise olives', ar: 'بيض مسلوق وزيتون نيس الأسود' }, amount: 4, unit: { en: 'eggs', ar: 'حبات' } },
      { name: { en: 'Dijon mustard, red wine vinegar, basil & olive oil', ar: 'خردل ديجون، خل، ريحان طازج وزيت زيتون بكر' }, amount: 80, unit: { en: 'ml', ar: 'مل' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Blanch Haricots Verts & Jammy Eggs', ar: 'سلق الفاصوليا الخضراء والبيض' },
        instruction: {
          en: 'Blanch haricots verts for 4 minutes in salted boiling water and plunge into ice water for emerald crunch. Boil eggs for 7 minutes.',
          ar: 'تُسلق الفاصوليا الخضراء ٤ دقائق وتُبرد بالماء المثلج لتحافظ على لونها الأخضر وقرمشتها، ويُسلق البيض ٧ دقائق.',
        },
        durationMinutes: 10,
      },
      {
        stepNumber: 2,
        title: { en: 'Compose Platter & Drizzle Basil Vinaigrette', ar: 'ترتيب الطبق وإضافة صلصة الفينيغريت' },
        instruction: {
          en: 'Arrange tomatoes, beans, potatoes, flaking tuna, quartered eggs, and black olives on a garlic-rubbed platter. Drizzle with Dijon-basil vinaigrette.',
          ar: 'تُرتب المكونات بتناسق في صحن التقديم، وتُسقى بصلصة خردل ديجون وزيت الزيتون وأوراق الريحان الطازجة.',
        },
        durationMinutes: 10,
      },
    ],
  },
  {
    id: 'fr-18',
    number: 18,
    cuisine: 'french',
    isFree: false,
    title: {
      en: 'Soufflé au Grand Fromage Gruyère',
      ar: 'سوفليه الجبن الفرنسي المرتفع بالبيشاميل',
    },
    nativePhonetic: 'Soufflé au Fromage',
    region: { en: 'Lyon & Savoie', ar: 'ليون وإقليم سافوا' },
    course: { en: 'Cloud-Light Bake', ar: 'سوفليه فرنسي كلاسيكي' },
    prepTimeMinutes: 25,
    cookTimeMinutes: 28,
    servings: 4,
    caloriesPerServing: 390,
    difficulty: { en: 'Masterclass', ar: 'احترافي متقن' },
    summary: {
      en: 'A towering crown of nutmeg-scented Gruyère béchamel and stiff-peaked egg whites baked in buttered porcelain ramekins until golden and airy.',
      ar: 'سوفليه مرتفع وخفيف كالسحاب، يُحضر من صلصة البيشاميل الغنية بجبن الغرويير وصفار البيض مع بياض البيض المخفوق.',
    },
    culturalNote: {
      en: 'As French chefs famously say: “Guests wait for the soufflé; the soufflé never waits for the guests.”',
      ar: 'رمز البراعة في المطبخ الفرنسي، يخرج من الفرن مرتفعاً كالتاج الذهبي ليُقدم فوراً على المائدة.',
    },
    chefSecret: {
      en: 'Brush the softened butter inside the ramekins using vertical upward strokes, then coat with finely grated Parmesan so the soufflé climbs straight up.',
      ar: 'دهن قوالب البورسلين بالزبدة بحركات عمودية من الأسفل للأعلى وتغليفها بالجبن يساعد السوفليه على الارتفاع باستقامة.',
    },
    vessel: 'souffle',
    palette: { primary: '#D97706', secondary: '#FEF08A', garnish: '#B45309', rim: '#78350F' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'Aged Gruyère & Comté cheese, finely grated', ar: 'جبن غرويير وكومتي مبشور ناعماً' }, amount: 180, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Whole milk, butter & flour for Béchamel', ar: 'حليب كامل الدسم، زبدة ودقيق للبيشاميل' }, amount: 350, unit: { en: 'ml', ar: 'مل' } },
      { name: { en: 'Farm eggs, separated (5 whites, 4 yolks)', ar: 'بيض مفصول (٥ بياض و ٤ صفار)' }, amount: 5, unit: { en: 'eggs', ar: 'حبات' } },
      { name: { en: 'Pinch of nutmeg & Cayenne pepper', ar: 'رشة جوزة الطيب ورشة كايين خفيفة' }, amount: 1, unit: { en: 'tsp', ar: 'ملعقة صغيرة' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Prepare Cheese Béchamel Base', ar: 'تحضير قاعدة البيشاميل بالجبن' },
        instruction: {
          en: 'Whisk warm milk into a butter-flour roux, cook until thick, remove from heat, and whisk in egg yolks, nutmeg, and grated Gruyère.',
          ar: 'يُحضر البيشاميل بالزبدة والدقيق والحليب الدافئ، ويُرفع عن النار ليُخلط مع صفار البيض وجوزة الطيب والجبن المبشور.',
        },
        durationMinutes: 12,
      },
      {
        stepNumber: 2,
        title: { en: 'Fold Whipped Whites & Bake High', ar: 'طي بياض البيض والخبز الفوري' },
        instruction: {
          en: 'Whip egg whites to glossy peaks, fold gently into the cheese base, fill buttered ramekins, run thumb around the rim, and bake at 190°C for 26 minutes.',
          ar: 'يُخفق بياض البيض كالثلج ويُدمج برفق مع الخليط، يُصب في القوالب ويُخبز على حرارة ١٩٠ درجة لمدة ٢٦ دقيقة.',
        },
        durationMinutes: 28,
      },
    ],
  },
  {
    id: 'fr-19',
    number: 19,
    cuisine: 'french',
    isFree: false,
    title: {
      en: 'Tarte Tatin aux Pommes Caramélisées',
      ar: 'تارت تاتان الفرنسي بالتفاح المكرمل المقلوب',
    },
    nativePhonetic: 'Tarte Tatin',
    region: { en: 'Lamotte-Beuvron (Loire Valley)', ar: 'وادي اللوار' },
    course: { en: 'Grand Patisserie', ar: 'تحلية فرنسية شهيرة' },
    prepTimeMinutes: 25,
    cookTimeMinutes: 45,
    servings: 6,
    caloriesPerServing: 420,
    difficulty: { en: 'Traditional', ar: 'تقليدي أصيل' },
    summary: {
      en: 'Reine des Reinettes apples slow-cooked in copper-pan amber butter caramel, capped with crisp puff pastry and inverted warm with Crème Fraîche.',
      ar: 'أنصاف التفاح الذهبي المكرملة في الزبدة والسكر العنبر داخل مقلاة النحاس، المغطاة بالعجين المورق والمقلوبة عند التقديم.',
    },
    culturalNote: {
      en: 'Created in the 1880s by the Tatin sisters, Stéphanie and Caroline, at their hotel in the Sologne region.',
      ar: 'ابتكرتها الشقيقتان ستيفاني وكارولين تاتان في القرن التاسع عشر لتصبح أشهر تارت تفاح مقلوب في العالم.',
    },
    chefSecret: {
      en: 'Pack the apple halves standing tightly on their sides because they shrink slightly as their pectin caramelizes in the butter.',
      ar: 'رصّ أنصاف التفاح متلاصقة بإحكام لأنها تنكمش قليلاً أثناء تشربها للكراميل والزبدة في الفرن.',
    },
    vessel: 'tarte',
    palette: { primary: '#B45309', secondary: '#F59E0B', garnish: '#FEF3C7', rim: '#78350F' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'Firm baking apples (Golden Delicious or Braeburn)', ar: 'تفاح متماسك مقشر ومقطع أنصافاً' }, amount: 1200, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Salted Normandy butter & caster sugar', ar: 'زبدة مملحة وسكر أبيض للكراميل' }, amount: 220, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Chilled all-butter puff pastry round', ar: 'دائرة عجين باف باستري باردة' }, amount: 280, unit: { en: 'g', ar: 'غرام' } },
      { name: { en: 'Madagascar vanilla pod & Crème Fraîche', ar: 'عود فانيليا وكريم فريش للتقديم' }, amount: 120, unit: { en: 'g', ar: 'غرام' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Cook Amber Butter Caramel & Apples', ar: 'كرملة التفاح في الزبدة والسكر' },
        instruction: {
          en: 'Melt butter and sugar with vanilla seeds in a heavy ovenproof skillet until amber. Pack apple halves tightly and simmer 15 minutes on stovetop.',
          ar: 'تُذوب الزبدة والسكر والفانيليا في مقلاة ثقيلة حتى تتكرمل، ثم يُرص التفاح ويُطهى على النار ١٥ دقيقة.',
        },
        durationMinutes: 20,
      },
      {
        stepNumber: 2,
        title: { en: 'Tuck Pastry, Bake & Invert', ar: 'تغطية التفاح بالعجين والخبز ثم القلب' },
        instruction: {
          en: 'Drape chilled puff pastry over the apples, tuck edges inside the pan rim, bake at 195°C for 30 minutes, rest 5 minutes, and invert onto a platter.',
          ar: 'يُغطى التفاح بالعجين المورق مع ثني الأطراف للداخل، ويُخبز ٣٠ دقيقة ثم يُترك ٥ دقائق ويُقلب في صحن التقديم.',
        },
        durationMinutes: 30,
      },
    ],
  },
  {
    id: 'fr-20',
    number: 20,
    cuisine: 'french',
    isFree: false,
    title: {
      en: 'Crème Brûlée à la Vanille de Madagascar',
      ar: 'كريم بروليه الفرنسي بفانيليا مدغشقر',
    },
    nativePhonetic: 'Crème Brûlée',
    region: { en: 'Paris & Versailles', ar: 'باريس وفرساي' },
    course: { en: 'Classic Dessert', ar: 'تحلية ملكية فرنسية' },
    prepTimeMinutes: 15,
    cookTimeMinutes: 40,
    servings: 4,
    caloriesPerServing: 440,
    difficulty: { en: 'Accessible', ar: 'سهل التحضير' },
    summary: {
      en: 'Chilled satin custard infused with real Madagascar vanilla bean speckles beneath a shatteringly crisp sheet of torched raw cane sugar.',
      ar: 'كريمة غنية مخبوزة بحبيبات فانيليا مدغشقر الطبيعية، تُبرد وتُغطى بطبقة زجاجية مقرمشة من السكر المكرمل.',
    },
    culturalNote: {
      en: 'First documented in 1691 by François Massialot, chef at the Palace of Versailles, prized for the contrast of cold cream and warm caramel glass.',
      ar: 'وُثقت لأول مرة عام ١٦٩١ في قصر فرساي، وتُعد أشهر تحلية فرنسية تجمع بين برودة الكريمة وقرمشة الكراميل الساخن.',
    },
    chefSecret: {
      en: 'Avoid whipping foam into the egg yolks and cream—stir gently and strain through a fine sieve so the baked custard sets without a single bubble.',
      ar: 'حرك صفار البيض مع الكريمة الدافئة بهدوء دون إحداث رغوة وصفِّ الخليط بمصفاة ناعمة للحصول على قوام حريري خالٍ من الفقاعات.',
    },
    vessel: 'souffle',
    palette: { primary: '#B45309', secondary: '#FEF9C3', garnish: '#78350F', rim: '#92400E' },
    photoUrl: FRENCH_IMAGE_GASTRONOMY,
    ingredients: [
      { name: { en: 'Heavy whipping cream', ar: 'كريمة سائلة ثقيلة (٣٥٪ دسم)' }, amount: 500, unit: { en: 'ml', ar: 'مل' } },
      { name: { en: 'Large farm egg yolks', ar: 'صفار ٥ بيضات طازجة' }, amount: 5, unit: { en: 'yolks', ar: 'صفار' } },
      { name: { en: 'Madagascar vanilla bean pod', ar: 'عود فانيليا مدغشقر طبيعي' }, amount: 1, unit: { en: 'pod', ar: 'عود' } },
      { name: { en: 'Caster sugar & Demerara sugar for torching', ar: 'سكر ناعم وسكر أسمر للكرملة' }, amount: 100, unit: { en: 'g', ar: 'غرام' } },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Infuse Vanilla Cream & Bake in Bain-Marie', ar: 'نقع الفانيليا والخبز في حمام مائي' },
        instruction: {
          en: 'Steep split vanilla bean in warm cream for 15 minutes. Whisk gently into yolks and sugar, strain into shallow ramekins, and bake in a water bath at 150°C for 38 minutes.',
          ar: 'تُنقع الفانيليا في الكريمة الدافئة ١٥ دقيقة، تُخلط بهدوء مع الصفار والسكر، تُصفى في القوالب وتُخبز في حمام مائي على ١٥٠ درجة لمدة ٣٨ دقيقة.',
        },
        durationMinutes: 40,
      },
      {
        stepNumber: 2,
        title: { en: 'Chill & Torch Glass Caramel Crust', ar: 'التبريد وحرق طبقة السكر المقرمشة' },
        instruction: {
          en: 'Chill custards for 4 hours. Sprinkle an even layer of raw cane sugar over each and caramelize with a kitchen torch until amber glass forms.',
          ar: 'تُبرد القوالب ٤ ساعات، ثم يُرش السكر بالتساوي على السطح ويُحرق بشعلة المطبخ حتى تتكون طبقة كراميل زجاجية مقرمشة.',
        },
        durationMinutes: 5,
      },
    ],
  },
];
