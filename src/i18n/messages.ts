export type Locale = 'ar' | 'en'

export type Messages = {
  meta: {
    title: string
    description: string
  }
  brand: {
    primary: string
    secondary: string
  }
  nav: Array<{ label: string; href: string }>
  header: {
    download: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    brand: string
    headline: string
    subtitle: string
    playStore: string
    appStore: string
  }
  about: {
    tag: string
    title: string
    paragraphs: string[]
    points: Array<{ title: string; text: string }>
    imageAlt1: string
    imageAlt2: string
  }
  features: {
    tag: string
    title: string
    subtitle: string
    items: Array<{ title: string; text: string }>
    cta: string
  }
  audiences: {
    title: string
    items: Array<{ title: string; text: string }>
  }
  faq: {
    title: string
    groups: Array<{
      heading: string
      items: Array<{ q: string; a: string }>
    }>
  }
  appCta: {
    title: string
    subtitle: string
    playStore: string
    appStore: string
  }
  footer: {
    blurb: string
    linksTitle: string
    downloadLink: string
    contactTitle: string
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    industry: string
    industryPlaceholder: string
    industryOptions: string[]
    message: string
    messagePlaceholder: string
    submit: string
    sent: string
    rights: string
    developer: string
    developerUrl: string
  }
  storeBadge: {
    google: string
    apple: string
  }
  phone: {
    products: string[]
    orderNow: string
    orderLabel: string
    delivering: string
    steps: string[]
  }
  notFound: {
    title: string
    heading: string
    body: string
    back: string
  }
}

const ar: Messages = {
  meta: {
    title: 'مصانع معوض | Mouawad Factories',
    description:
      'منصة مصانع معوض — تسوّق الخبز والمنتجات الطازجة أونلاين عبر التطبيق للزبائن والتجّار.',
  },
  brand: {
    primary: 'مصانع معوض',
    secondary: 'Mouawad Factories',
  },
  nav: [
    { label: 'من نحن', href: '#about' },
    { label: 'المميزات', href: '#features' },
    { label: 'لمن؟', href: '#audiences' },
    { label: 'الأسئلة', href: '#faq' },
  ],
  header: {
    download: 'حمّل التطبيق',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
  },
  hero: {
    brand: 'مصانع معوض',
    headline: 'خبز طازج… وطلبك من التطبيق',
    subtitle:
      'تعرّف على علامتنا، وحَمّل التطبيق لتتصفح المنتجات وتطلب بسهولة — للمنزل وللتجار بالجملة.',
    playStore: 'Google Play',
    appStore: 'App Store',
  },
  about: {
    tag: 'من نحن',
    title: 'مصنع واحد… وثقتان',
    paragraphs: [
      'مصانع معوض منصة متكاملة للمخبز: نقدّم للزبائن تجربة تسوق يومية دافئة، وللتجار طلبات جملة واضحة ومنظمة.',
      'هذا الموقع يعرّفك بالعلامة. أما الطلب والمتابعة فيحدثان عبر تطبيقنا — بسيط، موثوق، وجاهز للاستخدام اليومي.',
    ],
    points: [
      {
        title: 'للزبائن',
        text: 'كتالوج واضح، طلب سهل، وتوصيل مع متابعة الطلب.',
      },
      {
        title: 'للتجار',
        text: 'أسعار جملة، كميات أكبر، وفواتير وحساب منظّم.',
      },
      {
        title: 'علامة موثوقة',
        text: 'طعم تقليدي بتجربة رقمية حديثة تناسب نمو المخبز.',
      },
    ],
    imageAlt1: 'منتجات طازجة من المخبز',
    imageAlt2: 'خبز طازج',
  },
  features: {
    tag: 'التطبيق',
    title: 'كل ما تحتاجه في مكان واحد',
    subtitle:
      'من التصفح حتى الاستلام — تجربة تسوق مخبوزات مصممة للسرعة والوضوح.',
    items: [
      {
        title: 'تصفح المنتجات',
        text: 'خبز، معجنات، وأكثر — بصور وأسعار واضحة.',
      },
      {
        title: 'اطلب بسهولة',
        text: 'أضف للسلة، حدّد التوصيل، وأكمل الطلب بخطوات بسيطة.',
      },
      {
        title: 'تتبّع طلبك',
        text: 'اعرف حالة طلبك من التأكيد حتى باب المنزل.',
      },
      {
        title: 'جملة للتجار',
        text: 'حساب تاجر، أسعار خاصة، وطلبات بكميات تناسب محلك.',
      },
    ],
    cta: 'حمّل التطبيق الآن',
  },
  audiences: {
    title: 'لمن صُمم التطبيق؟',
    items: [
      {
        title: 'للمنزل',
        text: 'اطلب خبزك اليومي ومنتجاتك المفضلة دون عناء.',
      },
      {
        title: 'للتجار',
        text: 'إدارة طلبات الجملة والمدفوعات من حسابك.',
      },
      {
        title: 'للطعم الطازج',
        text: 'نفس جودة المخبز… بتجربة رقمية مرتبة.',
      },
    ],
  },
  faq: {
    title: 'أسئلة شائعة',
    groups: [
      {
        heading: 'للزبائن',
        items: [
          {
            q: 'كيف أطلب من مصانع معوض؟',
            a: 'حمّل التطبيق، تصفّح المنتجات، أضف ما تريد للسلة، ثم أكمل الطلب واختر تفاصيل التوصيل.',
          },
          {
            q: 'هل الموقع يكفي للطلب؟',
            a: 'الموقع يعرّفك بالعلامة التجارية. التسوق والطلب والمتابعة تتم عبر تطبيق الهاتف.',
          },
          {
            q: 'هل يمكنني متابعة طلبي؟',
            a: 'نعم — داخل التطبيق ترى حالة الطلب خطوة بخطوة حتى الاستلام.',
          },
        ],
      },
      {
        heading: 'للتجار',
        items: [
          {
            q: 'كيف أصبح تاجراً؟',
            a: 'حساب التاجر يُفتح عبر المخبز. بعد التفعيل تظهر لك أسعار الجملة وقواعد الطلب.',
          },
          {
            q: 'ماذا أتابع كتاجر؟',
            a: 'الطلبات بالجملة، الفواتير، المدفوعات، وحالة الحساب — كلها من التطبيق.',
          },
          {
            q: 'هل توجد مرتجعات؟',
            a: 'نعم، عند الحاجة يمكن إدارة المرتجعات وفق سياسة المخبز من داخل حساب التاجر.',
          },
        ],
      },
    ],
  },
  appCta: {
    title: 'ابدأ الآن',
    subtitle: 'حمّل تطبيق مصانع معوض وتسوّق أونلاين — للمنزل أو لمحلك.',
    playStore: 'Google Play',
    appStore: 'App Store',
  },
  footer: {
    blurb:
      'مصانع معوض — علامة مخبوزات حديثة، وتطبيق يسهّل التسوق للزبائن والتجار.',
    linksTitle: 'روابط سريعة',
    downloadLink: 'حمّل التطبيق',
    contactTitle: 'تواصل معنا',
    name: 'الاسم',
    namePlaceholder: 'أحمد محمد',
    email: 'البريد الإلكتروني',
    emailPlaceholder: 'name@company.com',
    industry: 'النوع',
    industryPlaceholder: 'اختر...',
    industryOptions: ['زبون', 'تاجر جملة', 'شراكة', 'أخرى'],
    message: 'الرسالة',
    messagePlaceholder: 'اكتب رسالتك هنا',
    submit: 'أرسل رسالتك',
    sent: 'تم الإرسال ✓',
    rights: 'تطوير بواسطة',
    developer: 'SawaTech',
    developerUrl: 'https://www.sawatech.com/',
  },
  storeBadge: {
    google: 'احصل عليه من',
    apple: 'حمّله من',
  },
  phone: {
    products: ['خبز عربي', 'صمون', 'معجنات', 'حلويات'],
    orderNow: 'طلب الآن',
    orderLabel: 'طلب #2841',
    delivering: 'قيد التوصيل',
    steps: ['تم التأكيد', 'جاري التحضير', 'في الطريق'],
  },
  notFound: {
    title: 'الصفحة غير موجودة | مصانع معوض',
    heading: 'الصفحة غير موجودة',
    body: 'يبدو أن الرابط غير صحيح أو الصفحة نُقلت.',
    back: 'العودة للرئيسية',
  },
}

const en: Messages = {
  meta: {
    title: 'Mouawad Factories | مصانع معوض',
    description:
      'Mouawad Factories — shop fresh bakery products online through the app, for everyday customers and wholesale traders.',
  },
  brand: {
    primary: 'Mouawad Factories',
    secondary: 'مصانع معوض',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Who it’s for', href: '#audiences' },
    { label: 'FAQ', href: '#faq' },
  ],
  header: {
    download: 'Download App',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    brand: 'Mouawad Factories',
    headline: 'Fresh bakery… ordered from the app',
    subtitle:
      'Meet the brand, then download the app to browse products and order with ease — for home and wholesale traders.',
    playStore: 'Google Play',
    appStore: 'App Store',
  },
  about: {
    tag: 'About us',
    title: 'One factory… two kinds of trust',
    paragraphs: [
      'Mouawad Factories is a full bakery platform: a warm daily shopping experience for customers, and clear wholesale ordering for traders.',
      'This website introduces the brand. Ordering and tracking happen in our app — simple, reliable, and ready for everyday use.',
    ],
    points: [
      {
        title: 'For customers',
        text: 'A clear catalog, easy ordering, delivery, and order tracking.',
      },
      {
        title: 'For traders',
        text: 'Wholesale pricing, bulk orders, invoices, and an organized account.',
      },
      {
        title: 'A trusted brand',
        text: 'Traditional taste with a modern digital experience built to grow.',
      },
    ],
    imageAlt1: 'Fresh bakery products',
    imageAlt2: 'Fresh bread',
  },
  features: {
    tag: 'The app',
    title: 'Everything you need in one place',
    subtitle:
      'From browsing to delivery — a bakery shopping experience designed for speed and clarity.',
    items: [
      {
        title: 'Browse products',
        text: 'Bread, pastries, and more — with clear photos and prices.',
      },
      {
        title: 'Order easily',
        text: 'Add to cart, set delivery details, and checkout in simple steps.',
      },
      {
        title: 'Track your order',
        text: 'Follow your order from confirmation all the way to your door.',
      },
      {
        title: 'Wholesale for traders',
        text: 'A trader account, special pricing, and bulk orders for your shop.',
      },
    ],
    cta: 'Download the app now',
  },
  audiences: {
    title: 'Who is the app for?',
    items: [
      {
        title: 'For home',
        text: 'Order your daily bread and favorites without the hassle.',
      },
      {
        title: 'For traders',
        text: 'Manage wholesale orders and payments from your account.',
      },
      {
        title: 'For fresh taste',
        text: 'The same bakery quality… in a clean digital experience.',
      },
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    groups: [
      {
        heading: 'For customers',
        items: [
          {
            q: 'How do I order from Mouawad Factories?',
            a: 'Download the app, browse products, add items to your cart, then complete the order and choose delivery details.',
          },
          {
            q: 'Can I order from the website?',
            a: 'The website introduces the brand. Shopping, ordering, and tracking happen through the mobile app.',
          },
          {
            q: 'Can I track my order?',
            a: 'Yes — inside the app you can follow your order step by step until delivery.',
          },
        ],
      },
      {
        heading: 'For traders',
        items: [
          {
            q: 'How do I become a trader?',
            a: 'Trader accounts are opened by the bakery. Once activated, you see wholesale prices and ordering rules.',
          },
          {
            q: 'What can traders manage?',
            a: 'Bulk orders, invoices, payments, and account status — all from the app.',
          },
          {
            q: 'Are returns supported?',
            a: 'Yes. When needed, returns can be handled according to bakery policy from the trader account.',
          },
        ],
      },
    ],
  },
  appCta: {
    title: 'Get started now',
    subtitle:
      'Download the Mouawad Factories app and shop online — for home or for your store.',
    playStore: 'Google Play',
    appStore: 'App Store',
  },
  footer: {
    blurb:
      'Mouawad Factories — a modern bakery brand, and an app that makes shopping easy for customers and traders.',
    linksTitle: 'Quick links',
    downloadLink: 'Download App',
    contactTitle: 'Contact us',
    name: 'Name',
    namePlaceholder: 'Jane Smith',
    email: 'Email',
    emailPlaceholder: 'jane@company.com',
    industry: 'Industry',
    industryPlaceholder: 'Select...',
    industryOptions: ['Customer', 'Wholesale trader', 'Partnership', 'Other'],
    message: 'Message',
    messagePlaceholder: 'Type your message',
    submit: 'Get a Solution',
    sent: 'Sent ✓',
    rights: 'Developer By',
    developer: 'SawaTech',
    developerUrl: 'https://www.sawatech.com/',
  },
  storeBadge: {
    google: 'Get it on',
    apple: 'Download on the',
  },
  phone: {
    products: ['Arabic bread', 'Buns', 'Pastries', 'Sweets'],
    orderNow: 'Order now',
    orderLabel: 'Order #2841',
    delivering: 'Out for delivery',
    steps: ['Confirmed', 'Preparing', 'On the way'],
  },
  notFound: {
    title: 'Page not found | Mouawad Factories',
    heading: 'Page not found',
    body: 'The link looks incorrect, or this page has moved.',
    back: 'Back home',
  },
}

export const messages: Record<Locale, Messages> = { ar, en }

export const defaultLocale: Locale = 'en'
