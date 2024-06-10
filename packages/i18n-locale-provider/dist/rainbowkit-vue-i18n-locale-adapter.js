import { createI18n as W } from "vue-i18n";
const A = {
  label: "اتصال المحفظة",
  wrong_network: {
    label: "شبكة خاطئة"
  }
}, q = {
  title: "ما هو المحفظة؟",
  description: "تُستخدم المحفظة لإرسال واستلام وتخزين وعرض الأصول الرقمية. إنها أيضاً طريقة جديدة لتسجيل الدخول، دون الحاجة إلى إنشاء حسابات وكلمات مرور جديدة على كل موقع.",
  digital_asset: {
    title: "دار لأصولك الرقمية",
    description: "تُستخدم المحافظ لإرسال واستلام وتخزين وعرض الأصول الرقمية مثل إيثيريوم والـ NFTs."
  },
  login: {
    title: "طريقة جديدة لتسجيل الدخول",
    description: "بدلاً من إنشاء حسابات وكلمات مرور جديدة على كل موقع، فقط قم بتوصيل محفظتك."
  },
  get: {
    label: "احصل على محفظة"
  },
  learn_more: {
    label: "تعلم المزيد"
  }
}, R = {
  label: "تحقق من حسابك",
  description: "لإنهاء الاتصال، يجب عليك توقيع رسالة في محفظتك للتحقق من أنك صاحب هذا الحساب.",
  message: {
    send: "إرسال الرسالة",
    preparing: "جارٍ تجهيز الرسالة...",
    cancel: "إلغاء",
    preparing_error: "خطأ في تجهيز الرسالة، يرجى المحاولة مرة أخرى!"
  },
  signature: {
    waiting: "انتظار التوقيع...",
    verifying: "جار التحقق من التوقيع...",
    signing_error: "خطأ في توقيع الرسالة، يرجى المحاولة مرة أخرى!",
    verifying_error: "خطأ في التحقق من التوقيع، يرجى المحاولة مرة أخرى!",
    oops_error: "عذرًا، حدث خطأ ما!"
  }
}, B = {
  label: "اتصل",
  title: "اتصال بالمحفظة",
  new_to_ethereum: {
    description: "جديد في محافظ Ethereum؟",
    learn_more: {
      label: "تعلم المزيد"
    }
  },
  learn_more: {
    label: "أعرف أكثر"
  },
  recent: "الأخير",
  status: {
    opening: "جار فتح {wallet}...",
    connecting: "جارٍ الاتصال",
    connect_mobile: "استمر في {wallet}",
    not_installed: "{wallet} غير مثبت",
    not_available: "{wallet} غير متاح",
    confirm: "تأكيد الاتصال في الامتداد",
    confirm_mobile: "قبل طلب الاتصال في المحفظة"
  },
  secondary_action: {
    get: {
      description: "لا يوجد لديك {wallet}؟",
      label: "احصل"
    },
    install: {
      label: "تثبيت"
    },
    retry: {
      label: "أعد المحاولة"
    }
  },
  walletconnect: {
    description: {
      full: "هل تحتاج إلى النافذة الرسمية لـ WalletConnect؟",
      compact: "هل تحتاج إلى النافذة لـ WalletConnect؟"
    },
    open: {
      label: "افتح"
    }
  }
}, T = {
  title: "المسح باستخدام {wallet}",
  fallback_title: "المسح باستخدام هاتفك"
}, I = {
  installed: "مُثبّت",
  recommended: "موصى به",
  other: "آخر",
  popular: "شائع",
  more: "المزيد",
  others: "الآخرين"
}, O = {
  title: "احصل على محفظة",
  action: {
    label: "احصل"
  },
  mobile: {
    description: "محفظة الموبايل"
  },
  extension: {
    description: "ملحق المتصفح"
  },
  mobile_and_extension: {
    description: "محفظة موبايل وملحق"
  },
  mobile_and_desktop: {
    description: "محفظة الموبايل والكمبيوتر"
  },
  looking_for: {
    title: "ليست هذه هي ما تبحث عنه؟",
    mobile: {
      description: "حدد محفظة على الشاشة الرئيسية للبدء باستخدام موفر محفظة مختلف."
    },
    desktop: {
      compact_description: "حدد محفظة على الشاشة الرئيسية للبدء باستخدام موفر محفظة مختلف.",
      wide_description: "حدد محفظة على اليسار للبدء باستخدام موفر محفظة مختلف."
    }
  }
}, S = {
  title: "ابدأ مع {wallet}",
  short_title: "احصل على {wallet}",
  mobile: {
    title: "{wallet} للجوال",
    description: "استخدم محفظة الموبايل لاستكشاف عالم Ethereum.",
    download: {
      label: "احصل على التطبيق"
    }
  },
  extension: {
    title: "{wallet} لـ {browser}",
    description: "وصول لمحفظتك مباشرة من متصفح الويب المفضل لديك.",
    download: {
      label: "أضف إلى {browser}"
    }
  },
  desktop: {
    title: "{wallet} لـ {platform}",
    description: "قم بالوصول إلى محفظتك بشكل أصلي من كمبيوترك القوي.",
    download: {
      label: "أضف إلى {platform}"
    }
  }
}, P = {
  title: "قم بالتثبيت {wallet}",
  description: "استخدم هاتفك للتحميل على iOS أو Android",
  continue: {
    label: "استمر"
  }
}, N = {
  mobile: {
    connect: {
      label: "اتصل"
    },
    learn_more: {
      label: "تعلم المزيد"
    }
  },
  extension: {
    refresh: {
      label: "تحديث"
    },
    learn_more: {
      label: "تعلم المزيد"
    }
  },
  desktop: {
    connect: {
      label: "اتصل"
    },
    learn_more: {
      label: "تعلم المزيد"
    }
  }
}, L = {
  title: "تبديل الشبكات",
  wrong_network: "تم اكتشاف شبكة غير صحيحة، قم بالتبديل أو القطع للمتابعة.",
  confirm: "التأكيد في المحفظة",
  switching_not_supported: "محفظتك لا تدعم التبديل بين الشبكات من {appName}. جرب التبديل بين الشبكات من داخل المحفظة بدلاً من ذلك.",
  switching_not_supported_fallback: "محفظتك لا تدعم تبديل الشبكات من هذا التطبيق. حاول تبديل الشبكات من داخل المحفظة بدلاً من ذلك.",
  disconnect: "قطع الاتصال",
  connected: "متصل"
}, D = {
  disconnect: {
    label: "قطع الاتصال"
  },
  copy_address: {
    label: "نسخ العنوان",
    copied: "تم النسخ!"
  },
  explorer: {
    label: "عرض المزيد على المستكشف"
  },
  transactions: {
    description: "{appName} ستظهر المعاملات هنا...",
    description_fallback: "سوف تظهر معاملاتك هنا...",
    recent: {
      title: "المعاملات الأخيرة"
    },
    clear: {
      label: "مسح الكل"
    }
  }
}, K = {
  argent: {
    qr_code: {
      step1: {
        description: "ضع أرجنت على شاشتك الرئيسية للوصول السريع إلى محفظتك.",
        title: "افتح تطبيق Argent"
      },
      step2: {
        description: "أنشئ محفظة واسم مستخدم، أو استورد محفظة موجودة بالفعل.",
        title: "إنشاء أو استيراد محفظة"
      },
      step3: {
        description: "بعد الفحص، سيظهر لك موجه الاتصال لتوصيل المحفظة الخاصة بك.",
        title: "اضغط على زر فحص الكود الشريطي"
      }
    }
  },
  bifrost: {
    qr_code: {
      step1: {
        description: "نوصي بوضع محفظة Bifrost على الشاشة الرئيسية للوصول الأسرع.",
        title: "افتح تطبيق محفظة Bifrost"
      },
      step2: {
        description: "أنشئ أو استورد محفظة باستخدام عبارة الاستعادة الخاصة بك.",
        title: "إنشاء أو استيراد محفظة"
      },
      step3: {
        description: "بعد الفحص، سيظهر موجه الاتصال لك لتوصيل محفظتك.",
        title: "اضغط على زر المسح"
      }
    }
  },
  bitget: {
    qr_code: {
      step1: {
        description: "نوصي بوضع محفظة Bitget على الشاشة الرئيسية للوصول الأسرع.",
        title: "افتح تطبيق محفظة Bitget"
      },
      step2: {
        description: "تأكد من عمل نسخة احتياطية لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أحد.",
        title: "إنشاء أو استيراد محفظة"
      },
      step3: {
        description: "بعد الفحص، ستظهر لك موجه اتصال لتوصيل محفظتك.",
        title: "اضغط على زر الفحص"
      }
    },
    extension: {
      step1: {
        description: "نوصي بتثبيت محفظة Bitget على شريط المهام للوصول الأسرع إلى محفظتك.",
        title: "قم بتثبيت امتداد محفظة Bitget"
      },
      step2: {
        description: "تأكد من نسخ محفظتك احتياطيًا باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص.",
        title: "أنشئ محفظة أو استورد محفظة"
      },
      step3: {
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الامتداد.",
        title: "قم بتحديث متصفحك"
      }
    }
  },
  bitski: {
    extension: {
      step1: {
        description: "نوصي بتثبيت Bitski على شريط المهام الخاص بك للوصول الأسرع إلى محفظتك.",
        title: "قم بتثبيت امتداد Bitski"
      },
      step2: {
        description: "تأكد من الاحتفاظ بنسخة احتياطية من محفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص.",
        title: "إنشاء أو استيراد محفظة"
      },
      step3: {
        description: "بعد إعداد المحفظة الخاصة بك، انقر أدناه لتحديث المتصفح وتحميل الإضافة.",
        title: "تحديث المتصفح الخاص بك"
      }
    }
  },
  bloom: {
    desktop: {
      step1: {
        title: "افتح تطبيق محفظة Bloom",
        description: "نوصي بوضع محفظة Bloom على الشاشة الرئيسية للوصول الأسرع."
      },
      step2: {
        description: "أنشئ أو استورد محفظة باستخدام عبارة الاستعادة الخاصة بك.",
        title: "إنشاء أو استيراد محفظة"
      },
      step3: {
        description: "بعد حصولك على محفظة، انقر على Connect للاتصال عبر Bloom. ستظهر رسالة مطالبة بالاتصال في التطبيق لتأكيد الاتصال.",
        title: "انقر على Connect"
      }
    },
    qr_code: {
      step1: {
        title: "افتح تطبيق محفظة Bloom",
        description: "نوصي بوضع محفظة Bloom على الشاشة الرئيسية للوصول الأسرع."
      },
      step2: {
        description: "أنشئ أو استورد محفظة باستخدام عبارة الاستعادة الخاصة بك.",
        title: "إنشاء أو استيراد محفظة"
      },
      step3: {
        description: "بعد حصولك على محفظة، انقر على Connect للاتصال عبر Bloom. ستظهر رسالة مطالبة بالاتصال في التطبيق لتأكيد الاتصال.",
        title: "انقر على Connect"
      }
    }
  },
  coin98: {
    qr_code: {
      step1: {
        description: "نوصي بوضع محفظة Coin98 على الشاشة الرئيسية لسرعة الوصول إلى محفظتك.",
        title: "افتح تطبيق محفظة Coin98"
      },
      step2: {
        description: "يمكنك بسهولة نسخ محفظتك الاحتياطي باستخدام ميزة النسخ الاحتياطي على هاتفك.",
        title: "إنشاء أو استيراد محفظة"
      },
      step3: {
        description: "بعد الفحص، ستظهر لك مطالبة بالاتصال لتوصيل محفظتك.",
        title: "اضغط على زر WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "انقر في الجزء العلوي الأيمن من المتصفح وثبت Coin98 Wallet لسهولة الوصول.",
        title: "قم بتثبيت امتداد Coin98 Wallet"
      },
      step2: {
        description: "أنشئ محفظة جديدة أو استورد واحدة موجودة بالفعل.",
        title: "أنشئ محفظة أو استورد محفظة"
      },
      step3: {
        description: "بمجرد إعداد Coin98 Wallet ، انقر أدناه لتحديث المتصفح وتحميل الامتداد.",
        title: "تحديث المتصفح الخاص بك"
      }
    }
  },
  coinbase: {
    qr_code: {
      step1: {
        description: "نوصي بوضع Coinbase Wallet على الشاشة الرئيسية لسهولة الوصول.",
        title: "افتح تطبيق Coinbase Wallet"
      },
      step2: {
        description: "يمكنك بسهولة النسخ الاحتياطي لمحفظتك باستخدام ميزة النسخ الاحتياطي السحابي.",
        title: "إنشاء أو استيراد محفظة"
      },
      step3: {
        description: "بعد الفحص، ستظهر لك مطالبة بالاتصال لتوصيل محفظتك.",
        title: "اضغط على زر الفحص"
      }
    },
    extension: {
      step1: {
        description: "نوصي بتثبيت محفظة Coinbase على شريط المهام الخاص بك للوصول الأسرع إلى محفظتك.",
        title: "تثبيت امتداد محفظة Coinbase"
      },
      step2: {
        description: "تأكد من النسخ الاحتياطي لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص.",
        title: "إنشاء أو استيراد المحفظة"
      },
      step3: {
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الإضافة.",
        title: "تحديث المتصفح الخاص بك"
      }
    }
  },
  core: {
    qr_code: {
      step1: {
        description: "نوصي بوضع Core على الشاشة الرئيسية للوصول السريع إلى محفظتك.",
        title: "افتح تطبيق Core"
      },
      step2: {
        description: "يمكنك بسهولة النسخ الاحتياطي لمحفظتك باستخدام ميزة النسخ الاحتياطي على هاتفك.",
        title: "إنشاء أو استيراد المحفظة"
      },
      step3: {
        description: "بعد الفحص، سيظهر لك موجه الاتصال لتوصيل محفظتك.",
        title: "اضغط على زر WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "نوصي بتثبيت Core على شريط المهام الخاص بك للوصول الأسرع إلى محفظتك.",
        title: "قم بتثبيت امتداد Core"
      },
      step2: {
        description: "تأكد من عمل نسخة احتياطية لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص.",
        title: "إنشاء أو استيراد محفظة"
      },
      step3: {
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الامتداد.",
        title: "تحديث متصفحك"
      }
    }
  },
  fox: {
    qr_code: {
      step1: {
        description: "نوصي بوضع FoxWallet على شاشتك الرئيسية للوصول الأسرع.",
        title: "افتح تطبيق FoxWallet"
      },
      step2: {
        description: "تأكد من الاحتفاظ بنسخة احتياطية من محفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص.",
        title: "إنشاء محفظة أو استيراد محفظة"
      },
      step3: {
        description: "بعد الفحص، ستظهر لك موجه الاتصال لتتمكن من اتصال محفظتك.",
        title: "اضغط على زر الفحص"
      }
    }
  },
  frontier: {
    qr_code: {
      step1: {
        description: "نوصي بوضع Frontier Wallet على شاشتك الرئيسية للوصول الأسرع.",
        title: "افتح تطبيق Frontier Wallet"
      },
      step2: {
        description: "تأكد من نسخ محفظتك احتياطيا باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص.",
        title: "إنشاء أو استيراد محفظة"
      },
      step3: {
        description: "بعد الفحص، ستظهر لك موجه الاتصال لربط محفظتك.",
        title: "اضغط على زر الفحص"
      }
    },
    extension: {
      step1: {
        description: "نوصي بتثبيت محفظة Frontier على شريط المهام للوصول الأسرع إلى محفظتك.",
        title: "تثبيت امتداد محفظة Frontier"
      },
      step2: {
        description: "تأكد من نسخ محفظتك احتياطيا باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص.",
        title: "إنشاء أو استيراد محفظة"
      },
      step3: {
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الإضافة.",
        title: "قم بتحديث المتصفح الخاص بك"
      }
    }
  },
  im_token: {
    qr_code: {
      step1: {
        title: "افتح تطبيق imToken",
        description: "ضع تطبيق imToken على الشاشة الرئيسية للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "قم بإنشاء محفظة جديدة أو استيراد واحدة موجودة."
      },
      step3: {
        title: "اضغط على أيقونة الماسح الضوئي في الزاوية العليا اليمنى",
        description: "اختر الاتصال الجديد، ثم امسح الرمز الشريطي وأكد الموجه للاتصال."
      }
    }
  },
  kresus: {
    qr_code: {
      step1: {
        title: "افتح تطبيق محفظة Kresus",
        description: "أضف محفظة Kresus إلى الشاشة الرئيسية للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "أنشئ محفظة جديدة أو استورد واحدة موجودة بالفعل."
      },
      step3: {
        title: "اضغط على أيقونة الرمز الاستجابة السريعة وامسحها",
        description: "اضغط على أيقونة QR على الشاشة الرئيسية، قراءة الرمز وتأكيد الرسالة الموجهة للاتصال."
      }
    }
  },
  metamask: {
    qr_code: {
      step1: {
        title: "افتح تطبيق MetaMask",
        description: "نوصي بوضع MetaMask على الشاشة الرئيسية لديك للوصول بشكل أسرع."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "تأكد من نسخ الحفاظ على محفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص."
      },
      step3: {
        title: "اضغط على زر المسح",
        description: "بعد الفحص، ستظهر لك موجه اتصال لتوصيل محفظتك."
      }
    },
    extension: {
      step1: {
        title: "قم بتثبيت امتداد MetaMask",
        description: "نوصي بتثبيت MetaMask في شريط المهام للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "تأكد من نسخ احتياطي لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص."
      },
      step3: {
        title: "تحديث متصفحك",
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الامتداد."
      }
    }
  },
  okx: {
    qr_code: {
      step1: {
        title: "افتح تطبيق محفظة OKX",
        description: "نوصي بوضع محفظة OKX على الشاشة الرئيسية للوصول الأسرع."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "تأكد من نسخ احتياطي لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص."
      },
      step3: {
        title: "اضغط على زر المسح",
        description: "بعد الفحص، ستظهر لك مطالبة بالاتصال لتوصيل محفظتك."
      }
    },
    extension: {
      step1: {
        title: "قم بتثبيت امتداد محفظة OKX",
        description: "نوصي بتثبيت محفظة OKX على شريط المهام للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "تأكد من حفظ نسخة احتياطية من محفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص."
      },
      step3: {
        title: "قم بتحديث المتصفح الخاص بك",
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الإضافة."
      }
    }
  },
  omni: {
    qr_code: {
      step1: {
        title: "افتح تطبيق Omni",
        description: "أضف Omni إلى شاشتك الرئيسية للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "إنشاء محفظة جديدة أو استيراد واحدة موجودة."
      },
      step3: {
        title: "اضغط على أيقونة الرمز الاستجابة السريعة وامسحها",
        description: "اضغط على الرمز QR على الشاشة الرئيسية الخاصة بك، امسح الرمز وأكد الموافقة للاتصال."
      }
    }
  },
  token_pocket: {
    qr_code: {
      step1: {
        title: "افتح تطبيق TokenPocket",
        description: "نوصي بوضع TokenPocket على الشاشة الرئيسية للوصول السريع."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "تأكد من نسخ احتياطي لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص."
      },
      step3: {
        title: "اضغط على زر المسح",
        description: "بعد الفحص، ستظهر لك رسالة موجهة للاتصال بمحفظتك."
      }
    },
    extension: {
      step1: {
        title: "قم بتثبيت امتداد TokenPocket",
        description: "نوصي بتثبيت TokenPocket على شريط المهام الخاص بك للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "قم بإنشاء محفظة أو استيراد محفظة",
        description: "تأكد من الاحتفاظ بنسخة احتياطية من محفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص."
      },
      step3: {
        title: "قم بتحديث المتصفح الخاص بك",
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الإضافة."
      }
    }
  },
  trust: {
    qr_code: {
      step1: {
        title: "افتح تطبيق Trust Wallet",
        description: "ضع Trust Wallet على الشاشة الرئيسية للوصول السريع إلى محفظتك."
      },
      step2: {
        title: "أنشئ محفظة أو استورد محفظة",
        description: "أنشئ محفظة جديدة أو استورد واحدة موجودة."
      },
      step3: {
        title: "اضغط على WalletConnect في الإعدادات",
        description: "اختر الاتصال الجديد، ثم امسح الرمز الشريطي QR وأكد الموجه للاتصال."
      }
    },
    extension: {
      step1: {
        title: "قم بتثبيت امتداد Trust Wallet",
        description: "انقر في الجزء العلوي الأيمن من المتصفح وثبت Trust Wallet للوصول بسهولة."
      },
      step2: {
        title: "أنشئ محفظة أو استورد محفظة",
        description: "أنشئ محفظة جديدة أو استورد واحدة موجودة."
      },
      step3: {
        title: "قم بتحديث متصفحك",
        description: "بمجرد إعداد Trust Wallet، انقر أدناه لتحديث المتصفح وتحميل الإضافة."
      }
    }
  },
  uniswap: {
    qr_code: {
      step1: {
        title: "افتح تطبيق Uniswap",
        description: "أضف محفظة Uniswap إلى شاشة الرئيسية للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "قم بإنشاء محفظة جديدة أو استيراد واحدة موجودة."
      },
      step3: {
        title: "اضغط على الأيقونة QR واقرأ الرمز",
        description: "اضغط على أيقونة QR على الشاشة الرئيسية، قراءة الرمز وتأكيد الرسالة الموجهة للاتصال."
      }
    }
  },
  zerion: {
    qr_code: {
      step1: {
        title: "افتح تطبيق Zerion",
        description: "نوصي بوضع Zerion على شاشتك الرئيسية للوصول الأسرع."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "تأكد من حفظ نسخة احتياطية من محفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص."
      },
      step3: {
        title: "اضغط على زر المسح",
        description: "بعد المسح، سوف يظهر لك نافذة الاتصال لتوصيل محفظتك."
      }
    },
    extension: {
      step1: {
        title: "تثبيت امتداد Zerion",
        description: "نوصي بتثبيت Zerion على شريط المهام الخاص بك للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "تأكد من الاحتفاظ بنسخة احتياطية من محفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص."
      },
      step3: {
        title: "قم بتحديث المتصفح الخاص بك",
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الإضافة."
      }
    }
  },
  rainbow: {
    qr_code: {
      step1: {
        title: "افتح تطبيق Rainbow",
        description: "نوصي بوضع Rainbow على شاشة البداية للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "إنشاء محفظة أو استيراد محفظة",
        description: "يمكنك عمل نسخة احتياطية بسهولة لمحفظتك باستخدام ميزة النسخ الاحتياطي على هاتفك."
      },
      step3: {
        title: "اضغط على الزر الماسح الضوئي",
        description: "بعد الفحص، سيظهر لك موجه اتصال لربط محفظتك."
      }
    }
  },
  enkrypt: {
    extension: {
      step1: {
        description: "نوصي بتثبيت محفظة Enkrypt على شريط المهام الخاص بك للوصول الأسرع إلى محفظتك.",
        title: "تثبيت امتداد محفظة Enkrypt"
      },
      step2: {
        description: "تأكد من عمل نسخة احتياطية لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص.",
        title: "أنشئ أو استورد محفظة"
      },
      step3: {
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الإضافة.",
        title: "حدث المتصفح الخاص بك"
      }
    }
  },
  frame: {
    extension: {
      step1: {
        description: "نوصي بتعليق Frame على شريط المهام للوصول السريع إلى محفظتك.",
        title: "ثبت Frame والإضافة المصاحبة"
      },
      step2: {
        description: "تأكد من النسخ الاحتياطي لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص.",
        title: "أنشئ أو استورد محفظة"
      },
      step3: {
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الإضافة.",
        title: "حدث المتصفح الخاص بك"
      }
    }
  },
  one_key: {
    extension: {
      step1: {
        title: "قم بتثبيت امتداد محفظة OneKey",
        description: "نوصي بتثبيت محفظة OneKey على شريط المهام للوصول السريع إلى محفظتك."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "تأكد من نسخ احتياطي لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص."
      },
      step3: {
        title: "تحديث المتصفح الخاص بك",
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الامتداد."
      }
    }
  },
  phantom: {
    extension: {
      step1: {
        title: "قم بتثبيت امتداد Phantom",
        description: "نوصي بتثبيت Phantom على شريط المهام للوصول الأسهل إلى محفظتك."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "تأكد من نسخ محفظتك احتياطيًا باستخدام طريقة آمنة. لا تشارك عبارة الاستعادة السرية الخاصة بك مع أي شخص."
      },
      step3: {
        title: "قم بتحديث المتصفح",
        description: "بمجرد إعداد المحفظة، انقر أدناه لتحديث المتصفح وتحميل الإضافة."
      }
    }
  },
  rabby: {
    extension: {
      step1: {
        title: "ثبت امتداد Rabby",
        description: "نوصي بتثبيت Rabby على شريط المهام للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "أنشئ محفظة أو استورد محفظة",
        description: "تأكد من نسخ محفظتك احتياطيًا باستخدام طريقة آمنة. لا تشارك العبارة السرية مع أي شخص."
      },
      step3: {
        title: "قم بتحديث المتصفح",
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الإضافة."
      }
    }
  },
  ronin: {
    qr_code: {
      step1: {
        description: "نوصي بوضع محفظة Ronin على الشاشة الرئيسية للوصول الأسرع.",
        title: "افتح تطبيق محفظة Ronin"
      },
      step2: {
        description: "تأكد من عمل نسخة احتياطية لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أحد.",
        title: "إنشاء أو استيراد محفظة"
      },
      step3: {
        description: "بعد الفحص، سيظهر لك موجه الاتصال لتوصيل المحفظة الخاصة بك.",
        title: "اضغط على زر المسح"
      }
    },
    extension: {
      step1: {
        description: "نوصي بتثبيت محفظة Ronin على شريط المهام للوصول الأسرع إلى محفظتك.",
        title: "ثبّت امتداد محفظة Ronin"
      },
      step2: {
        description: "تأكد من عمل نسخة احتياطية لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أحد.",
        title: "إنشاء أو استيراد محفظة"
      },
      step3: {
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الامتداد.",
        title: "قم بتحديث متصفحك"
      }
    }
  },
  ramper: {
    extension: {
      step1: {
        title: "ثبّت امتداد Ramper",
        description: "نوصي بتثبيت Ramper على شريط المهام لسهولة الوصول إلى محفظتك."
      },
      step2: {
        title: "إنشاء محفظة",
        description: "تأكد من عمل نسخة احتياطية لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أحد."
      },
      step3: {
        title: "قم بتحديث متصفحك",
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الامتداد."
      }
    }
  },
  safeheron: {
    extension: {
      step1: {
        title: "قم بتثبيت إضافة النواة",
        description: "نوصي بتثبيت Safeheron على شريط المهام الخاص بك للوصول السريع إلى محفظتك."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "تأكد من نسخ محفظتك بطريقة آمنة. لا تشارك عبارتك السرية مع أي شخص."
      },
      step3: {
        title: "تحديث المتصفح الخاص بك",
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الإضافة."
      }
    }
  },
  taho: {
    extension: {
      step1: {
        title: "تثبيت إضافة Taho",
        description: "نوصي بتثبيت Taho على شريط المهام الخاص بك للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "إنشاء محفظة أو استيراد محفظة",
        description: "تأكد من النسخ الاحتياطي لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أي شخص."
      },
      step3: {
        title: "تحديث المتصفح الخاص بك",
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الإضافة."
      }
    }
  },
  talisman: {
    extension: {
      step1: {
        title: "تثبيت إضافة Talisman",
        description: "نوصي بتثبيت Talisman على شريط المهام الخاص بك للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "إنشاء محفظة Ethereum أو استيرادها",
        description: "تأكد من النسخ الاحتياطي لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارة الاستعادة الخاصة بك مع أي شخص."
      },
      step3: {
        title: "قم بتحديث المستعرض الخاص بك",
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المستعرض وتحميل الإضافة."
      }
    }
  },
  xdefi: {
    extension: {
      step1: {
        title: "قم بتثبيت إضافة XDEFI Wallet",
        description: "نوصي بتثبيت XDEFI Wallet على شريط المهام للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "أنشئ محفظة أو استورد محفظة",
        description: "تأكد من النسخ الاحتياطي لمحفظتك باستخدام طريقة آمنة. لا تشارك العبارة السرية الخاصة بك مع أي شخص."
      },
      step3: {
        title: "قم بتحديث المستعرض الخاص بك",
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الإضافة."
      }
    }
  },
  zeal: {
    extension: {
      step1: {
        title: "قم بتثبيت امتداد Zeal",
        description: "نوصي بتثبيت Zeal في شريط المهام الخاص بك للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "تأكد من عمل نسخة احتياطية لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أحد."
      },
      step3: {
        title: "قم بتحديث متصفحك",
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الامتداد."
      }
    }
  },
  safepal: {
    extension: {
      step1: {
        title: "قم بتثبيت صيغة SafePal Wallet",
        description: "انقر في أعلى يمين المتصفح وثبت صيغة SafePal Wallet لسهولة الوصول."
      },
      step2: {
        title: "أنشئ محفظة أو استورد محفظة",
        description: "أنشئ محفظة جديدة أو استورد واحدة موجودة بالفعل."
      },
      step3: {
        title: "قم بتحديث متصفحك",
        description: "بمجرد إعداد محفظة SafePal، انقر أدناه لتحديث المتصفح وتحميل الإضافة."
      }
    },
    qr_code: {
      step1: {
        title: "افتح تطبيق محفظة SafePal",
        description: "ضع محفظة SafePal على شاشة الرئيسية لسهولة الوصول إلى محفظتك."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "أنشئ محفظة جديدة أو استورد واحدة موجودة بالفعل."
      },
      step3: {
        title: "اضغط على WalletConnect في الإعدادات",
        description: "اختر الاتصال الجديد، ثم امسح الرمز الشريطي وأكد الموجه للاتصال."
      }
    }
  },
  desig: {
    extension: {
      step1: {
        title: "قم بتثبيت إضافة Desig",
        description: "نوصي بتثبيت Desig على شريط المهام الخاص بك للوصول الأسهل إلى محفظتك."
      },
      step2: {
        title: "إنشاء محفظة",
        description: "تأكد من عمل نسخة احتياطية لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أحد."
      },
      step3: {
        title: "قم بتحديث متصفحك",
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الامتداد."
      }
    }
  },
  subwallet: {
    extension: {
      step1: {
        title: "قم بتثبيت إضافة SubWallet",
        description: "نوصي بتثبيت SubWallet على شريط المهام الخاص بك للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "تأكد من النسخ الاحتياطي لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارة الاستعادة الخاصة بك مع أي شخص."
      },
      step3: {
        title: "قم بتحديث متصفحك",
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الامتداد."
      }
    },
    qr_code: {
      step1: {
        title: "افتح تطبيق SubWallet",
        description: "نوصي بوضع SubWallet على شاشة الرئيسية الخاصة بك للوصول الأسرع."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "تأكد من عمل نسخة احتياطية لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أحد."
      },
      step3: {
        title: "اضغط على زر المسح",
        description: "بعد الفحص، سيظهر لك موجه الاتصال لتوصيل المحفظة الخاصة بك."
      }
    }
  },
  clv: {
    extension: {
      step1: {
        title: "قم بتثبيت إضافة CLV Wallet",
        description: "نوصي بتثبيت CLV Wallet على شريط المهام الخاص بك للوصول الأسرع إلى محفظتك."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "تأكد من عمل نسخة احتياطية لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أحد."
      },
      step3: {
        title: "قم بتحديث متصفحك",
        description: "بمجرد إعداد محفظتك، انقر أدناه لتحديث المتصفح وتحميل الامتداد."
      }
    },
    qr_code: {
      step1: {
        title: "افتح تطبيق محفظة CLV",
        description: "نوصي بوضع محفظة CLV على الشاشة الرئيسية للوصول الأسرع."
      },
      step2: {
        title: "إنشاء أو استيراد محفظة",
        description: "تأكد من عمل نسخة احتياطية لمحفظتك باستخدام طريقة آمنة. لا تشارك عبارتك السرية مع أحد."
      },
      step3: {
        title: "اضغط على زر المسح",
        description: "بعد الفحص، سيظهر لك موجه الاتصال لتوصيل المحفظة الخاصة بك."
      }
    }
  },
  okto: {
    qr_code: {
      step1: {
        title: "افتح تطبيق Okto",
        description: "أضف Okto إلى الشاشة الرئيسية للوصول السريع"
      },
      step2: {
        title: "أنشئ محفظة MPC",
        description: "أنشئ حسابًا وقم بإنشاء محفظة"
      },
      step3: {
        title: "اضغط على WalletConnect في الإعدادات",
        description: "اضغط على أيقونة فحص الشاشة في الجهة العليا اليمنى وأكد الإدخال للاتصال."
      }
    }
  },
  ledger: {
    desktop: {
      step1: {
        title: "افتح تطبيق Ledger Live",
        description: "نوصي بوضع Ledger Live على شاشة الرئيسية لديك لسرعة الوصول."
      },
      step2: {
        title: "قم بإعداد Ledger الخاص بك",
        description: "قم بإعداد Ledger جديد أو قم بالاتصال بواحد موجود ."
      },
      step3: {
        title: "اتصل",
        description: "بعد المسح، سوف يظهر لك نافذة الاتصال لتوصيل محفظتك."
      }
    },
    qr_code: {
      step1: {
        title: "افتح تطبيق Ledger Live",
        description: "نوصي بوضع Ledger Live على شاشة الرئيسية لديك لسرعة الوصول."
      },
      step2: {
        title: "قم بإعداد Ledger الخاص بك",
        description: "يمكنك إما المزامنة مع تطبيق سطح المكتب أو توصيل Ledger الخاص بك."
      },
      step3: {
        title: "مسح الرمز",
        description: "اضغط على WalletConnect ثم انتقل إلى الفحص. بعد المسح، سوف يظهر لك نافذة الاتصال لتوصيل محفظتك."
      }
    }
  }
}, p = {
  connect_wallet: A,
  intro: q,
  sign_in: R,
  connect: B,
  connect_scan: T,
  connector_group: I,
  get: O,
  get_options: S,
  get_mobile: P,
  get_instructions: N,
  chains: L,
  profile: D,
  wallet_connectors: K
}, E = {
  label: "Connect Wallet",
  wrong_network: {
    label: "Wrong network"
  }
}, M = {
  title: "What is a Wallet?",
  description: "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
  digital_asset: {
    title: "A Home for your Digital Assets",
    description: "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
  },
  login: {
    title: "A New Way to Log In",
    description: "Instead of creating new accounts and passwords on every website, just connect your wallet."
  },
  get: {
    label: "Get a Wallet"
  },
  learn_more: {
    label: "Learn More"
  }
}, $ = {
  label: "Verify your account",
  description: "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
  message: {
    send: "Sign message",
    preparing: "Preparing message...",
    cancel: "Cancel",
    preparing_error: "Error preparing message, please retry!"
  },
  signature: {
    waiting: "Waiting for signature...",
    verifying: "Verifying signature...",
    signing_error: "Error signing message, please retry!",
    verifying_error: "Error verifying signature, please retry!",
    oops_error: "Oops, something went wrong!"
  }
}, F = {
  label: "Connect",
  title: "Connect a Wallet",
  new_to_ethereum: {
    description: "New to Ethereum wallets?",
    learn_more: {
      label: "Learn More"
    }
  },
  learn_more: {
    label: "Learn more"
  },
  recent: "Recent",
  status: {
    opening: "Opening {wallet}...",
    connecting: "Connecting",
    connect_mobile: "Continue in {wallet}",
    not_installed: "{wallet} is not installed",
    not_available: "{wallet} is not available",
    confirm: "Confirm connection in the extension",
    confirm_mobile: "Accept connection request in the wallet"
  },
  secondary_action: {
    get: {
      description: "Don't have {wallet}?",
      label: "GET"
    },
    install: {
      label: "INSTALL"
    },
    retry: {
      label: "RETRY"
    }
  },
  walletconnect: {
    description: {
      full: "Need the official WalletConnect modal?",
      compact: "Need the WalletConnect modal?"
    },
    open: {
      label: "OPEN"
    }
  }
}, Q = {
  title: "Scan with {wallet}",
  fallback_title: "Scan with your phone"
}, j = {
  installed: "Installed",
  recommended: "Recommended",
  other: "Other",
  popular: "Popular",
  more: "More",
  others: "Others"
}, U = {
  title: "Get a Wallet",
  action: {
    label: "GET"
  },
  mobile: {
    description: "Mobile Wallet"
  },
  extension: {
    description: "Browser Extension"
  },
  mobile_and_extension: {
    description: "Mobile Wallet and Extension"
  },
  mobile_and_desktop: {
    description: "Mobile and Desktop Wallet"
  },
  looking_for: {
    title: "Not what you're looking for?",
    mobile: {
      description: "Select a wallet on the main screen to get started with a different wallet provider."
    },
    desktop: {
      compact_description: "Select a wallet on the main screen to get started with a different wallet provider.",
      wide_description: "Select a wallet on the left to get started with a different wallet provider."
    }
  }
}, V = {
  title: "Get started with {wallet}",
  short_title: "Get {wallet}",
  mobile: {
    title: "{wallet} for Mobile",
    description: "Use the mobile wallet to explore the world of Ethereum.",
    download: {
      label: "Get the app"
    }
  },
  extension: {
    title: "{wallet} for {browser}",
    description: "Access your wallet right from your favorite web browser.",
    download: {
      label: "Add to {browser}"
    }
  },
  desktop: {
    title: "{wallet} for {platform}",
    description: "Access your wallet natively from your powerful desktop.",
    download: {
      label: "Add to {platform}"
    }
  }
}, X = {
  title: "Install {wallet}",
  description: "Scan with your phone to download on iOS or Android",
  continue: {
    label: "Continue"
  }
}, Z = {
  mobile: {
    connect: {
      label: "Connect"
    },
    learn_more: {
      label: "Learn More"
    }
  },
  extension: {
    refresh: {
      label: "Refresh"
    },
    learn_more: {
      label: "Learn More"
    }
  },
  desktop: {
    connect: {
      label: "Connect"
    },
    learn_more: {
      label: "Learn More"
    }
  }
}, G = {
  title: "Switch Networks",
  wrong_network: "Wrong network detected, switch or disconnect to continue.",
  confirm: "Confirm in Wallet",
  switching_not_supported: "Your wallet does not support switching networks from {appName}. Try switching networks from within your wallet instead.",
  switching_not_supported_fallback: "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
  disconnect: "Disconnect",
  connected: "Connected"
}, J = {
  disconnect: {
    label: "Disconnect"
  },
  copy_address: {
    label: "Copy Address",
    copied: "Copied!"
  },
  explorer: {
    label: "View more on explorer"
  },
  transactions: {
    description: "{appName} transactions will appear here...",
    description_fallback: "Your transactions will appear here...",
    recent: {
      title: "Recent Transactions"
    },
    clear: {
      label: "Clear All"
    }
  }
}, Y = {
  argent: {
    qr_code: {
      step1: {
        description: "Put Argent on your home screen for faster access to your wallet.",
        title: "Open the Argent app"
      },
      step2: {
        description: "Create a wallet and username, or import an existing wallet.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "After you scan, a connection prompt will appear for you to connect your wallet.",
        title: "Tap the Scan QR button"
      }
    }
  },
  bifrost: {
    qr_code: {
      step1: {
        description: "We recommend putting Bifrost Wallet on your home screen for quicker access.",
        title: "Open the Bifrost Wallet app"
      },
      step2: {
        description: "Create or import a wallet using your recovery phrase.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "After you scan, a connection prompt will appear for you to connect your wallet.",
        title: "Tap the scan button"
      }
    }
  },
  bitget: {
    qr_code: {
      step1: {
        description: "We recommend putting Bitget Wallet on your home screen for quicker access.",
        title: "Open the Bitget Wallet app"
      },
      step2: {
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "After you scan, a connection prompt will appear for you to connect your wallet.",
        title: "Tap the scan button"
      }
    },
    extension: {
      step1: {
        description: "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
        title: "Install the Bitget Wallet extension"
      },
      step2: {
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension.",
        title: "Refresh your browser"
      }
    }
  },
  bitski: {
    extension: {
      step1: {
        description: "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
        title: "Install the Bitski extension"
      },
      step2: {
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension.",
        title: "Refresh your browser"
      }
    }
  },
  bloom: {
    desktop: {
      step1: {
        title: "Open the Bloom Wallet app",
        description: "We recommend putting Bloom Wallet on your home screen for quicker access."
      },
      step2: {
        description: "Create or import a wallet using your recovery phrase.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
        title: "Click on Connect"
      }
    },
    qr_code: {
      step1: {
        title: "Open the Bloom Wallet app",
        description: "We recommend putting Bloom Wallet on your home screen for quicker access."
      },
      step2: {
        description: "Create or import a wallet using your recovery phrase.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
        title: "Click on Connect"
      }
    }
  },
  coin98: {
    qr_code: {
      step1: {
        description: "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
        title: "Open the Coin98 Wallet app"
      },
      step2: {
        description: "You can easily backup your wallet using our backup feature on your phone.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "After you scan, a connection prompt will appear for you to connect your wallet.",
        title: "Tap the WalletConnect button"
      }
    },
    extension: {
      step1: {
        description: "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
        title: "Install the Coin98 Wallet extension"
      },
      step2: {
        description: "Create a new wallet or import an existing one.",
        title: "Create or Import a wallet"
      },
      step3: {
        description: "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
        title: "Refresh your browser"
      }
    }
  },
  coinbase: {
    qr_code: {
      step1: {
        description: "We recommend putting Coinbase Wallet on your home screen for quicker access.",
        title: "Open the Coinbase Wallet app"
      },
      step2: {
        description: "You can easily backup your wallet using the cloud backup feature.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "After you scan, a connection prompt will appear for you to connect your wallet.",
        title: "Tap the scan button"
      }
    },
    extension: {
      step1: {
        description: "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
        title: "Install the Coinbase Wallet extension"
      },
      step2: {
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension.",
        title: "Refresh your browser"
      }
    }
  },
  core: {
    qr_code: {
      step1: {
        description: "We recommend putting Core on your home screen for faster access to your wallet.",
        title: "Open the Core app"
      },
      step2: {
        description: "You can easily backup your wallet using our backup feature on your phone.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "After you scan, a connection prompt will appear for you to connect your wallet.",
        title: "Tap the WalletConnect button"
      }
    },
    extension: {
      step1: {
        description: "We recommend pinning Core to your taskbar for quicker access to your wallet.",
        title: "Install the Core extension"
      },
      step2: {
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension.",
        title: "Refresh your browser"
      }
    }
  },
  fox: {
    qr_code: {
      step1: {
        description: "We recommend putting FoxWallet on your home screen for quicker access.",
        title: "Open the FoxWallet app"
      },
      step2: {
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "After you scan, a connection prompt will appear for you to connect your wallet.",
        title: "Tap the scan button"
      }
    }
  },
  frontier: {
    qr_code: {
      step1: {
        description: "We recommend putting Frontier Wallet on your home screen for quicker access.",
        title: "Open the Frontier Wallet app"
      },
      step2: {
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "After you scan, a connection prompt will appear for you to connect your wallet.",
        title: "Tap the scan button"
      }
    },
    extension: {
      step1: {
        description: "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
        title: "Install the Frontier Wallet extension"
      },
      step2: {
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension.",
        title: "Refresh your browser"
      }
    }
  },
  im_token: {
    qr_code: {
      step1: {
        title: "Open the imToken app",
        description: "Put imToken app on your home screen for faster access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Create a new wallet or import an existing one."
      },
      step3: {
        title: "Tap Scanner Icon in top right corner",
        description: "Choose New Connection, then scan the QR code and confirm the prompt to connect."
      }
    }
  },
  kresus: {
    qr_code: {
      step1: {
        title: "Open the Kresus Wallet app",
        description: "Add Kresus Wallet to your home screen for faster access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Create a new wallet or import an existing one."
      },
      step3: {
        title: "Tap the QR icon and scan",
        description: "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
      }
    }
  },
  metamask: {
    qr_code: {
      step1: {
        title: "Open the MetaMask app",
        description: "We recommend putting MetaMask on your home screen for quicker access."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Tap the scan button",
        description: "After you scan, a connection prompt will appear for you to connect your wallet."
      }
    },
    extension: {
      step1: {
        title: "Install the MetaMask extension",
        description: "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    }
  },
  okx: {
    qr_code: {
      step1: {
        title: "Open the OKX Wallet app",
        description: "We recommend putting OKX Wallet on your home screen for quicker access."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Tap the scan button",
        description: "After you scan, a connection prompt will appear for you to connect your wallet."
      }
    },
    extension: {
      step1: {
        title: "Install the OKX Wallet extension",
        description: "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    }
  },
  omni: {
    qr_code: {
      step1: {
        title: "Open the Omni app",
        description: "Add Omni to your home screen for faster access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Create a new wallet or import an existing one."
      },
      step3: {
        title: "Tap the QR icon and scan",
        description: "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
      }
    }
  },
  token_pocket: {
    qr_code: {
      step1: {
        title: "Open the TokenPocket app",
        description: "We recommend putting TokenPocket on your home screen for quicker access."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Tap the scan button",
        description: "After you scan, a connection prompt will appear for you to connect your wallet."
      }
    },
    extension: {
      step1: {
        title: "Install the TokenPocket extension",
        description: "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    }
  },
  trust: {
    qr_code: {
      step1: {
        title: "Open the Trust Wallet app",
        description: "Put Trust Wallet on your home screen for faster access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Create a new wallet or import an existing one."
      },
      step3: {
        title: "Tap WalletConnect in Settings",
        description: "Choose New Connection, then scan the QR code and confirm the prompt to connect."
      }
    },
    extension: {
      step1: {
        title: "Install the Trust Wallet extension",
        description: "Click at the top right of your browser and pin Trust Wallet for easy access."
      },
      step2: {
        title: "Create or Import a wallet",
        description: "Create a new wallet or import an existing one."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
      }
    }
  },
  uniswap: {
    qr_code: {
      step1: {
        title: "Open the Uniswap app",
        description: "Add Uniswap Wallet to your home screen for faster access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Create a new wallet or import an existing one."
      },
      step3: {
        title: "Tap the QR icon and scan",
        description: "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
      }
    }
  },
  zerion: {
    qr_code: {
      step1: {
        title: "Open the Zerion app",
        description: "We recommend putting Zerion on your home screen for quicker access."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Tap the scan button",
        description: "After you scan, a connection prompt will appear for you to connect your wallet."
      }
    },
    extension: {
      step1: {
        title: "Install the Zerion extension",
        description: "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    }
  },
  rainbow: {
    qr_code: {
      step1: {
        title: "Open the Rainbow app",
        description: "We recommend putting Rainbow on your home screen for faster access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "You can easily backup your wallet using our backup feature on your phone."
      },
      step3: {
        title: "Tap the scan button",
        description: "After you scan, a connection prompt will appear for you to connect your wallet."
      }
    }
  },
  enkrypt: {
    extension: {
      step1: {
        description: "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
        title: "Install the Enkrypt Wallet extension"
      },
      step2: {
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension.",
        title: "Refresh your browser"
      }
    }
  },
  frame: {
    extension: {
      step1: {
        description: "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
        title: "Install Frame & the companion extension"
      },
      step2: {
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension.",
        title: "Refresh your browser"
      }
    }
  },
  one_key: {
    extension: {
      step1: {
        title: "Install the OneKey Wallet extension",
        description: "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    }
  },
  phantom: {
    extension: {
      step1: {
        title: "Install the Phantom extension",
        description: "We recommend pinning Phantom to your taskbar for easier access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    }
  },
  rabby: {
    extension: {
      step1: {
        title: "Install the Rabby extension",
        description: "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    }
  },
  ronin: {
    qr_code: {
      step1: {
        description: "We recommend putting Ronin Wallet on your home screen for quicker access.",
        title: "Open the Ronin Wallet app"
      },
      step2: {
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "After you scan, a connection prompt will appear for you to connect your wallet.",
        title: "Tap the scan button"
      }
    },
    extension: {
      step1: {
        description: "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
        title: "Install the Ronin Wallet extension"
      },
      step2: {
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
        title: "Create or Import a Wallet"
      },
      step3: {
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension.",
        title: "Refresh your browser"
      }
    }
  },
  ramper: {
    extension: {
      step1: {
        title: "Install the Ramper extension",
        description: "We recommend pinning Ramper to your taskbar for easier access to your wallet."
      },
      step2: {
        title: "Create a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    }
  },
  safeheron: {
    extension: {
      step1: {
        title: "Install the Core extension",
        description: "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    }
  },
  taho: {
    extension: {
      step1: {
        title: "Install the Taho extension",
        description: "We recommend pinning Taho to your taskbar for quicker access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    }
  },
  talisman: {
    extension: {
      step1: {
        title: "Install the Talisman extension",
        description: "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
      },
      step2: {
        title: "Create or Import an Ethereum Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    }
  },
  xdefi: {
    extension: {
      step1: {
        title: "Install the XDEFI Wallet extension",
        description: "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    }
  },
  zeal: {
    extension: {
      step1: {
        title: "Install the Zeal extension",
        description: "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    }
  },
  safepal: {
    extension: {
      step1: {
        title: "Install the SafePal Wallet extension",
        description: "Click at the top right of your browser and pin SafePal Wallet for easy access."
      },
      step2: {
        title: "Create or Import a wallet",
        description: "Create a new wallet or import an existing one."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
      }
    },
    qr_code: {
      step1: {
        title: "Open the SafePal Wallet app",
        description: "Put SafePal Wallet on your home screen for faster access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Create a new wallet or import an existing one."
      },
      step3: {
        title: "Tap WalletConnect in Settings",
        description: "Choose New Connection, then scan the QR code and confirm the prompt to connect."
      }
    }
  },
  desig: {
    extension: {
      step1: {
        title: "Install the Desig extension",
        description: "We recommend pinning Desig to your taskbar for easier access to your wallet."
      },
      step2: {
        title: "Create a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    }
  },
  subwallet: {
    extension: {
      step1: {
        title: "Install the SubWallet extension",
        description: "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    },
    qr_code: {
      step1: {
        title: "Open the SubWallet app",
        description: "We recommend putting SubWallet on your home screen for quicker access."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Tap the scan button",
        description: "After you scan, a connection prompt will appear for you to connect your wallet."
      }
    }
  },
  clv: {
    extension: {
      step1: {
        title: "Install the CLV Wallet extension",
        description: "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Refresh your browser",
        description: "Once you set up your wallet, click below to refresh the browser and load up the extension."
      }
    },
    qr_code: {
      step1: {
        title: "Open the CLV Wallet app",
        description: "We recommend putting CLV Wallet on your home screen for quicker access."
      },
      step2: {
        title: "Create or Import a Wallet",
        description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
      },
      step3: {
        title: "Tap the scan button",
        description: "After you scan, a connection prompt will appear for you to connect your wallet."
      }
    }
  },
  okto: {
    qr_code: {
      step1: {
        title: "Open the Okto app",
        description: "Add Okto to your home screen for quick access"
      },
      step2: {
        title: "Create an MPC Wallet",
        description: "Create an account and generate a wallet"
      },
      step3: {
        title: "Tap WalletConnect in Settings",
        description: "Tap the Scan QR icon at the top right and confirm the prompt to connect."
      }
    }
  },
  ledger: {
    desktop: {
      step1: {
        title: "Open the Ledger Live app",
        description: "We recommend putting Ledger Live on your home screen for quicker access."
      },
      step2: {
        title: "Set up your Ledger",
        description: "Set up a new Ledger or connect to an existing one."
      },
      step3: {
        title: "Connect",
        description: "A connection prompt will appear for you to connect your wallet."
      }
    },
    qr_code: {
      step1: {
        title: "Open the Ledger Live app",
        description: "We recommend putting Ledger Live on your home screen for quicker access."
      },
      step2: {
        title: "Set up your Ledger",
        description: "You can either sync with the desktop app or connect your Ledger."
      },
      step3: {
        title: "Scan the code",
        description: "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
      }
    }
  }
}, c = {
  connect_wallet: E,
  intro: M,
  sign_in: $,
  connect: F,
  connect_scan: Q,
  connector_group: j,
  get: U,
  get_options: V,
  get_mobile: X,
  get_instructions: Z,
  chains: G,
  profile: J,
  wallet_connectors: Y
}, H = {
  label: "Conectar la billetera",
  wrong_network: {
    label: "Red incorrecta"
  }
}, ee = {
  title: "¿Qué es una billetera?",
  description: "Una billetera se usa para enviar, recibir, almacenar y mostrar activos digitales. También es una nueva forma de iniciar sesión, sin necesidad de crear nuevas cuentas y contraseñas en cada sitio web.",
  digital_asset: {
    title: "Un hogar para tus Activos Digitales",
    description: "Las carteras se utilizan para enviar, recibir, almacenar y mostrar activos digitales como Ethereum y NFTs."
  },
  login: {
    title: "Una nueva forma de iniciar sesión",
    description: "En lugar de crear nuevas cuentas y contraseñas en cada sitio web, simplemente conecta tu cartera."
  },
  get: {
    label: "Obtener una billetera"
  },
  learn_more: {
    label: "Obtener más información"
  }
}, te = {
  label: "Verifica tu cuenta",
  description: "Para terminar de conectar, debes firmar un mensaje en tu billetera para verificar que eres el propietario de esta cuenta.",
  message: {
    send: "Enviar mensaje",
    preparing: "Preparando mensaje...",
    cancel: "Cancelar",
    preparing_error: "Error al preparar el mensaje, ¡intenta de nuevo!"
  },
  signature: {
    waiting: "Esperando firma...",
    verifying: "Verificando firma...",
    signing_error: "Error al firmar el mensaje, ¡intenta de nuevo!",
    verifying_error: "Error al verificar la firma, ¡intenta de nuevo!",
    oops_error: "¡Ups! Algo salió mal."
  }
}, ie = {
  label: "Conectar",
  title: "Conectar una billetera",
  new_to_ethereum: {
    description: "¿Eres nuevo en las billeteras Ethereum?",
    learn_more: {
      label: "Obtener más información"
    }
  },
  learn_more: {
    label: "Obtener más información"
  },
  recent: "Reciente",
  status: {
    opening: "Abriendo {wallet}...",
    connecting: "Conectando",
    connect_mobile: "Continuar en {wallet}",
    not_installed: "{wallet} no está instalado",
    not_available: "{wallet} no está disponible",
    confirm: "Confirma la conexión en la extensión",
    confirm_mobile: "Aceptar la solicitud de conexión en la cartera"
  },
  secondary_action: {
    get: {
      description: "¿No tienes {wallet}?",
      label: "OBTENER"
    },
    install: {
      label: "INSTALAR"
    },
    retry: {
      label: "REINTENTAR"
    }
  },
  walletconnect: {
    description: {
      full: "¿Necesitas el modal oficial de WalletConnect?",
      compact: "¿Necesitas el modal de WalletConnect?"
    },
    open: {
      label: "ABRIR"
    }
  }
}, ae = {
  title: "Escanea con {wallet}",
  fallback_title: "Escanea con tu teléfono"
}, ne = {
  installed: "Instalado",
  recommended: "Recomendado",
  other: "Otro",
  popular: "Popular",
  more: "Más",
  others: "Otros"
}, re = {
  title: "Obtener una billetera",
  action: {
    label: "OBTENER"
  },
  mobile: {
    description: "Billetera Móvil"
  },
  extension: {
    description: "Extensión de navegador"
  },
  mobile_and_extension: {
    description: "Billetera móvil y extensión"
  },
  mobile_and_desktop: {
    description: "Billetera Móvil y de Escritorio"
  },
  looking_for: {
    title: "¿No es lo que estás buscando?",
    mobile: {
      description: "Seleccione una billetera en la pantalla principal para comenzar con un proveedor de billetera diferente."
    },
    desktop: {
      compact_description: "Seleccione una cartera en la pantalla principal para comenzar con un proveedor de cartera diferente.",
      wide_description: "Seleccione una cartera a la izquierda para comenzar con un proveedor de cartera diferente."
    }
  }
}, oe = {
  title: "Comienza con {wallet}",
  short_title: "Obtener {wallet}",
  mobile: {
    title: "{wallet} para móvil",
    description: "Use la billetera móvil para explorar el mundo de Ethereum.",
    download: {
      label: "Obtener la aplicación"
    }
  },
  extension: {
    title: "{wallet} para {browser}",
    description: "Acceda a su billetera directamente desde su navegador web favorito.",
    download: {
      label: "Añadir a {browser}"
    }
  },
  desktop: {
    title: "{wallet} para {platform}",
    description: "Acceda a su billetera de forma nativa desde su potente escritorio.",
    download: {
      label: "Añadir a {platform}"
    }
  }
}, se = {
  title: "Instalar {wallet}",
  description: "Escanee con su teléfono para descargar en iOS o Android",
  continue: {
    label: "Continuar"
  }
}, le = {
  mobile: {
    connect: {
      label: "Conectar"
    },
    learn_more: {
      label: "Obtener más información"
    }
  },
  extension: {
    refresh: {
      label: "Actualizar"
    },
    learn_more: {
      label: "Obtener más información"
    }
  },
  desktop: {
    connect: {
      label: "Conectar"
    },
    learn_more: {
      label: "Obtener más información"
    }
  }
}, pe = {
  title: "Cambiar redes",
  wrong_network: "Se detectó la red incorrecta, cambia o desconéctate para continuar.",
  confirm: "Confirmar en la cartera",
  switching_not_supported: "Tu cartera no admite cambiar las redes desde {appName}. Intenta cambiar las redes desde tu cartera.",
  switching_not_supported_fallback: "Su billetera no admite el cambio de redes desde esta aplicación. Intente cambiar de red desde dentro de su billetera en su lugar.",
  disconnect: "Desconectar",
  connected: "Conectado"
}, ce = {
  disconnect: {
    label: "Desconectar"
  },
  copy_address: {
    label: "Copiar dirección",
    copied: "¡Copiado!"
  },
  explorer: {
    label: "Ver más en el explorador"
  },
  transactions: {
    description: "{appName} transacciones aparecerán aquí...",
    description_fallback: "Tus transacciones aparecerán aquí...",
    recent: {
      title: "Transacciones recientes"
    },
    clear: {
      label: "Borrar Todo"
    }
  }
}, de = {
  argent: {
    qr_code: {
      step1: {
        description: "Coloque Argent en su pantalla de inicio para un acceso más rápido a su billetera.",
        title: "Abra la aplicación Argent"
      },
      step2: {
        description: "Cree una billetera y un nombre de usuario, o importe una billetera existente.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Después de escanear, aparecerá un mensaje de conexión para que conecte su billetera.",
        title: "Toque el botón Escanear QR"
      }
    }
  },
  bifrost: {
    qr_code: {
      step1: {
        description: "Recomendamos poner Bifrost Wallet en su pantalla de inicio para un acceso más rápido.",
        title: "Abra la aplicación Bifrost Wallet"
      },
      step2: {
        description: "Cree o importe una billetera usando su frase de recuperación.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Después de escanear, aparecerá un aviso de conexión para que conecte su billetera.",
        title: "Toque el botón de escaneo"
      }
    }
  },
  bitget: {
    qr_code: {
      step1: {
        description: "Recomendamos colocar Bitget Wallet en su pantalla de inicio para un acceso más rápido.",
        title: "Abra la aplicación Bitget Wallet"
      },
      step2: {
        description: "Asegúrese de respaldar su billetera utilizando un método seguro. Nunca comparta su frase secreta con nadie.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Después de escanear, aparecerá un aviso de conexión para que pueda conectar su billetera.",
        title: "Toque el botón de escanear"
      }
    },
    extension: {
      step1: {
        description: "Recomendamos anclar Bitget Wallet a su barra de tareas para un acceso más rápido a su billetera.",
        title: "Instale la extensión de la Billetera Bitget"
      },
      step2: {
        description: "Asegúrate de respaldar tu billetera utilizando un método seguro. Nunca compartas tu frase secreta con nadie.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Una vez que configures tu billetera, haz clic a continuación para refrescar el navegador y cargar la extensión.",
        title: "Refrescar tu navegador"
      }
    }
  },
  bitski: {
    extension: {
      step1: {
        description: "Recomendamos anclar Bitski a tu barra de tareas para un acceso más rápido a tu billetera.",
        title: "Instala la extensión Bitski"
      },
      step2: {
        description: "Asegúrate de respaldar tu billetera utilizando un método seguro. Nunca compartas tu frase secreta con nadie.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Una vez que configure su billetera, haga clic abajo para actualizar el navegador y cargar la extensión.",
        title: "Actualiza tu navegador"
      }
    }
  },
  bloom: {
    desktop: {
      step1: {
        title: "Abra la aplicación Bloom Wallet",
        description: "Recomendamos colocar Bloom Wallet en su pantalla de inicio para un acceso más rápido."
      },
      step2: {
        description: "Cree o importe una billetera usando su frase de recuperación.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Después de tener una billetera, haga clic en Conectar para conectarse a través de Bloom. Aparecerá un aviso de conexión en la aplicación para que confirme la conexión.",
        title: "Haga clic en Conectar"
      }
    },
    qr_code: {
      step1: {
        title: "Abra la aplicación Bloom Wallet",
        description: "Recomendamos colocar Bloom Wallet en su pantalla de inicio para un acceso más rápido."
      },
      step2: {
        description: "Cree o importe una billetera usando su frase de recuperación.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Después de tener una billetera, haga clic en Conectar para conectarse a través de Bloom. Aparecerá un aviso de conexión en la aplicación para que confirme la conexión.",
        title: "Haga clic en Conectar"
      }
    }
  },
  coin98: {
    qr_code: {
      step1: {
        description: "Recomendamos poner Coin98 Wallet en la pantalla de inicio para un acceso más rápido a su billetera.",
        title: "Abra la aplicación Coin98 Wallet"
      },
      step2: {
        description: "Puede respaldar fácilmente su billetera utilizando nuestra función de respaldo en su teléfono.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Después de escanear, aparecerá un aviso de conexión para que conecte su billetera.",
        title: "Toque el botón WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "Haga clic en la parte superior derecha de su navegador y fije Coin98 Wallet para un fácil acceso.",
        title: "Instale la extensión Coin98 Wallet"
      },
      step2: {
        description: "Crea una nueva billetera o importa una existente.",
        title: "Crear o Importar una billetera"
      },
      step3: {
        description: "Una vez que configures Coin98 Wallet, haz clic a continuación para refrescar el navegador y cargar la extensión.",
        title: "Refresca tu navegador"
      }
    }
  },
  coinbase: {
    qr_code: {
      step1: {
        description: "Recomendamos poner Coinbase Wallet en tu pantalla de inicio para un acceso más rápido.",
        title: "Abre la aplicación de la Billetera Coinbase"
      },
      step2: {
        description: "Puedes respaldar tu billetera fácilmente utilizando la función de respaldo en la nube.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Después de escanear, aparecerá un aviso de conexión para que conectes tu billetera.",
        title: "Pulsa el botón de escanear"
      }
    },
    extension: {
      step1: {
        description: "Te recomendamos anclar la Billetera Coinbase a tu barra de tareas para un acceso más rápido a tu billetera.",
        title: "Instala la extensión de la Billetera Coinbase"
      },
      step2: {
        description: "Asegúrate de respaldar tu billetera utilizando un método seguro. Nunca compartas tu frase secreta con nadie.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Una vez que configure su billetera, haga clic abajo para refrescar el navegador y cargar la extensión.",
        title: "Refresca tu navegador"
      }
    }
  },
  core: {
    qr_code: {
      step1: {
        description: "Recomendamos poner Core en su pantalla de inicio para un acceso más rápido a su billetera.",
        title: "Abra la aplicación Core"
      },
      step2: {
        description: "Puedes respaldar fácilmente tu billetera utilizando nuestra función de respaldo en tu teléfono.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Después de escanear, aparecerá un aviso de conexión para que conectes tu billetera.",
        title: "Toque el botón WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "Recomendamos fijar Core a tu barra de tareas para acceder más rápido a tu billetera.",
        title: "Instala la extensión Core"
      },
      step2: {
        description: "Asegúrate de hacer una copia de seguridad de tu billetera utilizando un método seguro. Nunca compartas tu frase secreta con nadie.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Una vez que configures tu billetera, haz clic a continuación para refrescar el navegador y cargar la extensión.",
        title: "Refresca tu navegador"
      }
    }
  },
  fox: {
    qr_code: {
      step1: {
        description: "Recomendamos poner FoxWallet en tu pantalla de inicio para un acceso más rápido.",
        title: "Abre la aplicación FoxWallet"
      },
      step2: {
        description: "Asegúrate de respaldar tu billetera utilizando un método seguro. Nunca compartas tu frase secreta con nadie.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Después de escanear, aparecerá una solicitud de conexión para que conectes tu billetera.",
        title: "Toca el botón de escanear"
      }
    }
  },
  frontier: {
    qr_code: {
      step1: {
        description: "Recomendamos poner la Billetera Frontier en tu pantalla principal para un acceso más rápido.",
        title: "Abre la aplicación de la Billetera Frontier"
      },
      step2: {
        description: "Asegúrate de respaldar tu billetera utilizando un método seguro. Nunca compartas tu frase secreta con nadie.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Después de escanear, aparecerá un mensaje para que conectes tu billetera.",
        title: "Haz clic en el botón de escaneo"
      }
    },
    extension: {
      step1: {
        description: "Recomendamos anclar la billetera Frontier a tu barra de tareas para un acceso más rápido a tu billetera.",
        title: "Instala la extensión de la billetera Frontier"
      },
      step2: {
        description: "Asegúrese de hacer una copia de seguridad de su billetera utilizando un método seguro. Nunca comparta su frase secreta con nadie.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Una vez que configure su billetera, haga clic a continuación para actualizar el navegador y cargar la extensión.",
        title: "Actualizar tu navegador"
      }
    }
  },
  im_token: {
    qr_code: {
      step1: {
        title: "Abrir la aplicación imToken",
        description: "Pon la aplicación imToken en tu pantalla de inicio para un acceso más rápido a tu billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Crea una nueva billetera o importa una existente."
      },
      step3: {
        title: "Toca el Icono del Escáner en la esquina superior derecha",
        description: "Elija Nueva Conexión, luego escanee el código QR y confirme el aviso para conectar."
      }
    }
  },
  kresus: {
    qr_code: {
      step1: {
        title: "Abra la aplicación Kresus Wallet",
        description: "Agregue Kresus Wallet a su pantalla de inicio para un acceso más rápido a su billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Crea una nueva billetera o importa una existente."
      },
      step3: {
        title: "Toque el icono de QR y escanee",
        description: "Toca el icono QR en tu pantalla de inicio, escanea el código y confirma el prompt para conectar."
      }
    }
  },
  metamask: {
    qr_code: {
      step1: {
        title: "Abre la aplicación MetaMask",
        description: "Recomendamos colocar MetaMask en tu pantalla de inicio para un acceso más rápido."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrate de respaldar tu billetera utilizando un método seguro. Nunca compartas tu frase secreta con nadie."
      },
      step3: {
        title: "Toca el botón de escanear",
        description: "Después de escanear, aparecerá un aviso de conexión para que conectes tu billetera."
      }
    },
    extension: {
      step1: {
        title: "Instala la extensión MetaMask",
        description: "Recomendamos anclar MetaMask a tu barra de tareas para un acceso más rápido a tu billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrate de hacer una copia de seguridad de tu billetera usando un método seguro. Nunca compartas tu frase secreta con nadie."
      },
      step3: {
        title: "Refresca tu navegador",
        description: "Una vez que configures tu billetera, haz clic abajo para refrescar el navegador y cargar la extensión."
      }
    }
  },
  okx: {
    qr_code: {
      step1: {
        title: "Abre la aplicación OKX Wallet",
        description: "Recomendamos colocar OKX Wallet en tu pantalla de inicio para un acceso más rápido."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrate de respaldar tu billetera usando un método seguro. Nunca compartas tu frase secreta con nadie."
      },
      step3: {
        title: "Toca el botón de escanear",
        description: "Después de escanear, aparecerá un aviso de conexión para que conectes tu billetera."
      }
    },
    extension: {
      step1: {
        title: "Instala la extensión de Billetera OKX",
        description: "Recomendamos anclar la Billetera OKX a tu barra de tareas para un acceso más rápido a tu billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrate de respaldar tu billetera usando un método seguro. Nunca compartas tu frase secreta con nadie."
      },
      step3: {
        title: "Refresca tu navegador",
        description: "Una vez que configure su billetera, haga clic abajo para actualizar el navegador y cargar la extensión."
      }
    }
  },
  omni: {
    qr_code: {
      step1: {
        title: "Abra la aplicación Omni",
        description: "Agregue Omni a su pantalla de inicio para un acceso más rápido a su billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Crear una nueva billetera o importar una existente."
      },
      step3: {
        title: "Toque el icono de QR y escanee",
        description: "Toca el icono QR en tu pantalla principal, escanea el código y confirma el aviso para conectar."
      }
    }
  },
  token_pocket: {
    qr_code: {
      step1: {
        title: "Abre la aplicación TokenPocket",
        description: "Recomendamos colocar TokenPocket en tu pantalla principal para un acceso más rápido."
      },
      step2: {
        title: "Crear o importar una Billetera",
        description: "Asegúrate de respaldar tu billetera utilizando un método seguro. Nunca compartas tu frase secreta con nadie."
      },
      step3: {
        title: "Toca el botón de escaneo",
        description: "Después de escanear, aparecerá una solicitud de conexión para que puedas conectar tu billetera."
      }
    },
    extension: {
      step1: {
        title: "Instala la extensión TokenPocket",
        description: "Recomendamos anclar TokenPocket a tu barra de tareas para un acceso más rápido a tu billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrate de respaldar tu billetera utilizando un método seguro. Nunca compartas tu frase secreta con nadie."
      },
      step3: {
        title: "Actualiza tu navegador",
        description: "Una vez que configures tu billetera, haz clic a continuación para actualizar el navegador y cargar la extensión."
      }
    }
  },
  trust: {
    qr_code: {
      step1: {
        title: "Abre la aplicación Trust Wallet",
        description: "Ubica Trust Wallet en tu pantalla de inicio para un acceso más rápido a tu billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Crea una nueva billetera o importa una existente."
      },
      step3: {
        title: "Toca WalletConnect en Configuraciones",
        description: "Elige Nueva Conexión, luego escanea el código QR y confirma el aviso para conectar."
      }
    },
    extension: {
      step1: {
        title: "Instala la extensión de Trust Wallet",
        description: "Haz clic en la parte superior derecha de tu navegador y fija Trust Wallet para un fácil acceso."
      },
      step2: {
        title: "Crea o Importa una billetera",
        description: "Crea una nueva billetera o importa una existente."
      },
      step3: {
        title: "Refresca tu navegador",
        description: "Una vez que configures Trust Wallet, haz clic abajo para refrescar el navegador y cargar la extensión."
      }
    }
  },
  uniswap: {
    qr_code: {
      step1: {
        title: "Abre la aplicación Uniswap",
        description: "Agrega la billetera Uniswap a tu pantalla de inicio para un acceso más rápido a tu billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Crea una nueva billetera o importa una existente."
      },
      step3: {
        title: "Toca el icono QR y escanea",
        description: "Toca el icono QR en tu pantalla de inicio, escanea el código y confirma el prompt para conectar."
      }
    }
  },
  zerion: {
    qr_code: {
      step1: {
        title: "Abre la aplicación Zerion",
        description: "Recomendamos poner Zerion en tu pantalla de inicio para un acceso más rápido."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrate de hacer una copia de seguridad de tu billetera utilizando un método seguro. Nunca compartas tu frase secreta con nadie."
      },
      step3: {
        title: "Toca el botón de escanear",
        description: "Después de escanear, aparecerá un aviso de conexión para que conectes tu billetera."
      }
    },
    extension: {
      step1: {
        title: "Instala la extensión Zerion",
        description: "Recomendamos anclar Zerion a tu barra de tareas para un acceso más rápido a tu billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrese de respaldar su billetera usando un método seguro. Nunca comparta su frase secreta con nadie."
      },
      step3: {
        title: "Actualiza tu navegador",
        description: "Una vez que configures tu billetera, haz clic a continuación para actualizar el navegador y cargar la extensión."
      }
    }
  },
  rainbow: {
    qr_code: {
      step1: {
        title: "Abre la aplicación Rainbow",
        description: "Recomendamos poner Rainbow en tu pantalla de inicio para un acceso más rápido a tu billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Puedes respaldar fácilmente tu billetera usando nuestra función de respaldo en tu teléfono."
      },
      step3: {
        title: "Toca el botón de escanear",
        description: "Después de escanear, aparecerá una solicitud de conexión para que conectes tu billetera."
      }
    }
  },
  enkrypt: {
    extension: {
      step1: {
        description: "Recomendamos anclar la Billetera Enkrypt a tu barra de tareas para un acceso más rápido a tu billetera.",
        title: "Instala la extensión de Billetera Enkrypt"
      },
      step2: {
        description: "Asegúrate de respaldar tu billetera utilizando un método seguro. Nunca compartas tu frase secreta con nadie.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Una vez que configures tu billetera, haz clic abajo para refrescar el navegador y cargar la extensión.",
        title: "Refresca tu navegador"
      }
    }
  },
  frame: {
    extension: {
      step1: {
        description: "Recomendamos anclar Frame a tu barra de tareas para un acceso más rápido a tu billetera.",
        title: "Instala Frame y la extensión complementaria"
      },
      step2: {
        description: "Asegúrate de respaldar tu billetera utilizando un método seguro. Nunca compartas tu frase secreta con nadie.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Una vez que configures tu billetera, haz clic a continuación para refrescar el navegador y cargar la extensión.",
        title: "Refresca tu navegador"
      }
    }
  },
  one_key: {
    extension: {
      step1: {
        title: "Instale la extensión de Billetera OneKey",
        description: "Recomendamos anclar la Billetera OneKey a tu barra de tareas para un acceso más rápido a tu billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrese de respaldar su billetera usando un método seguro. Nunca comparta su frase secreta con nadie."
      },
      step3: {
        title: "Actualiza tu navegador",
        description: "Una vez que configures tu billetera, haz clic a continuación para actualizar el navegador y cargar la extensión."
      }
    }
  },
  phantom: {
    extension: {
      step1: {
        title: "Instala la extensión Phantom",
        description: "Recomendamos fijar Phantom a tu barra de tareas para un acceso más fácil a tu billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrese de respaldar su billetera usando un método seguro. Nunca comparta su frase secreta de recuperación con nadie."
      },
      step3: {
        title: "Actualiza tu navegador",
        description: "Una vez que configures tu billetera, haz clic abajo para refrescar el navegador y cargar la extensión."
      }
    }
  },
  rabby: {
    extension: {
      step1: {
        title: "Instala la extensión Rabby",
        description: "Recomendamos anclar Rabby a tu barra de tareas para un acceso más rápido a tu billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrate de hacer una copia de seguridad de tu billetera utilizando un método seguro. Nunca compartas tu frase secreta con nadie."
      },
      step3: {
        title: "Actualiza tu navegador",
        description: "Una vez que configures tu billetera, haz clic abajo para actualizar el navegador y cargar la extensión."
      }
    }
  },
  ronin: {
    qr_code: {
      step1: {
        description: "Recomendamos poner Ronin Wallet en su pantalla de inicio para un acceso más rápido.",
        title: "Abra la aplicación Ronin Wallet"
      },
      step2: {
        description: "Asegúrese de respaldar su billetera utilizando un método seguro. Nunca comparta su frase secreta con nadie.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Después de escanear, aparecerá un mensaje de conexión para que conecte su billetera.",
        title: "Toque el botón de escaneo"
      }
    },
    extension: {
      step1: {
        description: "Recomendamos anclar Ronin Wallet a su barra de tareas para un acceso más rápido a su billetera.",
        title: "Instale la extensión Ronin Wallet"
      },
      step2: {
        description: "Asegúrese de respaldar su billetera utilizando un método seguro. Nunca comparta su frase secreta con nadie.",
        title: "Crear o Importar una Billetera"
      },
      step3: {
        description: "Una vez que configures tu billetera, haz clic a continuación para refrescar el navegador y cargar la extensión.",
        title: "Refrescar tu navegador"
      }
    }
  },
  ramper: {
    extension: {
      step1: {
        title: "Instale la extensión Ramper",
        description: "Recomendamos anclar Ramper a su barra de tareas para un acceso más fácil a su billetera."
      },
      step2: {
        title: "Crea una Cartera",
        description: "Asegúrese de respaldar su billetera utilizando un método seguro. Nunca comparta su frase secreta con nadie."
      },
      step3: {
        title: "Refrescar tu navegador",
        description: "Una vez que configures tu billetera, haz clic a continuación para refrescar el navegador y cargar la extensión."
      }
    }
  },
  safeheron: {
    extension: {
      step1: {
        title: "Instala la extensión Core",
        description: "Recomendamos anclar Safeheron a tu barra de tareas para un acceso más rápido a tu billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrate de respaldar tu billetera utilizando un método seguro. Nunca compartas tu frase secreta con nadie."
      },
      step3: {
        title: "Refresca tu navegador",
        description: "Una vez que configures tu billetera, haz clic abajo para refrescar el navegador y cargar la extensión."
      }
    }
  },
  taho: {
    extension: {
      step1: {
        title: "Instala la extensión de Taho",
        description: "Recomendamos anclar Taho a tu barra de tareas para un acceso más rápido a tu billetera."
      },
      step2: {
        title: "Crea o Importa una Billetera",
        description: "Asegúrate de respaldar tu billetera utilizando un método seguro. Nunca compartas tu frase secreta con nadie."
      },
      step3: {
        title: "Refresca tu navegador",
        description: "Una vez que configures tu billetera, haz clic abajo para refrescar el navegador y cargar la extensión."
      }
    }
  },
  talisman: {
    extension: {
      step1: {
        title: "Instala la extensión de Talisman",
        description: "Recomendamos anclar Talisman a tu barra de tareas para un acceso más rápido a tu billetera."
      },
      step2: {
        title: "Crea o importa una billetera Ethereum",
        description: "Asegúrate de respaldar tu billetera usando un método seguro. Nunca compartas tu frase de recuperación con nadie."
      },
      step3: {
        title: "Recarga tu navegador",
        description: "Una vez que configures tu billetera, haz clic abajo para refrescar el navegador y cargar la extensión."
      }
    }
  },
  xdefi: {
    extension: {
      step1: {
        title: "Instala la extensión de la billetera XDEFI",
        description: "Recomendamos anclar XDEFI Wallet a su barra de tareas para un acceso más rápido a su billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrese de respaldar su billetera utilizando un método seguro. Nunca comparta su frase secreta con nadie."
      },
      step3: {
        title: "Actualice su navegador",
        description: "Una vez que configure su billetera, haga clic abajo para actualizar el navegador y cargar la extensión."
      }
    }
  },
  zeal: {
    extension: {
      step1: {
        title: "Instale la extensión Zeal",
        description: "Recomendamos anclar Zeal a su barra de tareas para un acceso más rápido a su billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrese de respaldar su billetera utilizando un método seguro. Nunca comparta su frase secreta con nadie."
      },
      step3: {
        title: "Refrescar tu navegador",
        description: "Una vez que configures tu billetera, haz clic a continuación para refrescar el navegador y cargar la extensión."
      }
    }
  },
  safepal: {
    extension: {
      step1: {
        title: "Instale la extensión de la billetera SafePal",
        description: "Haga clic en la esquina superior derecha de su navegador y ancle SafePal Wallet para un fácil acceso."
      },
      step2: {
        title: "Crear o Importar una billetera",
        description: "Crea una nueva billetera o importa una existente."
      },
      step3: {
        title: "Refrescar tu navegador",
        description: "Una vez que configure la Billetera SafePal, haga clic abajo para refrescar el navegador y cargar la extensión."
      }
    },
    qr_code: {
      step1: {
        title: "Abra la aplicación Billetera SafePal",
        description: "Coloque la Billetera SafePal en su pantalla de inicio para un acceso más rápido a su billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Crea una nueva billetera o importa una existente."
      },
      step3: {
        title: "Toca WalletConnect en Configuraciones",
        description: "Elija Nueva Conexión, luego escanee el código QR y confirme el aviso para conectar."
      }
    }
  },
  desig: {
    extension: {
      step1: {
        title: "Instala la extensión Desig",
        description: "Recomendamos anclar Desig a tu barra de tareas para acceder más fácilmente a tu cartera."
      },
      step2: {
        title: "Crea una Cartera",
        description: "Asegúrese de respaldar su billetera utilizando un método seguro. Nunca comparta su frase secreta con nadie."
      },
      step3: {
        title: "Refrescar tu navegador",
        description: "Una vez que configures tu billetera, haz clic a continuación para refrescar el navegador y cargar la extensión."
      }
    }
  },
  subwallet: {
    extension: {
      step1: {
        title: "Instala la extensión SubWallet",
        description: "Recomendamos anclar SubWallet a tu barra de tareas para acceder a tu cartera más rápidamente."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrate de respaldar tu billetera usando un método seguro. Nunca compartas tu frase de recuperación con nadie."
      },
      step3: {
        title: "Refrescar tu navegador",
        description: "Una vez que configures tu billetera, haz clic a continuación para refrescar el navegador y cargar la extensión."
      }
    },
    qr_code: {
      step1: {
        title: "Abre la aplicación SubWallet",
        description: "Recomendamos colocar SubWallet en tu pantalla principal para un acceso más rápido."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrese de respaldar su billetera utilizando un método seguro. Nunca comparta su frase secreta con nadie."
      },
      step3: {
        title: "Toque el botón de escaneo",
        description: "Después de escanear, aparecerá un mensaje de conexión para que conecte su billetera."
      }
    }
  },
  clv: {
    extension: {
      step1: {
        title: "Instala la extensión CLV Wallet",
        description: "Recomendamos anclar la billetera CLV a tu barra de tareas para un acceso más rápido a tu billetera."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrese de respaldar su billetera utilizando un método seguro. Nunca comparta su frase secreta con nadie."
      },
      step3: {
        title: "Refrescar tu navegador",
        description: "Una vez que configures tu billetera, haz clic a continuación para refrescar el navegador y cargar la extensión."
      }
    },
    qr_code: {
      step1: {
        title: "Abra la aplicación CLV Wallet",
        description: "Recomendamos colocar la billetera CLV en tu pantalla de inicio para un acceso más rápido."
      },
      step2: {
        title: "Crear o Importar una Billetera",
        description: "Asegúrese de respaldar su billetera utilizando un método seguro. Nunca comparta su frase secreta con nadie."
      },
      step3: {
        title: "Toque el botón de escaneo",
        description: "Después de escanear, aparecerá un mensaje de conexión para que conecte su billetera."
      }
    }
  },
  okto: {
    qr_code: {
      step1: {
        title: "Abra la aplicación Okto",
        description: "Agrega Okto a tu pantalla de inicio para un acceso rápido"
      },
      step2: {
        title: "Crea una billetera MPC",
        description: "Crea una cuenta y genera una billetera"
      },
      step3: {
        title: "Toca WalletConnect en Configuraciones",
        description: "Toca el icono de Escanear QR en la parte superior derecha y confirma el mensaje para conectar."
      }
    }
  },
  ledger: {
    desktop: {
      step1: {
        title: "Abra la aplicación Ledger Live",
        description: "Recomendamos poner Ledger Live en su pantalla de inicio para un acceso más rápido."
      },
      step2: {
        title: "Configure su Ledger",
        description: "Configure un nuevo Ledger o conéctese a uno existente."
      },
      step3: {
        title: "Conectar",
        description: "Después de escanear, aparecerá un aviso de conexión para que conectes tu billetera."
      }
    },
    qr_code: {
      step1: {
        title: "Abra la aplicación Ledger Live",
        description: "Recomendamos poner Ledger Live en su pantalla de inicio para un acceso más rápido."
      },
      step2: {
        title: "Configure su Ledger",
        description: "Puedes sincronizar con la aplicación de escritorio o conectar tu Ledger."
      },
      step3: {
        title: "Escanea el código",
        description: "Toca WalletConnect y luego cambia a Scanner. Después de escanear, aparecerá un aviso de conexión para que conectes tu billetera."
      }
    }
  }
}, d = {
  connect_wallet: H,
  intro: ee,
  sign_in: te,
  connect: ie,
  connect_scan: ae,
  connector_group: ne,
  get: re,
  get_options: oe,
  get_mobile: se,
  get_instructions: le,
  chains: pe,
  profile: ce,
  wallet_connectors: de
}, ue = {
  label: "Connecter le portefeuille",
  wrong_network: {
    label: "Réseau incorrect"
  }
}, me = {
  title: "Qu'est-ce qu'un portefeuille?",
  description: "Un portefeuille est utilisé pour envoyer, recevoir, stocker et afficher des actifs numériques. C'est aussi une nouvelle façon de se connecter, sans avoir besoin de créer de nouveaux comptes et mots de passe sur chaque site.",
  digital_asset: {
    title: "Un foyer pour vos actifs numériques",
    description: "Les portefeuilles sont utilisés pour envoyer, recevoir, stocker et afficher des actifs numériques comme Ethereum et les NFTs."
  },
  login: {
    title: "Une nouvelle façon de se connecter",
    description: "Au lieu de créer de nouveaux comptes et mots de passe sur chaque site Web, connectez simplement votre portefeuille."
  },
  get: {
    label: "Obtenir un portefeuille"
  },
  learn_more: {
    label: "En savoir plus"
  }
}, ke = {
  label: "Vérifiez votre compte",
  description: "Pour terminer la connexion, vous devez signer un message dans votre portefeuille pour vérifier que vous êtes le propriétaire de ce compte.",
  message: {
    send: "Envoyer le message",
    preparing: "Préparation du message...",
    cancel: "Annuler",
    preparing_error: "Erreur lors de la préparation du message, veuillez réessayer!"
  },
  signature: {
    waiting: "En attente de la signature...",
    verifying: "Vérification de la signature...",
    signing_error: "Erreur lors de la signature du message, veuillez réessayer!",
    verifying_error: "Erreur lors de la vérification de la signature, veuillez réessayer!",
    oops_error: "Oups, quelque chose a mal tourné!"
  }
}, be = {
  label: "Connecter",
  title: "Connecter un portefeuille",
  new_to_ethereum: {
    description: "Nouveau aux portefeuilles Ethereum?",
    learn_more: {
      label: "En savoir plus"
    }
  },
  learn_more: {
    label: "En savoir plus"
  },
  recent: "Récents",
  status: {
    opening: "Ouverture {wallet}...",
    connecting: "Connect :)ing",
    connect_mobile: "Continuer dans {wallet}",
    not_installed: "{wallet} n'est pas installé",
    not_available: "{wallet} n'est pas disponible",
    confirm: "Confirmez la connexion dans l'extension",
    confirm_mobile: "Accepter la demande de connexion dans le portefeuille"
  },
  secondary_action: {
    get: {
      description: "Vous n'avez pas de {wallet}?",
      label: "OBTENIR"
    },
    install: {
      label: "INSTALLER"
    },
    retry: {
      label: "RÉESSAYER"
    }
  },
  walletconnect: {
    description: {
      full: "Vous avez besoin du modal officiel de WalletConnect ?",
      compact: "Besoin du modal de WalletConnect ?"
    },
    open: {
      label: "OUVRIR"
    }
  }
}, ge = {
  title: "Scannez avec {wallet}",
  fallback_title: "Scannez avec votre téléphone"
}, ye = {
  installed: "Installé",
  recommended: "Recommandé",
  other: "Autre",
  popular: "Populaire",
  more: "Plus",
  others: "Autres"
}, fe = {
  title: "Obtenez un portefeuille",
  action: {
    label: "OBTENIR"
  },
  mobile: {
    description: "Portefeuille mobile"
  },
  extension: {
    description: "Extension de navigateur"
  },
  mobile_and_extension: {
    description: "Portefeuille mobile et extension"
  },
  mobile_and_desktop: {
    description: "Portefeuille mobile et de bureau"
  },
  looking_for: {
    title: "Ce n'est pas ce que vous cherchez ?",
    mobile: {
      description: "Sélectionnez un portefeuille sur l'écran principal pour commencer avec un autre fournisseur de portefeuille."
    },
    desktop: {
      compact_description: "Sélectionnez un portefeuille sur l'écran principal pour commencer avec un autre fournisseur de portefeuille.",
      wide_description: "Sélectionnez un portefeuille sur la gauche pour commencer avec un autre fournisseur de portefeuille."
    }
  }
}, he = {
  title: "Commencez avec {wallet}",
  short_title: "Obtenez {wallet}",
  mobile: {
    title: "{wallet} pour mobile",
    description: "Utilisez le portefeuille mobile pour explorer le monde d'Ethereum.",
    download: {
      label: "Obtenez l'application"
    }
  },
  extension: {
    title: "{wallet} pour {browser}",
    description: "Accédez à votre portefeuille directement depuis votre navigateur web préféré.",
    download: {
      label: "Ajouter à {browser}"
    }
  },
  desktop: {
    title: "{wallet} pour {platform}",
    description: "Accédez à votre portefeuille nativement depuis votre puissant ordinateur de bureau.",
    download: {
      label: "Ajouter à {platform}"
    }
  }
}, ze = {
  title: "Installer {wallet}",
  description: "Scannez avec votre téléphone pour télécharger sur iOS ou Android",
  continue: {
    label: "Continuer"
  }
}, ve = {
  mobile: {
    connect: {
      label: "Connecter"
    },
    learn_more: {
      label: "En savoir plus"
    }
  },
  extension: {
    refresh: {
      label: "Rafraîchir"
    },
    learn_more: {
      label: "En savoir plus"
    }
  },
  desktop: {
    connect: {
      label: "Connecter"
    },
    learn_more: {
      label: "En savoir plus"
    }
  }
}, Ce = {
  title: "Changer de Réseaux",
  wrong_network: "Mauvais réseau détecté, changez ou déconnectez-vous pour continuer.",
  confirm: "Confirmer dans le portefeuille",
  switching_not_supported: "Votre portefeuille ne supporte pas le changement de réseaux depuis {appName}. Essayez de changer de réseau depuis votre portefeuille.",
  switching_not_supported_fallback: "Votre portefeuille ne prend pas en charge le changement de réseaux à partir de cette application. Essayez de changer de réseau à partir de votre portefeuille à la place.",
  disconnect: "Déconnecter",
  connected: "Connecté"
}, _e = {
  disconnect: {
    label: "Déconnecter"
  },
  copy_address: {
    label: "Copier l'adresse",
    copied: "Copié !"
  },
  explorer: {
    label: "Voir plus sur l'explorateur"
  },
  transactions: {
    description: "{appName} transactions apparaîtront ici...",
    description_fallback: "Vos transactions apparaîtront ici...",
    recent: {
      title: "Transactions Récentes"
    },
    clear: {
      label: "Tout supprimer"
    }
  }
}, we = {
  argent: {
    qr_code: {
      step1: {
        description: "Mettez Argent sur votre écran d'accueil pour un accès plus rapide à votre portefeuille.",
        title: "Ouvrez l'application Argent"
      },
      step2: {
        description: "Créez un portefeuille et un nom d'utilisateur, ou importez un portefeuille existant.",
        title: "Créer ou Importer un Portefeuille"
      },
      step3: {
        description: "Après avoir numérisé, une invite de connexion apparaîtra pour vous permettre de connecter votre portefeuille.",
        title: "Appuyez sur le bouton Scan QR"
      }
    }
  },
  bifrost: {
    qr_code: {
      step1: {
        description: "Nous vous recommandons de mettre le portefeuille Bifrost sur votre écran d'accueil pour un accès plus rapide.",
        title: "Ouvrez l'application Bifrost Wallet"
      },
      step2: {
        description: "Créez ou importez un portefeuille en utilisant votre phrase de récupération.",
        title: "Créer ou Importer un portefeuille"
      },
      step3: {
        description: "Après votre scan, une invite de connexion apparaîtra pour vous permettre de connecter votre portefeuille.",
        title: "Appuyez sur le bouton de scan"
      }
    }
  },
  bitget: {
    qr_code: {
      step1: {
        description: "Nous vous recommandons de placer Bitget Wallet sur votre écran d'accueil pour un accès plus rapide.",
        title: "Ouvrez l'application Bitget Wallet"
      },
      step2: {
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quiconque.",
        title: "Créer ou Importer un portefeuille"
      },
      step3: {
        description: "Après le scan, une incitation de connexion apparaîtra pour vous permettre de connecter votre portefeuille.",
        title: "Appuyez sur le bouton de scan"
      }
    },
    extension: {
      step1: {
        description: "Nous vous recommandons d'épingler Bitget Wallet à votre barre des tâches pour un accès plus rapide à votre portefeuille.",
        title: "Installez l'extension de portefeuille Bitget"
      },
      step2: {
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec personne.",
        title: "Créez ou Importez un portefeuille"
      },
      step3: {
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour actualiser le navigateur et charger l'extension.",
        title: "Rafraîchissez votre navigateur"
      }
    }
  },
  bitski: {
    extension: {
      step1: {
        description: "Nous recommandons d'épingler Bitski à votre barre des tâches pour un accès plus rapide à votre portefeuille.",
        title: "Installez l'extension Bitski"
      },
      step2: {
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec qui que ce soit.",
        title: "Créer ou Importer un portefeuille"
      },
      step3: {
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour rafraîchir le navigateur et charger l'extension.",
        title: "Rafraîchissez votre navigateur"
      }
    }
  },
  bloom: {
    desktop: {
      step1: {
        title: "Ouvrez l'application Bloom Wallet",
        description: "Nous recommandons de placer Bloom Wallet sur votre écran d'accueil pour un accès plus rapide."
      },
      step2: {
        description: "Créez ou importez un portefeuille en utilisant votre phrase de récupération.",
        title: "Créer ou Importer un Portefeuille"
      },
      step3: {
        description: "Après avoir obtenu un portefeuille, cliquez sur Connecter pour vous connecter via Bloom. Une invite de connexion apparaîtra dans l'application pour que vous confirmiez la connexion.",
        title: "Cliquez sur Connecter"
      }
    },
    qr_code: {
      step1: {
        title: "Ouvrez l'application Bloom Wallet",
        description: "Nous recommandons de placer Bloom Wallet sur votre écran d'accueil pour un accès plus rapide."
      },
      step2: {
        description: "Créez ou importez un portefeuille en utilisant votre phrase de récupération.",
        title: "Créer ou Importer un Portefeuille"
      },
      step3: {
        description: "Après avoir obtenu un portefeuille, cliquez sur Connecter pour vous connecter via Bloom. Une invite de connexion apparaîtra dans l'application pour que vous confirmiez la connexion.",
        title: "Cliquez sur Connecter"
      }
    }
  },
  coin98: {
    qr_code: {
      step1: {
        description: "Nous vous recommandons de placer Coin98 Wallet sur votre écran d'accueil pour un accès plus rapide à votre portefeuille.",
        title: "Ouvrez l'application Coin98 Wallet"
      },
      step2: {
        description: "Vous pouvez facilement sauvegarder votre portefeuille en utilisant notre fonction de sauvegarde sur votre téléphone.",
        title: "Créer ou Importer un portefeuille"
      },
      step3: {
        description: "Après que vous ayez scanné, une invite de connexion apparaîtra pour vous permettre de connecter votre portefeuille.",
        title: "Appuyez sur le bouton WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "Cliquez en haut à droite de votre navigateur et épinglez Coin98 Wallet pour un accès facile.",
        title: "Installez l'extension Coin98 Wallet"
      },
      step2: {
        description: "Créez un nouveau portefeuille ou importez-en un existant.",
        title: "Créer ou Importer un portefeuille"
      },
      step3: {
        description: "Une fois que vous avez configuré Coin98 Wallet, cliquez ci-dessous pour actualiser le navigateur et charger l'extension.",
        title: "Rafraîchissez votre navigateur"
      }
    }
  },
  coinbase: {
    qr_code: {
      step1: {
        description: "Nous recommandons de placer Coinbase Wallet sur votre écran d'accueil pour un accès plus rapide.",
        title: "Ouvrez l'application Coinbase Wallet"
      },
      step2: {
        description: "Vous pouvez facilement sauvegarder votre portefeuille en utilisant la fonction de sauvegarde cloud.",
        title: "Créer ou Importer un portefeuille"
      },
      step3: {
        description: "Après avoir scanné, une invite de connexion s'affichera pour que vous puissiez connecter votre portefeuille.",
        title: "Appuyez sur le bouton de scan"
      }
    },
    extension: {
      step1: {
        description: "Nous recommandons d'épingler Coinbase Wallet à votre barre des tâches pour un accès plus rapide à votre portefeuille.",
        title: "Installez l'extension Coinbase Wallet"
      },
      step2: {
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sûre. Ne partagez jamais votre phrase secrète avec quiconque.",
        title: "Créer ou Importer un portefeuille"
      },
      step3: {
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour actualiser le navigateur et charger l'extension.",
        title: "Actualisez votre navigateur"
      }
    }
  },
  core: {
    qr_code: {
      step1: {
        description: "Nous recommandons de placer Core sur votre écran d'accueil pour un accès plus rapide à votre portefeuille.",
        title: "Ouvrez l'application Core"
      },
      step2: {
        description: "Vous pouvez facilement sauvegarder votre portefeuille en utilisant notre fonction de sauvegarde sur votre téléphone.",
        title: "Créer ou Importer un portefeuille"
      },
      step3: {
        description: "Après avoir scanné, une invite de connexion apparaîtra pour vous permettre de connecter votre portefeuille.",
        title: "Appuyez sur le bouton WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "Nous recommandons d'épingler Core à votre barre des tâches pour un accès plus rapide à votre portefeuille.",
        title: "Installez l'extension Core"
      },
      step2: {
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quiconque.",
        title: "Créez ou Importer un Portefeuille"
      },
      step3: {
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour rafraîchir le navigateur et charger l'extension.",
        title: "Rafraîchissez votre navigateur"
      }
    }
  },
  fox: {
    qr_code: {
      step1: {
        description: "Nous recommandons de mettre FoxWallet sur votre écran d'accueil pour un accès plus rapide.",
        title: "Ouvrez l'application FoxWallet"
      },
      step2: {
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec personne.",
        title: "Créer ou Importer un portefeuille"
      },
      step3: {
        description: "Après avoir scanné, une invitation à la connexion apparaîtra pour vous permettre de connecter votre portefeuille.",
        title: "Appuyez sur le bouton de scan"
      }
    }
  },
  frontier: {
    qr_code: {
      step1: {
        description: "Nous vous recommandons de placer le portefeuille Frontier sur votre écran d'accueil pour un accès plus rapide.",
        title: "Ouvrez l'application Frontier Wallet"
      },
      step2: {
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec personne.",
        title: "Créer ou Importer un portefeuille"
      },
      step3: {
        description: "Après avoir scanné, une invite de connexion apparaîtra pour vous permettre de connecter votre portefeuille.",
        title: "Appuyez sur le bouton de scan"
      }
    },
    extension: {
      step1: {
        description: "Nous recommandons d'épingler Frontier Wallet à votre barre des tâches pour un accès plus rapide à votre portefeuille.",
        title: "Installez l'extension Frontier Wallet"
      },
      step2: {
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec personne.",
        title: "Créez ou importez un portefeuille"
      },
      step3: {
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour actualiser le navigateur et charger l'extension.",
        title: "Rafraîchissez votre navigateur"
      }
    }
  },
  im_token: {
    qr_code: {
      step1: {
        title: "Ouvrez l'application imToken",
        description: "Placez l'application imToken sur votre écran d'accueil pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créez ou importez un portefeuille",
        description: "Créez un nouveau portefeuille ou importez-en un existant ."
      },
      step3: {
        title: "Appuyez sur l'icône du scanner dans le coin supérieur droit",
        description: "Choisissez Nouvelle Connexion, puis scannez le code QR et confirmez l'invite pour vous connecter."
      }
    }
  },
  kresus: {
    qr_code: {
      step1: {
        title: "Ouvrez l'application Kresus Wallet",
        description: "Ajoutez Kresus Wallet sur votre écran d'accueil pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créer ou Importer un Portefeuille",
        description: "Créez un nouveau portefeuille ou importez-en un existant."
      },
      step3: {
        title: "Touchez l'icône QR et scannez",
        description: "Touchez l'icône QR sur votre écran d'accueil, scannez le code et confirmez l'invite pour vous connecter."
      }
    }
  },
  metamask: {
    qr_code: {
      step1: {
        title: "Ouvrez l'application MetaMask",
        description: "Nous vous recommandons de mettre MetaMask sur votre écran d'accueil pour un accès plus rapide."
      },
      step2: {
        title: "Créer ou Importer un Portefeuille",
        description: "Veillez à sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec qui que ce soit."
      },
      step3: {
        title: "Appuyez sur le bouton de scan",
        description: "Après avoir scanné, une invite de connexion apparaîtra pour vous permettre de connecter votre portefeuille."
      }
    },
    extension: {
      step1: {
        title: "Installez l’extension de MetaMask",
        description: "Nous recommandons d'épingler MetaMask à votre barre des tâches pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créer ou Importer un portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quiconque."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour rafraîchir le navigateur et charger l'extension."
      }
    }
  },
  okx: {
    qr_code: {
      step1: {
        title: "Ouvrez l'application OKX Wallet",
        description: "Nous recommandons de mettre OKX Wallet sur votre écran d'accueil pour un accès plus rapide."
      },
      step2: {
        title: "Créer ou Importer un portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quiconque."
      },
      step3: {
        title: "Appuyez sur le bouton de numérisation",
        description: "Après avoir numérisé, une invite de connexion apparaîtra pour vous permettre de connecter votre portefeuille."
      }
    },
    extension: {
      step1: {
        title: "Installez l'extension de portefeuille OKX",
        description: "Nous vous recommandons d'épingler le portefeuille OKX à votre barre des tâches pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créer ou Importer un portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quiconque."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour actualiser le navigateur et charger l'extension."
      }
    }
  },
  omni: {
    qr_code: {
      step1: {
        title: "Ouvrez l'application Omni",
        description: "Ajoutez Omni à votre écran d'accueil pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créer ou Importer un Portefeuille",
        description: "Créez un nouveau portefeuille ou importez-en un existant."
      },
      step3: {
        title: "Touchez l'icône QR et scannez",
        description: "Appuyez sur l'icône QR sur votre écran d'accueil, scannez le code et confirmez l'invite pour vous connecter."
      }
    }
  },
  token_pocket: {
    qr_code: {
      step1: {
        title: "Ouvrez l'application TokenPocket",
        description: "Nous vous recommandons de mettre TokenPocket sur votre écran d'accueil pour un accès plus rapide."
      },
      step2: {
        title: "Créez ou Importer un portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille à l'aide d'une méthode sécurisée. Ne partagez jamais votre phrase secrète avec qui que ce soit."
      },
      step3: {
        title: "Appuyez sur le bouton de scan",
        description: "Après votre scan, une invite de connexion apparaîtra pour vous permettre de connecter votre portefeuille."
      }
    },
    extension: {
      step1: {
        title: "Installez l'extension TokenPocket",
        description: "Nous recommandons d'épingler TokenPocket à votre barre des tâches pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créer ou Importer un portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec qui que ce soit."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour rafraîchir le navigateur et charger l'extension."
      }
    }
  },
  trust: {
    qr_code: {
      step1: {
        title: "Ouvrez l'application Trust Wallet",
        description: "Placez Trust Wallet sur votre écran d'accueil pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créer ou Importer un portefeuille",
        description: "Créer un nouveau portefeuille ou en importer un existant."
      },
      step3: {
        title: "Appuyez sur WalletConnect dans les paramètres",
        description: "Choisissez Nouvelle Connexion, puis scannez le code QR et confirmez l'invite pour vous connecter."
      }
    },
    extension: {
      step1: {
        title: "Installez l'extension Trust Wallet",
        description: "Cliquez en haut à droite de votre navigateur et épinglez Trust Wallet pour un accès facile."
      },
      step2: {
        title: "Créer ou importer un portefeuille",
        description: "Créer un nouveau portefeuille ou en importer un existant."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré Trust Wallet, cliquez ci-dessous pour rafraîchir le navigateur et charger l'extension."
      }
    }
  },
  uniswap: {
    qr_code: {
      step1: {
        title: "Ouvrez l'application Uniswap",
        description: "Ajoutez Uniswap Wallet à votre écran d'accueil pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créez ou importez un portefeuille",
        description: "Créez un nouveau portefeuille ou importez-en un existant."
      },
      step3: {
        title: "Tapez sur l'icône QR et scannez",
        description: "Touchez l'icône QR sur votre écran d'accueil, scannez le code et confirmez l'invite pour vous connecter."
      }
    }
  },
  zerion: {
    qr_code: {
      step1: {
        title: "Ouvrez l'application Zerion",
        description: "Nous vous recommandons de mettre Zerion sur votre écran d'accueil pour un accès plus rapide."
      },
      step2: {
        title: "Créer ou Importer un portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec personne."
      },
      step3: {
        title: "Appuyez sur le bouton de scan",
        description: "Une fois que vous avez scanné, une invite de connexion apparaîtra pour que vous puissiez connecter votre portefeuille."
      }
    },
    extension: {
      step1: {
        title: "Installer l'extension Zerion",
        description: "Nous recommandons d'épingler Zerion à votre barre des tâches pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créez ou Importez un portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quiconque."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour rafraîchir le navigateur et charger l'extension."
      }
    }
  },
  rainbow: {
    qr_code: {
      step1: {
        title: "Ouvre l'application Rainbow",
        description: "Nous vous recommandons de mettre Rainbow sur votre écran d'accueil pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créez ou Importez un portefeuille",
        description: "Vous pouvez facilement sauvegarder votre portefeuille en utilisant notre fonction de sauvegarde sur votre téléphone."
      },
      step3: {
        title: "Appuyez sur le bouton de scan",
        description: "Après avoir scanné, une invite de connexion apparaîtra pour que vous connectiez votre portefeuille."
      }
    }
  },
  enkrypt: {
    extension: {
      step1: {
        description: "Nous vous recommandons d'épingler Enkrypt Wallet à votre barre des tâches pour un accès plus rapide à votre portefeuille.",
        title: "Installez l'extension Enkrypt Wallet"
      },
      step2: {
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quelqu'un.",
        title: "Créer ou Importer un portefeuille"
      },
      step3: {
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour rafraîchir le navigateur et charger l’extension.",
        title: "Rafraîchissez votre navigateur"
      }
    }
  },
  frame: {
    extension: {
      step1: {
        description: "Nous vous recommandons d'épingler Frame à votre barre des tâches pour un accès plus rapide à votre portefeuille.",
        title: "Installez Frame & l'extension complémentaire"
      },
      step2: {
        description: "Assurez-vous de sauvegarder votre portefeuille à l'aide d'une méthode sécurisée. Ne partagez jamais votre phrase secrète avec personne.",
        title: "Créer ou Importer un portefeuille"
      },
      step3: {
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour rafraîchir le navigateur et charger l'extension.",
        title: "Rafraîchissez votre navigateur"
      }
    }
  },
  one_key: {
    extension: {
      step1: {
        title: "Installez l'extension OneKey Wallet",
        description: "Nous vous recommandons d'épingler OneKey Wallet à votre barre des tâches pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créer ou Importer un portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec personne."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour rafraîchir le navigateur et charger l'extension."
      }
    }
  },
  phantom: {
    extension: {
      step1: {
        title: "Installez l'extension Phantom",
        description: "Nous vous recommandons d'épingler Phantom à votre barre des tâches pour un accès plus facile à votre portefeuille."
      },
      step2: {
        title: "Créer ou Importer un portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase de récupération secrète avec personne."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour rafraîchir le navigateur et charger l'extension."
      }
    }
  },
  rabby: {
    extension: {
      step1: {
        title: "Installez l'extension Rabby",
        description: "Nous recommandons d'épingler Rabby à votre barre des tâches pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créer ou Importer un portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec qui que ce soit."
      },
      step3: {
        title: "Actualisez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour actualiser le navigateur et charger l'extension."
      }
    }
  },
  ronin: {
    qr_code: {
      step1: {
        description: "Nous recommandons de placer Ronin Wallet sur votre écran d'accueil pour un accès plus rapide.",
        title: "Ouvrez l'application Ronin Wallet"
      },
      step2: {
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quiconque.",
        title: "Créer ou Importer un Portefeuille"
      },
      step3: {
        description: "Après avoir numérisé, une invite de connexion apparaîtra pour vous permettre de connecter votre portefeuille.",
        title: "Appuyez sur le bouton de scan"
      }
    },
    extension: {
      step1: {
        description: "Nous recommandons d'épingler Ronin Wallet à votre barre des tâches pour un accès plus rapide à votre portefeuille.",
        title: "Installez l'extension Ronin Wallet"
      },
      step2: {
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quiconque.",
        title: "Créer ou Importer un Portefeuille"
      },
      step3: {
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour actualiser le navigateur et charger l'extension.",
        title: "Rafraîchissez votre navigateur"
      }
    }
  },
  ramper: {
    extension: {
      step1: {
        title: "Installez l'extension Ramper",
        description: "Nous recommandons d'épingler Ramper à votre barre des tâches pour un accès plus facile à votre portefeuille."
      },
      step2: {
        title: "Créer un Portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quiconque."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour actualiser le navigateur et charger l'extension."
      }
    }
  },
  safeheron: {
    extension: {
      step1: {
        title: "Installez l'extension Core",
        description: "Nous recommandons d'épingler Safeheron à votre barre des tâches pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créer ou Importer un portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quelqu'un."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour rafraîchir le navigateur et charger l'extension."
      }
    }
  },
  taho: {
    extension: {
      step1: {
        title: "Installez l'extension Taho",
        description: "Nous vous recommandons d'épingler Taho à votre barre des tâches pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créez ou Importez un portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quelqu'un."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour rafraîchir le navigateur et charger l'extension."
      }
    }
  },
  talisman: {
    extension: {
      step1: {
        title: "Installez l'extension Talisman",
        description: "Nous vous recommandons d'épingler Talisman à votre barre des tâches pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créer ou importer un portefeuille Ethereum",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase de récupération avec personne."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour rafraîchir le navigateur et charger l'extension."
      }
    }
  },
  xdefi: {
    extension: {
      step1: {
        title: "Installez l'extension du portefeuille XDEFI",
        description: "Nous vous recommandons d'épingler XDEFI Wallet à votre barre des tâches pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créer ou Importer un portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec qui que ce soit."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour rafraîchir le navigateur et charger l'extension."
      }
    }
  },
  zeal: {
    extension: {
      step1: {
        title: "Installez l'extension Zeal",
        description: "Nous vous recommandons d'épingler Zeal à votre barre des tâches pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créer ou Importer un Portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quiconque."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour actualiser le navigateur et charger l'extension."
      }
    }
  },
  safepal: {
    extension: {
      step1: {
        title: "Installez l'extension SafePal Wallet",
        description: "Cliquez en haut à droite de votre navigateur et épinglez SafePal Wallet pour un accès facile."
      },
      step2: {
        title: "Créer ou Importer un portefeuille",
        description: "Créez un nouveau portefeuille ou importez-en un existant."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré SafePal Wallet, cliquez ci-dessous pour rafraîchir le navigateur et charger l'extension."
      }
    },
    qr_code: {
      step1: {
        title: "Ouvrez l'application SafePal Wallet",
        description: "Mettez SafePal Wallet sur votre écran d'accueil pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créer ou Importer un Portefeuille",
        description: "Créez un nouveau portefeuille ou importez-en un existant."
      },
      step3: {
        title: "Appuyez sur WalletConnect dans les paramètres",
        description: "Choisissez Nouvelle Connexion, puis scannez le code QR et confirmez l'invite pour vous connecter."
      }
    }
  },
  desig: {
    extension: {
      step1: {
        title: "Installez l'extension Desig",
        description: "Nous vous recommandons d'épingler Desig à votre barre des tâches pour un accès plus facile à votre portefeuille."
      },
      step2: {
        title: "Créer un Portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quiconque."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour actualiser le navigateur et charger l'extension."
      }
    }
  },
  subwallet: {
    extension: {
      step1: {
        title: "Installez l'extension SubWallet",
        description: "Nous vous recommandons d'épingler SubWallet à votre barre des tâches pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créer ou Importer un Portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase de récupération avec personne."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour actualiser le navigateur et charger l'extension."
      }
    },
    qr_code: {
      step1: {
        title: "Ouvrez l'application SubWallet",
        description: "Nous vous recommandons de mettre SubWallet sur votre écran d'accueil pour un accès plus rapide."
      },
      step2: {
        title: "Créer ou Importer un Portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quiconque."
      },
      step3: {
        title: "Appuyez sur le bouton de scan",
        description: "Après avoir numérisé, une invite de connexion apparaîtra pour vous permettre de connecter votre portefeuille."
      }
    }
  },
  clv: {
    extension: {
      step1: {
        title: "Installez l'extension CLV Wallet",
        description: "Nous vous recommandons d'épingler CLV Wallet à votre barre des tâches pour un accès plus rapide à votre portefeuille."
      },
      step2: {
        title: "Créer ou Importer un Portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quiconque."
      },
      step3: {
        title: "Rafraîchissez votre navigateur",
        description: "Une fois que vous avez configuré votre portefeuille, cliquez ci-dessous pour actualiser le navigateur et charger l'extension."
      }
    },
    qr_code: {
      step1: {
        title: "Ouvrez l'application CLV Wallet",
        description: "Nous vous recommandons de mettre CLV Wallet sur votre écran d'accueil pour un accès plus rapide."
      },
      step2: {
        title: "Créer ou Importer un Portefeuille",
        description: "Assurez-vous de sauvegarder votre portefeuille en utilisant une méthode sécurisée. Ne partagez jamais votre phrase secrète avec quiconque."
      },
      step3: {
        title: "Appuyez sur le bouton de scan",
        description: "Après avoir numérisé, une invite de connexion apparaîtra pour vous permettre de connecter votre portefeuille."
      }
    }
  },
  okto: {
    qr_code: {
      step1: {
        title: "Ouvrez l'application Okto",
        description: "Ajoutez Okto à votre écran d'accueil pour un accès rapide"
      },
      step2: {
        title: "Créer un portefeuille MPC",
        description: "Créez un compte et générez un portefeuille"
      },
      step3: {
        title: "Appuyez sur WalletConnect dans les paramètres",
        description: "Touchez l'icône 'Scan QR' en haut à droite et confirmez l'invite pour vous connecter."
      }
    }
  },
  ledger: {
    desktop: {
      step1: {
        title: "Ouvrez l'application Ledger Live",
        description: "Nous vous recommandons de mettre Ledger Live sur votre écran d'accueil pour un accès plus rapide."
      },
      step2: {
        title: "Configurez votre Ledger",
        description: "Configurez un nouveau Ledger ou connectez-vous à un existant."
      },
      step3: {
        title: "Connecter",
        description: "Une fois que vous avez scanné, une invite de connexion apparaîtra pour que vous puissiez connecter votre portefeuille."
      }
    },
    qr_code: {
      step1: {
        title: "Ouvrez l'application Ledger Live",
        description: "Nous vous recommandons de mettre Ledger Live sur votre écran d'accueil pour un accès plus rapide."
      },
      step2: {
        title: "Configurez votre Ledger",
        description: "Vous pouvez soit synchroniser avec l'application de bureau, soit connecter votre Ledger."
      },
      step3: {
        title: "Scannez le code",
        description: "Appuyez sur WalletConnect puis passez au Scanner. Une fois que vous avez scanné, une invite de connexion apparaîtra pour que vous puissiez connecter votre portefeuille."
      }
    }
  }
}, u = {
  connect_wallet: ue,
  intro: me,
  sign_in: ke,
  connect: be,
  connect_scan: ge,
  connector_group: ye,
  get: fe,
  get_options: he,
  get_mobile: ze,
  get_instructions: ve,
  chains: Ce,
  profile: _e,
  wallet_connectors: we
}, xe = {
  label: "वॉलेट को कनेक्ट करें",
  wrong_network: {
    label: "गलत नेटवर्क"
  }
}, We = {
  title: "वॉलेट क्या है?",
  description: "एक वॉलेट का उपयोग डिजिटल संपत्तियों को भेजने, प्राप्त करने, संग्रहित करने और प्रदर्शित करने के लिए किया जाता है। यह एक नया तरीका भी है लॉग इन करने का, हर वेबसाइट पर नए खाते और पासवर्ड बनाने की जरूरत के बिना।",
  digital_asset: {
    title: "अपने डिजिटल संपत्तियों के लिए एक घर",
    description: "वॉलेट का उपयोग Ethereum और NFTs जैसी डिजिटल संपत्तियों को भेजने, प्राप्त करने, संग्रहित करने और प्रदर्शित करने के लिए किया जाता है."
  },
  login: {
    title: "लॉग इन करने का एक नया तरीका",
    description: "हर वेबसाइट पर नए खाते और पासवर्ड बनाने की बजाय, बस अपना वॉलेट कनेक्ट करें."
  },
  get: {
    label: "एक वॉलेट प्राप्त करें"
  },
  learn_more: {
    label: "और जानें"
  }
}, Ae = {
  label: "अपने खाते की पुष्टि करें",
  description: "जुड़ने को पूरा करने के लिए, आपको अपने बटुए में एक संदेश पर हस्ताक्षर करना होगा ताकि पुष्टि हो सके कि आप इस खाते के मालिक हैं।",
  message: {
    send: "संदेश भेजें",
    preparing: "संदेश तैयार कर रहा है...",
    cancel: "रद्द करें",
    preparing_error: "संदेश तैयार करते समय त्रुटि, कृपया पुनः प्रयास करें!"
  },
  signature: {
    waiting: "हस्ताक्षर का इंतजार कर रहा है...",
    verifying: "हस्ताक्षर की पुष्टि की जा रही है...",
    signing_error: "संदेश पर हस्ताक्षर करते समय त्रुटि, कृपया पुनः प्रयास करें!",
    verifying_error: "हस्ताक्षर की पुष्टि में त्रुटि, कृपया पुनः प्रयास करें!",
    oops_error: "ओह, कुछ गलत हो गया!"
  }
}, qe = {
  label: "कनेक्ट करें",
  title: "वॉलेट को कनेक्ट करें",
  new_to_ethereum: {
    description: "Ethereum वॉलेट्स में नए हैं?",
    learn_more: {
      label: "और जानें"
    }
  },
  learn_more: {
    label: "और जानें।"
  },
  recent: "हाल ही में",
  status: {
    opening: "{wallet}खोल रहा है...",
    connecting: "जोड़ रहा है",
    connect_mobile: "जारी रखें {wallet}",
    not_installed: "{wallet} स्थापित नहीं है",
    not_available: "{wallet} उपलब्ध नहीं है",
    confirm: "एक्सटेंशन में कनेक्शन की पुष्टि करें",
    confirm_mobile: "वॉलेट में कनेक्शन अनुरोध स्वीकार करें"
  },
  secondary_action: {
    get: {
      description: "क्या आपके पास {wallet}नहीं है ?",
      label: "प्राप्त करें"
    },
    install: {
      label: "स्थापित करें"
    },
    retry: {
      label: "पुनः प्रयास करें"
    }
  },
  walletconnect: {
    description: {
      full: "क्या आपको आधिकारिक WalletConnect मोडल की आवश्यकता है?",
      compact: "क्या आपको WalletConnect मोडल की आवश्यकता है?"
    },
    open: {
      label: "खोलें"
    }
  }
}, Re = {
  title: "स्कैन करें विथ {wallet}",
  fallback_title: "अपने फोन से स्कैन करें"
}, Be = {
  installed: "स्थापित",
  recommended: "अनुशंसित",
  other: "अन्य",
  popular: "लोकप्रिय",
  more: "अधिक",
  others: "अन्य लोग"
}, Te = {
  title: "एक वॉलेट प्राप्त करें",
  action: {
    label: "प्राप्त करें"
  },
  mobile: {
    description: "मोबाइल वॉलेट"
  },
  extension: {
    description: "ब्राउज़र एक्सटेंशन"
  },
  mobile_and_extension: {
    description: "मोबाइल वॉलेट और एक्सटेंशन"
  },
  mobile_and_desktop: {
    description: "मोबाइल और डेस्कटॉप वॉलेट"
  },
  looking_for: {
    title: "क्या आपको जो चाहिए वह नहीं मिल रहा है?",
    mobile: {
      description: "मुख्य स्क्रीन पर एक बटुआ चुनें ताकि आप एक अलग बटुआ प्रदाता के साथ शुरू कर सकें।"
    },
    desktop: {
      compact_description: "मुख्य स्क्रीन पर एक बटुआ चुनें ताकि आप एक अलग बटुआ प्रदाता के साथ शुरू कर सकें।",
      wide_description: "बाएं एक बटुआ चुनें ताकि आप एक अलग बटुआ प्रदाता के साथ शुरू कर सकें।"
    }
  }
}, Ie = {
  title: "{wallet}के साथ शुरू करें",
  short_title: "{wallet}प्राप्त करें",
  mobile: {
    title: "मोबाइल के लिए {wallet}",
    description: "मोबाइल वॉलेट का उपयोग करके Ethereum की दुनिया का अन्वेषण करें।",
    download: {
      label: "ऐप प्राप्त करें"
    }
  },
  extension: {
    title: "{wallet} के लिए {browser}",
    description: "अपने पसंदीदा वेब ब्राउज़र से अपने वॉलेट तक पहुंचें।",
    download: {
      label: "करें जोड़ें {browser}"
    }
  },
  desktop: {
    title: "{wallet} के लिए {platform}",
    description: "अपने शक्तिशाली डेस्कटॉप से आपके वॉलेट की स्वतंत्रता द्वारा पहुंच।",
    download: {
      label: "को जोड़ें {platform}"
    }
  }
}, Oe = {
  title: "स्थापित करें {wallet}",
  description: "iOS या Android पर डाउनलोड करने के लिए अपने फोन से स्कैन करें",
  continue: {
    label: "जारी रखें"
  }
}, Se = {
  mobile: {
    connect: {
      label: "जोड़ें"
    },
    learn_more: {
      label: "और जानें"
    }
  },
  extension: {
    refresh: {
      label: "ताज़ा करें"
    },
    learn_more: {
      label: "और जानें"
    }
  },
  desktop: {
    connect: {
      label: "कनेक्ट करें"
    },
    learn_more: {
      label: "और जानें"
    }
  }
}, Pe = {
  title: "नेटवर्क स्विच करें",
  wrong_network: "गलत नेटवर्क का पता चला, जारी रखने के लिए स्विच करें या कनेक्ट करें।",
  confirm: "वॉलेट में पुष्टि करें",
  switching_not_supported: "आपका वॉलेट नेटवर्क्स को {appName}से स्विच करना समर्थन नहीं करता . बजाय अपने वॉलेट के भीतर से नेटवर्क स्विच करने का प्रयास करें।",
  switching_not_supported_fallback: "आपका वॉलेट इस एप से नेटवर्क्स स्विच करने का समर्थन नहीं करता। बजाय उसके, अपना वॉलेट द्वारा नेटवर्क्स स्विच करने की कोशिश करें।",
  disconnect: "डिकनेक्ट",
  connected: "कनेक्ट किया गया"
}, Ne = {
  disconnect: {
    label: "डिकनेक्ट"
  },
  copy_address: {
    label: "पता कॉपी करें",
    copied: "कॉपी कर दिया गया!"
  },
  explorer: {
    label: "एक्सप्लोरर पर अधिक देखें"
  },
  transactions: {
    description: "{appName} लेन - देन यहां दिखाई देंगे...",
    description_fallback: "आपके लेन-देन यहां दिखाई देंगे...",
    recent: {
      title: "हाल के लेन - देन"
    },
    clear: {
      label: "सभी को हटाएं"
    }
  }
}, Le = {
  argent: {
    qr_code: {
      step1: {
        description: "अपने वॉलेट को जल्दी से एक्सेस करने के लिए आपके होम स्क्रीन पर Argent डालें।",
        title: "Argent ऐप खोलें"
      },
      step2: {
        description: "वॉलेट और उपयोगकर्ता नाम बनाएं, या मौजूदा वॉलेट को आयात करें।",
        title: "वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "जैसे ही आप स्कैन करेंगे, एक कनेक्शन संकेत आपके वॉलेट को कनेक्ट करने के लिए प्रकट होगा।",
        title: "QR स्कैन बटन को टैप करें"
      }
    }
  },
  bifrost: {
    qr_code: {
      step1: {
        description: "हम आपको सलाह देते हैं कि Bifrost Wallet को अपने होम स्क्रीन पर लगाएं, ताकि त्वरित एक्सेस को सुनिश्चित किया जा सके।",
        title: "Bifrost Wallet ऐप को खोलें"
      },
      step2: {
        description: "अपने रिकवरी फ़्रेज़ का उपयोग करके एक वॉलेट बनाएं या इंपोर्ट करें।",
        title: "वॉलेट बनाएं या इंपोर्ट करें"
      },
      step3: {
        description: "स्कैन करने के बाद, आपके वॉलेट को कनेक्ट करने के लिए एक कनेक्शन संकेत दिखाई देगा।",
        title: "स्कैन बटन को टैप करें"
      }
    }
  },
  bitget: {
    qr_code: {
      step1: {
        description: "हम इसे सुझाव देते हैं कि आप अपने होम स्क्रीन पर Bitget वॉलेट को रखें ताकि जल्दी एक्सेस कर सकें।",
        title: "Bitget वॉलेट एप को खोलें"
      },
      step2: {
        description: "अपने वॉलेट का बैकअप एक सुरक्षित तरीके से लेने के लिए सुनिश्चित करें। किसी के साथ भी अपना गुप्त वाक्यांश साझा न करें।",
        title: "वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "स्कैन करने के बाद, आपके वॉलेट को कनेक्ट करने का एक संकेत दिखाई देगा।",
        title: "स्कैन बटन पर टैप करें"
      }
    },
    extension: {
      step1: {
        description: "हम इसे सुझाव देते हैं कि आप Bitget वॉलेट को आपके टास्कबार में पिन करें ताकि आपके वॉलेट तक जल्दी पहुंच सकें।",
        title: "Bitget Wallet एक्सटेंशन स्थापित करें"
      },
      step2: {
        description: "सुनिश्चित करें कि आप अपने वॉलेट का बैकअप किसी सुरक्षित तरीके से ले रहे हैं। अपनी गुप्त वाक्यांश को कभी किसी के साथ साझा न करें।",
        title: "एक वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "एक बार जब आप अपना वॉलेट सेटअप कर लेते हैं, तो नीचे क्लिक करें ताकि ब्राउज़र को ताज़ा करें और एक्सटेंशन लोड करें।",
        title: "अपने ब्राउज़र को ताज़ा करें"
      }
    }
  },
  bitski: {
    extension: {
      step1: {
        description: "हम आपको अपने वॉलेट तक जल्दी पहुंचने के लिए Bitski को अपने टास्कबार में पिन करने की सलाह देते हैं।",
        title: "Bitski एक्सटेंशन स्थापित करें"
      },
      step2: {
        description: "सुनिश्चित करें कि आप एक सुरक्षित तरीके से अपने वॉलेट का बैकअप बना रहे हैं। कभी भी किसी के साथ अपने गोपनीय वाक्यांश को साझा न करें।",
        title: "एक वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "एक बार जब आप अपना वॉलेट सेट कर लेते हैं, तो ब्राउज़र को ताज़ा करने और एक्सटेंशन को लोड करने के लिए नीचे क्लिक करें।",
        title: "अपने ब्राउज़र को ताज़ा करें"
      }
    }
  },
  bloom: {
    desktop: {
      step1: {
        title: "Bloom वॉलेट ऐप खोलें",
        description: "आपकी सुविधा के लिए हम Bloom वॉलेट को होम स्क्रीन पर रखने की सलाह देते हैं।"
      },
      step2: {
        description: "अपने रिकवरी फ़्रेज़ का उपयोग करके एक वॉलेट बनाएं या इंपोर्ट करें।",
        title: "वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "जब आपके पास वॉलेट हो, तो Bloom के माध्यम से जुड़ने के लिए Connect पर क्लिक करें। ऐप में एक कनेक्शन प्रॉम्प्ट दिखाई देगा जिसे आपको कनेक्शन की पुष्टि करनी होगी।",
        title: "Connect पर क्लिक करें"
      }
    },
    qr_code: {
      step1: {
        title: "Bloom वॉलेट ऐप खोलें",
        description: "आपकी सुविधा के लिए हम Bloom वॉलेट को होम स्क्रीन पर रखने की सलाह देते हैं।"
      },
      step2: {
        description: "अपने रिकवरी फ़्रेज़ का उपयोग करके एक वॉलेट बनाएं या इंपोर्ट करें।",
        title: "वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "जब आपके पास वॉलेट हो, तो Bloom के माध्यम से जुड़ने के लिए Connect पर क्लिक करें। ऐप में एक कनेक्शन प्रॉम्प्ट दिखाई देगा जिसे आपको कनेक्शन की पुष्टि करनी होगी।",
        title: "Connect पर क्लिक करें"
      }
    }
  },
  coin98: {
    qr_code: {
      step1: {
        description: "हम आपके वॉलेट तक तेजी से पहुंचने के लिए अपने होम स्क्रीन पर Coin98 वॉलेट रखने की सलाह देते हैं।",
        title: "Coin98 वॉलेट ऐप को खोलें"
      },
      step2: {
        description: "आप अपने फोन पर हमारे बैकअप फीचर का उपयोग करके आसानी से अपने वॉलेट का बैकअप कर सकते हैं।",
        title: "वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "स्कैन करने के बाद, आपके वॉलेट को कनेक्ट करने के लिए एक कनेक्शन प्रांप्ट दिखाई देगा।",
        title: "WalletConnect बटन पर टैप करें"
      }
    },
    extension: {
      step1: {
        description: "अपने ब्राउज़र के ऊपरी दाएं हिस्से पर क्लिक करें और आसानी से पहुंच के लिए Coin98 वॉलेट को पिन करें।",
        title: "Coin98 वॉलेट एक्सटेंशन स्थापित करें"
      },
      step2: {
        description: "नया बटुआ बनाएं या मौजूदा को आयात करें।",
        title: "एक बटुआ बनाएं या आयात करें"
      },
      step3: {
        description: "एक बार जब आप Coin98 वॉलेट सेट करते हैं, तो नीचे क्लिक करके ब्राउजर को ताजा करें और एक्सटेंशन को लोड करें।",
        title: "अपने ब्राउज़र को ताज़ा करें"
      }
    }
  },
  coinbase: {
    qr_code: {
      step1: {
        description: "हम आपको सलाह देते हैं कि आपकी मुख्य बिल्ड स्क्रीन पर Coinbase वॉलेट को रखें जिससे आपकी पहुंच तेज हो।",
        title: "Coinbase वॉलेट ऐप खोलें"
      },
      step2: {
        description: "आप बादल बैकअप सुविधा का उपयोग करके आसानी से अपने वॉलेट का बैकअप ले सकते हैं।",
        title: "एक वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "जैसे ही आप स्कैन करते हैं, आपको अपने वॉलेट से कनेक्ट करने के लिए एक कनेक्शन संकेत दिखाई देगा।",
        title: "स्कैन बटन को छूना"
      }
    },
    extension: {
      step1: {
        description: "हमारा सिफारिश है कि आप अपने वॉलेट तक जल्दी पहुंचने के लिए Coinbase वॉलेट को अपने टास्कबार पर पिन पर रखें।",
        title: "Coinbase वॉलेट एक्सटेंशन स्थापित करें"
      },
      step2: {
        description: "सुरक्षित विधि का उपयोग करके अपने बटुए का बैकअप लेना सुनिश्चित करें। अपना गुप्त पुनर्प्राप्ति वाक्यांश कभी भी किसी के साथ साझा न करें।",
        title: "वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "एक बार जब आप अपना वॉलेट सेट अप करते हैं, तो ब्राउज़र को ताजगी देने और एक्सटेंशन को लोड करने के लिए नीचे क्लिक करें.",
        title: "अपना ब्राउज़र ताजा करें"
      }
    }
  },
  core: {
    qr_code: {
      step1: {
        description: "हम आपकी वॉलेट के तेज एक्सेस के लिए Core को आपके होम स्क्रीन पर डालने की सलाह देते हैं.",
        title: "Core एप खोलें"
      },
      step2: {
        description: "आप आसानी से अपने फ़ोन पर हमारे बैकअप फीचर का उपयोग करके अपना वॉलेट बैकअप कर सकते हैं.",
        title: "वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "स्कैन करने के बाद, आपके वॉलेट को कनेक्ट करने के लिए आपके लिए कनेक्शन प्राम्प्ट प्रकट होगा.",
        title: "WalletConnect बटन को छूने के साथ"
      }
    },
    extension: {
      step1: {
        description: "हम अपने वॉलेट के लिए तेज एक्सेस के लिए कोर को अपने टास्कबार में पिन करने की सिफारिश करते हैं।",
        title: "कोर एक्सटेंशन स्थापित करें"
      },
      step2: {
        description: "सुनिश्चित करें कि आप अपने वॉलेट का बैकअप एक सुरक्षित तरीके से ले। कभी भी किसी के साथ अपनी गुप्त वाक्यांश साझा न करें।",
        title: "एक वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "एक बार जब आप अपने वॉलेट की स्थापना कर लें, तो नीचे क्लिक करें ताकि ब्राउज़र को ताज़ा कर सकें और एक्सटेंशन को लोड कर सकें।",
        title: "अपने ब्राउज़र को ताज़ा करें"
      }
    }
  },
  fox: {
    qr_code: {
      step1: {
        description: "हम FoxWallet को अपने होम स्क्रीन पर रखने की सिफारिश करते हैं ताकि त्वरित एक्सेस मिल सके।",
        title: "FoxWallet ऐप खोलें"
      },
      step2: {
        description: "सुनिश्चित करें कि आप एक सुरक्षित तरीके का उपयोग करके अपने वॉलेट का बैकअप ले रहे हैं। कभी भी किसी के साथ अपना गुप्त वाक्यांश साझा न करें।",
        title: "वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "जब आप स्कैन करेंगे, तो आपके वॉलेट को कनेक्ट करने के लिए एक कनेक्शन संकेत प्रकट होगा।",
        title: "स्कैन बटन पर टैप करें"
      }
    }
  },
  frontier: {
    qr_code: {
      step1: {
        description: "हमारी सिफारिश है कि आप अपने होम स्क्रीन पर फ्रंटियर वॉलेट रखें जिससे कि आपको त्वरित पहुंच मिले।",
        title: "फ्रंटियर वॉलेट ऐप को खोलें"
      },
      step2: {
        description: "सुनिश्चित करें कि आप एक सुरक्षित तरीके का उपयोग करके अपने वॉलेट का बैकअप ले रहे हैं। कभी भी किसी के साथ अपना गुप्त वाक्यांश साझा न करें।",
        title: "वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "जब आप स्कैन करते हैं, तो आपके वॉलेट को कनेक्ट करने के लिए एक कनेक्शन संकेत प्रकट होगा।",
        title: "स्कैन बटन को टैप करें"
      }
    },
    extension: {
      step1: {
        description: "हम आपके वॉलेट की तेजी से पहुंच के लिए Frontier Wallet को अपने टास्कबार में पिन करने की सिफारिश करते हैं।",
        title: "Frontier Wallet एक्सटेंशन इंस्टॉल करें"
      },
      step2: {
        description: "सुनिश्चित करें कि आप एक सुरक्षित तरीके से अपना वॉलेट बैकअप कर रहे हैं। कभी भी किसी के साथ अपना गुप्त वाक्यांश साझा न करें।",
        title: "वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "वॉलेट सेटअप होने के बाद, ब्राउज़र को रिफ्रेश करने के लिए नीचे क्लिक करें और एक्सटेंशन लोड करें।",
        title: "अपना ब्राउज़र रिफ्रेश करें"
      }
    }
  },
  im_token: {
    qr_code: {
      step1: {
        title: "imToken ऐप खोलें",
        description: "अपने वॉलेट के तेजी से पहुँच के लिए imToken एप्लीकेशन को अपने होम स्क्रीन पर रखें।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "एक नया वॉलेट बनाएं या मौजूदा एक को आयात करें।"
      },
      step3: {
        title: "ऊपरी दाएं कोने में स्कैनर आइकॉन पर टैप करें",
        description: "नया कनेक्शन चुनें, फिर QR कोड स्कैन करें और कनेक्ट करने के लिए प्रॉम्प्ट की पुष्टि करें।"
      }
    }
  },
  kresus: {
    qr_code: {
      step1: {
        title: "Kresus वॉलेट ऐप खोलें",
        description: "अपने वॉलेट तक तेज़ी से पहुँचने के लिए Kresus Wallet को अपने होम स्क्रीन पर जोड़ें।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "नया बटुआ बनाएं या मौजूदा को आयात करें।"
      },
      step3: {
        title: "QR आइकन पर टैप करें और स्कैन करें",
        description: "अपने होमस्क्रीन पर QR आइकन पर टैप करें, कोड स्कैन करें और प्रम्प्ट को कनेक्ट करने की पुष्टि करें।"
      }
    }
  },
  metamask: {
    qr_code: {
      step1: {
        title: "MetaMask ऐप को खोलें",
        description: "हम आपको MetaMask को आपकी होम स्क्रीन पर रखने की सलाह देते हैं, इससे आपको त्वरित पहुँच मिलेगी।"
      },
      step2: {
        title: "एक वॉलेट बनाएं या इम्पोर्ट करें",
        description: "सुरक्षित विधि का उपयोग करके अपने बटुए का बैकअप लेना सुनिश्चित करें। अपना गुप्त वाक्यांश कभी भी किसी के साथ साझा न करें।"
      },
      step3: {
        title: "स्कैन बटन पर टैप करें",
        description: "स्कैन करने के बाद, आपके वॉलेट को कनेक्ट करने के लिए एक कनेक्शन प्रॉम्प्ट दिखाई देगा।"
      }
    },
    extension: {
      step1: {
        title: "MetaMask एक्सटेंशन स्थापित करें",
        description: "हम अपने वॉलेट तक जल्दी से पहुँचने के लिए MetaMask को अपने टास्कबार में पिन करने की सलाह देते हैं।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "अपने वॉलेट का बैकअप एक सुरक्षित तरीके से लेना सुनिश्चित करें। अपनी गुप्त वाक्यांश को किसी के साथ शेयर न करें।"
      },
      step3: {
        title: "अपना ब्राउज़र ताज़ा करें",
        description: "एक बार जब आप अपना वॉलेट सेट अप करते हैं, तो ब्राउजर को ताज़ा करने और एक्सटेंशन को लोड करने के लिए नीचे क्लिक करें।"
      }
    }
  },
  okx: {
    qr_code: {
      step1: {
        title: "OKX Wallet ऐप खोलें",
        description: "हम आपको OKX Wallet को अपने होम स्क्रीन पर रखने की सलाह देते हैं, जिससे आप जल्दी से पहुंच सकें।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "अपने वॉलेट का बैकअप एक सुरक्षित तरीके से लेने का यकीन करें। कभी भी किसी के साथ अपने गुप्त वाक्यांश साझा न करें।"
      },
      step3: {
        title: "स्कैन बटन पर टैप करें",
        description: "जब आप स्कैन करते हैं, तो आपके वॉलेट को कनेक्ट करने के लिए एक कनेक्शन संकेत प्रकट होगा।"
      }
    },
    extension: {
      step1: {
        title: "OKX वॉलेट एक्सटेंशन स्थापित करें",
        description: "हम अपने वॉलेट तक तेज़ी से पहुंचने के लिए आपको OKX वॉलेट को अपने कार्यपट्टी में पिन करने की सलाह देते हैं।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "अपने वॉलेट का बैकअप एक सुरक्षित तरीके से लेने का यकीन करें। कभी भी किसी के साथ अपने गुप्त वाक्यांश साझा न करें।"
      },
      step3: {
        title: "अपने ब्राउज़र को ताज़ा करें",
        description: "जब आप अपना वॉलेट सेट अप कर लेते हैं, तो नीचे क्लिक करके ब्राउज़र को ताजा करें और एक्सटेंशन को लोड करें।"
      }
    }
  },
  omni: {
    qr_code: {
      step1: {
        title: "Omni ऐप को खोलें",
        description: "अपने वॉलेट तक अधिक जल्दी पहुंचने के लिए Omni को अपने होम स्क्रीन पर जोड़ें।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "एक नया वॉलेट बनाएं या मौजूदा एक को आयात करें।"
      },
      step3: {
        title: "QR आइकन पर टैप करें और स्कैन करें",
        description: "अपने होम स्क्रीन पर QR आइकन पर टैप करें, कोड स्कैन करें और कनेक्ट करने के लिए प्रॉम्प्ट की पुष्टि करें।"
      }
    }
  },
  token_pocket: {
    qr_code: {
      step1: {
        title: "TokenPocket ऐप को खोलें",
        description: "हम आपको TokenPocket को अपने होम स्क्रीन पर रखने की सलाह देते हैं ताकि आपको तेज एक्सेस मिल सके।"
      },
      step2: {
        title: "एक वॉलेट बनाएँ या आयात करें",
        description: "सुरक्षित विधि का उपयोग करके अपने बटुए का बैकअप लेना सुनिश्चित करें। अपना गुप्त वाक्यांश कभी भी किसी के साथ साझा न करें।"
      },
      step3: {
        title: "स्कैन बटन पर टैप करें",
        description: "एक बार स्कैन करने के बाद, आपके लिए एक कनेक्शन प्रॉम्प्ट प्रकट होगा ताकि आप अपने वॉलेट को कनेक्ट कर सकें।"
      }
    },
    extension: {
      step1: {
        title: "TokenPocket एक्सटेंशन स्थापित करें",
        description: "हम अपने वॉलेट तक त्वरित पहुंच के लिए TokenPocket को अपने taskbar पर pin करने की सिफारिश करते हैं।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "सुनिश्चित करें कि आप अपने वॉलेट का बैकअप एक सुरक्षित तरीके से लेते हैं। कभी किसी के साथ अपना गुप्त वाक्यांश साझा न करें।"
      },
      step3: {
        title: "अपना ब्राउज़र ताज़ा करें",
        description: "एक बार जब आप अपना वॉलेट सेटअप कर लेते हैं, तो नीचे क्लिक करें ताज़ा ब्राउज़र  लोड करें और एक्सटेंशन अप करें।"
      }
    }
  },
  trust: {
    qr_code: {
      step1: {
        title: "Trust Wallet ऐप खोलें",
        description: "अपने वॉलेट तक तेज़ी से पहुंचने के लिए Trust Wallet को अपने होम स्क्रीन पर रखें।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "एक नया वॉलेट बनाएं या मौजूदा वॉलेट आयात करें।"
      },
      step3: {
        title: "सेटिंग्स में WalletConnect को टैप करें",
        description: "नया कनेक्शन चुनें, फिर QR कोड स्कैन करें और प्रम्प्ट की पुष्टि करें।"
      }
    },
    extension: {
      step1: {
        title: "Trust Wallet एक्सटेंशन को इंस्टॉल करें",
        description: "अपने ब्राउज़र के ऊपरी दाएं कोने पर क्लिक करें और Trust Wallet को आसानी से प्रवेश के लिए पिन करें।"
      },
      step2: {
        title: "एक वॉलेट बनाएं या आयात करें",
        description: "एक नया वॉलेट बनाएं या मौजूदा वॉलेट आयात करें।"
      },
      step3: {
        title: "अपने ब्राउज़र को ताज़ा करें",
        description: "एक बार Trust Wallet सेट अप करने के बाद, नीचे क्लिक करें ब्राउज़र को ताज़ा करने और एक्सटेंशन लोड करने के लिए।"
      }
    }
  },
  uniswap: {
    qr_code: {
      step1: {
        title: "Uniswap ऐप को खोलें",
        description: "अपने होम स्क्रीन पर Uniswap वॉलेट जोड़ें, इससे आपके वॉलेट तक तेजी से पहुंचने की सुविधा होगी।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "एक नया वॉलेट बनाएं या मौजूदा वॉलेट को आयात करें।"
      },
      step3: {
        title: "QR आइकन पर टैप करें और स्कैन करें",
        description: "अपने होमस्क्रीन पर QR आइकन पर टैप करें, कोड स्कैन करें और प्रम्प्ट को कनेक्ट करने की पुष्टि करें।"
      }
    }
  },
  zerion: {
    qr_code: {
      step1: {
        title: "Zerion ऐप को खोलें",
        description: "हम सलाह देते हैं कि आप Zerion को अपने होम स्क्रीन पर रखें, इससे तेजी से एक्सेस करने में आसानी होगी।"
      },
      step2: {
        title: "एक वॉलेट बनाएं या आयात करें",
        description: "सुरक्षित विधि का उपयोग करके अपने बटुए का बैकअप लेना सुनिश्चित करें। अपना गुप्त वाक्यांश कभी भी किसी के साथ साझा न करें।"
      },
      step3: {
        title: "स्कैन बटन को टैप करें",
        description: "आप स्कैन करने के बाद, एक कनेक्शन प्रोम्प्ट आपके बटुए को कनेक्ट करने के लिए प्रकट होगा।"
      }
    },
    extension: {
      step1: {
        title: "Zerion एक्सटेंशन स्थापित करें",
        description: "हमारी सिफारिश है कि आप अपने वॉलेट तक जल्दी पहुँचने के लिए Zerion को अपने टास्कबार में पिन करें।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "सुनिश्चित करें कि आप एक सुरक्षित विधि का उपयोग करके अपने वॉलेट का बैकअप ले रहे हैं। अपना गुप्त वाक्य कभी किसी के साथ साझा न करें।"
      },
      step3: {
        title: "अपना ब्राउज़र ताज़ा करें",
        description: "एक बार जब आप अपने वॉलेट की स्थापना कर लें, तो ब्राउज़र को ताज़ा करने और एक्सटेंशन को लोड करने के लिए नीचे क्लिक करें।"
      }
    }
  },
  rainbow: {
    qr_code: {
      step1: {
        title: "Rainbow ऐप को खोलें",
        description: "हम अपने वॉलेट के तेज एक्सेस के लिए Rainbow को अपने होम स्क्रीन पर रखने की सलाह देते हैं।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "आप अपने फ़ोन पर हमारे बैकअप फीचर का उपयोग करके अपने वॉलेट का बैकअप आसानी से ले सकते हैं।"
      },
      step3: {
        title: "स्कैन बटन पर टैप करें",
        description: "जब आप स्कैन करते हैं, तो आपकी वॉलेट से कनेक्ट करने के लिए एक कनेक्शन संकेत दिखाई देगा।"
      }
    }
  },
  enkrypt: {
    extension: {
      step1: {
        description: "हम अपनी वॉलेट तक तेज़ी से पहुँच के लिए Enkrypt वॉलेट को अपने टास्कबार में पिन करने की सलाह देते हैं।",
        title: "Enkrypt वॉलेट एक्सटेंशन स्थापित करें"
      },
      step2: {
        description: "सुनिश्चित करें कि आप अपनी वॉलेट का बैकअप एक सुरक्षित तरीके से ले। अपनी गुप्त वाक्यांश को कभी भी किसी के साथ साझा न करें।",
        title: "एक वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "एक बार जब आप अपनी वॉलेट सेट कर लें, तो नीचे क्लिक करें ब्राउज़र को ताज़ा करने और एक्सटेंशन लोड करने के लिए।",
        title: "अपने ब्राउज़र को ताज़ा करें"
      }
    }
  },
  frame: {
    extension: {
      step1: {
        description: "हम अपनी वॉलेट तक तेज़ी से पहुँच के लिए Frame को अपने टास्कबार में पिन करने की सलाह देते हैं।",
        title: "Frame और साथी एक्सटेंशन स्थापित करें"
      },
      step2: {
        description: "अपने वॉलेट का बैकअप एक सुरक्षित तरीके से लेना सुनिश्चित करें। कभी भी अपनी गुप्त वाक्यांश को किसी के साथ साझा न करें।",
        title: "वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "एक बार जब आप अपने वॉलेट की सेटअप कर लेते हैं, तो नीचे क्लिक करके ब्राउज़र को ताज़ा करें और एक्सटेंशन को लोड करें।",
        title: "अपना ब्राउज़र ताज़ा करें"
      }
    }
  },
  one_key: {
    extension: {
      step1: {
        title: "OneKey Wallet एक्सटेंशन स्थापित करें",
        description: "हम आपको अपने वॉलेट की तेज एक्सेस के लिए OneKey Wallet को अपने टास्कबार में पिन करने की सलाह देते हैं।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "सुनिश्चित करें कि आप अपने वॉलेट का बैकअप एक सुरक्षित तरीके से ले रहे हैं। अपना गुप्त वाक्यांश किसी के साथ भी साझा न करें।"
      },
      step3: {
        title: "अपने ब्राउज़र को ताज़ा करें",
        description: "एक बार जब आप अपना वॉलेट सेट अप कर लेते हैं, तो ब्राउज़र को ताज़ा करने और एक्सटेंशन को लोड करने के लिए नीचे क्लिक करें।"
      }
    }
  },
  phantom: {
    extension: {
      step1: {
        title: "फैंटम एक्सटेंशन स्थापित करें",
        description: "हम आपके वॉलेट के आसान उपयोग के लिए फैंटम को अपने टास्कबार में पिन करने की सलाह देते हैं।"
      },
      step2: {
        title: "एक वॉलेट बनाएं या आयात करें",
        description: "सुनिश्चित करें कि आप अपने वॉलेट का बैकअप एक सुरक्षित तरीके से ले रहे हैं। अपना गुप्त वसूली वाक्यांश किसी के साथ भी साझा न करें।"
      },
      step3: {
        title: "अपने ब्राउज़र को ताज़ा करें",
        description: "एक बार जब आप अपना वॉलेट सेट कर लें, तो ब्राउज़र को ताजगी देने और एक्सटेंशन को लोड करने के लिए नीचे क्लिक करें।"
      }
    }
  },
  rabby: {
    extension: {
      step1: {
        title: "Rabby एक्सटेंशन स्थापित करें",
        description: "हम आपको सलाह देते हैं कि अपने वॉलेट की जल्दी से पहुँच के लिए Rabby को अपने टास्कबार में पिन करें।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "सुनिश्चित करें कि आप अपने वॉलेट का बैकअप एक सुरक्षित तरीके से लेते हैं। कभी भी किसी के साथ अपना गुप्त वाक्यांश साझा न करें।"
      },
      step3: {
        title: "अपना ब्राउज़र ताज़ा करें",
        description: "जब आप अपना वॉलेट सेट अप कर लेते हैं, तो ब्राउज़र को ताज़ा करने और एक्सटेंशन लोड करने के लिए नीचे क्लिक करें।"
      }
    }
  },
  ronin: {
    qr_code: {
      step1: {
        description: "हम आपके वॉलेट तक जल्दी पहुँच के लिए Ronin Wallet को आपके होम स्क्रीन पर डालने की सलाह देते हैं।",
        title: "Ronin Wallet ऐप खोलें"
      },
      step2: {
        description: "अपने वॉलेट का बैकअप एक सुरक्षित तरीके से लेने के लिए सुनिश्चित करें। किसी के साथ भी अपना गुप्त वाक्यांश साझा न करें।",
        title: "वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "जैसे ही आप स्कैन करेंगे, एक कनेक्शन संकेत आपके वॉलेट को कनेक्ट करने के लिए प्रकट होगा।",
        title: "स्कैन बटन को टैप करें"
      }
    },
    extension: {
      step1: {
        description: "अपने वॉलेट तक जल्दी पहुँच के लिए हम Ronin Wallet को आपके टास्कबार पर पिन करने की सलाह देते हैं।",
        title: "Ronin Wallet एक्सटेंशन इंस्टॉल करें"
      },
      step2: {
        description: "अपने वॉलेट का बैकअप एक सुरक्षित तरीके से लेने के लिए सुनिश्चित करें। किसी के साथ भी अपना गुप्त वाक्यांश साझा न करें।",
        title: "वॉलेट बनाएं या आयात करें"
      },
      step3: {
        description: "एक बार जब आप अपना वॉलेट सेटअप कर लेते हैं, तो नीचे क्लिक करें ताकि ब्राउज़र को ताज़ा करें और एक्सटेंशन लोड करें।",
        title: "अपने ब्राउज़र को ताज़ा करें"
      }
    }
  },
  ramper: {
    extension: {
      step1: {
        title: "Ramper एक्सटेंशन इंस्टॉल करें",
        description: "अपने वॉलेट तक आसान पहुँच के लिए हम Ramper को आपके टास्कबार पर पिन करने की सलाह देते हैं।"
      },
      step2: {
        title: "एक वॉलेट बनाएँ",
        description: "अपने वॉलेट का बैकअप एक सुरक्षित तरीके से लेने के लिए सुनिश्चित करें। किसी के साथ भी अपना गुप्त वाक्यांश साझा न करें।"
      },
      step3: {
        title: "अपने ब्राउज़र को ताज़ा करें",
        description: "एक बार जब आप अपना वॉलेट सेटअप कर लेते हैं, तो नीचे क्लिक करें ताकि ब्राउज़र को ताज़ा करें और एक्सटेंशन लोड करें।"
      }
    }
  },
  safeheron: {
    extension: {
      step1: {
        title: "कोर एक्सटेंशन स्थापित करें",
        description: "हम आपको सलाह देते हैं कि अपने वॉलेट की जल्दी से पहुँच के लिए Safeheron को अपने टास्कबार में पिन करें।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "सुनिश्चित करें कि आप एक सुरक्षित तरीके से अपना वॉलेट बैकअप कर रहे हैं। कभी भी किसी के साथ अपने गुप्त वाक्यांश को साझा न करें।"
      },
      step3: {
        title: "अपने ब्राउज़र को ताज़ा करें",
        description: "एक बार जब आप अपने वॉलेट को सेट अप करते हैं, तो नीचे क्लिक करें ताकि ब्राउज़र को ताज़ा करें और एक्सटेंशन को लोड करें।"
      }
    }
  },
  taho: {
    extension: {
      step1: {
        title: "ताहो एक्सटेंशन स्थापित करें",
        description: "हम आपके वॉलेट तक त्वरित पहुँच के लिए ताहो को अपने टास्कबार में पिन करने की सलाह देते हैं।"
      },
      step2: {
        title: "एक वॉलेट बनाएँ या आयात करें",
        description: "सुनिश्चित करें कि आप एक सुरक्षित तरीके से अपना वॉलेट बैकअप कर रहे हैं। कभी भी किसी के साथ अपने गुप्त वाक्यांश को साझा न करें।"
      },
      step3: {
        title: "अपने ब्राउज़र को ताज़ा करें",
        description: "एक बार जब आप अपना बटुआ सेट कर लेते हैं, तो नीचे क्लिक करके ब्राउज़र को ताज़ा करें और एक्सटेंशन को लोड करें।"
      }
    }
  },
  talisman: {
    extension: {
      step1: {
        title: "तालिसमान एक्सटेंशन स्थापित करें",
        description: "हम आपके बटुए के त्वरित पहुँच के लिए तालिसमान को अपने टास्कबार में पिन करने की सिफारिश करते हैं।"
      },
      step2: {
        title: "एक ईथेरियम बटुए बनाएं या आयात करें",
        description: "अपने बटुए का बैकअप एक सुरक्षित तरीके से लेने का ध्यान रखें। कभी भी अपनी वसूली वाक्यांश को किसी के साथ साझा न करें।"
      },
      step3: {
        title: "अपने ब्राउज़र को ताज़ा करें",
        description: "एक बार जब आप अपना बटुआ सेट कर लेते हैं, तो नीचे क्लिक करके ब्राउज़र को ताज़ा करें और एक्सटेंशन को लोड करें।"
      }
    }
  },
  xdefi: {
    extension: {
      step1: {
        title: "XDEFI वॉलेट एक्सटेंशन स्थापित करें",
        description: "हम आपकी वॉलेट की जल्दी से पहुँच के लिए XDEFI Wallet को अपने टास्कबार में पिन करने की सलाह देते हैं।"
      },
      step2: {
        title: "एक वॉलेट बनाएं या आयात करें",
        description: "निश्चित रूप से अपने वॉलेट का बैकअप किसी सुरक्षित तरीके से लें। अपनी गोपनीय वाक्यांश को किसी के साथ शेयर ना करें।"
      },
      step3: {
        title: "अपने ब्राउज़र को ताज़ा करें",
        description: "एक बार जब आपने अपनी वॉलेट सेट अप कर ली हो, तो ब्राउज़र को ताज़ा करने और एक्सटेंशन को लोड करने के लिए नीचे क्लिक करें।"
      }
    }
  },
  zeal: {
    extension: {
      step1: {
        title: "Zeal एक्सटेंशन स्थापित करें",
        description: "हम आपको अपने वॉलेट तक जल्दी पहुँचने के लिए Zeal को अपने टास्कबार में पिन करने की सलाह देते हैं।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "अपने वॉलेट का बैकअप एक सुरक्षित तरीके से लेने के लिए सुनिश्चित करें। किसी के साथ भी अपना गुप्त वाक्यांश साझा न करें।"
      },
      step3: {
        title: "अपने ब्राउज़र को ताज़ा करें",
        description: "एक बार जब आप अपना वॉलेट सेटअप कर लेते हैं, तो नीचे क्लिक करें ताकि ब्राउज़र को ताज़ा करें और एक्सटेंशन लोड करें।"
      }
    }
  },
  safepal: {
    extension: {
      step1: {
        title: "SafePal Wallet एक्सटेंशन स्थापित करें",
        description: "अपने ब्राउज़र के शीर्ष दाएं में क्लिक करें और SafePal Wallet को आसानी से पहुंच के लिए पिन करें।"
      },
      step2: {
        title: "एक बटुआ बनाएं या आयात करें",
        description: "नया बटुआ बनाएं या मौजूदा को आयात करें।"
      },
      step3: {
        title: "अपने ब्राउज़र को ताज़ा करें",
        description: "एक बार जब आप SafePal वॉलेट सेट अप कर लेते हैं, तो नीचे क्लिक करें ताकि ब्राउज़र को रिफ्रेश करें और एक्सटेंशन लोड करें।"
      }
    },
    qr_code: {
      step1: {
        title: "SafePal वॉलेट ऐप खोलें",
        description: "अपने वॉलेट तक जल्दी पहुंचने के लिए SafePal वॉलेट को अपनी होम स्क्रीन पर रखें।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "नया बटुआ बनाएं या मौजूदा को आयात करें।"
      },
      step3: {
        title: "सेटिंग्स में WalletConnect को टैप करें",
        description: "नया कनेक्शन चुनें, फिर QR कोड स्कैन करें और कनेक्ट करने के लिए प्रॉम्प्ट की पुष्टि करें।"
      }
    }
  },
  desig: {
    extension: {
      step1: {
        title: "Desig एक्सटेंशन स्थापित करें",
        description: "हम आपको अपने वॉलेट के लिए आसानी से पहुंच पाने के लिए Desig को अपने टास्कबार में पिन करने की सलाह देते हैं।"
      },
      step2: {
        title: "एक वॉलेट बनाएँ",
        description: "अपने वॉलेट का बैकअप एक सुरक्षित तरीके से लेने के लिए सुनिश्चित करें। किसी के साथ भी अपना गुप्त वाक्यांश साझा न करें।"
      },
      step3: {
        title: "अपने ब्राउज़र को ताज़ा करें",
        description: "एक बार जब आप अपना वॉलेट सेटअप कर लेते हैं, तो नीचे क्लिक करें ताकि ब्राउज़र को ताज़ा करें और एक्सटेंशन लोड करें।"
      }
    }
  },
  subwallet: {
    extension: {
      step1: {
        title: "SubWallet एक्सटेंशन स्थापित करें",
        description: "हम आपको अपने वॉलेट तक तेजी से पहुंचने के लिए SubWallet को अपने टास्कबार में पिन करने की सलाह देते हैं।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "अपने बटुए का बैकअप एक सुरक्षित तरीके से लेने का ध्यान रखें। कभी भी अपनी वसूली वाक्यांश को किसी के साथ साझा न करें।"
      },
      step3: {
        title: "अपने ब्राउज़र को ताज़ा करें",
        description: "एक बार जब आप अपना वॉलेट सेटअप कर लेते हैं, तो नीचे क्लिक करें ताकि ब्राउज़र को ताज़ा करें और एक्सटेंशन लोड करें।"
      }
    },
    qr_code: {
      step1: {
        title: "SubWallet ऐप खोलें",
        description: "हम आपको तेजी से पहुंचने के लिए SubWallet को अपने होम स्क्रीन पर रखने की सलाह देते हैं।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "अपने वॉलेट का बैकअप एक सुरक्षित तरीके से लेने के लिए सुनिश्चित करें। किसी के साथ भी अपना गुप्त वाक्यांश साझा न करें।"
      },
      step3: {
        title: "स्कैन बटन को टैप करें",
        description: "जैसे ही आप स्कैन करेंगे, एक कनेक्शन संकेत आपके वॉलेट को कनेक्ट करने के लिए प्रकट होगा।"
      }
    }
  },
  clv: {
    extension: {
      step1: {
        title: "CLV Wallet एक्सटेंशन स्थापित करें",
        description: "हम आपको अपने वॉलेट तक तेजी से पहुंचने के लिए CLV Wallet को अपने टास्कबार में पिन करने की सलाह देते हैं।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "अपने वॉलेट का बैकअप एक सुरक्षित तरीके से लेने के लिए सुनिश्चित करें। किसी के साथ भी अपना गुप्त वाक्यांश साझा न करें।"
      },
      step3: {
        title: "अपने ब्राउज़र को ताज़ा करें",
        description: "एक बार जब आप अपना वॉलेट सेटअप कर लेते हैं, तो नीचे क्लिक करें ताकि ब्राउज़र को ताज़ा करें और एक्सटेंशन लोड करें।"
      }
    },
    qr_code: {
      step1: {
        title: "CLV वॉलेट ऐप खोलें",
        description: "हम तीव्र पहुंच के लिए आपके होम स्क्रीन पर CLV वॉलेट रखने की सलाह देते हैं।"
      },
      step2: {
        title: "वॉलेट बनाएं या आयात करें",
        description: "अपने वॉलेट का बैकअप एक सुरक्षित तरीके से लेने के लिए सुनिश्चित करें। किसी के साथ भी अपना गुप्त वाक्यांश साझा न करें।"
      },
      step3: {
        title: "स्कैन बटन को टैप करें",
        description: "जैसे ही आप स्कैन करेंगे, एक कनेक्शन संकेत आपके वॉलेट को कनेक्ट करने के लिए प्रकट होगा।"
      }
    }
  },
  okto: {
    qr_code: {
      step1: {
        title: "Okto ऐप को खोलें",
        description: "त्वरित पहुंच के लिए अपने होम स्क्रीन पर Okto जोड़ें"
      },
      step2: {
        title: "एक MPC वॉलेट बनाएं",
        description: "एक खाता बनाएं और वॉलेट उत्पन्न करें"
      },
      step3: {
        title: "सेटिंग्स में WalletConnect को टैप करें",
        description: "ऊपरी दाएँ में स्कैन QR आइकन को टैप करें और कनेक्ट करने के लिए संकेत दें।"
      }
    }
  },
  ledger: {
    desktop: {
      step1: {
        title: "लेजर लाइव ऐप खोलें",
        description: "हम तेज एक्सेस के लिए अपने होम स्क्रीन पर Ledger Live डालने की सिफारिश करते हैं।"
      },
      step2: {
        title: "अपना लेजर सेट करें",
        description: "एक नया लेजर सेट अप करें या मौजूदा वाले से कनेक्ट करें।"
      },
      step3: {
        title: "कनेक्ट करें",
        description: "स्कैन करने के बाद, आपके वॉलेट को कनेक्ट करने के लिए एक कनेक्शन प्रॉम्प्ट दिखाई देगा।"
      }
    },
    qr_code: {
      step1: {
        title: "लेजर लाइव ऐप खोलें",
        description: "हम तेज एक्सेस के लिए अपने होम स्क्रीन पर Ledger Live डालने की सिफारिश करते हैं।"
      },
      step2: {
        title: "अपना लेजर सेट करें",
        description: "आप डेस्कटॉप ऐप के साथ सिंक कर सकते हैं या अपने Ledger को कनेक्ट कर सकते हैं।"
      },
      step3: {
        title: "कोड स्कैन करें",
        description: "WalletConnect पर टैप करें फिर स्कैनर पर स्विच करें। जब आप स्कैन करेंगे, तो आपके वॉलेट को कनेक्ट करने के लिए एक कनेक्शन संकेत प्रकट होगा।"
      }
    }
  }
}, m = {
  connect_wallet: xe,
  intro: We,
  sign_in: Ae,
  connect: qe,
  connect_scan: Re,
  connector_group: Be,
  get: Te,
  get_options: Ie,
  get_mobile: Oe,
  get_instructions: Se,
  chains: Pe,
  profile: Ne,
  wallet_connectors: Le
}, De = {
  label: "Hubungkan Dompet",
  wrong_network: {
    label: "Jaringan yang salah"
  }
}, Ke = {
  title: "Apa itu Dompet?",
  description: "Sebuah dompet digunakan untuk mengirim, menerima, menyimpan, dan menampilkan aset digital. Ini juga cara baru untuk masuk, tanpa perlu membuat akun dan kata sandi baru di setiap situs web.",
  digital_asset: {
    title: "Sebuah Rumah untuk Aset Digital Anda",
    description: "Dompet digunakan untuk mengirim, menerima, menyimpan, dan menampilkan aset digital seperti Ethereum dan NFTs."
  },
  login: {
    title: "Cara Baru untuk Masuk",
    description: "Alih-alih membuat akun dan kata sandi baru di setiap situs web, cukup hubungkan dompet Anda."
  },
  get: {
    label: "Dapatkan Dompet"
  },
  learn_more: {
    label: "Pelajari lebih lanjut"
  }
}, Ee = {
  label: "Verifikasi akun Anda",
  description: "Untuk menyelesaikan koneksi, Anda harus menandatangani sebuah pesan di dompet Anda untuk memastikan bahwa Anda adalah pemilik dari akun ini.",
  message: {
    send: "Kirim pesan",
    preparing: "Mempersiapkan pesan...",
    cancel: "Batal",
    preparing_error: "Kesalahan dalam mempersiapkan pesan, silakan coba lagi!"
  },
  signature: {
    waiting: "Menunggu tanda tangan...",
    verifying: "Memverifikasi tanda tangan...",
    signing_error: "Kesalahan dalam menandatangani pesan, silakan coba lagi!",
    verifying_error: "Kesalahan dalam memverifikasi tanda tangan, silakan coba lagi!",
    oops_error: "Ups, ada yang salah!"
  }
}, Me = {
  label: "Hubungkan",
  title: "Hubungkan Dompet",
  new_to_ethereum: {
    description: "Baru dalam dompet Ethereum?",
    learn_more: {
      label: "Pelajari lebih lanjut"
    }
  },
  learn_more: {
    label: "Pelajari lebih lanjut"
  },
  recent: "Terkini",
  status: {
    opening: "Membuka {wallet}...",
    connecting: "Menghubungkan",
    connect_mobile: "Lanjutkan di {wallet}",
    not_installed: "{wallet} tidak terpasang",
    not_available: "{wallet} tidak tersedia",
    confirm: "Konfirmasikan koneksi di ekstensi",
    confirm_mobile: "Terima permintaan koneksi di dompet"
  },
  secondary_action: {
    get: {
      description: "Tidak memiliki {wallet}?",
      label: "DAPATKAN"
    },
    install: {
      label: "PASANG"
    },
    retry: {
      label: "COBA LAGI"
    }
  },
  walletconnect: {
    description: {
      full: "Perlu modal resmi WalletConnect?",
      compact: "Perlu modal WalletConnect?"
    },
    open: {
      label: "BUKA"
    }
  }
}, $e = {
  title: "Pindai dengan {wallet}",
  fallback_title: "Pindai dengan ponsel Anda"
}, Fe = {
  installed: "Terinstal",
  recommended: "Direkomendasikan",
  other: "Lainnya",
  popular: "Populer",
  more: "Lebih Banyak",
  others: "Lainnya"
}, Qe = {
  title: "Dapatkan Dompet",
  action: {
    label: "DAPATKAN"
  },
  mobile: {
    description: "Dompet Mobile"
  },
  extension: {
    description: "Ekstensi Browser"
  },
  mobile_and_extension: {
    description: "Dompet Mobile dan Ekstensi"
  },
  mobile_and_desktop: {
    description: "Dompet Seluler dan Desktop"
  },
  looking_for: {
    title: "Bukan yang Anda cari?",
    mobile: {
      description: "Pilih dompet di layar utama untuk memulai dengan penyedia dompet yang berbeda."
    },
    desktop: {
      compact_description: "Pilih dompet di layar utama untuk memulai dengan penyedia dompet yang berbeda.",
      wide_description: "Pilih dompet di sebelah kiri untuk memulai dengan penyedia dompet yang berbeda."
    }
  }
}, je = {
  title: "Mulai dengan {wallet}",
  short_title: "Dapatkan {wallet}",
  mobile: {
    title: "{wallet} untuk Mobile",
    description: "Gunakan dompet mobile untuk menjelajahi dunia Ethereum.",
    download: {
      label: "Dapatkan aplikasinya"
    }
  },
  extension: {
    title: "{wallet} untuk {browser}",
    description: "Akses dompet Anda langsung dari browser web favorit Anda.",
    download: {
      label: "Tambahkan ke {browser}"
    }
  },
  desktop: {
    title: "{wallet} untuk {platform}",
    description: "Akses dompet Anda secara native dari desktop yang kuat Anda.",
    download: {
      label: "Tambahkan ke {platform}"
    }
  }
}, Ue = {
  title: "Instal {wallet}",
  description: "Pindai dengan ponsel Anda untuk mengunduh di iOS atau Android",
  continue: {
    label: "Lanjutkan"
  }
}, Ve = {
  mobile: {
    connect: {
      label: "Hubungkan"
    },
    learn_more: {
      label: "Pelajari lebih lanjut"
    }
  },
  extension: {
    refresh: {
      label: "Segarkan"
    },
    learn_more: {
      label: "Pelajari lebih lanjut"
    }
  },
  desktop: {
    connect: {
      label: "Hubungkan"
    },
    learn_more: {
      label: "Pelajari lebih lanjut"
    }
  }
}, Xe = {
  title: "Alihkan Jaringan",
  wrong_network: "Jaringan yang salah terdeteksi, alihkan atau diskonek untuk melanjutkan.",
  confirm: "Konfirmasi di Dompet",
  switching_not_supported: "Dompet Anda tidak mendukung pengalihan jaringan dari {appName}. Coba alihkan jaringan dari dalam dompet Anda.",
  switching_not_supported_fallback: "Wallet Anda tidak mendukung penggantian jaringan dari aplikasi ini. Cobalah ganti jaringan dari dalam wallet Anda.",
  disconnect: "Putuskan koneksi",
  connected: "Terkoneksi"
}, Ze = {
  disconnect: {
    label: "Putuskan koneksi"
  },
  copy_address: {
    label: "Salin Alamat",
    copied: "Tersalin!"
  },
  explorer: {
    label: "Lihat lebih banyak di penjelajah"
  },
  transactions: {
    description: "{appName} transaksi akan muncul di sini...",
    description_fallback: "Transaksi Anda akan muncul di sini...",
    recent: {
      title: "Transaksi Terbaru"
    },
    clear: {
      label: "Hapus Semua"
    }
  }
}, Ge = {
  argent: {
    qr_code: {
      step1: {
        description: "Letakkan Argent di layar utama Anda untuk akses lebih cepat ke dompet Anda.",
        title: "Buka aplikasi Argent"
      },
      step2: {
        description: "Buat dompet dan nama pengguna, atau impor dompet yang ada.",
        title: "Buat atau Impor Dompet"
      },
      step3: {
        description: "Setelah Anda memindai, akan muncul petunjuk koneksi untuk Anda menghubungkan dompet Anda.",
        title: "Tekan tombol Scan QR"
      }
    }
  },
  bifrost: {
    qr_code: {
      step1: {
        description: "Kami merekomendasikan untuk menempatkan Bifrost Wallet di layar utama anda untuk akses yang lebih cepat.",
        title: "Buka aplikasi Bifrost Wallet"
      },
      step2: {
        description: "Buat atau impor sebuah dompet menggunakan frasa pemulihan Anda.",
        title: "Buat atau Impor sebuah Wallet"
      },
      step3: {
        description: "Setelah Anda memindai, sebuah pesan akan muncul untuk menghubungkan dompet Anda.",
        title: "Tekan tombol scan"
      }
    }
  },
  bitget: {
    qr_code: {
      step1: {
        description: "Kami menyarankan untuk meletakkan Bitget Wallet di layar depan Anda untuk akses yang lebih cepat.",
        title: "Buka aplikasi Bitget Wallet"
      },
      step2: {
        description: "Pastikan untuk mencadangkan wallet Anda menggunakan metode yang aman. Jangan pernah berbagi frasa rahasia Anda dengan siapa pun.",
        title: "Buat atau Impor Wallet"
      },
      step3: {
        description: "Setelah Anda pindai, akan muncul petunjuk untuk menghubungkan wallet Anda.",
        title: "Tekan tombol pindai"
      }
    },
    extension: {
      step1: {
        description: "Kami menyarankan untuk memasang Bitget Wallet ke taskbar Anda untuk akses yang lebih cepat ke wallet Anda.",
        title: "Instal ekstensi Dompet Bitget"
      },
      step2: {
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah membagikan frasa rahasia Anda kepada siapa pun.",
        title: "Buat atau Impor Dompet"
      },
      step3: {
        description: "Setelah Anda menyiapkan dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi.",
        title: "Segarkan browser Anda"
      }
    }
  },
  bitski: {
    extension: {
      step1: {
        description: "Kami merekomendasikan untuk memasang Bitski ke taskbar Anda untuk akses dompet Anda yang lebih cepat.",
        title: "Pasang ekstensi Bitski"
      },
      step2: {
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah berbagi frasa rahasia Anda dengan siapa pun.",
        title: "Buat atau Impor Dompet"
      },
      step3: {
        description: "Setelah Anda menyiapkan dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi.",
        title: "Segarkan browser Anda"
      }
    }
  },
  bloom: {
    desktop: {
      step1: {
        title: "Buka aplikasi Bloom Wallet",
        description: "Kami merekomendasikan untuk meletakkan Bloom Wallet di layar utama Anda untuk akses yang lebih cepat."
      },
      step2: {
        description: "Buat atau impor sebuah dompet menggunakan frasa pemulihan Anda.",
        title: "Buat atau Impor Dompet"
      },
      step3: {
        description: "Setelah Anda memiliki dompet, klik pada Sambungkan untuk terhubung melalui Bloom. Sebuah permintaan sambungan akan muncul di aplikasi untuk Anda konfirmasi.",
        title: "Klik pada Sambungkan"
      }
    },
    qr_code: {
      step1: {
        title: "Buka aplikasi Bloom Wallet",
        description: "Kami merekomendasikan untuk meletakkan Bloom Wallet di layar utama Anda untuk akses yang lebih cepat."
      },
      step2: {
        description: "Buat atau impor sebuah dompet menggunakan frasa pemulihan Anda.",
        title: "Buat atau Impor Dompet"
      },
      step3: {
        description: "Setelah Anda memiliki dompet, klik pada Sambungkan untuk terhubung melalui Bloom. Sebuah permintaan sambungan akan muncul di aplikasi untuk Anda konfirmasi.",
        title: "Klik pada Sambungkan"
      }
    }
  },
  coin98: {
    qr_code: {
      step1: {
        description: "Kami merekomendasikan untuk menaruh Coin98 Wallet di layar utama Anda untuk akses wallet Anda lebih cepat.",
        title: "Buka aplikasi Coin98 Wallet"
      },
      step2: {
        description: "Anda dapat dengan mudah mencadangkan wallet Anda menggunakan fitur cadangan kami di telepon Anda.",
        title: "Buat atau Impor Wallet"
      },
      step3: {
        description: "Setelah Anda melakukan pemindaian, akan muncul prompt koneksi untuk Anda menghubungkan wallet Anda.",
        title: "Ketuk tombol WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "Klik di pojok kanan atas browser Anda dan sematkan Coin98 Wallet untuk akses mudah.",
        title: "Pasang ekstensi Coin98 Wallet"
      },
      step2: {
        description: "Buat dompet baru atau impor yang sudah ada.",
        title: "Buat atau Impor sebuah dompet"
      },
      step3: {
        description: "Setelah Anda menyiapkan Coin98 Wallet, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi.",
        title: "Segarkan browser Anda"
      }
    }
  },
  coinbase: {
    qr_code: {
      step1: {
        description: "Kami merekomendasikan memasang Coinbase Wallet di layar utama Anda untuk akses yang lebih cepat.",
        title: "Buka aplikasi Coinbase Wallet"
      },
      step2: {
        description: "Anda dapat dengan mudah mencadangkan dompet Anda menggunakan fitur cadangan awan.",
        title: "Buat atau Impor sebuah Dompet"
      },
      step3: {
        description: "Setelah Anda memindai, akan muncul sebuah petunjuk koneksi untuk Anda menyambungkan dompet Anda.",
        title: "Ketuk tombol pindai"
      }
    },
    extension: {
      step1: {
        description: "Kami merekomendasikan untuk menempel Coinbase Wallet ke taskbar Anda untuk akses lebih cepat ke dompet Anda.",
        title: "Instal ekstensi Coinbase Wallet"
      },
      step2: {
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah membagikan frase pemulihan rahasia Anda kepada siapa pun.",
        title: "Buat atau Import Wallet"
      },
      step3: {
        description: "Setelah Anda menyiapkan wallet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi.",
        title: "Segarkan browser Anda"
      }
    }
  },
  core: {
    qr_code: {
      step1: {
        description: "Kami merekomendasikan untuk meletakkan Core di layar utama Anda untuk akses lebih cepat ke wallet Anda.",
        title: "Buka aplikasi Core"
      },
      step2: {
        description: "Anda dapat dengan mudah mencadangkan wallet Anda dengan menggunakan fitur cadangan kami di telepon Anda.",
        title: "Buat atau Import Wallet"
      },
      step3: {
        description: "Setelah Anda memindai, akan muncul petunjuk koneksi untuk Anda menyambungkan wallet Anda.",
        title: "Ketuk tombol WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "Kami merekomendasikan untuk menempelkan Core pada taskbar Anda untuk akses ke dompet Anda lebih cepat.",
        title: "Pasang ekstensi Core"
      },
      step2: {
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah membagikan frase rahasia Anda kepada siapa pun.",
        title: "Buat atau Impor Dompet"
      },
      step3: {
        description: "Setelah Anda menyiapkan dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi.",
        title: "Segarkan browser Anda"
      }
    }
  },
  fox: {
    qr_code: {
      step1: {
        description: "Kami merekomendasikan untuk menaruh FoxWallet pada layar utama Anda untuk akses lebih cepat.",
        title: "Buka aplikasi FoxWallet"
      },
      step2: {
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah membagikan frase rahasia Anda kepada siapa pun.",
        title: "Buat atau Impor Wallet"
      },
      step3: {
        description: "Setelah Anda memindai, prompt koneksi akan muncul untuk Anda hubungkan dompet Anda.",
        title: "Ketuk tombol pindai"
      }
    }
  },
  frontier: {
    qr_code: {
      step1: {
        description: "Kami merekomendasikan untuk meletakkan Frontier Wallet di layar awal Anda untuk akses yang lebih cepat.",
        title: "Buka aplikasi Frontier Wallet"
      },
      step2: {
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah membagikan frase rahasia Anda kepada siapa pun.",
        title: "Buat atau Impor Wallet"
      },
      step3: {
        description: "Setelah Anda memindai, prompt koneksi akan muncul untuk Anda menghubungkan dompet Anda.",
        title: "Ketuk tombol pindai"
      }
    },
    extension: {
      step1: {
        description: "Kami menyarankan menempelkan Frontier Wallet ke taskbar Anda untuk akses yang lebih cepat ke dompet Anda.",
        title: "Instal ekstensi Frontier Wallet"
      },
      step2: {
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah berbagi frasa rahasia Anda dengan siapa pun.",
        title: "Buat atau Impor Dompet"
      },
      step3: {
        description: "Setelah Anda menyiapkan dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi.",
        title: "Segarkan browser Anda"
      }
    }
  },
  im_token: {
    qr_code: {
      step1: {
        title: "Buka aplikasi imToken",
        description: "Letakkan aplikasi imToken di layar utama Anda untuk akses yang lebih cepat ke dompet Anda."
      },
      step2: {
        title: "Buat atau Impor Dompet",
        description: "Buat dompet baru atau impor yang sudah ada."
      },
      step3: {
        title: "Ketuk Ikon Scanner di pojok kanan atas",
        description: "Pilih Koneksi Baru, lalu pindai kode QR dan konfirmasi petunjuk untuk terhubung."
      }
    }
  },
  kresus: {
    qr_code: {
      step1: {
        title: "Buka aplikasi Kresus Wallet",
        description: "Tambahkan Kresus Wallet ke layar utama Anda untuk akses yang lebih cepat ke wallet Anda."
      },
      step2: {
        title: "Buat atau Impor Dompet",
        description: "Buat dompet baru atau impor yang sudah ada."
      },
      step3: {
        title: "Ketuk ikon QR dan scan",
        description: "Ketuk ikon QR di layar utama Anda, pindai kode dan konfirmasi prompt untuk terhubung."
      }
    }
  },
  metamask: {
    qr_code: {
      step1: {
        title: "Buka aplikasi MetaMask",
        description: "Kami merekomendasikan untuk meletakkan MetaMask di layar beranda Anda untuk akses yang lebih cepat."
      },
      step2: {
        title: "Buat atau Impor Dompet",
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah membagikan frase rahasia Anda kepada siapa pun."
      },
      step3: {
        title: "Ketuk tombol pindai",
        description: "Setelah Anda memindai, petunjuk koneksi akan muncul untuk Anda menyambungkan dompet Anda."
      }
    },
    extension: {
      step1: {
        title: "Pasang ekstensi MetaMask",
        description: "Kami menyarankan untuk memasang MetaMask pada taskbar Anda untuk akses wallet lebih cepat."
      },
      step2: {
        title: "Buat atau Impor Wallet",
        description: "Pastikan untuk mencadangkan wallet Anda menggunakan metode yang aman. Jangan pernah membagikan frase rahasia Anda kepada siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda menyiapkan wallet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi."
      }
    }
  },
  okx: {
    qr_code: {
      step1: {
        title: "Buka aplikasi OKX Wallet",
        description: "Kami menyarankan untuk menaruh OKX Wallet di layar utama Anda untuk akses lebih cepat."
      },
      step2: {
        title: "Buat atau Impor Wallet",
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah membagikan frasa rahasia Anda kepada siapa pun."
      },
      step3: {
        title: "Ketuk tombol scan",
        description: "Setelah Anda memindai, prompt koneksi akan muncul untuk Anda hubungkan dompet Anda."
      }
    },
    extension: {
      step1: {
        title: "Instal ekstensi OKX Wallet",
        description: "Kami menyarankan untuk menempelkan OKX Wallet ke taskbar Anda untuk akses lebih cepat ke dompet Anda."
      },
      step2: {
        title: "Buat atau Impor Dompet",
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah membagikan frasa rahasia Anda kepada siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda mengatur wallet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi."
      }
    }
  },
  omni: {
    qr_code: {
      step1: {
        title: "Buka aplikasi Omni",
        description: "Tambahkan Omni ke layar utama Anda untuk akses yang lebih cepat ke wallet Anda."
      },
      step2: {
        title: "Buat atau Impor Wallet",
        description: "Buat wallet baru atau impor yang sudah ada."
      },
      step3: {
        title: "Ketuk ikon QR dan scan",
        description: "Ketuk ikon QR di layar utama Anda, pindai kode dan konfirmasi petunjuk untuk terhubung."
      }
    }
  },
  token_pocket: {
    qr_code: {
      step1: {
        title: "Buka aplikasi TokenPocket",
        description: "Kami sarankan meletakkan TokenPocket di layar utama Anda untuk akses yang lebih cepat."
      },
      step2: {
        title: "Buat atau impor Dompet",
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah membagikan frase pemulihan rahasia Anda kepada siapa pun."
      },
      step3: {
        title: "Ketuk tombol pindai",
        description: "Setelah Anda memindai, Indikasi sambungan akan muncul untuk Anda menghubungkan dompet Anda."
      }
    },
    extension: {
      step1: {
        title: "Instal ekstensi TokenPocket",
        description: "Kami merekomendasikan penambatan TokenPocket ke taskbar Anda untuk akses dompet Anda lebih cepat."
      },
      step2: {
        title: "Buat atau Impor Wallet",
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah membagi frasa rahasia Anda dengan siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda mengatur dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi."
      }
    }
  },
  trust: {
    qr_code: {
      step1: {
        title: "Buka aplikasi Trust Wallet",
        description: "Pasang Trust Wallet di layar utama Anda untuk akses dompet Anda lebih cepat."
      },
      step2: {
        title: "Buat atau Impor Wallet",
        description: "Buat dompet baru atau impor yang sudah ada."
      },
      step3: {
        title: "Ketuk WalletConnect di Pengaturan",
        description: "Pilih Koneksi Baru, kemudian pindai kode QR dan konfirmasi perintah untuk terhubung."
      }
    },
    extension: {
      step1: {
        title: "Instal ekstensi Trust Wallet",
        description: "Klik di pojok kanan atas browser Anda dan sematkan Trust Wallet untuk akses mudah."
      },
      step2: {
        title: "Buat atau Impor dompet",
        description: "Buat dompet baru atau impor yang sudah ada."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda mengatur Trust Wallet, klik di bawah untuk menyegarkan browser dan memuat ekstensi."
      }
    }
  },
  uniswap: {
    qr_code: {
      step1: {
        title: "Buka aplikasi Uniswap",
        description: "Tambahkan Uniswap Wallet ke layar utama Anda untuk akses ke wallet Anda lebih cepat."
      },
      step2: {
        title: "Buat atau Impor Wallet",
        description: "Buat wallet baru atau impor yang sudah ada."
      },
      step3: {
        title: "Ketuk ikon QR dan pindai",
        description: "Ketuk ikon QR di layar utama Anda, pindai kode dan konfirmasi prompt untuk terhubung."
      }
    }
  },
  zerion: {
    qr_code: {
      step1: {
        title: "Buka aplikasi Zerion",
        description: "Kami merekomendasikan untuk meletakkan Zerion di layar utama Anda untuk akses lebih cepat."
      },
      step2: {
        title: "Buat atau Impor Dompet",
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah membagikan frase pemulihan rahasia Anda kepada siapa pun."
      },
      step3: {
        title: "Ketuk tombol scan",
        description: "Setelah Anda scan, muncul prompt koneksi untuk Anda menghubungkan dompet Anda."
      }
    },
    extension: {
      step1: {
        title: "Instal ekstensi Zerion",
        description: "Kami menyarankan untuk menempelkan Zerion ke taskbar Anda untuk akses lebih cepat ke dompet Anda."
      },
      step2: {
        title: "Buat atau Impor Wallet",
        description: "Pastikan untuk mencadangkan wallet Anda menggunakan metode yang aman. Jangan pernah berbagi frasa rahasia Anda dengan siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda mengatur wallet Anda, klik di bawah untuk menyegarkan browser dan memuat ekstensi."
      }
    }
  },
  rainbow: {
    qr_code: {
      step1: {
        title: "Buka aplikasi Rainbow",
        description: "Kami menyarankan menempatkan Rainbow di layar home Anda untuk akses yang lebih cepat ke wallet Anda."
      },
      step2: {
        title: "Buat atau Impor Wallet",
        description: "Anda dapat dengan mudah mencadangkan wallet Anda menggunakan fitur cadangan kami di telepon Anda."
      },
      step3: {
        title: "Tekan tombol scan",
        description: "Setelah Anda memindai, akan muncul pesan untuk menghubungkan dompet Anda."
      }
    }
  },
  enkrypt: {
    extension: {
      step1: {
        description: "Kami menyarankan untuk memasang Enkrypt Wallet ke taskbar Anda untuk akses dompet yang lebih cepat.",
        title: "Instal ekstensi Enkrypt Wallet"
      },
      step2: {
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah berbagi frase rahasia Anda dengan siapa pun.",
        title: "Buat atau Impor Dompet"
      },
      step3: {
        description: "Setelah Anda menyiapkan dompet, klik di bawah ini untuk memuat ulang peramban dan meload ekstensi.",
        title: "Segarkan browser Anda"
      }
    }
  },
  frame: {
    extension: {
      step1: {
        description: "Kami menyarankan untuk memasang Frame ke taskbar Anda untuk akses dompet yang lebih cepat.",
        title: "Instal Frame & ekstensi pendamping"
      },
      step2: {
        description: "Pastikan untuk mencadangkan wallet Anda menggunakan metode yang aman. Jangan pernah membagikan frase rahasia Anda kepada siapa pun.",
        title: "Buat atau Impor Wallet"
      },
      step3: {
        description: "Setelah Anda menyetel wallet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi.",
        title: "Segarkan browser Anda"
      }
    }
  },
  one_key: {
    extension: {
      step1: {
        title: "Instal ekstensi OneKey Wallet",
        description: "Kami menyarankan untuk menempelkan OneKey Wallet ke taskbar Anda untuk akses wallet yang lebih cepat."
      },
      step2: {
        title: "Buat atau Impor Wallet",
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah membagikan frase rahasia Anda kepada siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda menyiapkan dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi."
      }
    }
  },
  phantom: {
    extension: {
      step1: {
        title: "Instal ekstensi Phantom",
        description: "Kami menyarankan untuk mem-pin Phantom ke taskbar Anda untuk akses dompet yang lebih mudah."
      },
      step2: {
        title: "Buat atau Impor Dompet",
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah membagikan frase pemulihan rahasia Anda kepada siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda menyiapkan dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi."
      }
    }
  },
  rabby: {
    extension: {
      step1: {
        title: "Instal ekstensi Rabby",
        description: "Kami merekomendasikan menempelkan Rabby ke taskbar Anda untuk akses lebih cepat ke wallet Anda."
      },
      step2: {
        title: "Buat atau Impor Wallet",
        description: "Pastikan untuk mencadangkan wallet Anda dengan metode yang aman. Jangan pernah berbagi frase rahasia Anda dengan siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda menyiapkan wallet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi."
      }
    }
  },
  ronin: {
    qr_code: {
      step1: {
        description: "Kami merekomendasikan untuk meletakkan Ronin Wallet di layar utama Anda untuk akses yang lebih cepat.",
        title: "Buka aplikasi Ronin Wallet"
      },
      step2: {
        description: "Pastikan untuk mencadangkan wallet Anda menggunakan metode yang aman. Jangan pernah berbagi frasa rahasia Anda dengan siapa pun.",
        title: "Buat atau Impor Dompet"
      },
      step3: {
        description: "Setelah Anda memindai, akan muncul petunjuk koneksi untuk Anda menghubungkan dompet Anda.",
        title: "Tekan tombol scan"
      }
    },
    extension: {
      step1: {
        description: "Kami merekomendasikan untuk memasang Ronin Wallet di taskbar Anda untuk akses yang lebih cepat ke wallet Anda.",
        title: "Pasang ekstensi Ronin Wallet"
      },
      step2: {
        description: "Pastikan untuk mencadangkan wallet Anda menggunakan metode yang aman. Jangan pernah berbagi frasa rahasia Anda dengan siapa pun.",
        title: "Buat atau Impor Dompet"
      },
      step3: {
        description: "Setelah Anda menyiapkan dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi.",
        title: "Segarkan browser Anda"
      }
    }
  },
  ramper: {
    extension: {
      step1: {
        title: "Pasang ekstensi Ramper",
        description: "Kami merekomendasikan untuk memasang Ramper di taskbar Anda untuk akses yang lebih mudah ke wallet Anda."
      },
      step2: {
        title: "Buat Dompet",
        description: "Pastikan untuk mencadangkan wallet Anda menggunakan metode yang aman. Jangan pernah berbagi frasa rahasia Anda dengan siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda menyiapkan dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi."
      }
    }
  },
  safeheron: {
    extension: {
      step1: {
        title: "Instal ekstensi Core",
        description: "Kami merekomendasikan menempelkan Safeheron ke taskbar Anda untuk akses lebih cepat ke wallet Anda."
      },
      step2: {
        title: "Buat atau Impor Wallet",
        description: "Pastikan untuk mencadangkan dompet Anda dengan metode yang aman. Jangan pernah berbagi frasa rahasia Anda dengan siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda mengatur dompet Anda, klik di bawah untuk menyegarkan browser dan memuat ekstensi."
      }
    }
  },
  taho: {
    extension: {
      step1: {
        title: "Instal ekstensi Taho",
        description: "Kami merekomendasikan pengepinan Taho ke taskbar Anda untuk akses yang lebih cepat ke dompet Anda."
      },
      step2: {
        title: "Buat atau Impor Dompet",
        description: "Pastikan untuk mencadangkan dompet Anda dengan metode yang aman. Jangan pernah berbagi frasa rahasia Anda dengan siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda menyiapkan dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi."
      }
    }
  },
  talisman: {
    extension: {
      step1: {
        title: "Instal ekstensi Talisman",
        description: "Kami merekomendasikan menempelkan Talisman ke taskbar Anda untuk akses dompet Anda lebih cepat."
      },
      step2: {
        title: "Buat atau Impor Dompet Ethereum",
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah berbagi frase pemulihan Anda dengan siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda menyiapkan dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi."
      }
    }
  },
  xdefi: {
    extension: {
      step1: {
        title: "Instal ekstensi Dompet XDEFI",
        description: "Kami merekomendasikan menempelkan XDEFI Wallet ke taskbar Anda untuk akses lebih cepat ke dompet Anda."
      },
      step2: {
        title: "Buat atau Impor Dompet",
        description: "Pastikan untuk mencadangkan dompet Anda dengan metode yang aman. Jangan pernah berbagi frase rahasia Anda dengan siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda menyiapkan dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi."
      }
    }
  },
  zeal: {
    extension: {
      step1: {
        title: "Instal ekstensi Zeal",
        description: "Kami merekomendasikan untuk mem-pin Zeal ke taskbar Anda untuk akses wallet lebih cepat."
      },
      step2: {
        title: "Buat atau Impor Dompet",
        description: "Pastikan untuk mencadangkan wallet Anda menggunakan metode yang aman. Jangan pernah berbagi frasa rahasia Anda dengan siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda menyiapkan dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi."
      }
    }
  },
  safepal: {
    extension: {
      step1: {
        title: "Pasang ekstensi SafePal Wallet",
        description: "Klik di pojok kanan atas browser Anda dan pin SafePal Wallet untuk akses mudah."
      },
      step2: {
        title: "Buat atau Impor sebuah dompet",
        description: "Buat dompet baru atau impor yang sudah ada."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda menyiapkan SafePal Wallet, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi."
      }
    },
    qr_code: {
      step1: {
        title: "Buka aplikasi SafePal Wallet",
        description: "Letakkan SafePal Wallet di layar utama Anda untuk akses yang lebih cepat ke wallet Anda."
      },
      step2: {
        title: "Buat atau Impor Dompet",
        description: "Buat dompet baru atau impor yang sudah ada."
      },
      step3: {
        title: "Ketuk WalletConnect di Pengaturan",
        description: "Pilih Koneksi Baru, lalu pindai kode QR dan konfirmasi petunjuk untuk terhubung."
      }
    }
  },
  desig: {
    extension: {
      step1: {
        title: "Instal ekstensi Desig",
        description: "Kami merekomendasikan menempelkan Desig ke taskbar Anda untuk akses dompet Anda lebih mudah."
      },
      step2: {
        title: "Buat Dompet",
        description: "Pastikan untuk mencadangkan wallet Anda menggunakan metode yang aman. Jangan pernah berbagi frasa rahasia Anda dengan siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda menyiapkan dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi."
      }
    }
  },
  subwallet: {
    extension: {
      step1: {
        title: "Instal ekstensi SubWallet",
        description: "Kami merekomendasikan menempelkan SubWallet ke taskbar Anda untuk akses dompet Anda lebih cepat."
      },
      step2: {
        title: "Buat atau Impor Dompet",
        description: "Pastikan untuk mencadangkan dompet Anda menggunakan metode yang aman. Jangan pernah berbagi frase pemulihan Anda dengan siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda menyiapkan dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi."
      }
    },
    qr_code: {
      step1: {
        title: "Buka aplikasi SubWallet",
        description: "Kami merekomendasikan menaruh SubWallet di layar utama Anda untuk akses lebih cepat."
      },
      step2: {
        title: "Buat atau Impor Dompet",
        description: "Pastikan untuk mencadangkan wallet Anda menggunakan metode yang aman. Jangan pernah berbagi frasa rahasia Anda dengan siapa pun."
      },
      step3: {
        title: "Tekan tombol scan",
        description: "Setelah Anda memindai, akan muncul petunjuk koneksi untuk Anda menghubungkan dompet Anda."
      }
    }
  },
  clv: {
    extension: {
      step1: {
        title: "Instal ekstensi CLV Wallet",
        description: "Kami merekomendasikan menempelkan CLV Wallet ke taskbar Anda untuk akses dompet Anda lebih cepat."
      },
      step2: {
        title: "Buat atau Impor Dompet",
        description: "Pastikan untuk mencadangkan wallet Anda menggunakan metode yang aman. Jangan pernah berbagi frasa rahasia Anda dengan siapa pun."
      },
      step3: {
        title: "Segarkan browser Anda",
        description: "Setelah Anda menyiapkan dompet Anda, klik di bawah ini untuk menyegarkan browser dan memuat ekstensi."
      }
    },
    qr_code: {
      step1: {
        title: "Buka aplikasi CLV Wallet",
        description: "Kami sarankan untuk menempatkan CLV Wallet di layar utama Anda untuk akses yang lebih cepat."
      },
      step2: {
        title: "Buat atau Impor Dompet",
        description: "Pastikan untuk mencadangkan wallet Anda menggunakan metode yang aman. Jangan pernah berbagi frasa rahasia Anda dengan siapa pun."
      },
      step3: {
        title: "Tekan tombol scan",
        description: "Setelah Anda memindai, akan muncul petunjuk koneksi untuk Anda menghubungkan dompet Anda."
      }
    }
  },
  okto: {
    qr_code: {
      step1: {
        title: "Buka aplikasi Okto",
        description: "Tambahkan Okto ke layar utama Anda untuk akses cepat"
      },
      step2: {
        title: "Buat Wallet MPC",
        description: "Buat akun dan generate wallet"
      },
      step3: {
        title: "Ketuk WalletConnect di Pengaturan",
        description: "Ketuk ikon Scan QR di pojok kanan atas dan konfirmasi prompt untuk terhubung."
      }
    }
  },
  ledger: {
    desktop: {
      step1: {
        title: "Buka aplikasi Ledger Live",
        description: "Kami merekomendasikan menempatkan Ledger Live di layar utama Anda untuk akses lebih cepat."
      },
      step2: {
        title: "Atur Ledger Anda",
        description: "Atur Ledger baru atau hubungkan ke Ledger yang sudah ada."
      },
      step3: {
        title: "Hubungkan",
        description: "Setelah Anda scan, muncul prompt koneksi untuk Anda menghubungkan dompet Anda."
      }
    },
    qr_code: {
      step1: {
        title: "Buka aplikasi Ledger Live",
        description: "Kami merekomendasikan menempatkan Ledger Live di layar utama Anda untuk akses lebih cepat."
      },
      step2: {
        title: "Atur Ledger Anda",
        description: "Anda dapat melakukan sinkronisasi dengan aplikasi desktop atau menghubungkan Ledger Anda."
      },
      step3: {
        title: "Pindai kode",
        description: "Ketuk WalletConnect lalu Beralih ke Scanner. Setelah Anda scan, muncul prompt koneksi untuk Anda menghubungkan dompet Anda."
      }
    }
  }
}, k = {
  connect_wallet: De,
  intro: Ke,
  sign_in: Ee,
  connect: Me,
  connect_scan: $e,
  connector_group: Fe,
  get: Qe,
  get_options: je,
  get_mobile: Ue,
  get_instructions: Ve,
  chains: Xe,
  profile: Ze,
  wallet_connectors: Ge
}, Je = {
  label: "ウォレットを接続",
  wrong_network: {
    label: "ネットワークが間違っています"
  }
}, Ye = {
  title: "ウォレットとは何ですか？",
  description: "ウォレットは、デジタルアセットを送信、受信、保存、表示するために使用されます。また、各ウェブサイトで新たなアカウントやパスワードを作成する必要なく、ログインする新しい方法でもあります。",
  digital_asset: {
    title: "あなたのデジタル資産のための家",
    description: "ウォレットは、EthereumやNFTのようなデジタル資産を送信、受信、保存、表示するために使用されます。"
  },
  login: {
    title: "新しいログイン方法",
    description: "すべてのウェブサイトで新しいアカウントとパスワードを作成する代わりに、ウォレットを接続します。"
  },
  get: {
    label: "ウォレットを取得する"
  },
  learn_more: {
    label: "詳しくはこちら"
  }
}, He = {
  label: "アカウントを確認する",
  description: "接続を完了するには、このアカウントの所有者であることを証明するためにウォレットでメッセージに署名する必要があります。",
  message: {
    send: "メッセージを送信",
    preparing: "メッセージの準備中...",
    cancel: "キャンセル",
    preparing_error: "メッセージの準備中にエラーが発生しました、再試行してください！"
  },
  signature: {
    waiting: "署名を待っています...",
    verifying: "署名を検証中...",
    signing_error: "メッセージの署名中にエラーが発生しました、再試行してください！",
    verifying_error: "署名の検証中にエラーが発生しました、再試行してください！",
    oops_error: "おっと、何かが間違っていました！"
  }
}, et = {
  label: "接続",
  title: "ウォレットを接続する",
  new_to_ethereum: {
    description: "Ethereumのウォレットが初めてですか？",
    learn_more: {
      label: "詳しくはこちら"
    }
  },
  learn_more: {
    label: "詳しくはこちら"
  },
  recent: "最近利用しました",
  status: {
    opening: "{wallet}を開いています...",
    connecting: "接続中",
    connect_mobile: "{wallet}で続行",
    not_installed: "{wallet} はインストールされていません",
    not_available: "{wallet} は利用できません",
    confirm: "エクステンションで接続を確認してください",
    confirm_mobile: "ウォレットでの接続リクエストを承認する"
  },
  secondary_action: {
    get: {
      description: "{wallet}がありませんか？",
      label: "取得"
    },
    install: {
      label: "インストール"
    },
    retry: {
      label: "再試行"
    }
  },
  walletconnect: {
    description: {
      full: "公式のWalletConnectモーダルが必要ですか？",
      compact: "WalletConnectモーダルが必要ですか？"
    },
    open: {
      label: "開く"
    }
  }
}, tt = {
  title: "{wallet}でスキャン",
  fallback_title: "携帯電話でスキャンしてください"
}, it = {
  installed: "インストール済み",
  recommended: "おすすめのウォレット",
  other: "その他",
  popular: "人気のウォレット",
  more: "もっと",
  others: "その他"
}, at = {
  title: "ウォレットを取得",
  action: {
    label: "取得"
  },
  mobile: {
    description: "モバイルウォレット"
  },
  extension: {
    description: "ブラウザ拡張"
  },
  mobile_and_extension: {
    description: "モバイルウォレットと拡張機能"
  },
  mobile_and_desktop: {
    description: "モバイルとデスクトップウォレット"
  },
  looking_for: {
    title: "お探しのウォレットがありませんか？",
    mobile: {
      description: "メイン画面でウォレットを選択し、異なるウォレットプロバイダーで始めてください。"
    },
    desktop: {
      compact_description: "メイン画面でウォレットを選択し、異なるウォレットプロバイダーで始めてください。",
      wide_description: "左側のウォレットを選択して、別のウォレットプロバイダーで始めてください。"
    }
  }
}, nt = {
  title: "{wallet}で始める",
  short_title: "{wallet}を取得する",
  mobile: {
    title: "モバイル用 {wallet}",
    description: "モバイルウォレットを使用して、イーサリアムの世界を探索します。",
    download: {
      label: "アプリを取得"
    }
  },
  extension: {
    title: "{wallet} for {browser}",
    description: "お好きなウェブブラウザからウォレットに直接アクセスします。",
    download: {
      label: "{browser}に追加"
    }
  },
  desktop: {
    title: "{wallet} for {platform}",
    description: "あなたの強力なデスクトップからネイティブにウォレットにアクセスします。",
    download: {
      label: "{platform}に追加する"
    }
  }
}, rt = {
  title: "{wallet}をインストール",
  description: "iOSまたはAndroidでダウンロードするために電話でスキャン",
  continue: {
    label: "続行"
  }
}, ot = {
  mobile: {
    connect: {
      label: "接続"
    },
    learn_more: {
      label: "詳しくはこちら"
    }
  },
  extension: {
    refresh: {
      label: "更新"
    },
    learn_more: {
      label: "詳しくはこちら"
    }
  },
  desktop: {
    connect: {
      label: "接続"
    },
    learn_more: {
      label: "詳しくはこちら"
    }
  }
}, st = {
  title: "ネットワークを切り替える",
  wrong_network: "誤ったネットワークが検出されました、続行するには切り替えるか切断してください。",
  confirm: "ウォレットで確認する",
  switching_not_supported: "あなたのウォレットは {appName}からネットワークを切り替えることをサポートしていません。ウォレット内でネットワークを切り替えてみてください。",
  switching_not_supported_fallback: "あなたのウォレットは、このアプリからネットワークを切り替えることをサポートしていません。代わりにウォレット内からネットワークを切り替えてみてください。",
  disconnect: "切断する",
  connected: "接続しました"
}, lt = {
  disconnect: {
    label: "切断する"
  },
  copy_address: {
    label: "アドレスをコピーする",
    copied: "コピーしました！"
  },
  explorer: {
    label: "エクスプローラーで詳しく見る"
  },
  transactions: {
    description: "{appName} トランザクションがここに表示されます...",
    description_fallback: "あなたのトランザクションはここに表示されます...",
    recent: {
      title: "最近のトランザクション"
    },
    clear: {
      label: "すべてクリア"
    }
  }
}, pt = {
  argent: {
    qr_code: {
      step1: {
        description: "より速くウォレットにアクセスするために、Argentをホーム画面に置いてください。",
        title: "Argentアプリを開く"
      },
      step2: {
        description: "ウォレットとユーザーネームを作成するか、既存のウォレットをインポートします。",
        title: "ウォレットを作成またはインポート"
      },
      step3: {
        description: "スキャン後、ウォレットを接続するための接続プロンプトが表示されます。",
        title: "「QRをスキャン」ボタンをタップします"
      }
    }
  },
  bifrost: {
    qr_code: {
      step1: {
        description: "より速くアクセスできるように、Bifrost Walletをホーム画面に置くことをお勧めします。",
        title: "Bifrost Walletアプリを開きます"
      },
      step2: {
        description: "リカバリーフレーズを使用してウォレットを作成またはインポートします。",
        title: "ウォレットを作成またはインポート"
      },
      step3: {
        description: "スキャン後、ウォレットを接続するための接続プロンプトが表示されます。",
        title: "「スキャン」ボタンをタップします"
      }
    }
  },
  bitget: {
    qr_code: {
      step1: {
        description: "より迅速なアクセスのために、ホーム画面にBitget Walletを配置することをお勧めします。",
        title: "Bitget Walletアプリを開く"
      },
      step2: {
        description: "ウォレットは安全な方法でバックアップしてください。秘密のフレーズを誰とも共有しないでください。",
        title: "ウォレットを作成またはインポート"
      },
      step3: {
        description: "スキャン後、ウォレットを接続するための接続プロンプトが表示されます。",
        title: "スキャンボタンをタップする"
      }
    },
    extension: {
      step1: {
        description: "ウォレットへのより迅速なアクセスのためにBitget Walletをタスクバーにピン留めすることをお勧めします。",
        title: "Bitget Wallet拡張機能をインストールします"
      },
      step2: {
        description: "ウォレットを安全な方法でバックアップしてください。秘密のフレーズを誰とも共有しないでください。",
        title: "ウォレットを作成またはインポートします"
      },
      step3: {
        description: "ウォレットを設定したら、以下をクリックしてブラウザを更新し、拡張機能を読み込みます。",
        title: "ブラウザを更新する"
      }
    }
  },
  bitski: {
    extension: {
      step1: {
        description: "ウォレットへの素早いアクセスのために、Bitskiをタスクバーにピン留めすることをお勧めします。",
        title: "Bitskiエクステンションをインストールする"
      },
      step2: {
        description: "ウォレットを安全な方法でバックアップしてください。シークレットフレーズは誰とも共有しないでください。",
        title: "ウォレットを作成するか、インポートする"
      },
      step3: {
        description: "ウォレットのセットアップが完了したら、以下をクリックしてブラウザを更新し、エクステンションを読み込みます。",
        title: "ブラウザを更新する"
      }
    }
  },
  bloom: {
    desktop: {
      step1: {
        title: "Bloom Walletアプリを開く",
        description: "Bloom Walletをホーム画面に置くことをお勧めします。これにより、より迅速にアクセスできます。"
      },
      step2: {
        description: "リカバリーフレーズを使用してウォレットを作成またはインポートします。",
        title: "ウォレットを作成またはインポート"
      },
      step3: {
        description: "ウォレットを持った後、Bloomを介して接続するには「Connect」をクリックします。アプリ内で接続を確認するプロンプトが表示されます。",
        title: "「Connect」をクリック"
      }
    },
    qr_code: {
      step1: {
        title: "Bloom Walletアプリを開く",
        description: "Bloom Walletをホーム画面に置くことをお勧めします。これにより、より迅速にアクセスできます。"
      },
      step2: {
        description: "リカバリーフレーズを使用してウォレットを作成またはインポートします。",
        title: "ウォレットを作成またはインポート"
      },
      step3: {
        description: "ウォレットを持った後、Bloomを介して接続するには「Connect」をクリックします。アプリ内で接続を確認するプロンプトが表示されます。",
        title: "「Connect」をクリック"
      }
    }
  },
  coin98: {
    qr_code: {
      step1: {
        description: "Coin98ウォレットをホーム画面に置くことで、ウォレットへのアクセスが高速化されることをお勧めします。",
        title: "Coin98ウォレットアプリを開きます"
      },
      step2: {
        description: "電話のバックアップ機能を使用して、ウォレットを簡単にバックアップすることができます。",
        title: "ウォレットを作成またはインポートする"
      },
      step3: {
        description: "スキャン後、ウォレットへの接続を促すプロンプトが表示されます。",
        title: "WalletConnectボタンをタップします"
      }
    },
    extension: {
      step1: {
        description: "ブラウザの右上をクリックして、Coin98ウォレットをピン留めして簡単にアクセスできるようにします。",
        title: "Coin98ウォレットの拡張機能をインストールします"
      },
      step2: {
        description: "新しいウォレットを作成するか、既存のものをインポートします。",
        title: "ウォレットを作成またはインポートする"
      },
      step3: {
        description: "Coin98ウォレットをセットアップしたら、下のリンクをクリックしてブラウザを更新し、拡張機能をロードします。",
        title: "ブラウザを更新する"
      }
    }
  },
  coinbase: {
    qr_code: {
      step1: {
        description: "より素早くアクセスできるように、Coinbaseウォレットをホームスクリーンに置くことをお勧めします。",
        title: "Coinbase Walletアプリを開く"
      },
      step2: {
        description: "クラウドバックアップ機能を使用して、簡単にウォレットをバックアップできます。",
        title: "ウォレットを作成またはインポートする"
      },
      step3: {
        description: "スキャン後、ウォレットを接続するための接続プロンプトが表示されます。",
        title: "スキャンボタンをタップする"
      }
    },
    extension: {
      step1: {
        description: "タスクバーにCoinbase Walletをピン留めして、ウォレットにより早くアクセスできるように推奨します。",
        title: "Coinbase Wallet拡張機能をインストールする"
      },
      step2: {
        description: "必ず安全な方法を使用してウォレットをバックアップしてください。秘密のフレーズを誰にも共有しないでください。",
        title: "ウォレットを作成またはインポート"
      },
      step3: {
        description: "ウォレットの設定が完了したら、下のボタンをクリックしてブラウザを更新し、拡張機能をロードします。",
        title: "ブラウザを更新する"
      }
    }
  },
  core: {
    qr_code: {
      step1: {
        description: "ウォレットへの迅速なアクセスのため、コアをホーム画面に設定することを推奨します。",
        title: "Coreアプリを開く"
      },
      step2: {
        description: "電話のバックアップ機能を使って、簡単にウォレットをバックアップできます。",
        title: "ウォレットを作成またはインポート"
      },
      step3: {
        description: "スキャン後、ウォレットを接続するようにプロンプトが表示されます。",
        title: "WalletConnectボタンをタップする"
      }
    },
    extension: {
      step1: {
        description: "ウォレットへのより迅速なアクセスのために、タスクバーにCoreをピン留めすることをお勧めします。",
        title: "Core拡張機能をインストールする"
      },
      step2: {
        description: "セキュアな方法を使用してウォレットをバックアップしてください。秘密のフレーズを誰とも共有しないでください。",
        title: "ウォレットを作成またはインポートする"
      },
      step3: {
        description: "ウォレットの設定が完了したら、以下をクリックしてブラウザを更新し、拡張機能をロードします。",
        title: "ブラウザを更新する"
      }
    }
  },
  fox: {
    qr_code: {
      step1: {
        description: "より迅速なアクセスのために、ホーム画面にFoxWalletを置くことをお勧めします。",
        title: "FoxWalletアプリを開く"
      },
      step2: {
        description: "セキュアな方法を使用してウォレットをバックアップすることを確認してください。秘密のフレーズは誰とも共有しないでください。",
        title: "ウォレットを作成またはインポート"
      },
      step3: {
        description: "スキャンした後、ウォレットを接続するための接続プロンプトが表示されます。",
        title: "スキャンボタンをタップします"
      }
    }
  },
  frontier: {
    qr_code: {
      step1: {
        description: "Frontierウォレットをホーム画面に置くことで、より早くアクセスできることをお勧めします。",
        title: "Frontierウォレットアプリを開きます"
      },
      step2: {
        description: "セキュアな方法を使用してウォレットをバックアップすることを確認してください。秘密のフレーズは誰とも共有しないでください。",
        title: "ウォレットを作成またはインポート"
      },
      step3: {
        description: "スキャン後に、ウォレットの接続を促すメッセージが表示されます。",
        title: "スキャンボタンをタップします"
      }
    },
    extension: {
      step1: {
        description: "より迅速なウォレットへのアクセスを可能にするために、フロンティアウォレットをタスクバーにピン留めすることを推奨します。",
        title: "フロンティアウォレットの拡張機能をインストールします"
      },
      step2: {
        description: "安全な方法を使用してウォレットをバックアップしてください。秘密のフレーズは決して誰とも共有しないでください。",
        title: "ウォレットを作成またはインポート"
      },
      step3: {
        description: "ウォレットの設定が完了したら、ブラウザを更新して拡張機能を読み込みます。",
        title: "ブラウザを更新する"
      }
    }
  },
  im_token: {
    qr_code: {
      step1: {
        title: "imTokenアプリを開く",
        description: "ウォレットへのアクセスを速くするために、imTokenアプリをホーム画面に置いてください。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "新しいウォレットを作成するか、既存のものをインポートします。"
      },
      step3: {
        title: "右上隅のスキャナーアイコンをタップします",
        description: "新しい接続を選択し、QRコードをスキャンしてプロンプトを確認し接続します。"
      }
    }
  },
  kresus: {
    qr_code: {
      step1: {
        title: "Kresus Walletアプリを開く",
        description: "ウォレットへの迅速なアクセスのため、Kresus Walletをホーム画面に追加してください。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "新しいウォレットを作成するか、既存のものをインポートします。"
      },
      step3: {
        title: "QRアイコンをタップしてスキャン",
        description: "ホーム画面のQRアイコンをタップし、コードをスキャンしてプロンプトを確認して接続します。"
      }
    }
  },
  metamask: {
    qr_code: {
      step1: {
        title: "MetaMaskアプリを開きます",
        description: "迅速なアクセスのために、MetaMaskをホーム画面に置くことをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成またはインポートします",
        description: "必ず安全な方法を使用してウォレットをバックアップしてください。秘密の回復フレーズを誰にも共有しないでください。"
      },
      step3: {
        title: "スキャンボタンをタップします",
        description: "スキャンすると、ウォレットを接続するための接続プロンプトが表示されます。"
      }
    },
    extension: {
      step1: {
        title: "MetaMaskの拡張機能をインストールします",
        description: "ウォレットへのより速いアクセスのために、MetaMaskをタスクバーにピン留めすることをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "安全な方法を使用してウォレットをバックアップし、秘密のフレーズを誰とも共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新",
        description: "ウォレットを設定した後は、下のリンクをクリックしてブラウザを更新し、エクステンションを読み込んでください。"
      }
    }
  },
  okx: {
    qr_code: {
      step1: {
        title: "OKX Walletアプリを開く",
        description: "OKX Walletをホーム画面に配置して、より早くアクセスできるようにすることをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "セキュアな方法を使ってウォレットをバックアップしてください。秘密フレーズは誰とも共有しないでください。"
      },
      step3: {
        title: "スキャンボタンをタップする",
        description: "スキャン後、ウォレットを接続するための接続プロンプトが表示されます。"
      }
    },
    extension: {
      step1: {
        title: "OKXウォレット拡張機能をインストールする",
        description: "ウォレットへの迅速なアクセスのため、OKXウォレットをタスクバーにピン止めすることをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成するか、インポートする",
        description: "セキュアな方法を使ってウォレットをバックアップしてください。秘密フレーズは誰とも共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新する",
        description: "ウォレットを設定したら、下をクリックしてブラウザをリフレッシュし、拡張機能を読み込みます。"
      }
    }
  },
  omni: {
    qr_code: {
      step1: {
        title: "Omniアプリを開く",
        description: "Omniをホーム画面に追加して、ウォレットへのアクセスを早めます。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "新しいウォレットを作成するか、既存のものをインポートします。"
      },
      step3: {
        title: "QRアイコンをタップしてスキャン",
        description: "ホーム画面のQRアイコンをタップし、コードをスキャンし、プロンプトを確認して接続します。"
      }
    }
  },
  token_pocket: {
    qr_code: {
      step1: {
        title: "TokenPocketアプリを開く",
        description: "より速いアクセスのために、TokenPocketをホーム画面に置くことをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成またはインポートする",
        description: "必ず安全な方法を使用してウォレットをバックアップしてください。秘密の回復フレーズを誰にも共有しないでください。"
      },
      step3: {
        title: "スキャンボタンをタップする",
        description: "スキャン後、ウォレットを接続するための接続プロンプトが表示されます。"
      }
    },
    extension: {
      step1: {
        title: "TokenPocketエクステンションをインストールする",
        description: "ウォレットへのより早いアクセスのために、TokenPocketをタスクバーにピン留めすることをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "ウォレットを安全な方法でバックアップすることを確認してください。シークレットフレーズを決して他の人と共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新",
        description: "ウォレットのセットアップが完了したら、以下をクリックしてブラウザを更新し、拡張機能をロードします。"
      }
    }
  },
  trust: {
    qr_code: {
      step1: {
        title: "Trust Walletアプリを開く",
        description: "ウォレットへの高速アクセスのために、Trust Walletをホーム画面に置きます。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "新しいウォレットを作成するか、既存のものをインポートします。"
      },
      step3: {
        title: "設定でWalletConnectをタップします",
        description: "新しい接続を選択し、QRコードをスキャンして、プロンプトで接続を確認します。"
      }
    },
    extension: {
      step1: {
        title: "Trust Wallet拡張機能をインストールします",
        description: "ブラウザの右上をクリックし、Trust Walletをピン留めして簡単にアクセスできるようにします。"
      },
      step2: {
        title: "ウォレットを作成するかインポートします",
        description: "新しいウォレットを作成するか、既存のものをインポートします。"
      },
      step3: {
        title: "ブラウザを更新する",
        description: "Trust Walletの設定が完了したら、以下をクリックしてブラウザを更新し、拡張機能を読み込みます。"
      }
    }
  },
  uniswap: {
    qr_code: {
      step1: {
        title: "Uniswapアプリを開く",
        description: "Uniswapウォレットをホーム画面に追加して、ウォレットへのアクセスを高速化します。"
      },
      step2: {
        title: "ウォレットを作成またはインポートする",
        description: "新しいウォレットを作成するか、既存のものをインポートします。"
      },
      step3: {
        title: "QRアイコンをタップしてスキャンする",
        description: "ホーム画面のQRアイコンをタップし、コードをスキャンしてプロンプトを確認して接続します。"
      }
    }
  },
  zerion: {
    qr_code: {
      step1: {
        title: "Zerionアプリを開く",
        description: "より速くアクセスするために、Zerionをホーム画面に置くことをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成するか、インポートする",
        description: "必ず安全な方法を使用してウォレットをバックアップしてください。秘密の回復フレーズを誰にも共有しないでください。"
      },
      step3: {
        title: "スキャンボタンを押す",
        description: "スキャンした後、ウォレットを接続するための接続プロンプトが表示されます。"
      }
    },
    extension: {
      step1: {
        title: "Zerion拡張機能をインストールする",
        description: "ウォレットへの素早いアクセスのため、Zerionをタスクバーにピン留めすることをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "ウォレットをセキュアな方法でバックアップすることを確認してください。秘密のフレーズを誰とも共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新する",
        description: "ウォレットをセットアップしたら、下のボタンをクリックしてブラウザを更新し、拡張機能をロードします。"
      }
    }
  },
  rainbow: {
    qr_code: {
      step1: {
        title: "Rainbowアプリを開く",
        description: "ウォレットへの早いアクセスのために、Rainbowをホーム画面に置くことをおすすめします。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "電話のバックアップ機能を使用して、簡単にウォレットをバックアップすることができます。"
      },
      step3: {
        title: "スキャンボタンをタップする",
        description: "スキャンした後、ウォレットを接続するための接続プロンプトが表示されます。"
      }
    }
  },
  enkrypt: {
    extension: {
      step1: {
        description: "ウォレットへのアクセスをより早くするため、タスクバーにEnkrypt Walletをピン留めすることを推奨します。",
        title: "Enkrypt Wallet拡張機能をインストールしてください"
      },
      step2: {
        description: "安全な方法でウォレットのバックアップを必ず取り、秘密のフレーズを誰とも共有しないでください。",
        title: "ウォレットを作成するか、インポートする"
      },
      step3: {
        description: "ウォレットの設定が完了したら、以下をクリックしてブラウザを更新し、拡張機能を読み込みます。",
        title: "ブラウザを更新する"
      }
    }
  },
  frame: {
    extension: {
      step1: {
        description: "ウォレットへのアクセスをより早くするため、タスクバーにFrameをピン留めすることを推奨します。",
        title: "Frameとその付属の拡張機能をインストール"
      },
      step2: {
        description: "ウォレットを安全な方法でバックアップしてください。秘密のフレーズを誰とも共有しないでください。",
        title: "ウォレットを作成、またはインポート"
      },
      step3: {
        description: "ウォレットの設定が完了したら、下のリンクをクリックしてブラウザを更新し、拡張機能をロードします。",
        title: "ブラウザを更新"
      }
    }
  },
  one_key: {
    extension: {
      step1: {
        title: "OneKey Wallet拡張機能をインストール",
        description: "ウォレットへのアクセスを素早く行うため、OneKey Walletをタスクバーにピン留めすることをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成、またはインポート",
        description: "安全な方法を使用してウォレットをバックアップしてください。秘密のフレーズを誰とも共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新する",
        description: "ウォレットを設定したら、以下をクリックしてブラウザを更新し、拡張機能をロードします。"
      }
    }
  },
  phantom: {
    extension: {
      step1: {
        title: "Phantom拡張機能をインストールする",
        description: "ウォレットへの容易なアクセスのため、Phantomをタスクバーにピン留めすることを推奨します。"
      },
      step2: {
        title: "ウォレットを作成またはインポートする",
        description: "安全な方法を使用してウォレットをバックアップしてください。秘密の回復フレーズを誰とも共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新する",
        description: "ウォレットの設定が完了したら、以下をクリックしてブラウザを更新し、エクステンションを読み込みます。"
      }
    }
  },
  rabby: {
    extension: {
      step1: {
        title: "Rabbyエクステンションをインストールする",
        description: "ウォレットへの素早いアクセスのため、タスクバーにRabbyをピン止めすることをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "セキュアな方法を使用してウォレットをバックアップしてください。秘密のフレーズを誰とも共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新",
        description: "ウォレットの設定が完了したら、以下をクリックしてブラウザを更新し、拡張機能をロードします。"
      }
    }
  },
  ronin: {
    qr_code: {
      step1: {
        description: "ウォレットへのより速いアクセスのため、Ronin Walletをホーム画面に設定することを推奨します。",
        title: "Ronin Walletアプリを開く"
      },
      step2: {
        description: "ウォレットは安全な方法でバックアップしてください。秘密のフレーズを誰とも共有しないでください。",
        title: "ウォレットを作成またはインポート"
      },
      step3: {
        description: "スキャン後、ウォレットを接続するための接続プロンプトが表示されます。",
        title: "「スキャン」ボタンをタップします"
      }
    },
    extension: {
      step1: {
        description: "ウォレットへのより速いアクセスのため、タスクバーにRonin Walletをピン留めすることを推奨します。",
        title: "Ronin Walletの拡張機能をインストールする"
      },
      step2: {
        description: "ウォレットは安全な方法でバックアップしてください。秘密のフレーズを誰とも共有しないでください。",
        title: "ウォレットを作成またはインポート"
      },
      step3: {
        description: "ウォレットを設定したら、以下をクリックしてブラウザを更新し、拡張機能を読み込みます。",
        title: "ブラウザを更新する"
      }
    }
  },
  ramper: {
    extension: {
      step1: {
        title: "Ramperの拡張機能をインストールする",
        description: "ウォレットへの容易なアクセスのため、タスクバーにRamperをピン留めすることを推奨します。"
      },
      step2: {
        title: "ウォレットを作成",
        description: "ウォレットは安全な方法でバックアップしてください。秘密のフレーズを誰とも共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新する",
        description: "ウォレットを設定したら、以下をクリックしてブラウザを更新し、拡張機能を読み込みます。"
      }
    }
  },
  safeheron: {
    extension: {
      step1: {
        title: "コア拡張機能をインストール",
        description: "ウォレットへの素早いアクセスのため、タスクバーにSafeheronをピン止めすることをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "確実に安全な方法でウォレットをバックアップしてください。秘密のフレーズは決して誰とも共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新する",
        description: "ウォレットの設定が完了したら、以下をクリックしてブラウザを更新し、拡張機能をロードします。"
      }
    }
  },
  taho: {
    extension: {
      step1: {
        title: "Taho拡張機能をインストールする",
        description: "ウォレットへのより迅速なアクセスのため、Tahoをタスクバーにピン留めすることをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成するか、インポートする",
        description: "確実に安全な方法でウォレットをバックアップしてください。秘密のフレーズは決して誰とも共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新する",
        description: "ウォレットの設定が完了したら、下をクリックしてブラウザを更新し、拡張機能をロードします。"
      }
    }
  },
  talisman: {
    extension: {
      step1: {
        title: "Talisman拡張機能をインストールする",
        description: "ウォレットへのより早いアクセスのために、Talismanをタスクバーにピン留めすることをお勧めします。"
      },
      step2: {
        title: "Ethereumウォレットを作成するか、インポートする",
        description: "ウォレットを安全な方法でバックアップしておくことを確認してください。リカバリーフレーズを誰とも共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新する",
        description: "ウォレットの設定が完了したら、下をクリックしてブラウザを更新し、拡張機能をロードします。"
      }
    }
  },
  xdefi: {
    extension: {
      step1: {
        title: "XDEFI Wallet拡張機能をインストールする",
        description: "XDEFI Walletをタスクバーにピン留めすることで、ウォレットへのアクセスが速くなることをお勧めします。"
      },
      step2: {
        title: "ウォレットの作成またはインポート",
        description: "ウォレットを安全な方法でバックアップしてください。秘密のフレーズを誰とも共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新する",
        description: "ウォレットの設定が完了したら、以下をクリックしてブラウザを更新し、拡張機能をロードしてください。"
      }
    }
  },
  zeal: {
    extension: {
      step1: {
        title: "Zeal 拡張機能をインストール",
        description: "ウォレットに素早くアクセスするために、タスクバーに Zeal をピン留めすることをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "ウォレットは安全な方法でバックアップしてください。秘密のフレーズを誰とも共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新する",
        description: "ウォレットを設定したら、以下をクリックしてブラウザを更新し、拡張機能を読み込みます。"
      }
    }
  },
  safepal: {
    extension: {
      step1: {
        title: "SafePal Wallet拡張機能をインストールする",
        description: "ブラウザの右上でクリックし、Easy AccessのためにSafePal Walletをピン留めします。"
      },
      step2: {
        title: "ウォレットを作成またはインポートする",
        description: "新しいウォレットを作成するか、既存のものをインポートします。"
      },
      step3: {
        title: "ブラウザを更新する",
        description: "SafePal Walletのセットアップが完了したら、以下をクリックしてブラウザをリフレッシュし、エクステンションをロードします。"
      }
    },
    qr_code: {
      step1: {
        title: "SafePal Walletアプリを開く",
        description: "SafePal Walletをホーム画面に置くことで、ウォレットへの素早いアクセスが可能になります。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "新しいウォレットを作成するか、既存のものをインポートします。"
      },
      step3: {
        title: "設定でWalletConnectをタップします",
        description: "新しい接続を選択し、QRコードをスキャンしてプロンプトを確認し接続します。"
      }
    }
  },
  desig: {
    extension: {
      step1: {
        title: "Desig拡張機能をインストール",
        description: "あなたのウォレットへの簡単なアクセスのために、Desigをタスクバーにピン留めすることをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成",
        description: "ウォレットは安全な方法でバックアップしてください。秘密のフレーズを誰とも共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新する",
        description: "ウォレットを設定したら、以下をクリックしてブラウザを更新し、拡張機能を読み込みます。"
      }
    }
  },
  subwallet: {
    extension: {
      step1: {
        title: "SubWallet拡張機能をインストール",
        description: "ウォレットへのより素早いアクセスのため、SubWalletをタスクバーにピン留めすることをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "ウォレットを安全な方法でバックアップしておくことを確認してください。リカバリーフレーズを誰とも共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新する",
        description: "ウォレットを設定したら、以下をクリックしてブラウザを更新し、拡張機能を読み込みます。"
      }
    },
    qr_code: {
      step1: {
        title: "SubWalletアプリを開く",
        description: "より迅速なアクセスのために、SubWalletをホーム画面に置くことをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "ウォレットは安全な方法でバックアップしてください。秘密のフレーズを誰とも共有しないでください。"
      },
      step3: {
        title: "「スキャン」ボタンをタップします",
        description: "スキャン後、ウォレットを接続するための接続プロンプトが表示されます。"
      }
    }
  },
  clv: {
    extension: {
      step1: {
        title: "CLV Wallet拡張機能をインストール",
        description: "ウォレットへのより素早いアクセスのため、CLV Walletをタスクバーにピン留めすることをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "ウォレットは安全な方法でバックアップしてください。秘密のフレーズを誰とも共有しないでください。"
      },
      step3: {
        title: "ブラウザを更新する",
        description: "ウォレットを設定したら、以下をクリックしてブラウザを更新し、拡張機能を読み込みます。"
      }
    },
    qr_code: {
      step1: {
        title: "CLV Walletアプリを開く",
        description: "より迅速なアクセスのために、ホーム画面にCLV Walletを置くことをお勧めします。"
      },
      step2: {
        title: "ウォレットを作成またはインポート",
        description: "ウォレットは安全な方法でバックアップしてください。秘密のフレーズを誰とも共有しないでください。"
      },
      step3: {
        title: "「スキャン」ボタンをタップします",
        description: "スキャン後、ウォレットを接続するための接続プロンプトが表示されます。"
      }
    }
  },
  okto: {
    qr_code: {
      step1: {
        title: "Oktoアプリを開く",
        description: "素早くアクセスするために、ホーム画面にOktoを追加します"
      },
      step2: {
        title: "MPCウォレットを作成する",
        description: "アカウントを作成し、ウォレットを生成します"
      },
      step3: {
        title: "設定でWalletConnectをタップします",
        description: "右上のScan QRアイコンをタップし、接続するためのプロンプトを確認します。"
      }
    }
  },
  ledger: {
    desktop: {
      step1: {
        title: "Ledger Liveアプリを開く",
        description: "より速いアクセスのために、ホーム画面にLedger Liveを置くことを推奨します。"
      },
      step2: {
        title: "あなたのLedgerを設定する",
        description: "新しいLedgerを設定するか、既存のものに接続します。"
      },
      step3: {
        title: "接続",
        description: "スキャン後、ウォレットを接続するための接続プロンプトが表示されます。"
      }
    },
    qr_code: {
      step1: {
        title: "Ledger Liveアプリを開く",
        description: "より速いアクセスのために、ホーム画面にLedger Liveを置くことを推奨します。"
      },
      step2: {
        title: "あなたのLedgerを設定する",
        description: "デスクトップアプリと同期するか、あなたのLedgerに接続することができます。"
      },
      step3: {
        title: "コードをスキャンする",
        description: "WalletConnectをタップし、スキャナーに切り替えてください。スキャン後、ウォレットを接続するための接続プロンプトが表示されます。"
      }
    }
  }
}, b = {
  connect_wallet: Je,
  intro: Ye,
  sign_in: He,
  connect: et,
  connect_scan: tt,
  connector_group: it,
  get: at,
  get_options: nt,
  get_mobile: rt,
  get_instructions: ot,
  chains: st,
  profile: lt,
  wallet_connectors: pt
}, ct = {
  label: "지갑 연결",
  wrong_network: {
    label: "잘못된 네트워크"
  }
}, dt = {
  title: "지갑이란 무엇인가요?",
  description: "지갑은 디지털 자산을 보내고, 받고, 저장하고, 표시하는 데 사용됩니다. 또한, 모든 웹 사이트에서 새 계정과 비밀번호를 생성할 필요 없이 로그인하는 새로운 방법입니다.",
  digital_asset: {
    title: "당신의 디지털 자산을 위한 집",
    description: "지갑은 이더리움 및 NFT와 같은 디지털 자산을 보내고, 받고, 저장하고, 표시하는데 사용됩니다."
  },
  login: {
    title: "새로운 로그인 방식",
    description: "모든 웹사이트에서 새 계정과 비밀번호를 생성하는 대신, 당신의 지갑을 연결하기만 하면 됩니다."
  },
  get: {
    label: "지갑 가져오기"
  },
  learn_more: {
    label: "더 알아보기"
  }
}, ut = {
  label: "계정을 확인하세요",
  description: "연결을 완료하려면 이 계정의 소유자임을 확인하기 위해 지갑에 메시지에 서명해야 합니다.",
  message: {
    send: "메시지 보내기",
    preparing: "메시지 준비 중...",
    cancel: "취소",
    preparing_error: "메시지 준비 중 오류가 발생했습니다. 다시 시도하세요!"
  },
  signature: {
    waiting: "서명을 기다리는 중...",
    verifying: "서명 검증 중...",
    signing_error: "메시지 서명 중 오류가 발생했습니다. 다시 시도하세요!",
    verifying_error: "서명 검증 중 오류가 발생했습니다. 다시 시도하세요!",
    oops_error: "앗, 문제가 발생했습니다!"
  }
}, mt = {
  label: "연결",
  title: "지갑 연결",
  new_to_ethereum: {
    description: "이더리움 지갑에 처음 접하시나요?",
    learn_more: {
      label: "더 알아보기"
    }
  },
  learn_more: {
    label: "더 알아보기"
  },
  recent: "최근",
  status: {
    opening: "{wallet}열기 ...",
    connecting: "연결 중",
    connect_mobile: "{wallet}에서 계속 진행",
    not_installed: "{wallet} 가 설치되어 있지 않습니다",
    not_available: "{wallet} 를 사용할 수 없습니다",
    confirm: "확장 프로그램에서 연결을 확인하세요",
    confirm_mobile: "지갑에서 연결 요청을 수락하십시오"
  },
  secondary_action: {
    get: {
      description: "{wallet}가 없나요?",
      label: "GET"
    },
    install: {
      label: "설치"
    },
    retry: {
      label: "다시 시도"
    }
  },
  walletconnect: {
    description: {
      full: "공식 WalletConnect 모달이 필요한가요?",
      compact: "WalletConnect 모달이 필요한가요?"
    },
    open: {
      label: "열기"
    }
  }
}, kt = {
  title: "{wallet}로 스캔하기",
  fallback_title: "휴대폰으로 스캔하기"
}, bt = {
  installed: "설치됨",
  recommended: "추천",
  other: "기타",
  popular: "인기",
  more: "더 보기",
  others: "다른 지갑들"
}, gt = {
  title: "월렛 받기",
  action: {
    label: "받기"
  },
  mobile: {
    description: "모바일 월렛"
  },
  extension: {
    description: "브라우저 확장 프로그램"
  },
  mobile_and_extension: {
    description: "모바일 지갑 및 확장 프로그램"
  },
  mobile_and_desktop: {
    description: "모바일 및 데스크톱 지갑"
  },
  looking_for: {
    title: "찾고 계신 것이 아닌가요?",
    mobile: {
      description: "메인 화면에서 다른 지갑 제공자를 사용하기 위해 지갑을 선택하세요."
    },
    desktop: {
      compact_description: "메인 화면에서 다른 지갑 제공자를 사용하기 위해 지갑을 선택하세요.",
      wide_description: "왼쪽에서 지갑을 선택하여 다른 지갑 제공자를 사용하기 시작하세요."
    }
  }
}, yt = {
  title: "{wallet}로 시작하세요",
  short_title: "{wallet}얻기",
  mobile: {
    title: "모바일용 {wallet}",
    description: "모바일 지갑으로 이더리움 세계를 탐험하세요.",
    download: {
      label: "앱 받기"
    }
  },
  extension: {
    title: "{browser}용 {wallet}",
    description: "가장 좋아하는 웹 브라우저에서 바로 지갑에 접근하세요.",
    download: {
      label: "추가하기 {browser}"
    }
  },
  desktop: {
    title: "{wallet} 용 {platform}",
    description: "강력한 데스크톱에서 네이티브로 지갑에 접근하세요.",
    download: {
      label: "{platform}에 추가"
    }
  }
}, ft = {
  title: "설치하기 {wallet}",
  description: "iOS 또는 Android에서 다운로드하기 위해 휴대폰으로 스캔하세요",
  continue: {
    label: "계속"
  }
}, ht = {
  mobile: {
    connect: {
      label: "연결"
    },
    learn_more: {
      label: "더 알아보기"
    }
  },
  extension: {
    refresh: {
      label: "새로고침"
    },
    learn_more: {
      label: "더 알아보기"
    }
  },
  desktop: {
    connect: {
      label: "연결"
    },
    learn_more: {
      label: "더 알아보기"
    }
  }
}, zt = {
  title: "네트워크 전환",
  wrong_network: "잘못된 네트워크를 탐지했습니다, 계속하려면 전환하거나 연결을 해제하세요.",
  confirm: "지갑에서 승인",
  switching_not_supported: "지갑에서 {appName}네트워크를 전환하는 것은 지원되지 않습니다. 대신 지갑 내에서 네트워크를 전환해 보세요.",
  switching_not_supported_fallback: "당신의 지갑은 이 앱에서 네트워크를 바꾸는 것을 지원하지 않습니다. 대신 지갑 내에서 네트워크를 변경해 보세요.",
  disconnect: "연결 해제",
  connected: "연결됨"
}, vt = {
  disconnect: {
    label: "연결 해제"
  },
  copy_address: {
    label: "주소 복사",
    copied: "복사됨!"
  },
  explorer: {
    label: "탐색기에서 더 보기"
  },
  transactions: {
    description: "{appName} 거래가 여기에 나타납니다...",
    description_fallback: "여기에 트랜잭션이 표시됩니다...",
    recent: {
      title: "최근 거래 내역"
    },
    clear: {
      label: "모두 지우기"
    }
  }
}, Ct = {
  argent: {
    qr_code: {
      step1: {
        description: "지갑에 더 빠르게 액세스하려면 Argent를 홈 화면에 놓으세요.",
        title: "Argent 앱을 열기"
      },
      step2: {
        description: "지갑과 사용자 이름을 생성하거나 기존의 지갑을 가져옵니다.",
        title: "지갑 생성 또는 가져오기"
      },
      step3: {
        description: "스캔 후에 지갑을 연결하기 위한 연결 요청이 표시됩니다.",
        title: "QR 코드 스캔 버튼을 누르기"
      }
    }
  },
  bifrost: {
    qr_code: {
      step1: {
        description: "더 빠른 접근을 위해 홈 화면에 Bifrost Wallet을 놓는 것을 권장합니다.",
        title: "Bifrost 지갑 앱을 열어주세요"
      },
      step2: {
        description: "복구 문구를 사용하여 지갑을 생성하거나 가져옵니다.",
        title: "지갑 생성 또는 가져오기"
      },
      step3: {
        description: "스캔 후 연결 프롬프트가 나타나고 지갑을 연결할 수 있습니다.",
        title: "스캔 버튼을 누릅니다"
      }
    }
  },
  bitget: {
    qr_code: {
      step1: {
        description: "더 빠른 접근을 위해 Bitget 지갑을 홈 화면에 두는 것을 권장합니다.",
        title: "Bitget 지갑 앱을 여세요"
      },
      step2: {
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 절대로 비밀 구문을 누구와도 공유하지 마세요.",
        title: "지갑 생성 또는 가져오기"
      },
      step3: {
        description: "스캔 후, 지갑을 연결하라는 연결 요청 메시지가 나타납니다.",
        title: "스캔 버튼을 누르세요"
      }
    },
    extension: {
      step1: {
        description: "지갑에 빠르게 액세스하기 위해 Bitget Wallet을 작업 표시줄에 고정하는 것을 권장합니다.",
        title: "Bitget Wallet 확장 프로그램을 설치하세요"
      },
      step2: {
        description: "지갑을 안전한 방법으로 백업하세요. 절대로 비밀 문구를 누구와도 공유하지 마세요.",
        title: "지갑 생성 또는 가져오기"
      },
      step3: {
        description: "지갑 설정을 마친 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요.",
        title: "브라우저를 새로 고침하세요"
      }
    }
  },
  bitski: {
    extension: {
      step1: {
        description: "지갑에 더 빠르게 액세스하기 위해 Bitski를 작업 표시줄에 고정하는 것을 권장합니다.",
        title: "Bitski 확장 프로그램을 설치합니다"
      },
      step2: {
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 비밀 문구를 누구와도 공유하지 마세요.",
        title: "지갑 만들기 또는 가져오기"
      },
      step3: {
        description: "지갑을 설정한 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요.",
        title: "브라우저를 새로고침하세요"
      }
    }
  },
  bloom: {
    desktop: {
      step1: {
        title: "Bloom Wallet 앱을 엽니다",
        description: "더 빠른 접근을 위해 Bloom Wallet을 홈 화면에 두는 것을 추천합니다."
      },
      step2: {
        description: "복구 문구를 사용하여 지갑을 생성하거나 가져옵니다.",
        title: "지갑 생성 또는 가져오기"
      },
      step3: {
        description: "지갑을 갖춘 후, Bloom을 통해 연결하려면 연결하기를 클릭합니다. 앱에서 연결을 확인하는 프롬프트가 나타납니다.",
        title: "연결하기를 클릭"
      }
    },
    qr_code: {
      step1: {
        title: "Bloom Wallet 앱을 엽니다",
        description: "더 빠른 접근을 위해 Bloom Wallet을 홈 화면에 두는 것을 추천합니다."
      },
      step2: {
        description: "복구 문구를 사용하여 지갑을 생성하거나 가져옵니다.",
        title: "지갑 생성 또는 가져오기"
      },
      step3: {
        description: "지갑을 갖춘 후, Bloom을 통해 연결하려면 연결하기를 클릭합니다. 앱에서 연결을 확인하는 프롬프트가 나타납니다.",
        title: "연결하기를 클릭"
      }
    }
  },
  coin98: {
    qr_code: {
      step1: {
        description: "지갑에 빠르게 액세스하기 위해 Coin98 Wallet을 홈 화면에 두는 것을 권장합니다.",
        title: "Coin98 Wallet 앱을 열기"
      },
      step2: {
        description: "휴대폰에서 백업 기능을 이용하여 지갑을 쉽게 백업할 수 있습니다.",
        title: "지갑 만들기 또는 가져오기"
      },
      step3: {
        description: "스캔한 후 연결 프롬프트가 나타나 지갑을 연결하도록 합니다.",
        title: "WalletConnect 버튼을 누르세요"
      }
    },
    extension: {
      step1: {
        description: "브라우저 오른쪽 상단을 클릭하고 쉽게 액세스할 수 있도록 Coin98 Wallet을 고정하세요.",
        title: "Coin98 Wallet 확장 프로그램을 설치하세요"
      },
      step2: {
        description: "새로운 지갑을 만들거나 기존의 지갑을 가져옵니다.",
        title: "지갑을 만들거나 가져옵니다"
      },
      step3: {
        description: "Coin98 Wallet을 설정하면 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요.",
        title: "브라우저를 새로고침 하세요"
      }
    }
  },
  coinbase: {
    qr_code: {
      step1: {
        description: "더 빠른 액세스를 위해 Coinbase Wallet을 홈 화면에 두는 것을 권장합니다.",
        title: "Coinbase Wallet 앱을 엽니다"
      },
      step2: {
        description: "클라우드 백업 기능을 사용하여 지갑을 쉽게 백업할 수 있습니다.",
        title: "지갑 생성 또는 가져오기"
      },
      step3: {
        description: "스캔한 후에 지갑을 연결하라는 연결 프롬프트가 나타납니다.",
        title: "스캔 버튼을 탭하세요"
      }
    },
    extension: {
      step1: {
        description: "지갑에 더 빠르게 접근할 수 있도록 Coinbase Wallet을 작업 표시줄에 고정하는 것을 권장합니다.",
        title: "Coinbase Wallet 확장 프로그램을 설치하세요"
      },
      step2: {
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 비밀 문구는 절대로 누구와도 공유하지 마세요.",
        title: "지갑 만들기 또는 가져오기"
      },
      step3: {
        description: "지갑을 설정한 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요.",
        title: "브라우저 새로고침"
      }
    }
  },
  core: {
    qr_code: {
      step1: {
        description: "지갑에 빠르게 액세스할 수 있도록 Core를 홈 화면에 두는 것을 추천드립니다.",
        title: "Core 앱 열기"
      },
      step2: {
        description: "휴대폰에서 우리의 백업 기능을 이용해 지갑을 쉽게 백업할 수 있습니다.",
        title: "지갑 만들기 또는 가져오기"
      },
      step3: {
        description: "스캔 한 후에는 지갑을 연결하라는 연결 요청이 표시됩니다.",
        title: "WalletConnect 버튼을 누르세요"
      }
    },
    extension: {
      step1: {
        description: "지갑에 더 빠르게 액세스하기 위해 작업 표시줄에 Core를 고정하는 것을 권장합니다.",
        title: "Core 확장 프로그램을 설치하세요"
      },
      step2: {
        description: "안전한 방법을 사용하여 지갑을 백업해야 합니다. 절대로 비밀 문구를 다른 사람과 공유하지 마세요.",
        title: "지갑 만들기 또는 가져오기"
      },
      step3: {
        description: "지갑을 설정한 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요.",
        title: "브라우저를 새로 고치세요"
      }
    }
  },
  fox: {
    qr_code: {
      step1: {
        description: "FoxWallet을 홈 화면에 놓는 것을 추천합니다. 이렇게 하면 더 빠르게 접근할 수 있습니다.",
        title: "FoxWallet 앱을 열어주세요"
      },
      step2: {
        description: "지갑을 안전한 방법으로 백업하세요. 절대로 비밀 문구를 다른 사람과 공유하지 마세요.",
        title: "지갑을 생성하거나 가져오기"
      },
      step3: {
        description: "스캔 후, 지갑을 연결하라는 연결 프롬프트가 표시됩니다.",
        title: "스캔 버튼을 누르세요"
      }
    }
  },
  frontier: {
    qr_code: {
      step1: {
        description: "Frontier Wallet을 홈 화면에 놓는 것을 추천합니다. 이렇게 하면 더 빠르게 접근할 수 있습니다.",
        title: "Frontier Wallet 앱을 열어주세요"
      },
      step2: {
        description: "지갑을 안전한 방법으로 백업해야 합니다. 비밀 구문을 누구와도 공유하지 마세요.",
        title: "지갑 생성 또는 가져오기"
      },
      step3: {
        description: "스캔 후에 지갑을 연결하라는 연결 프롬프트가 표시됩니다.",
        title: "스캔 버튼을 누르세요"
      }
    },
    extension: {
      step1: {
        description: "지갑에 더 빠르게 액세스 할 수 있도록 Frontier Wallet을 작업 표시줄에 고정하는 것을 권장합니다.",
        title: "Frontier Wallet 확장 프로그램 설치"
      },
      step2: {
        description: "지갑을 안전한 방법으로 백업해야 합니다. 비밀 구문을 누구와도 공유하지 마세요.",
        title: "지갑 생성 또는 가져오기"
      },
      step3: {
        description: "지갑을 설정한 후에 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요.",
        title: "브라우저를 새로 고칩니다"
      }
    }
  },
  im_token: {
    qr_code: {
      step1: {
        title: "imToken 앱을 연다",
        description: "당신의 지갑에 더 빠르게 접근하기 위해 imToken 앱을 홈 화면에 둡니다."
      },
      step2: {
        title: "지갑을 만들거나 불러옵니다",
        description: "새 지갑을 생성하거나 기존의 것을 가져옵니다."
      },
      step3: {
        title: "오른쪽 상단의 스캐너 아이콘을 누릅니다",
        description: "새 연결을 선택하고 QR 코드를 스캔한 뒤, 연결하려는 프롬프트를 확인합니다."
      }
    }
  },
  kresus: {
    qr_code: {
      step1: {
        title: "Kresus Wallet 앱을 엽니다",
        description: "Kresus 지갑을 홈 화면에 추가하여 지갑에 더 빠르게 접근하세요."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "새로운 지갑을 만들거나 기존의 지갑을 가져옵니다."
      },
      step3: {
        title: "QR 아이콘을 탭하고 스캔하기",
        description: "홈화면의 QR 아이콘을 누르고 코드를 스캔하고 프롬프트를 확인하여 연결하세요."
      }
    }
  },
  metamask: {
    qr_code: {
      step1: {
        title: "MetaMask 앱을 엽니다",
        description: "빠른 액세스를 위해 MetaMask를 홈 화면에 두는 것을 권장합니다."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "당신의 지갑을 안전한 방법으로 백업하는 것을 잊지 마세요. 절대로 비밀 구절을 공유하지 마세요."
      },
      step3: {
        title: "스캔 버튼을 누릅니다",
        description: "스캔한 후에 지갑을 연결하라는 연결 프롬프트가 나타납니다."
      }
    },
    extension: {
      step1: {
        title: "MetaMask 확장 프로그램을 설치하세요",
        description: "지갑에 빠르게 접근하기 위해 MetaMask를 작업표시줄에 고정하는 것을 추천합니다."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 결코 비밀 문구를 다른 사람과 공유하지 마세요."
      },
      step3: {
        title: "브라우저를 새로 고치세요",
        description: "지갑 설정을 마친 후에는 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요."
      }
    }
  },
  okx: {
    qr_code: {
      step1: {
        title: "OKX Wallet 앱을 열기",
        description: "더 빠른 접근을 위해 OKX 지갑을 홈 화면에 두는 것을 추천합니다."
      },
      step2: {
        title: "지갑 만들기 또는 불러오기",
        description: "안전한 방법으로 지갑을 백업하세요. 절대 비밀 문구를 다른 사람과 공유하지 마세요."
      },
      step3: {
        title: "스캔 버튼을 탭하세요",
        description: "스캔 후 연결 요청이 나타나며, 이를 통해 지갑을 연결할 수 있습니다."
      }
    },
    extension: {
      step1: {
        title: "OKX 지갑 확장 프로그램 설치하기",
        description: "지갑에 빠르게 접근할 수 있도록 OKX 지갑을 작업 표시줄에 고정하는 것을 추천합니다."
      },
      step2: {
        title: "지갑 만들기 또는 불러오기",
        description: "당신의 지갑을 안전한 방법으로 백업해야 합니다. 비밀 문구를 절대로 다른 사람과 공유하지 마세요."
      },
      step3: {
        title: "브라우저를 새로 고치세요",
        description: "지갑을 설정한 후, 브라우저를 새로고침하고 확장 프로그램을 로드하기 위해 아래를 클릭하세요."
      }
    }
  },
  omni: {
    qr_code: {
      step1: {
        title: "Omni 앱을 열기",
        description: "더 빠른 액세스를 위해 Omni를 홈 스크린에 추가하세요."
      },
      step2: {
        title: "지갑 만들기 또는 가져오기",
        description: "새로운 지갑을 만들거나 기존의 하나를 가져옵니다."
      },
      step3: {
        title: "QR 아이콘을 탭하고 스캔하기",
        description: "홈 화면의 QR 아이콘을 탭하고, 코드를 스캔하고 프롬프트를 확인하여 연결하세요."
      }
    }
  },
  token_pocket: {
    qr_code: {
      step1: {
        title: "TokenPocket 앱을 열어주세요",
        description: "빠른 접근을 위해 홈 화면에 TokenPocket을 추가하는 것을 권장합니다."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 절대로 누구에게도 비밀 문구를 공유하지 마세요."
      },
      step3: {
        title: "스캔 버튼을 탭하세요",
        description: "스캔 후에 지갑을 연결하라는 프롬프트가 표시됩니다."
      }
    },
    extension: {
      step1: {
        title: "TokenPocket 확장 프로그램을 설치하세요",
        description: "지갑에 빠르게 접근하기 위해 TokenPocket를 작업 표시줄에 고정하는 것을 추천합니다."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 절대로 비밀 문구를 다른 사람과 공유하지 마세요."
      },
      step3: {
        title: "브라우저 새로고침",
        description: "지갑을 설정하면 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드합니다."
      }
    }
  },
  trust: {
    qr_code: {
      step1: {
        title: "Trust Wallet 앱을 열기",
        description: "지갑에 빠르게 접근하기 위해 Trust Wallet을 홈 스크린에 두세요."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "새로운 지갑을 생성하거나 기존의 것을 가져오세요."
      },
      step3: {
        title: "설정에서 WalletConnect를 탭하세요",
        description: "새 연결을 선택한 다음 QR 코드를 스캔하고, 연결을 확인하는 프롬프트를 확인하세요."
      }
    },
    extension: {
      step1: {
        title: "Trust Wallet 확장 프로그램을 설치하세요",
        description: "브라우저의 오른쪽 상단을 클릭하고 Trust Wallet을 고정하여 쉽게 접근하세요."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "새로운 지갑을 생성하거나 기존의 것을 가져오세요."
      },
      step3: {
        title: "브라우저를 새로고침하세요",
        description: "Trust Wallet을 설정한 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드합니다."
      }
    }
  },
  uniswap: {
    qr_code: {
      step1: {
        title: "Uniswap 앱을 엽니다",
        description: "Uniswap Wallet을 홈 화면에 추가하여 지갑에 더 빠르게 액세스하세요."
      },
      step2: {
        title: "지갑을 만들거나 가져오기",
        description: "새 지갑을 생성하거나 기존의 것을 가져옵니다."
      },
      step3: {
        title: "QR 아이콘을 누르고 스캔하기",
        description: "홈화면의 QR 아이콘을 누르고 코드를 스캔하고 프롬프트를 확인하여 연결하세요."
      }
    }
  },
  zerion: {
    qr_code: {
      step1: {
        title: "Zerion 앱을 엽니다",
        description: "더 빠른 접근을 위해 Zerion을 홈 화면에 두는 것을 권장합니다."
      },
      step2: {
        title: "지갑 만들기 또는 가져오기",
        description: "안전한 방법으로 지갑을 백업하세요. 절대로 비밀 구절을 누군가와 공유하지 마세요."
      },
      step3: {
        title: "스캔 버튼을 탭하세요",
        description: "스캔 후 연결 프롬프트가 나타나 지갑을 연결하세요."
      }
    },
    extension: {
      step1: {
        title: "Zerion 확장 프로그램을 설치하세요",
        description: "지갑에 더 빠르게 접근할 수 있도록 Zerion을 작업 표시줄에 고정하는 것을 권장합니다."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 비밀 구문을 절대로 다른 사람과 공유하지 마세요."
      },
      step3: {
        title: "브라우저를 새로 고치세요",
        description: "지갑을 설정한 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요."
      }
    }
  },
  rainbow: {
    qr_code: {
      step1: {
        title: "Rainbow 앱 열기",
        description: "지갑에 더 빠르게 접근하기 위해 홈 화면에 Rainbow를 두는 것을 추천합니다."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "휴대폰에 있는 백업 기능을 사용하여 지갑을 쉽게 백업할 수 있습니다."
      },
      step3: {
        title: "스캔 버튼을 누르세요",
        description: "스캔 후, 지갑을 연결하라는 연결 프롬프트가 나타납니다."
      }
    }
  },
  enkrypt: {
    extension: {
      step1: {
        description: "지갑에 더 빠르게 접근하기 위해 작업 표시줄에 Enkrypt Wallet를 고정하는 것을 추천합니다.",
        title: "Enkrypt Wallet 확장 프로그램을 설치하세요"
      },
      step2: {
        description: "지갑을 안전한 방법으로 백업하세요. 절대로 비밀 문구를 다른 사람과 공유하지 마세요.",
        title: "지갑 생성 또는 가져오기"
      },
      step3: {
        description: "지갑을 설정한 후에는 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요.",
        title: "브라우저 새로고침"
      }
    }
  },
  frame: {
    extension: {
      step1: {
        description: "지갑에 더 빠르게 접근할 수 있도록 Frame을 작업 표시줄에 고정하는 것을 추천합니다.",
        title: "Frame 및 동반 확장 프로그램 설치"
      },
      step2: {
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 절대로 비밀 구문을 다른 사람과 공유하지 마세요.",
        title: "지갑 생성 또는 가져오기"
      },
      step3: {
        description: "지갑을 설정한 후에는 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요.",
        title: "브라우저 새로고침"
      }
    }
  },
  one_key: {
    extension: {
      step1: {
        title: "OneKey Wallet 확장 프로그램을 설치하세요",
        description: "지갑에 빠르게 접근할 수 있도록 OneKey Wallet을 작업 표시줄에 고정하는 것을 권장합니다."
      },
      step2: {
        title: "지갑 생성 또는 불러오기",
        description: "지갑을 안전한 방법으로 백업하세요. 절대로 비밀 문구를 다른 사람과 공유하지 마세요."
      },
      step3: {
        title: "브라우저를 새로고침 하세요",
        description: "지갑을 설정한 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요."
      }
    }
  },
  phantom: {
    extension: {
      step1: {
        title: "Phantom 확장 프로그램을 설치하세요",
        description: "지갑에 더 쉽게 접근할 수 있도록 Phantom을 작업 표시줄에 고정하는 것을 권장합니다."
      },
      step2: {
        title: "지갑 생성 또는 불러오기",
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 절대로 누구와도 비밀 복구 구문을 공유하지 마세요."
      },
      step3: {
        title: "브라우저를 새로고침 하세요",
        description: "지갑을 설정한 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요."
      }
    }
  },
  rabby: {
    extension: {
      step1: {
        title: "Rabby 확장 프로그램을 설치하세요",
        description: "지갑에 더 빠르게 액세스할 수 있도록 Rabby를 작업표시줄에 고정하는 것을 권장합니다."
      },
      step2: {
        title: "지갑 만들기 또는 가져오기",
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 절대로 누구와도 비밀 구문을 공유하지 마세요."
      },
      step3: {
        title: "브라우저를 새로고침 하세요",
        description: "지갑 설정을 완료하면 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드합니다."
      }
    }
  },
  ronin: {
    qr_code: {
      step1: {
        description: "Ronin Wallet을 홈 화면에 두어 더 빠른 접근을 추천드립니다.",
        title: "Ronin Wallet 앱을 열기"
      },
      step2: {
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 절대로 비밀 구문을 누구와도 공유하지 마세요.",
        title: "지갑 생성 또는 가져오기"
      },
      step3: {
        description: "스캔 후에 지갑을 연결하기 위한 연결 요청이 표시됩니다.",
        title: "스캔 버튼을 누릅니다"
      }
    },
    extension: {
      step1: {
        description: "작업 표시줄에 Ronin Wallet을 고정하여 지갑에 더 빠르게 접근할 수 있도록 추천합니다.",
        title: "Ronin Wallet 확장 프로그램 설치하기"
      },
      step2: {
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 절대로 비밀 구문을 누구와도 공유하지 마세요.",
        title: "지갑 생성 또는 가져오기"
      },
      step3: {
        description: "지갑 설정을 마친 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요.",
        title: "브라우저를 새로 고침하세요"
      }
    }
  },
  ramper: {
    extension: {
      step1: {
        title: "Ramper 확장 프로그램 설치하기",
        description: "작업 표시줄에 Ramper를 고정하여 지갑 접근을 용이하게 할 것을 추천합니다."
      },
      step2: {
        title: "지갑 생성",
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 절대로 비밀 구문을 누구와도 공유하지 마세요."
      },
      step3: {
        title: "브라우저를 새로 고침하세요",
        description: "지갑 설정을 마친 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요."
      }
    }
  },
  safeheron: {
    extension: {
      step1: {
        title: "코어 확장 프로그램 설치",
        description: "지갑에 빠르게 액세스하기 위해 Safeheron을 작업 표시줄에 고정하는 것을 권장합니다."
      },
      step2: {
        title: "지갑 만들기 또는 가져오기",
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 비밀 문구를 절대 다른 사람과 공유하지 마세요."
      },
      step3: {
        title: "브라우저 새로고침",
        description: "지갑 설정을 완료하면 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드합니다."
      }
    }
  },
  taho: {
    extension: {
      step1: {
        title: "Taho 확장 프로그램 설치",
        description: "지갑에 더 빠르게 액세스하기 위해 Taho를 작업 표시줄에 고정하는 것을 추천합니다."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 결코 비밀 문구를 누군가와 공유하지 마세요."
      },
      step3: {
        title: "브라우저를 새로고침 하세요",
        description: "지갑을 설정한 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요."
      }
    }
  },
  talisman: {
    extension: {
      step1: {
        title: "탈리스만 확장 프로그램 설치",
        description: "지갑에 더 빠르게 접근하기 위해 Talisman을 작업 표시줄에 고정하는 것을 추천합니다."
      },
      step2: {
        title: "이더리움 지갑 생성 또는 가져오기",
        description: "반드시 안전한 방법을 사용하여 지갑을 백업하세요. 복구 문구를 누구와도 공유하지 마세요."
      },
      step3: {
        title: "브라우저를 새로고침 하세요",
        description: "지갑을 설정 한 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요."
      }
    }
  },
  xdefi: {
    extension: {
      step1: {
        title: "XDEFI 지갑 확장 프로그램을 설치하세요",
        description: "지갑에 빠르게 액세스하기 위해 작업 표시줄에 XDEFI Wallet을 고정하는 것을 권장합니다."
      },
      step2: {
        title: "지갑을 만들거나 가져오기",
        description: "반드시 안전한 방법을 사용하여 지갑을 백업하세요. 비밀 문구를 누구와도 공유하지 마세요."
      },
      step3: {
        title: "브라우저를 새로고침 하세요",
        description: "지갑을 설정한 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요."
      }
    }
  },
  zeal: {
    extension: {
      step1: {
        title: "Zeal 확장 프로그램을 설치하세요",
        description: "월렛에 더 빠르게 액세스할 수 있도록 Zeal을 작업 표시 줄에 고정하는 것을 권장합니다."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 절대로 비밀 구문을 누구와도 공유하지 마세요."
      },
      step3: {
        title: "브라우저를 새로 고침하세요",
        description: "지갑 설정을 마친 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요."
      }
    }
  },
  safepal: {
    extension: {
      step1: {
        title: "SafePal Wallet 확장 프로그램을 설치하세요",
        description: "브라우저의 오른쪽 상단에서 클릭하고 SafePal Wallet을 고정하여 쉽게 접근하세요."
      },
      step2: {
        title: "지갑을 만들거나 가져옵니다",
        description: "새로운 지갑을 만들거나 기존의 지갑을 가져옵니다."
      },
      step3: {
        title: "브라우저를 새로 고침하세요",
        description: "SafePal Wallet을 설정한 후에는 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요."
      }
    },
    qr_code: {
      step1: {
        title: "SafePal Wallet 앱을 여세요",
        description: "월렛에 빠르게 액세스할 수 있도록 SafePal Wallet을 홈 화면에 두세요."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "새로운 지갑을 만들거나 기존의 지갑을 가져옵니다."
      },
      step3: {
        title: "설정에서 WalletConnect를 탭하세요",
        description: "새 연결을 선택하고 QR 코드를 스캔한 뒤, 연결하려는 프롬프트를 확인합니다."
      }
    }
  },
  desig: {
    extension: {
      step1: {
        title: "Desig 확장 프로그램 설치",
        description: "당신의 지갑에 더 쉽게 접근하기 위해 작업 표시줄에 Desig을 고정하는 것을 권장합니다."
      },
      step2: {
        title: "지갑 생성",
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 절대로 비밀 구문을 누구와도 공유하지 마세요."
      },
      step3: {
        title: "브라우저를 새로 고침하세요",
        description: "지갑 설정을 마친 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요."
      }
    }
  },
  subwallet: {
    extension: {
      step1: {
        title: "SubWallet 확장 프로그램 설치",
        description: "당신의 지갑에 더 빠르게 접근하기 위해 작업 표시줄에 SubWallet을 고정하는 것을 권장합니다."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "반드시 안전한 방법을 사용하여 지갑을 백업하세요. 복구 문구를 누구와도 공유하지 마세요."
      },
      step3: {
        title: "브라우저를 새로 고침하세요",
        description: "지갑 설정을 마친 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요."
      }
    },
    qr_code: {
      step1: {
        title: "SubWallet 앱 열기",
        description: "더 빠른 접근을 위해 SubWallet을 홈 화면에 두는 것을 권장합니다."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 절대로 비밀 구문을 누구와도 공유하지 마세요."
      },
      step3: {
        title: "스캔 버튼을 누릅니다",
        description: "스캔 후에 지갑을 연결하기 위한 연결 요청이 표시됩니다."
      }
    }
  },
  clv: {
    extension: {
      step1: {
        title: "CLV Wallet 확장 프로그램 설치",
        description: "당신의 지갑에 더 빠르게 접근하기 위해 작업 표시줄에 CLV Wallet을 고정하는 것을 권장합니다."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 절대로 비밀 구문을 누구와도 공유하지 마세요."
      },
      step3: {
        title: "브라우저를 새로 고침하세요",
        description: "지갑 설정을 마친 후 아래를 클릭하여 브라우저를 새로고침하고 확장 프로그램을 로드하세요."
      }
    },
    qr_code: {
      step1: {
        title: "CLV Wallet 앱을 엽니다",
        description: "더 빠른 접근을 위해 CLV Wallet을 홈 화면에 놓는 것이 좋습니다."
      },
      step2: {
        title: "지갑 생성 또는 가져오기",
        description: "안전한 방법을 사용하여 지갑을 백업하세요. 절대로 비밀 구문을 누구와도 공유하지 마세요."
      },
      step3: {
        title: "스캔 버튼을 누릅니다",
        description: "스캔 후에 지갑을 연결하기 위한 연결 요청이 표시됩니다."
      }
    }
  },
  okto: {
    qr_code: {
      step1: {
        title: "Okto 앱을 엽니다",
        description: "빠른 접근을 위해 Okto를 홈 화면에 추가합니다"
      },
      step2: {
        title: "MPC Wallet을 만듭니다",
        description: "계정을 만들고 지갑을 생성합니다"
      },
      step3: {
        title: "설정에서 WalletConnect를 탭하세요",
        description: "오른쪽 상단의 QR 아이콘을 탭하고 연결하려면 알림을 확인합니다."
      }
    }
  },
  ledger: {
    desktop: {
      step1: {
        title: "Ledger Live 앱을 엽니다",
        description: "빠른 접근을 위해 Ledger Live를 홈화면에 두는 것을 권장합니다."
      },
      step2: {
        title: "Ledger 설정",
        description: "새 Ledger를 설정하거나 기존 Ledger에 연결하세요."
      },
      step3: {
        title: "연결",
        description: "스캔 후 연결 요청이 나타나며, 이를 통해 지갑을 연결할 수 있습니다."
      }
    },
    qr_code: {
      step1: {
        title: "Ledger Live 앱을 엽니다",
        description: "빠른 접근을 위해 Ledger Live를 홈화면에 두는 것을 권장합니다."
      },
      step2: {
        title: "Ledger 설정",
        description: "데스크톱 앱과 동기화하거나 Ledger를 연결할 수 있습니다."
      },
      step3: {
        title: "코드를 스캔하세요",
        description: "WalletConnect를 탭하고 스캐너로 전환합니다. 스캔 후 연결 요청이 나타나며, 이를 통해 지갑을 연결할 수 있습니다."
      }
    }
  }
}, g = {
  connect_wallet: ct,
  intro: dt,
  sign_in: ut,
  connect: mt,
  connect_scan: kt,
  connector_group: bt,
  get: gt,
  get_options: yt,
  get_mobile: ft,
  get_instructions: ht,
  chains: zt,
  profile: vt,
  wallet_connectors: Ct
}, _t = {
  label: "Conectar Carteira",
  wrong_network: {
    label: "Rede incorreta"
  }
}, wt = {
  title: "O que é uma Carteira?",
  description: "Uma carteira é usada para enviar, receber, armazenar e exibir ativos digitais. Também é uma nova forma de se conectar, sem precisar criar novas contas e senhas em todo site.",
  digital_asset: {
    title: "Um lar para seus ativos digitais",
    description: "Carteiras são usadas para enviar, receber, armazenar e exibir ativos digitais como Ethereum e NFTs."
  },
  login: {
    title: "Uma nova maneira de fazer login",
    description: "Em vez de criar novas contas e senhas em todos os sites, basta conectar sua carteira."
  },
  get: {
    label: "Obter uma Carteira"
  },
  learn_more: {
    label: "Saiba mais"
  }
}, xt = {
  label: "Verifique sua conta",
  description: "Para concluir a conexão, você deve assinar uma mensagem em sua carteira para confirmar que você é o proprietário desta conta.",
  message: {
    send: "Enviar mensagem",
    preparing: "Preparando mensagem...",
    cancel: "Cancelar",
    preparing_error: "Erro ao preparar a mensagem, tente novamente!"
  },
  signature: {
    waiting: "Aguardando assinatura...",
    verifying: "Verificando assinatura...",
    signing_error: "Erro ao assinar a mensagem, tente novamente!",
    verifying_error: "Erro ao verificar assinatura, tente novamente!",
    oops_error: "Ops, algo deu errado!"
  }
}, Wt = {
  label: "Conectar",
  title: "Conectar uma Carteira",
  new_to_ethereum: {
    description: "Novo nas carteiras Ethereum?",
    learn_more: {
      label: "Saiba mais"
    }
  },
  learn_more: {
    label: "Saiba mais"
  },
  recent: "Recente",
  status: {
    opening: "Abrindo {wallet}...",
    connecting: "Conectando",
    connect_mobile: "Continue em {wallet}",
    not_installed: "{wallet} não está instalado",
    not_available: "{wallet} não está disponível",
    confirm: "Confirme a conexão na extensão",
    confirm_mobile: "Aceite o pedido de conexão na carteira"
  },
  secondary_action: {
    get: {
      description: "Não tem {wallet}?",
      label: "OBTER"
    },
    install: {
      label: "INSTALAR"
    },
    retry: {
      label: "TENTAR DE NOVO"
    }
  },
  walletconnect: {
    description: {
      full: "Precisa do modal oficial do WalletConnect?",
      compact: "Precisa do modal WalletConnect?"
    },
    open: {
      label: "ABRIR"
    }
  }
}, At = {
  title: "Digitalize com {wallet}",
  fallback_title: "Digitalize com o seu telefone"
}, qt = {
  installed: "Instalado",
  recommended: "Recomendado",
  other: "Outro",
  popular: "Popular",
  more: "Mais",
  others: "Outros"
}, Rt = {
  title: "Obter uma Carteira",
  action: {
    label: "OBTER"
  },
  mobile: {
    description: "Carteira Móvel"
  },
  extension: {
    description: "Extensão do Navegador"
  },
  mobile_and_extension: {
    description: "Carteira Móvel e Extensão"
  },
  mobile_and_desktop: {
    description: "Carteira para Mobile e Desktop"
  },
  looking_for: {
    title: "Não é o que você está procurando?",
    mobile: {
      description: "Selecione uma carteira na tela principal para começar com um provedor de carteira diferente."
    },
    desktop: {
      compact_description: "Selecione uma carteira na tela principal para começar com um provedor de carteira diferente.",
      wide_description: "Selecione uma carteira à esquerda para começar com um provedor de carteira diferente."
    }
  }
}, Bt = {
  title: "Comece com {wallet}",
  short_title: "Obtenha {wallet}",
  mobile: {
    title: "{wallet} para Móvel",
    description: "Use a carteira móvel para explorar o mundo do Ethereum.",
    download: {
      label: "Baixe o aplicativo"
    }
  },
  extension: {
    title: "{wallet} para {browser}",
    description: "Acesse sua carteira diretamente do seu navegador web favorito.",
    download: {
      label: "Adicionar ao {browser}"
    }
  },
  desktop: {
    title: "{wallet} para {platform}",
    description: "Acesse sua carteira nativamente do seu desktop poderoso.",
    download: {
      label: "Adicionar ao {platform}"
    }
  }
}, Tt = {
  title: "Instale {wallet}",
  description: "Escaneie com seu celular para baixar no iOS ou Android",
  continue: {
    label: "Continuar"
  }
}, It = {
  mobile: {
    connect: {
      label: "Conectar"
    },
    learn_more: {
      label: "Saiba mais"
    }
  },
  extension: {
    refresh: {
      label: "Atualizar"
    },
    learn_more: {
      label: "Saiba mais"
    }
  },
  desktop: {
    connect: {
      label: "Conectar"
    },
    learn_more: {
      label: "Saiba mais"
    }
  }
}, Ot = {
  title: "Mudar Redes",
  wrong_network: "Rede errada detectada, mude ou desconecte para continuar.",
  confirm: "Confirme na Carteira",
  switching_not_supported: "Sua carteira não suporta a mudança de redes de {appName}. Tente mudar de redes dentro da sua carteira.",
  switching_not_supported_fallback: "Sua carteira não suporta a troca de redes a partir deste aplicativo. Tente trocar de rede dentro de sua carteira.",
  disconnect: "Desconectar",
  connected: "Conectado"
}, St = {
  disconnect: {
    label: "Desconectar"
  },
  copy_address: {
    label: "Copiar Endereço",
    copied: "Copiado!"
  },
  explorer: {
    label: "Veja mais no explorador"
  },
  transactions: {
    description: "{appName} transações aparecerão aqui...",
    description_fallback: "Suas transações aparecerão aqui...",
    recent: {
      title: "Transações Recentes"
    },
    clear: {
      label: "Limpar Tudo"
    }
  }
}, Pt = {
  argent: {
    qr_code: {
      step1: {
        description: "Coloque o Argent na tela inicial para um acesso mais rápido à sua carteira.",
        title: "Abra o aplicativo Argent"
      },
      step2: {
        description: "Crie uma carteira e nome de usuário, ou importe uma carteira existente.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois que você escanear, um prompt de conexão aparecerá para você conectar sua carteira.",
        title: "Toque no botão Scan QR"
      }
    }
  },
  bifrost: {
    qr_code: {
      step1: {
        description: "Recomendamos colocar a Bifrost Wallet na sua tela inicial para um acesso mais rápido.",
        title: "Abra o aplicativo Bifrost Wallet"
      },
      step2: {
        description: "Crie ou importe uma carteira usando sua frase de recuperação.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Após você escanear, um prompt de conexão aparecerá para você conectar sua carteira.",
        title: "Toque no botão de escanear"
      }
    }
  },
  bitget: {
    qr_code: {
      step1: {
        description: "Recomendamos colocar a Bitget Wallet na sua tela inicial para um acesso mais rápido.",
        title: "Abra o aplicativo Bitget Wallet"
      },
      step2: {
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois de escanear, um prompt de conexão aparecerá para você conectar sua carteira.",
        title: "Toque no botão de escaneamento"
      }
    },
    extension: {
      step1: {
        description: "Recomendamos fixar a Bitget Wallet na sua barra de tarefas para um acesso mais rápido à sua carteira.",
        title: "Instale a extensão da Carteira Bitget"
      },
      step2: {
        description: "Certifique-se de fazer o backup da sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão.",
        title: "Atualize seu navegador"
      }
    }
  },
  bitski: {
    extension: {
      step1: {
        description: "Recomendamos fixar o Bitski na sua barra de tarefas para um acesso mais rápido à sua carteira.",
        title: "Instale a extensão Bitski"
      },
      step2: {
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão.",
        title: "Atualize seu navegador"
      }
    }
  },
  bloom: {
    desktop: {
      step1: {
        title: "Abra o aplicativo Bloom Wallet",
        description: "Recomendamos colocar o Bloom Wallet na sua tela inicial para acesso mais rápido."
      },
      step2: {
        description: "Crie ou importe uma carteira usando sua frase de recuperação.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois de ter uma carteira, clique em Conectar para se conectar via Bloom. Um prompt de conexão aparecerá no aplicativo para você confirmar a conexão.",
        title: "Clique em Conectar"
      }
    },
    qr_code: {
      step1: {
        title: "Abra o aplicativo Bloom Wallet",
        description: "Recomendamos colocar o Bloom Wallet na sua tela inicial para acesso mais rápido."
      },
      step2: {
        description: "Crie ou importe uma carteira usando sua frase de recuperação.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois de ter uma carteira, clique em Conectar para se conectar via Bloom. Um prompt de conexão aparecerá no aplicativo para você confirmar a conexão.",
        title: "Clique em Conectar"
      }
    }
  },
  coin98: {
    qr_code: {
      step1: {
        description: "Recomendamos colocar a Carteira Coin98 na tela inicial para um acesso mais rápido à sua carteira.",
        title: "Abra o aplicativo Carteira Coin98"
      },
      step2: {
        description: "Você pode facilmente fazer backup de sua carteira usando nosso recurso de backup em seu telefone.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois de escanear, uma solicitação de conexão aparecerá para você conectar sua carteira.",
        title: "Toque no botão WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "Clique no canto superior direito do seu navegador e fixe a Carteira Coin98 para fácil acesso.",
        title: "Instale a extensão da Carteira Coin98"
      },
      step2: {
        description: "Crie uma nova carteira ou importe uma existente.",
        title: "Criar ou Importar uma carteira"
      },
      step3: {
        description: "Depois de configurar a Carteira Coin98, clique abaixo para atualizar o navegador e carregar a extensão.",
        title: "Atualize seu navegador"
      }
    }
  },
  coinbase: {
    qr_code: {
      step1: {
        description: "Recomendamos colocar a Carteira Coinbase na tela inicial para um acesso mais rápido.",
        title: "Abra o aplicativo Coinbase Wallet"
      },
      step2: {
        description: "Você pode fazer backup da sua carteira facilmente usando o recurso de backup na nuvem.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois de escanear, um prompt de conexão aparecerá para que você conecte sua carteira.",
        title: "Toque no botão de escanear"
      }
    },
    extension: {
      step1: {
        description: "Recomendamos fixar o Coinbase Wallet na sua barra de tarefas para um acesso mais rápido à sua carteira.",
        title: "Instale a extensão Coinbase Wallet"
      },
      step2: {
        description: "Certifique-se de fazer backup da sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Uma vez que você configurou sua carteira, clique abaixo para atualizar o navegador e carregar a extensão.",
        title: "Atualize seu navegador"
      }
    }
  },
  core: {
    qr_code: {
      step1: {
        description: "Recomendamos colocar o Core na tela inicial para um acesso mais rápido à sua carteira.",
        title: "Abra o aplicativo Core"
      },
      step2: {
        description: "Você pode facilmente salvar sua carteira usando nosso recurso de backup no seu celular.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois de escanear, um prompt de conexão aparecerá para você conectar sua carteira.",
        title: "Toque no botão WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "Recomendamos fixar o Core na sua barra de tarefas para um acesso mais rápido à sua carteira.",
        title: "Instale a extensão Core"
      },
      step2: {
        description: "Certifique-se de fazer backup da sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão.",
        title: "Atualize seu navegador"
      }
    }
  },
  fox: {
    qr_code: {
      step1: {
        description: "Recomendamos colocar o FoxWallet na tela inicial para um acesso mais rápido.",
        title: "Abra o aplicativo FoxWallet"
      },
      step2: {
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois de escanear, uma solicitação de conexão aparecerá para você conectar sua carteira.",
        title: "Toque no botão de escaneamento"
      }
    }
  },
  frontier: {
    qr_code: {
      step1: {
        description: "Recomendamos colocar o Frontier Wallet na tela inicial para um acesso mais rápido.",
        title: "Abra o aplicativo Frontier Wallet"
      },
      step2: {
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois de escanear, aparecerá um prompt de conexão para você conectar sua carteira.",
        title: "Toque no botão de varredura"
      }
    },
    extension: {
      step1: {
        description: "Recomendamos fixar a Carteira Frontier na sua barra de tarefas para um acesso mais rápido à sua carteira.",
        title: "Instale a extensão da Carteira Frontier"
      },
      step2: {
        description: "Certifique-se de fazer backup da sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão.",
        title: "Atualize seu navegador"
      }
    }
  },
  im_token: {
    qr_code: {
      step1: {
        title: "Abra o aplicativo imToken",
        description: "Coloque o aplicativo imToken na tela inicial para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Crie uma nova carteira ou importe uma existente."
      },
      step3: {
        title: "Toque no ícone do Scanner no canto superior direito",
        description: "Escolha Nova Conexão, em seguida, escaneie o código QR e confirme o prompt para conectar."
      }
    }
  },
  kresus: {
    qr_code: {
      step1: {
        title: "Abra o aplicativo Kresus Wallet",
        description: "Adicione a Carteira Kresus à sua tela inicial para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Crie uma nova carteira ou importe uma existente."
      },
      step3: {
        title: "Toque no ícone do QR e escaneie",
        description: "Toque no ícone QR na sua tela inicial, escaneie o código e confirme o prompt para conectar."
      }
    }
  },
  metamask: {
    qr_code: {
      step1: {
        title: "Abra o aplicativo MetaMask",
        description: "Recomendamos colocar o MetaMask na tela inicial para um acesso mais rápido."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Toque no botão escanear",
        description: "Depois de escanear, aparecerá um prompt de conexão para você conectar sua carteira."
      }
    },
    extension: {
      step1: {
        title: "Instale a extensão MetaMask",
        description: "Recomendamos fixar o MetaMask na barra de tarefas para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer backup da sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Atualize o seu navegador",
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    }
  },
  okx: {
    qr_code: {
      step1: {
        title: "Abra o aplicativo da Carteira OKX",
        description: "Recomendamos colocar a Carteira OKX na tela inicial para um acesso mais rápido."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer o backup da sua carteira utilizando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Toque no botão de digitalização",
        description: "Depois de escanear, aparecerá um prompt de conexão para você conectar sua carteira."
      }
    },
    extension: {
      step1: {
        title: "Instale a extensão OKX Wallet",
        description: "Recomendamos fixar a OKX Wallet na sua barra de tarefas para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer o backup da sua carteira utilizando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Atualize o seu navegador",
        description: "Uma vez que você configurou sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    }
  },
  omni: {
    qr_code: {
      step1: {
        title: "Abra o aplicativo Omni",
        description: "Adicione o Omni à sua tela inicial para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Crie uma nova carteira ou importe uma existente."
      },
      step3: {
        title: "Toque no ícone do QR e escaneie",
        description: "Toque no ícone QR na tela inicial, escaneie o código e confirme o prompt para conectar."
      }
    }
  },
  token_pocket: {
    qr_code: {
      step1: {
        title: "Abra o aplicativo TokenPocket",
        description: "Recomendamos colocar o TokenPocket na tela inicial para um acesso mais rápido."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Toque no botão de digitalização",
        description: "Depois de escanear, aparecerá um prompt de conexão para você conectar sua carteira."
      }
    },
    extension: {
      step1: {
        title: "Instale a extensão TokenPocket",
        description: "Recomendamos fixar o TokenPocket em sua barra de tarefas para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Atualize seu navegador",
        description: "Uma vez que você configurou sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    }
  },
  trust: {
    qr_code: {
      step1: {
        title: "Abra o aplicativo Trust Wallet",
        description: "Coloque o Trust Wallet na tela inicial para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Crie uma nova carteira ou importe uma existente."
      },
      step3: {
        title: "Toque em WalletConnect nas Configurações",
        description: "Escolha Nova Conexão, depois escaneie o QR code e confirme o prompt para se conectar."
      }
    },
    extension: {
      step1: {
        title: "Instale a extensão Trust Wallet",
        description: "Clique no canto superior direito do seu navegador e marque Trust Wallet para fácil acesso."
      },
      step2: {
        title: "Crie ou Importe uma carteira",
        description: "Crie uma nova carteira ou importe uma existente."
      },
      step3: {
        title: "Atualize seu navegador",
        description: "Depois que configurar a Trust Wallet, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    }
  },
  uniswap: {
    qr_code: {
      step1: {
        title: "Abra o aplicativo Uniswap",
        description: "Adicione a Carteira Uniswap à sua tela inicial para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Crie uma nova carteira ou importe uma existente."
      },
      step3: {
        title: "Toque no ícone QR e escaneie",
        description: "Toque no ícone QR na sua tela inicial, escaneie o código e confirme o prompt para conectar."
      }
    }
  },
  zerion: {
    qr_code: {
      step1: {
        title: "Abra o aplicativo Zerion",
        description: "Recomendamos colocar o Zerion na sua tela inicial para um acesso mais rápido."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer backup da sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Toque no botão de digitalização",
        description: "Depois de digitalizar, um prompt de conexão aparecerá para que você possa conectar sua carteira."
      }
    },
    extension: {
      step1: {
        title: "Instale a extensão Zerion",
        description: "Recomendamos fixar o Zerion na sua barra de tarefas para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer backup da sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Atualize seu navegador",
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    }
  },
  rainbow: {
    qr_code: {
      step1: {
        title: "Abra o aplicativo Rainbow",
        description: "Recomendamos colocar o Rainbow na tela inicial para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Você pode facilmente fazer backup da sua carteira usando nosso recurso de backup no seu telefone."
      },
      step3: {
        title: "Toque no botão de digitalizar",
        description: "Depois de escanear, uma solicitação de conexão aparecerá para você conectar sua carteira."
      }
    }
  },
  enkrypt: {
    extension: {
      step1: {
        description: "Recomendamos fixar a Carteira Enkrypt na sua barra de tarefas para um acesso mais rápido à sua carteira.",
        title: "Instale a extensão da Carteira Enkrypt"
      },
      step2: {
        description: "Certifique-se de fazer backup da sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão.",
        title: "Atualize o seu navegador"
      }
    }
  },
  frame: {
    extension: {
      step1: {
        description: "Recomendamos fixar o Frame na sua barra de tarefas para um acesso mais rápido à sua carteira.",
        title: "Instale o Frame e a extensão complementar"
      },
      step2: {
        description: "Certifique-se de fazer backup da sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão.",
        title: "Atualize seu navegador"
      }
    }
  },
  one_key: {
    extension: {
      step1: {
        title: "Instale a extensão OneKey Wallet",
        description: "Recomendamos fixar a OneKey Wallet na sua barra de tarefas para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Atualize seu navegador",
        description: "Uma vez que você configurou sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    }
  },
  phantom: {
    extension: {
      step1: {
        title: "Instale a extensão Phantom",
        description: "Recomendamos fixar o Phantom na sua barra de tarefas para facilitar o acesso à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta de recuperação com ninguém."
      },
      step3: {
        title: "Atualize seu navegador",
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    }
  },
  rabby: {
    extension: {
      step1: {
        title: "Instale a extensão Rabby",
        description: "Recomendamos fixar Rabby na sua barra de tarefas para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer backup da sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Atualize seu navegador",
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    }
  },
  ronin: {
    qr_code: {
      step1: {
        description: "Recomendamos colocar a Carteira Ronin na tela inicial para um acesso mais rápido.",
        title: "Abra o aplicativo Carteira Ronin"
      },
      step2: {
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois que você escanear, um prompt de conexão aparecerá para você conectar sua carteira.",
        title: "Toque no botão de escanear"
      }
    },
    extension: {
      step1: {
        description: "Recomendamos fixar a Carteira Ronin na sua barra de tarefas para um acesso mais rápido à sua carteira.",
        title: "Instale a extensão da Carteira Ronin"
      },
      step2: {
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém.",
        title: "Criar ou Importar uma Carteira"
      },
      step3: {
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão.",
        title: "Atualize seu navegador"
      }
    }
  },
  ramper: {
    extension: {
      step1: {
        title: "Instale a extensão Ramper",
        description: "Recomendamos fixar o Ramper na sua barra de tarefas para um acesso mais fácil à sua carteira."
      },
      step2: {
        title: "Criar uma Carteira",
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Atualize seu navegador",
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    }
  },
  safeheron: {
    extension: {
      step1: {
        title: "Instale a extensão Core",
        description: "Recomendamos fixar Safeheron na sua barra de tarefas para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer o backup da sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Atualize seu navegador",
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    }
  },
  taho: {
    extension: {
      step1: {
        title: "Instale a extensão Taho",
        description: "Recomendamos fixar o Taho na sua barra de tarefas para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer o backup da sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Atualize seu navegador",
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    }
  },
  talisman: {
    extension: {
      step1: {
        title: "Instale a extensão Talisman",
        description: "Recomendamos fixar o Talisman na sua barra de tarefas para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Crie ou Importe uma Carteira Ethereum",
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase de recuperação com ninguém."
      },
      step3: {
        title: "Atualize o seu navegador",
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    }
  },
  xdefi: {
    extension: {
      step1: {
        title: "Instale a extensão XDEFI Wallet",
        description: "Recomendamos fixar a Carteira XDEFI na sua barra de tarefas para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Atualize seu navegador",
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    }
  },
  zeal: {
    extension: {
      step1: {
        title: "Instale a extensão Zeal",
        description: "Recomendamos fixar o Zeal na sua barra de tarefas para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Atualize seu navegador",
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    }
  },
  safepal: {
    extension: {
      step1: {
        title: "Instale a extensão da Carteira SafePal",
        description: "Clique no canto superior direito do seu navegador e fixe a Carteira SafePal para fácil acesso."
      },
      step2: {
        title: "Criar ou Importar uma carteira",
        description: "Crie uma nova carteira ou importe uma existente."
      },
      step3: {
        title: "Atualize seu navegador",
        description: "Depois de configurar a Carteira SafePal, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    },
    qr_code: {
      step1: {
        title: "Abra o aplicativo Carteira SafePal",
        description: "Coloque a Carteira SafePal na tela inicial para um acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Crie uma nova carteira ou importe uma existente."
      },
      step3: {
        title: "Toque em WalletConnect nas Configurações",
        description: "Escolha Nova Conexão, em seguida, escaneie o código QR e confirme o prompt para conectar."
      }
    }
  },
  desig: {
    extension: {
      step1: {
        title: "Instale a extensão Desig",
        description: "Recomendamos fixar Desig na sua barra de tarefas para facilitar o acesso à sua carteira."
      },
      step2: {
        title: "Criar uma Carteira",
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Atualize seu navegador",
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    }
  },
  subwallet: {
    extension: {
      step1: {
        title: "Instale a extensão SubWallet",
        description: "Recomendamos fixar SubWallet na sua barra de tarefas para acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase de recuperação com ninguém."
      },
      step3: {
        title: "Atualize seu navegador",
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    },
    qr_code: {
      step1: {
        title: "Abra o aplicativo SubWallet",
        description: "Recomendamos colocar SubWallet na tela inicial para acesso mais rápido."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Toque no botão de escanear",
        description: "Depois que você escanear, um prompt de conexão aparecerá para você conectar sua carteira."
      }
    }
  },
  clv: {
    extension: {
      step1: {
        title: "Instale a extensão CLV Wallet",
        description: "Recomendamos fixar CLV Wallet na sua barra de tarefas para acesso mais rápido à sua carteira."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Atualize seu navegador",
        description: "Depois de configurar sua carteira, clique abaixo para atualizar o navegador e carregar a extensão."
      }
    },
    qr_code: {
      step1: {
        title: "Abra o aplicativo da carteira CLV",
        description: "Recomendamos colocar a Carteira CLV na tela inicial para acesso mais rápido."
      },
      step2: {
        title: "Criar ou Importar uma Carteira",
        description: "Certifique-se de fazer backup de sua carteira usando um método seguro. Nunca compartilhe sua frase secreta com ninguém."
      },
      step3: {
        title: "Toque no botão de escanear",
        description: "Depois que você escanear, um prompt de conexão aparecerá para você conectar sua carteira."
      }
    }
  },
  okto: {
    qr_code: {
      step1: {
        title: "Abra o aplicativo Okto",
        description: "Adicione Okto à sua tela inicial para acesso rápido"
      },
      step2: {
        title: "Crie uma carteira MPC",
        description: "Crie uma conta e gere uma carteira"
      },
      step3: {
        title: "Toque em WalletConnect nas Configurações",
        description: "Toque no ícone Scan QR no canto superior direito e confirme o prompt para conectar."
      }
    }
  },
  ledger: {
    desktop: {
      step1: {
        title: "Abra o aplicativo Ledger Live",
        description: "Recomendamos colocar o Ledger Live na tela inicial para um acesso mais rápido."
      },
      step2: {
        title: "Configure seu Ledger",
        description: "Configure um novo Ledger ou conecte-se a um já existente."
      },
      step3: {
        title: "Conectar",
        description: "Depois de escanear, aparecerá um prompt de conexão para você conectar sua carteira."
      }
    },
    qr_code: {
      step1: {
        title: "Abra o aplicativo Ledger Live",
        description: "Recomendamos colocar o Ledger Live na tela inicial para um acesso mais rápido."
      },
      step2: {
        title: "Configure seu Ledger",
        description: "Você pode sincronizar com o aplicativo de desktop ou conectar seu Ledger."
      },
      step3: {
        title: "Escanear o código",
        description: "Toque em WalletConnect e em seguida mude para Scanner. Depois de escanear, aparecerá um prompt de conexão para você conectar sua carteira."
      }
    }
  }
}, y = {
  connect_wallet: _t,
  intro: wt,
  sign_in: xt,
  connect: Wt,
  connect_scan: At,
  connector_group: qt,
  get: Rt,
  get_options: Bt,
  get_mobile: Tt,
  get_instructions: It,
  chains: Ot,
  profile: St,
  wallet_connectors: Pt
}, Nt = {
  label: "Подключить кошелек",
  wrong_network: {
    label: "Неправильная сеть"
  }
}, Lt = {
  title: "Что такое кошелек?",
  description: "Кошелек используется для отправки, получения, хранения и отображения цифровых активов. Это также новый способ входа в систему, без необходимости создания новых учетных записей и паролей на каждом сайте.",
  digital_asset: {
    title: "Дом для ваших цифровых активов",
    description: "Кошельки используются для отправки, получения, хранения и отображения цифровых активов, таких как Ethereum и NFT."
  },
  login: {
    title: "Новый способ входа в систему",
    description: "Вместо создания новых аккаунтов и паролей на каждом сайте, просто подключите ваш кошелек."
  },
  get: {
    label: "Получить кошелек"
  },
  learn_more: {
    label: "Узнать больше"
  }
}, Dt = {
  label: "Проверьте ваш аккаунт",
  description: "Чтобы завершить подключение, вы должны подписать сообщение в вашем кошельке, чтобы подтвердить, что вы являетесь владельцем этого аккаунта.",
  message: {
    send: "Отправить сообщение",
    preparing: "Подготовка сообщения...",
    cancel: "Отмена",
    preparing_error: "Ошибка при подготовке сообщения, пожалуйста, попробуйте снова!"
  },
  signature: {
    waiting: "Ожидание подписи...",
    verifying: "Проверка подписи...",
    signing_error: "Ошибка при подписании сообщения, пожалуйста, попробуйте снова!",
    verifying_error: "Ошибка при проверке подписи, пожалуйста, попробуйте снова!",
    oops_error: "Ой, что-то пошло не так!"
  }
}, Kt = {
  label: "Подключить",
  title: "Подключить кошелек",
  new_to_ethereum: {
    description: "Впервые столкнулись с кошельками Ethereum?",
    learn_more: {
      label: "Узнать больше"
    }
  },
  learn_more: {
    label: "Узнать больше"
  },
  recent: "Недавние",
  status: {
    opening: "Открывается {wallet}...",
    connecting: "Подключение",
    connect_mobile: "Продолжить в {wallet}",
    not_installed: "{wallet} не установлен",
    not_available: "{wallet} не доступен",
    confirm: "Подтвердите подключение в расширении",
    confirm_mobile: "Принять запрос на подключение в кошельке"
  },
  secondary_action: {
    get: {
      description: "У вас нет {wallet}?",
      label: "ПОЛУЧИТЬ"
    },
    install: {
      label: "УСТАНОВИТЬ"
    },
    retry: {
      label: "ПОВТОРИТЬ"
    }
  },
  walletconnect: {
    description: {
      full: "Нужен официальный модальный окно WalletConnect?",
      compact: "Нужен модальный окно WalletConnect?"
    },
    open: {
      label: "ОТКРЫТЬ"
    }
  }
}, Et = {
  title: "Сканировать с помощью {wallet}",
  fallback_title: "Сканировать с помощью вашего телефона"
}, Mt = {
  installed: "Установлено",
  recommended: "Рекомендуемые",
  other: "Другие",
  popular: "Популярные",
  more: "Больше",
  others: "Другие"
}, $t = {
  title: "Получить кошелек",
  action: {
    label: "ПОЛУЧИТЬ"
  },
  mobile: {
    description: "Мобильный кошелек"
  },
  extension: {
    description: "Расширение для браузера"
  },
  mobile_and_extension: {
    description: "Мобильный кошелек и расширение"
  },
  mobile_and_desktop: {
    description: "Мобильный и настольный кошелек"
  },
  looking_for: {
    title: "Не то, что вы ищете?",
    mobile: {
      description: "Выберите кошелек на главном экране, чтобы начать работу с другим провайдером кошелька."
    },
    desktop: {
      compact_description: "Выберите кошелек на главном экране, чтобы начать работу с другим провайдером кошелька.",
      wide_description: "Выберите кошелек слева, чтобы начать работу с другим провайдером кошелька."
    }
  }
}, Ft = {
  title: "Начните с {wallet}",
  short_title: "Получить {wallet}",
  mobile: {
    title: "{wallet} для мобильных",
    description: "Используйте мобильный кошелек для исследования мира Ethereum.",
    download: {
      label: "Скачать приложение"
    }
  },
  extension: {
    title: "{wallet} для {browser}",
    description: "Доступ к вашему кошельку прямо из вашего любимого веб-браузера.",
    download: {
      label: "Добавить в {browser}"
    }
  },
  desktop: {
    title: "{wallet} для {platform}",
    description: "Получите доступ к вашему кошельку нативно со своего мощного рабочего стола.",
    download: {
      label: "Добавить в {platform}"
    }
  }
}, Qt = {
  title: "Установить {wallet}",
  description: "Отсканируйте на своем телефоне для скачивания на iOS или Android",
  continue: {
    label: "Продолжить"
  }
}, jt = {
  mobile: {
    connect: {
      label: "Подключить"
    },
    learn_more: {
      label: "Узнать больше"
    }
  },
  extension: {
    refresh: {
      label: "Обновить"
    },
    learn_more: {
      label: "Узнать больше"
    }
  },
  desktop: {
    connect: {
      label: "Подключить"
    },
    learn_more: {
      label: "Узнать больше"
    }
  }
}, Ut = {
  title: "Переключить сети",
  wrong_network: "Обнаружена неверная сеть, переключитесь или отключитесь для продолжения.",
  confirm: "Подтвердить в кошельке",
  switching_not_supported: "Ваш кошелек не поддерживает переключение сетей с {appName}. Попробуйте переключить сети из вашего кошелька.",
  switching_not_supported_fallback: "Ваш кошелек не поддерживает переключение сетей из этого приложения. Попробуйте переключить сети из вашего кошелька.",
  disconnect: "Отключить",
  connected: "Подключено"
}, Vt = {
  disconnect: {
    label: "Отключить"
  },
  copy_address: {
    label: "Скопировать адрес",
    copied: "Скопировано!"
  },
  explorer: {
    label: "Посмотреть больше в эксплорере"
  },
  transactions: {
    description: "{appName} транзакции появятся здесь...",
    description_fallback: "Ваши транзакции появятся здесь...",
    recent: {
      title: "Недавние транзакции"
    },
    clear: {
      label: "Очистить все"
    }
  }
}, Xt = {
  argent: {
    qr_code: {
      step1: {
        description: "Добавьте Argent на домашний экран для более быстрого доступа к вашему кошельку.",
        title: "Откройте приложение Argent"
      },
      step2: {
        description: "Создайте кошелек и имя пользователя или импортируйте существующий кошелек.",
        title: "Создать или Импортировать кошелек"
      },
      step3: {
        description: "После сканирования появится запрос на подключение для подключения вашего кошелька.",
        title: "Нажмите кнопку Сканировать QR"
      }
    }
  },
  bifrost: {
    qr_code: {
      step1: {
        description: "Мы рекомендуем добавить кошелек Bifrost на ваш начальный экран для более быстрого доступа.",
        title: "Откройте приложение Bifrost Wallet"
      },
      step2: {
        description: "Создайте или импортируйте кошелек, используя вашу фразу восстановления.",
        title: "Создать или импортировать кошелек"
      },
      step3: {
        description: "После сканирования появится запрос на подключение вашего кошелька.",
        title: "Нажмите кнопку сканирования"
      }
    }
  },
  bitget: {
    qr_code: {
      step1: {
        description: "Мы рекомендуем добавить Bitget Wallet на ваш экран для более быстрого доступа.",
        title: "Откройте приложение Bitget Wallet"
      },
      step2: {
        description: "Обязательно сделайте резервную копию вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо.",
        title: "Создать или импортировать кошелек"
      },
      step3: {
        description: "После сканирования появится запрос на подключение вашего кошелька.",
        title: "Нажмите кнопку сканирования"
      }
    },
    extension: {
      step1: {
        description: "Мы рекомендуем закрепить Bitget Wallet на панели задач для более быстрого доступа к вашему кошельку.",
        title: "Установите расширение Bitget Wallet"
      },
      step2: {
        description: "Обязательно сохраните резервную копию вашего кошелька с помощью надёжного метода. Никогда не делитесь своей секретной фразой с кем-либо.",
        title: "Создать или Импортировать кошелек"
      },
      step3: {
        description: "После настройки вашего кошелька, нажмите ниже, чтобы обновить браузер и загрузить расширение.",
        title: "Обновите ваш браузер"
      }
    }
  },
  bitski: {
    extension: {
      step1: {
        description: "Мы рекомендуем прикрепить Bitski к вашей панели задач для более быстрого доступа к вашему кошельку.",
        title: "Установите расширение Bitski"
      },
      step2: {
        description: "Обязательно сохраните резервную копию вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо.",
        title: "Создать кошелек или Импортировать кошелек"
      },
      step3: {
        description: "После того как вы настроите свой кошелек, нажмите ниже, чтобы обновить браузер и загрузить расширение.",
        title: "Обновите ваш браузер"
      }
    }
  },
  bloom: {
    desktop: {
      step1: {
        title: "Откройте приложение Bloom Wallet",
        description: "Мы рекомендуем добавить Bloom Wallet на домашний экран для более быстрого доступа."
      },
      step2: {
        description: "Создайте или импортируйте кошелек, используя вашу фразу восстановления.",
        title: "Создать или Импортировать кошелек"
      },
      step3: {
        description: "После того как у вас появится кошелек, нажмите на 'Connect', чтобы подключиться через Bloom. В приложении появится запрос на подключение, который вам нужно будет подтвердить.",
        title: "Нажмите на 'Connect'"
      }
    },
    qr_code: {
      step1: {
        title: "Откройте приложение Bloom Wallet",
        description: "Мы рекомендуем добавить Bloom Wallet на домашний экран для более быстрого доступа."
      },
      step2: {
        description: "Создайте или импортируйте кошелек, используя вашу фразу восстановления.",
        title: "Создать или Импортировать кошелек"
      },
      step3: {
        description: "После того как у вас появится кошелек, нажмите на 'Connect', чтобы подключиться через Bloom. В приложении появится запрос на подключение, который вам нужно будет подтвердить.",
        title: "Нажмите на 'Connect'"
      }
    }
  },
  coin98: {
    qr_code: {
      step1: {
        description: "Мы рекомендуем добавить Coin98 Wallet на ваш главный экран для более быстрого доступа к вашему кошельку.",
        title: "Откройте приложение Coin98 Wallet"
      },
      step2: {
        description: "Вы можете легко сделать резервную копию вашего кошелька, используя нашу функцию резервного копирования на вашем телефоне.",
        title: "Создать или импортировать кошелек"
      },
      step3: {
        description: "После сканирования для вас появится запрос на подключение, чтобы подключить ваш кошелек.",
        title: "Нажмите кнопку WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "Нажмите в верхнем правом углу вашего браузера и закрепите Coin98 Wallet для удобного доступа.",
        title: "Установите расширение Coin98 Wallet"
      },
      step2: {
        description: "Создайте новый кошелек или импортируйте существующий.",
        title: "Создайте или импортируйте кошелек"
      },
      step3: {
        description: "После того как вы настроите Кошелек Coin98, нажмите ниже, чтобы обновить браузер и загрузить расширение.",
        title: "Обновите ваш браузер"
      }
    }
  },
  coinbase: {
    qr_code: {
      step1: {
        description: "Мы рекомендуем добавить Coinbase Wallet на ваш экран начала для более быстрого доступа.",
        title: "Откройте приложение Coinbase Wallet"
      },
      step2: {
        description: "Вы легко можете сделать резервную копию вашего кошелька, используя функцию облачного резервного копирования.",
        title: "Создать или Импортировать кошелек"
      },
      step3: {
        description: "После сканирования появится запрос на подключение для подключения вашего кошелька.",
        title: "Нажмите кнопку сканирования"
      }
    },
    extension: {
      step1: {
        description: "Мы рекомендуем закрепить Coinbase Wallet на вашей панели задач для более быстрого доступа к вашему кошельку.",
        title: "Установите расширение Coinbase Wallet"
      },
      step2: {
        description: "Обязательно сделайте резервную копию вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо.",
        title: "Создать или Импортировать кошелек"
      },
      step3: {
        description: "После настройки вашего кошелька, нажмите ниже, чтобы обновить браузер и загрузить расширение.",
        title: "Обновите ваш браузер"
      }
    }
  },
  core: {
    qr_code: {
      step1: {
        description: "Мы рекомендуем добавить Core на ваш экран быстрого доступа для ускоренного доступа к вашему кошельку.",
        title: "Открыть приложение Core"
      },
      step2: {
        description: "Вы можете легко создать резервную копию вашего кошелька, используя нашу функцию резервного копирования на вашем телефоне.",
        title: "Создать или Импортировать кошелек"
      },
      step3: {
        description: "После сканирования появится запрос на подключение, чтобы вы могли подключить ваш кошелек.",
        title: "Нажмите кнопку WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "Мы рекомендуем закрепить Core на панели задач для более быстрого доступа к вашему кошельку.",
        title: "Установите расширение Core"
      },
      step2: {
        description: "Обязательно создайте резервную копию вашего кошелька с использованием безопасного метода. Никогда не делитесь вашей секретной фразой с кем-либо.",
        title: "Создать или Импортировать кошелек"
      },
      step3: {
        description: "Как только вы настроите ваш кошелек, нажмите ниже, чтобы обновить браузер и загрузить расширение.",
        title: "Обновите ваш браузер"
      }
    }
  },
  fox: {
    qr_code: {
      step1: {
        description: "Мы рекомендуем поместить FoxWallet на ваш экран начального экрана для более быстрого доступа.",
        title: "Откройте приложение FoxWallet"
      },
      step2: {
        description: "Обязательно сделайте резервное копирование вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо.",
        title: "Создать или Импортировать кошелек"
      },
      step3: {
        description: "После сканирования появится приглашение для подключения вашего кошелька.",
        title: "Нажмите кнопку сканирования"
      }
    }
  },
  frontier: {
    qr_code: {
      step1: {
        description: "Мы рекомендуем установить Frontier Wallet на экран вашего смартфона для более быстрого доступа.",
        title: "Откройте приложение Frontier Wallet"
      },
      step2: {
        description: "Обязательно сделайте резервное копирование вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо.",
        title: "Создать или Импортировать кошелек"
      },
      step3: {
        description: "После сканирования появится запрос на подключение кошелька.",
        title: "Нажмите кнопку сканирования"
      }
    },
    extension: {
      step1: {
        description: "Мы рекомендуем прикрепить кошелек Frontier к панели задач для более быстрого доступа к вашему кошельку.",
        title: "Установите расширение кошелька Frontier"
      },
      step2: {
        description: "Обязательно сделайте резервную копию своего кошелька с использованием надежного метода. Никогда не делитесь своей секретной фразой с кем-либо.",
        title: "Создать или импортировать кошелек"
      },
      step3: {
        description: "После настройки вашего кошелька нажмите ниже, чтобы обновить браузер и загрузить расширение.",
        title: "Обновите ваш браузер"
      }
    }
  },
  im_token: {
    qr_code: {
      step1: {
        title: "Откройте приложение imToken",
        description: "Поместите приложение imToken на главный экран для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или импортировать кошелек",
        description: "Создайте новый кошелек или импортируйте существующий."
      },
      step3: {
        title: "Нажмите на иконку сканера в верхнем правом углу",
        description: "Выберите Новое соединение, затем отсканируйте QR-код и подтвердите запрос на соединение."
      }
    }
  },
  kresus: {
    qr_code: {
      step1: {
        title: "Откройте приложение Kresus Wallet",
        description: "Добавьте кошелек Kresus на экран быстрого доступа для ускоренного доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или Импортировать кошелек",
        description: "Создайте новый кошелек или импортируйте существующий."
      },
      step3: {
        title: "Нажмите на иконку QR и отсканируйте",
        description: "Нажмите на иконку QR на главном экране, отсканируйте код и подтвердите запрос на подключение."
      }
    }
  },
  metamask: {
    qr_code: {
      step1: {
        title: "Откройте приложение MetaMask",
        description: "Мы рекомендуем поместить MetaMask на главный экран для быстрого доступа."
      },
      step2: {
        title: "Создайте или импортируйте кошелек",
        description: "Обязательно сохраните копию своего кошелька с помощью надежного метода. Никогда не делитесь своей секретной фразой с кем бы то ни было."
      },
      step3: {
        title: "Нажмите кнопку сканирования",
        description: "После сканирования появится запрос на соединение вашего кошелька."
      }
    },
    extension: {
      step1: {
        title: "Установите расширение MetaMask",
        description: "Мы рекомендуем закрепить MetaMask на вашей панели задач для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или импортировать кошелек",
        description: "Обязательно сохраните резервную копию вашего кошелька с помощью безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После настройки вашего кошелька, щелкните ниже, чтобы обновить браузер и загрузить расширение."
      }
    }
  },
  okx: {
    qr_code: {
      step1: {
        title: "Откройте приложение кошелька OKX",
        description: "Мы рекомендуем разместить кошелек OKX на вашем главном экране для более быстрого доступа."
      },
      step2: {
        title: "Создать или импортировать кошелек",
        description: "Обязательно сохраните резервную копию вашего кошелька с помощью безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо."
      },
      step3: {
        title: "Нажмите на кнопку сканирования",
        description: "После сканирования появится запрос на подключение вашего кошелька."
      }
    },
    extension: {
      step1: {
        title: "Установите расширение кошелька OKX",
        description: "Мы рекомендуем закрепить OKX Wallet на панели задач для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создать кошелек или импортировать кошелек",
        description: "Обязательно сохраните резервную копию вашего кошелька с помощью безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "Как только вы настроите свой кошелек, нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    }
  },
  omni: {
    qr_code: {
      step1: {
        title: "Откройте приложение Omni",
        description: "Добавьте Omni на свой домашний экран для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или импортировать кошелек",
        description: "Создайте новый кошелек или импортируйте существующий."
      },
      step3: {
        title: "Нажмите на иконку QR и отсканируйте",
        description: "Нажмите на иконку QR на вашем домашнем экране, отсканируйте код и подтвердите подсказку, чтобы подключиться."
      }
    }
  },
  token_pocket: {
    qr_code: {
      step1: {
        title: "Откройте приложение TokenPocket",
        description: "Мы рекомендуем разместить TokenPocket на вашем домашнем экране для быстрого доступа."
      },
      step2: {
        title: "Создать или Импортировать кошелек",
        description: "Обязательно сделайте резервную копию вашего кошелька при помощи безопасного метода. Никогда не делитесь своим секретным кодом с кем-либо."
      },
      step3: {
        title: "Нажмите на кнопку сканирования",
        description: "После сканирования появится подсказка о подключении для подключения вашего кошелька."
      }
    },
    extension: {
      step1: {
        title: "Установите расширение TokenPocket",
        description: "Мы рекомендуем закрепить TokenPocket на вашей панели задач для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или Импортировать кошелек",
        description: "Обязательно создайте резервную копию вашего кошелька с помощью безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После того как вы настроите свой кошелек, нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    }
  },
  trust: {
    qr_code: {
      step1: {
        title: "Откройте приложение Trust Wallet",
        description: "Разместите Trust Wallet на вашем домашнем экране для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или Импортировать кошелек",
        description: "Создайте новый кошелек или импортируйте существующий."
      },
      step3: {
        title: "Нажмите WalletConnect в настройках",
        description: "Выберите Новое соединение, затем сканируйте QR-код и подтвердите запрос на подключение."
      }
    },
    extension: {
      step1: {
        title: "Установите расширение Trust Wallet",
        description: "Кликните в правом верхнем углу вашего браузера и закрепите Trust Wallet для легкого доступа."
      },
      step2: {
        title: "Создайте или импортируйте кошелек",
        description: "Создайте новый кошелек или импортируйте существующий."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После настройки Trust Wallet, нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    }
  },
  uniswap: {
    qr_code: {
      step1: {
        title: "Откройте приложение Uniswap",
        description: "Добавьте кошелек Uniswap на главный экран для быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или импортировать кошелек",
        description: "Создайте новый кошелек или импортируйте существующий."
      },
      step3: {
        title: "Нажмите на иконку QR и отсканируйте",
        description: "Нажмите на иконку QR на главном экране, отсканируйте код и подтвердите запрос на подключение."
      }
    }
  },
  zerion: {
    qr_code: {
      step1: {
        title: "Откройте приложение Zerion",
        description: "Мы рекомендуем разместить Zerion на главном экране для более быстрого доступа."
      },
      step2: {
        title: "Создать или импортировать кошелек",
        description: "Обязательно создайте резервную копию вашего кошелька с помощью безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо."
      },
      step3: {
        title: "Нажмите кнопку сканирования",
        description: "После сканирования вам будет предложено подключить ваш кошелек."
      }
    },
    extension: {
      step1: {
        title: "Установите расширение Zerion",
        description: "Мы рекомендуем прикрепить Zerion к вашей панели задач для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создайте или импортируйте кошелек",
        description: "Обязательно сделайте резервную копию вашего кошелька с помощью безопасного метода. Никогда не делясь своим секретным паролем с кем-либо."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "Как только вы настроите свой кошелек, нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    }
  },
  rainbow: {
    qr_code: {
      step1: {
        title: "Откройте приложение Rainbow",
        description: "Мы рекомендуем поместить Rainbow на ваш экран главного меню для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создайте или импортируйте кошелек",
        description: "Вы можете легко сделать резервную копию вашего кошелька с помощью нашей функции резервного копирования на вашем телефоне."
      },
      step3: {
        title: "Нажмите кнопку сканировать",
        description: "После сканирования появится запрос на подключение вашего кошелька."
      }
    }
  },
  enkrypt: {
    extension: {
      step1: {
        description: "Мы рекомендуем закрепить Enkrypt Wallet на панели задач для более быстрого доступа к вашему кошельку.",
        title: "Установите расширение Enkrypt Wallet"
      },
      step2: {
        description: "Обязательно сделайте резервную копию вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо.",
        title: "Создать или импортировать кошелек"
      },
      step3: {
        description: "Как только вы настроите свой кошелек, нажмите ниже, чтобы обновить браузер и загрузить расширение.",
        title: "Обновите ваш браузер"
      }
    }
  },
  frame: {
    extension: {
      step1: {
        description: "Мы рекомендуем закрепить Frame на панели задач для более быстрого доступа к вашему кошельку.",
        title: "Установите Frame и дополнительное расширение"
      },
      step2: {
        description: "Обязательно создайте резервную копию вашего кошелька с помощью безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо.",
        title: "Создайте или Импортируйте кошелек"
      },
      step3: {
        description: "После того как вы настроите свой кошелек, нажмите ниже, чтобы обновить браузер и загрузить расширение.",
        title: "Обновите ваш браузер"
      }
    }
  },
  one_key: {
    extension: {
      step1: {
        title: "Установите расширение OneKey Wallet",
        description: "Мы рекомендуем закрепить OneKey Wallet на панели задач для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создайте или Импортируйте кошелек",
        description: "Обязательно сделайте резервную копию вашего кошелька с помощью безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После настройки кошелька нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    }
  },
  phantom: {
    extension: {
      step1: {
        title: "Установите расширение Phantom",
        description: "Мы рекомендуем закрепить Phantom на панели задач для более удобного доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или Импортировать кошелек",
        description: "Обязательно сделайте резервную копию вашего кошелька с помощью безопасного метода. Никогда не делитесь своей секретной фразой восстановления с кем-либо."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После того как вы настроите свой кошелек, нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    }
  },
  rabby: {
    extension: {
      step1: {
        title: "Установите расширение Rabby",
        description: "Мы рекомендуем закрепить Rabby на панели задач для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или импортировать кошелек",
        description: "Обязательно сделайте резервную копию вашего кошелька с помощью безопасного метода. Никогда не делитесь своей секретной фразой с кем бы то ни было."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После настройки вашего кошелька, нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    }
  },
  ronin: {
    qr_code: {
      step1: {
        description: "Мы рекомендуем добавить кошелек Ronin на ваш экран быстрого доступа для более быстрого доступа.",
        title: "Откройте приложение кошелька Ronin"
      },
      step2: {
        description: "Обязательно сделайте резервную копию вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо.",
        title: "Создать или Импортировать кошелек"
      },
      step3: {
        description: "После сканирования появится запрос на подключение для подключения вашего кошелька.",
        title: "Нажмите кнопку сканирования"
      }
    },
    extension: {
      step1: {
        description: "Мы рекомендуем закрепить кошелек Ronin на панели задач для более быстрого доступа к вашему кошельку.",
        title: "Установите расширение кошелька Ronin"
      },
      step2: {
        description: "Обязательно сделайте резервную копию вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо.",
        title: "Создать или Импортировать кошелек"
      },
      step3: {
        description: "После настройки вашего кошелька, нажмите ниже, чтобы обновить браузер и загрузить расширение.",
        title: "Обновите ваш браузер"
      }
    }
  },
  ramper: {
    extension: {
      step1: {
        title: "Установите расширение Ramper",
        description: "Мы рекомендуем закрепить Ramper на панели задач для удобного доступа к вашему кошельку."
      },
      step2: {
        title: "Создать кошелек",
        description: "Обязательно сделайте резервную копию вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После настройки вашего кошелька, нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    }
  },
  safeheron: {
    extension: {
      step1: {
        title: "Установите основное расширение",
        description: "Мы рекомендуем закрепить SafeHeron на панели задач для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или импортировать кошелек",
        description: "Обязательно сделайте резервную копию вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После того, как вы настроите ваш кошелек, нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    }
  },
  taho: {
    extension: {
      step1: {
        title: "Установите расширение Taho",
        description: "Мы рекомендуем закрепить Taho на вашей панели задач для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или импортировать кошелек",
        description: "Обязательно сделайте резервную копию вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После настройки вашего кошелька, нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    }
  },
  talisman: {
    extension: {
      step1: {
        title: "Установите расширение Talisman",
        description: "Мы рекомендуем закрепить Talisman на вашей панели задач для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создайте или импортируйте кошелек Ethereum",
        description: "Обязательно сделайте резервную копию вашего кошелька с помощью безопасного метода. Никогда не делитесь вашей фразой восстановления с кем-либо."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После настройки вашего кошелька, нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    }
  },
  xdefi: {
    extension: {
      step1: {
        title: "Установите расширение кошелька XDEFI",
        description: "Мы рекомендуем закрепить XDEFI Wallet на панели задач для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или Импортировать кошелек",
        description: "Обязательно создайте резервную копию вашего кошелька с помощью безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После того, как вы настроите свой кошелек, нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    }
  },
  zeal: {
    extension: {
      step1: {
        title: "Установите расширение Zeal",
        description: "Мы рекомендуем закрепить Zeal на панели задач для быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или Импортировать кошелек",
        description: "Обязательно сделайте резервную копию вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После настройки вашего кошелька, нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    }
  },
  safepal: {
    extension: {
      step1: {
        title: "Установите расширение SafePal Wallet",
        description: "Кликните в верхнем правом углу вашего браузера и закрепите SafePal Wallet для удобного доступа."
      },
      step2: {
        title: "Создайте или импортируйте кошелек",
        description: "Создайте новый кошелек или импортируйте существующий."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После настройки кошелька SafePal нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    },
    qr_code: {
      step1: {
        title: "Откройте приложение SafePal Wallet",
        description: "Разместите SafePal Wallet на главном экране для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или Импортировать кошелек",
        description: "Создайте новый кошелек или импортируйте существующий."
      },
      step3: {
        title: "Нажмите WalletConnect в настройках",
        description: "Выберите Новое соединение, затем отсканируйте QR-код и подтвердите запрос на соединение."
      }
    }
  },
  desig: {
    extension: {
      step1: {
        title: "Установите расширение Desig",
        description: "Мы рекомендуем закрепить Desig на вашей панели задач для более удобного доступа к вашему кошельку."
      },
      step2: {
        title: "Создать кошелек",
        description: "Обязательно сделайте резервную копию вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После настройки вашего кошелька, нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    }
  },
  subwallet: {
    extension: {
      step1: {
        title: "Установите расширение SubWallet",
        description: "Мы рекомендуем закрепить SubWallet на вашей панели задач для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или Импортировать кошелек",
        description: "Обязательно сделайте резервную копию вашего кошелька с помощью безопасного метода. Никогда не делитесь вашей фразой восстановления с кем-либо."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После настройки вашего кошелька, нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    },
    qr_code: {
      step1: {
        title: "Откройте приложение SubWallet",
        description: "Мы рекомендуем добавить SubWallet на ваш экран начальной страницы для более быстрого доступа."
      },
      step2: {
        title: "Создать или Импортировать кошелек",
        description: "Обязательно сделайте резервную копию вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо."
      },
      step3: {
        title: "Нажмите кнопку сканирования",
        description: "После сканирования появится запрос на подключение для подключения вашего кошелька."
      }
    }
  },
  clv: {
    extension: {
      step1: {
        title: "Установите расширение CLV Wallet",
        description: "Мы рекомендуем закрепить CLV Wallet на вашей панели задач для более быстрого доступа к вашему кошельку."
      },
      step2: {
        title: "Создать или Импортировать кошелек",
        description: "Обязательно сделайте резервную копию вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо."
      },
      step3: {
        title: "Обновите ваш браузер",
        description: "После настройки вашего кошелька, нажмите ниже, чтобы обновить браузер и загрузить расширение."
      }
    },
    qr_code: {
      step1: {
        title: "Откройте приложение CLV Wallet",
        description: "Мы рекомендуем поместить CLV Wallet на ваш экран домой для более быстрого доступа."
      },
      step2: {
        title: "Создать или Импортировать кошелек",
        description: "Обязательно сделайте резервную копию вашего кошелька с использованием безопасного метода. Никогда не делитесь своей секретной фразой с кем-либо."
      },
      step3: {
        title: "Нажмите кнопку сканирования",
        description: "После сканирования появится запрос на подключение для подключения вашего кошелька."
      }
    }
  },
  okto: {
    qr_code: {
      step1: {
        title: "Откройте приложение Okto",
        description: "Добавьте Okto на ваш экран домой для быстрого доступа"
      },
      step2: {
        title: "Создать кошелек MPC",
        description: "Создайте учетную запись и сгенерируйте кошелек"
      },
      step3: {
        title: "Нажмите WalletConnect в настройках",
        description: "Коснитесь значка Scan QR в верхнем правом углу и подтвердите запрос на подключение."
      }
    }
  },
  ledger: {
    desktop: {
      step1: {
        title: "Откройте приложение Ledger Live",
        description: "Мы рекомендуем поместить Ledger Live на ваш экран домой для более быстрого доступа."
      },
      step2: {
        title: "Настройте ваш Ledger",
        description: "Настройте новый Ledger или подключитесь к существующему."
      },
      step3: {
        title: "Подключить",
        description: "После сканирования вам будет предложено подключить ваш кошелек."
      }
    },
    qr_code: {
      step1: {
        title: "Откройте приложение Ledger Live",
        description: "Мы рекомендуем поместить Ledger Live на ваш экран домой для более быстрого доступа."
      },
      step2: {
        title: "Настройте ваш Ledger",
        description: "Вы можете синхронизировать с настольным приложением или подключить свой Ledger."
      },
      step3: {
        title: "Сканировать код",
        description: "Нажмите WalletConnect, затем переключитесь на Scanner. После сканирования вам будет предложено подключить ваш кошелек."
      }
    }
  }
}, f = {
  connect_wallet: Nt,
  intro: Lt,
  sign_in: Dt,
  connect: Kt,
  connect_scan: Et,
  connector_group: Mt,
  get: $t,
  get_options: Ft,
  get_mobile: Qt,
  get_instructions: jt,
  chains: Ut,
  profile: Vt,
  wallet_connectors: Xt
}, Zt = {
  label: "เชื่อมต่อกระเป๋าเงิน",
  wrong_network: {
    label: "เครือข่ายไม่ถูกต้อง"
  }
}, Gt = {
  title: "อะไรคือกระเป๋าเงิน?",
  description: "กระเป๋าเงินใช้ในการส่ง, รับ, เก็บ, และแสดงสินทรัพย์ดิจิทัล มันยังเป็นวิธีใหม่ในการเข้าสู่ระบบ, โดยไม่จำเป็นต้องสร้างบัญชีและรหัสผ่านใหม่ในทุกเว็บไซต์.",
  digital_asset: {
    title: "บ้านสำหรับสินทรัพย์ดิจิทัลของคุณ",
    description: "กระเป๋าเงินถูกใช้เพื่อส่ง, รับ, เก็บ, แสดงสินทรัพย์ดิจิทัล เช่น Ethereum และ NFTs."
  },
  login: {
    title: "วิธีใหม่ในการเข้าสู่ระบบ",
    description: "แทนที่จะสร้างบัญชีและรหัสผ่านใหม่ในทุกเว็บไซต์, แค่เชื่อมต่อกระเป๋าของคุณ."
  },
  get: {
    label: "รับกระเป๋าเงิน"
  },
  learn_more: {
    label: "เรียนรู้เพิ่มเติม"
  }
}, Jt = {
  label: "ยืนยันบัญชีของคุณ",
  description: "เพื่อการเชื่อมต่อที่สมบูรณ์, คุณต้องลงนามในข้อความในกระเป๋าเงินของคุณเพื่อยืนยันว่าคุณเป็นเจ้าของบัญชีนี้",
  message: {
    send: "ส่งข้อความ",
    preparing: "กำลังเตรียมข้อความ...",
    cancel: "ยกเลิก",
    preparing_error: "เกิดข้อผิดพลาดในการเตรียมข้อความ โปรดลองใหม่!"
  },
  signature: {
    waiting: "รอการลงนาม...",
    verifying: "กำลังตรวจสอบลายเซ็น...",
    signing_error: "เกิดข้อผิดพลาดในการลงนามในข้อความ โปรดลองใหม่!",
    verifying_error: "เกิดข้อผิดพลาดในการตรวจสอบลายเซ็น โปรดลองใหม่!",
    oops_error: "อ๊ะ, เกิดข้อผิดพลาดบางอย่าง!"
  }
}, Yt = {
  label: "เชื่อมต่อ",
  title: "เชื่อมต่อกระเป๋าเงิน",
  new_to_ethereum: {
    description: "ใหม่กับกระเป๋า Ethereum หรือไม่?",
    learn_more: {
      label: "เรียนรู้เพิ่มเติม"
    }
  },
  learn_more: {
    label: "เรียนรู้เพิ่มเติม"
  },
  recent: "ล่าสุด",
  status: {
    opening: "กำลังเปิด {wallet}...",
    connecting: "กำลังเชื่อมต่อ",
    connect_mobile: "ดำเนินการต่อใน {wallet}",
    not_installed: "{wallet} ไม่ได้ติดตั้ง",
    not_available: "{wallet} ไม่สามารถใช้ได้",
    confirm: "ยืนยันการเชื่อมต่อในส่วนขยาย",
    confirm_mobile: "ยอมรับคำขอเชื่อมต่อในกระเป๋าเงิน"
  },
  secondary_action: {
    get: {
      description: "ไม่มี {wallet}?",
      label: "รับ"
    },
    install: {
      label: "ติดตั้ง"
    },
    retry: {
      label: "ลองใหม่"
    }
  },
  walletconnect: {
    description: {
      full: "ต้องการ modal อย่างเป็นทางการจาก WalletConnect หรือไม่?",
      compact: "ต้องการ modal จาก WalletConnect หรือไม่?"
    },
    open: {
      label: "เปิด"
    }
  }
}, Ht = {
  title: "สแกนด้วย {wallet}",
  fallback_title: "สแกนด้วยโทรศัพท์ของคุณ"
}, ei = {
  installed: "ติดตั้งแล้ว",
  recommended: "แนะนำ",
  other: "อื่น ๆ",
  popular: "ยอดนิยม",
  more: "เพิ่มเติม",
  others: "อื่น ๆ"
}, ti = {
  title: "รับ Wallet",
  action: {
    label: "รับ"
  },
  mobile: {
    description: "Wallet บนมือถือ"
  },
  extension: {
    description: "ส่วนขยายบราวเซอร์"
  },
  mobile_and_extension: {
    description: "กระเป๋าเงินมือถือและส่วนขยาย"
  },
  mobile_and_desktop: {
    description: "กระเป๋าเงินบนมือถือและคอมพิวเตอร์"
  },
  looking_for: {
    title: "ไม่ใช่สิ่งที่คุณกำลังหาหรือไม่?",
    mobile: {
      description: "เลือกกระเป๋าเงินบนหน้าจอหลักเพื่อเริ่มต้นใช้งานกับผู้ให้บริการกระเป๋าเงินที่แตกต่างกัน"
    },
    desktop: {
      compact_description: "เลือกกระเป๋าเงินบนหน้าจอหลักเพื่อเริ่มต้นใช้งานกับผู้ให้บริการกระเป๋าเงินที่แตกต่างกัน",
      wide_description: "เลือกกระเป๋าเงินที่อยู่ทางซ้ายเพื่อเริ่มต้นใช้งานกับผู้ให้บริการกระเป๋าเงินที่แตกต่างกัน"
    }
  }
}, ii = {
  title: "เริ่มต้นกับ {wallet}",
  short_title: "รับ {wallet}",
  mobile: {
    title: "{wallet} สำหรับมือถือ",
    description: "ใช้กระเป๋าระบบมือถือในการสำรวจโลกของ Ethereum.",
    download: {
      label: "รับแอป"
    }
  },
  extension: {
    title: "{wallet} สำหรับ {browser}",
    description: "เข้าถึงกระเป๋าเงินของคุณได้โดยตรงจากบราวเซอร์ที่คุณชื่นชอบ.",
    download: {
      label: "เพิ่มไปยัง {browser}"
    }
  },
  desktop: {
    title: "{wallet} สำหรับ {platform}",
    description: "เข้าถึงกระเป๋าเงินของคุณโดยตรงจากคอมพิวเตอร์ที่มีประสิทธิภาพของคุณ",
    download: {
      label: "เพิ่มไปยัง {platform}"
    }
  }
}, ai = {
  title: "ติดตั้ง {wallet}",
  description: "สแกนด้วยโทรศัพท์ของคุณเพื่อดาวน์โหลดบน iOS หรือ Android",
  continue: {
    label: "ดำเนินการต่อ"
  }
}, ni = {
  mobile: {
    connect: {
      label: "เชื่อมต่อ"
    },
    learn_more: {
      label: "เรียนรู้เพิ่มเติม"
    }
  },
  extension: {
    refresh: {
      label: "รีเฟรช"
    },
    learn_more: {
      label: "เรียนรู้เพิ่มเติม"
    }
  },
  desktop: {
    connect: {
      label: "เชื่อมต่อ"
    },
    learn_more: {
      label: "เรียนรู้เพิ่มเติม"
    }
  }
}, ri = {
  title: "เปลี่ยนเครือข่าย",
  wrong_network: "ตรวจสอบพบเครือข่ายที่ไม่ถูกต้อง สลับหรือตัดการเชื่อมต่อเพื่อดำเนินการต่อ.",
  confirm: "ยืนยันใน Wallet",
  switching_not_supported: "กระเป๋าสตางค์ของคุณไม่สนับสนุนการเปลี่ยนเครือข่ายจาก {appName}ลองเปลี่ยนเครือข่ายจากภายในกระเป๋าสตางค์ของคุณแทน",
  switching_not_supported_fallback: "กระเป๋าสตางค์ของคุณไม่สนับสนุนการสลับเครือข่ายจากแอปนี้ ลองสลับเครือข่ายจากภายในกระเป๋าสตางค์ของคุณแทน",
  disconnect: "ตัดการเชื่อมต่อ",
  connected: "เชื่อมต่อแล้ว"
}, oi = {
  disconnect: {
    label: "ตัดการเชื่อมต่อ"
  },
  copy_address: {
    label: "คัดลอกที่อยู่",
    copied: "คัดลอกแล้ว!"
  },
  explorer: {
    label: "ดูเพิ่มเติมบน explorer"
  },
  transactions: {
    description: "{appName} รายการจะปรากฎที่นี่...",
    description_fallback: "การทำธุรกรรมของคุณจะปรากฎที่นี่...",
    recent: {
      title: "ธุรกรรมล่าสุด"
    },
    clear: {
      label: "ลบทั้งหมด"
    }
  }
}, si = {
  argent: {
    qr_code: {
      step1: {
        description: "วาง Argent บนหน้าจอหลักของคุณเพื่อเข้าถึงกระเป๋าเงินของคุณได้เร็วขึ้น",
        title: "เปิดแอป Argent"
      },
      step2: {
        description: "สร้างกระเป๋าเงินและชื่อผู้ใช้หรือนำเข้ากระเป๋าเงินที่มีอยู่แล้ว",
        title: "สร้างหรือนำเข้า Wallet"
      },
      step3: {
        description: "หลังจากคุณสแกน จะปรากฏหน้าต่างเชื่อมต่อให้คุณเชื่อมต่อกระเป๋าเงินของคุณ",
        title: "แตะที่คุ่มุ่งสแกน QR"
      }
    }
  },
  bifrost: {
    qr_code: {
      step1: {
        description: "เราขอแนะนำให้คุณวาง Bifrost Wallet บนหน้าจอหลักของคุณเพื่อเข้าถึงได้เร็วขึ้น",
        title: "เปิดแอพฯ Bifrost Wallet"
      },
      step2: {
        description: "สร้างหรือนำเข้ากระเป๋าเงินด้วย recovery phrase ของคุณ",
        title: "สร้างหรือนำเข้ากระเป๋าเงิน"
      },
      step3: {
        description: "หลังจากที่คุณสแกนแล้วยินยันการเชื่อมต่อกับกระเป๋าเงินของคุณ",
        title: "แตะปุ่มสแกน"
      }
    }
  },
  bitget: {
    qr_code: {
      step1: {
        description: "เราขอแนะนำให้วาง Bitget Wallet บนหน้าจอหน้าแรกของคุณเพื่อการเข้าถึงที่รวดเร็วขึ้น.",
        title: "เปิดแอพ Bitget Wallet"
      },
      step2: {
        description: "ตรวจสอบการสำรองข้อมูลกระเป๋าสตางค์ของคุณให้แน่นอนโดยใช้วิธีที่ปลอดภัย อย่าแชร์วลีลับของคุณกับใครเป็นอันขาด.",
        title: "สร้างหรือนำเข้า Wallet"
      },
      step3: {
        description: "หลังจากที่คุณสแกน จะมีข้อความขอเชื่อมต่อที่จะปรากฏขึ้นให้คุณเชื่อมต่อกระเป๋าสตางค์ของคุณ.",
        title: "แตะปุ่มสแกน"
      }
    },
    extension: {
      step1: {
        description: "เราแนะนำให้คุณปัก Bitget Wallet ไว้บนแถบงานของคุณเพื่อเข้าถึงกระเป๋าสตางค์ได้เร็วขึ้น",
        title: "ติดตั้งส่วนเสริม Bitget Wallet"
      },
      step2: {
        description: "โปรดแน่ใจว่าคุณได้สำรองข้อมูลกระเป๋าเงินของคุณโดยใช้วิธีที่ปลอดภัย อย่าแชร์วลีลับของคุณกับบุคคลใดๆ",
        title: "สร้างหรือนำเข้า Wallet"
      },
      step3: {
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้วคลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนเสริม",
        title: "รีเฟรชเบราว์เซอร์ของคุณ"
      }
    }
  },
  bitski: {
    extension: {
      step1: {
        description: "เราแนะนำให้ทำปัก Bitski ไว้ที่แถบงานของคุณเพื่อเข้าถึงกระเป๋าเงินได้โดยไม่ต้องรอ",
        title: "ติดตั้งส่วนขยาย Bitski"
      },
      step2: {
        description: "ควรสำรองกระเป๋าเงินของคุณโดยใช้วิธีที่ปลอดภัย อย่าเปิดเผยคำลับของคุณให้ใครทราบ",
        title: "สร้างหรือนำเข้ากระเป๋าเงิน"
      },
      step3: {
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้ว คลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนขยาย",
        title: "รีเฟรชเบราว์เซอร์ของคุณ"
      }
    }
  },
  bloom: {
    desktop: {
      step1: {
        title: "เปิดแอพ Bloom Wallet",
        description: "เราแนะนำให้วาง Bloom Wallet ไว้บนหน้าจอหลักเพื่อการเข้าถึงที่เร็วขึ้น"
      },
      step2: {
        description: "สร้างหรือนำเข้ากระเป๋าเงินด้วย recovery phrase ของคุณ",
        title: "สร้างหรือนำเข้า Wallet"
      },
      step3: {
        description: "หลังจากที่คุณมีกระเป๋าเงินแล้ว คลิกที่ 'Connect' เพื่อเชื่อมต่อผ่าน Bloom จะมีหน้าต่างแจ้งเตือนการเชื่อมต่อปรากฏขึ้นในแอพเพื่อให้คุณยืนยันการเชื่อมต่อ",
        title: "คลิกที่ 'Connect'"
      }
    },
    qr_code: {
      step1: {
        title: "เปิดแอพ Bloom Wallet",
        description: "เราแนะนำให้วาง Bloom Wallet ไว้บนหน้าจอหลักเพื่อการเข้าถึงที่เร็วขึ้น"
      },
      step2: {
        description: "สร้างหรือนำเข้ากระเป๋าเงินด้วย recovery phrase ของคุณ",
        title: "สร้างหรือนำเข้า Wallet"
      },
      step3: {
        description: "หลังจากที่คุณมีกระเป๋าเงินแล้ว คลิกที่ 'Connect' เพื่อเชื่อมต่อผ่าน Bloom จะมีหน้าต่างแจ้งเตือนการเชื่อมต่อปรากฏขึ้นในแอพเพื่อให้คุณยืนยันการเชื่อมต่อ",
        title: "คลิกที่ 'Connect'"
      }
    }
  },
  coin98: {
    qr_code: {
      step1: {
        description: "เราขอแนะนำให้คุณวาง Coin98 Wallet บนหน้าจอหลักของคุณ เพื่อให้เข้าถึงกระเป๋าเงินของคุณได้เร็วขึ้น.",
        title: "เปิดแอพ Coin98 Wallet"
      },
      step2: {
        description: "คุณสามารถสำรองข้อมูลกระเป๋าเงินของคุณได้ง่ายๆ ด้วยฟีเจอร์สำรองข้อมูลบนโทรศัพท์ของคุณ.",
        title: "สร้างหรือนำเข้ากระเป๋าเงิน"
      },
      step3: {
        description: "หลังจากคุณสแกน จะมีเตือนการเชื่อมต่อที่ปรากฏขึ้นให้คุณเชื่อมต่อกระเป๋าเงินของคุณ.",
        title: "แตะที่ปุ่ม WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "คลิกที่ด้านบนขวาของเบราว์เซอร์ของคุณและปัก Coin98 Wallet ไว้เพื่อให้เข้าถึงได้ง่าย.",
        title: "ติดตั้งส่วนขยาย Coin98 Wallet"
      },
      step2: {
        description: "สร้างกระเป๋าเงินใหม่หรือนำเข้าที่มีอยู่แล้ว.",
        title: "สร้างหรือนำเข้ากระเป๋าเงิน"
      },
      step3: {
        description: "เมื่อคุณตั้งค่า Coin98 Wallet แล้ว คลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนขยายขึ้นมา.",
        title: "รีเฟรชเบราว์เซอร์ของคุณ"
      }
    }
  },
  coinbase: {
    qr_code: {
      step1: {
        description: "เราแนะนำให้วาง Coinbase Wallet ไว้ที่หน้าจอหลักของคุณเพื่อให้เข้าถึงได้เร็วขึ้น.",
        title: "เปิดแอป Coinbase Wallet"
      },
      step2: {
        description: "คุณสามารถสำรองข้อมูลกระเป๋าสตางค์ของคุณได้ง่ายๆ โดยใช้ฟีเจอร์การสำรองข้อมูลด้วยคลาวด์",
        title: "สร้างหรือนำเข้ากระเป๋าสตางค์"
      },
      step3: {
        description: "หลังจากที่คุณสแกนแล้ว จะมีการแสดงขอ้มูลเพื่อให้คุณเชื่อมต่อกระเป๋าสตางค์ของคุณ",
        title: "แตะที่ปุ่มสแกน"
      }
    },
    extension: {
      step1: {
        description: "เราแนะนำให้คุณยัด Coinbase Wallet ไว้ที่แถบงานของคุณเพื่อให้สามารถเข้าถึงกระเป๋าสตางค์ของคุณได้เร็วขึ้น",
        title: "ติดตั้งส่วนขยาย Coinbase Wallet"
      },
      step2: {
        description: "ตรวจสอบให้แน่ใจว่าคุณได้สำรองข้อมูลกระเป๋าเงินของคุณโดยใช้วิธีที่ปลอดภัย อย่าเปิดเผยประโยคลับของคุณให้กับใครเลย",
        title: "สร้างหรือนำเข้ากระเป๋าเงิน"
      },
      step3: {
        description: "เมื่อคุณได้ตั้งค่ากระเป๋าเงินของคุณแล้ว คลิกด้านล่างเพื่อเรียกดูเบราว์เซอร์ใหม่และโหลดส่วนขยาย",
        title: "รีเฟรชเบราว์เซอร์ของคุณ"
      }
    }
  },
  core: {
    qr_code: {
      step1: {
        description: "เราแนะนำให้คุณวาง Core ลงสนามหลักเพื่อให้เข้าถึงกระเป๋าเงินได้เร็วขึ้น",
        title: "เปิดแอปเครื่องมือช่วยอีเกิร์น"
      },
      step2: {
        description: "คุณสามารถสำรองกระเป๋าเงินของคุณได้ง่ายๆ โดยใช้ฟีเจอร์สำรองของเราบนโทรศัพท์ของคุณ",
        title: "สร้างหรือนำเข้ากระเป๋าเงิน"
      },
      step3: {
        description: "หลังจากที่คุณสแกนแล้ว จะมีการแจ้งเตือนเพื่อให้คุณเชื่อมต่อกับกระเป๋าสตางค์ของคุณ",
        title: "แตะปุ่ม WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "เราขอแนะนำให้คุณปัก Core ไว้ที่แถบงานของคุณเพื่อเข้าถึงกระเป๋าสตางค์ของคุณได้อย่างรวดเร็ว",
        title: "ติดตั้งส่วนขยาย Core"
      },
      step2: {
        description: "โปรดแน่ใจว่าคุณได้สำรองกระเป๋าสตางค์ของคุณใช้วิธีที่ปลอดภัย อย่าแชร์วลีลับของคุณกับใคร",
        title: "สร้างหรือนำเข้า Wallet"
      },
      step3: {
        description: "เมื่อคุณตั้งค่ากระเป๋าสตางค์ของคุณแล้ว คลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนขยาย",
        title: "รีเฟรชเบราว์เซอร์ของคุณ"
      }
    }
  },
  fox: {
    qr_code: {
      step1: {
        description: "เราขอแนะนำให้คุณวาง FoxWallet บนหน้าจอหลักเพื่อให้เข้าถึงได้เร็วขึ้น",
        title: "เปิดแอป FoxWallet"
      },
      step2: {
        description: "ตรวจสอบที่จะสำรองข้อมูลกระเป๋าเงินของคุณโดยใช้วิธีที่ปลอดภัย จงอย่าเปิดเผยประโยคลับลับของคุณให้ผู้อื่นรู้",
        title: "สร้างหรือนำเข้ากระเป๋าเงิน"
      },
      step3: {
        description: "หลังจากที่คุณสแกน จะมีการเชื่อมต่อที่แสดงให้คุณเชื่อมต่อกระเป๋าเงินของคุณ",
        title: "แตะปุ่มสแกน"
      }
    }
  },
  frontier: {
    qr_code: {
      step1: {
        description: "เราขอแนะนำให้คุณวาง Frontier Wallet บนหน้าจอหลักเพื่อให้เข้าถึงได้เร็วขึ้น",
        title: "เปิดแอป Frontier Wallet"
      },
      step2: {
        description: "ตรวจสอบให้แน่ใจว่าคุณได้สำรองข้อมูลกระเป๋าสตางค์ของคุณโดยใช้วิธีที่ปลอดภัย อย่าแชร์วลีลับของคุณกับใคร",
        title: "สร้างหรือนำเข้ากระเป๋าสตางค์"
      },
      step3: {
        description: "หลังจากที่คุณสแกนแล้ว จะมีการแสดงข้อมูลเพื่อให้คุณเชื่อมต่อกับกระเป๋าสตางค์ของคุณ",
        title: "แตะปุ่มสแกน"
      }
    },
    extension: {
      step1: {
        description: "เราแนะนำให้คุณปักหมุด Frontier Wallet ไว้ที่แถบงานของคุณเพื่อเข้าถึงกระเป๋าสตางค์ของคุณได้ง่ายขึ้น",
        title: "ติดตั้งส่วนเสริม Frontier Wallet"
      },
      step2: {
        description: "ตรวจสอบให้แน่ใจว่าคุณได้สำรองข้อมูลกระเป๋าสตางค์ของคุณโดยใช้วิธีที่ปลอดภัย อย่าแชร์วลีลับของคุณกับใคร",
        title: "สร้างหรือนำเข้ากระเป๋าสตางค์"
      },
      step3: {
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้ว คลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนขยาย",
        title: "รีเฟรชเบราว์เซอร์ของคุณ"
      }
    }
  },
  im_token: {
    qr_code: {
      step1: {
        title: "เปิดแอพ imToken",
        description: "ใส่แอพ imToken ไว้ที่หน้าจอหลักเพื่อเข้าถึงกระเป๋าเงินของคุณได้เร็วขึ้น."
      },
      step2: {
        title: "สร้างหรือนำเข้ากระเป๋าเงิน",
        description: "สร้างกระเป๋าเงินใหม่หรือนำเข้ากระเป๋าเงินที่มีอยู่แล้ว"
      },
      step3: {
        title: "แตะไอคอนสแกนเนอร์ในมุมบนขวา",
        description: "เลือก New Connection, แล้วสแกน QR code และยืนยันการรับรองสำหรับการเชื่อมต่อ"
      }
    }
  },
  kresus: {
    qr_code: {
      step1: {
        title: "เปิดแอพ Kresus Wallet",
        description: "เพิ่มกระเป๋าเงิน Kresus ลงบนหน้าจอหลักเพื่อการเข้าถึงกระเป๋าเงินของคุณได้เร็วยิ่งขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้า Wallet",
        description: "สร้างกระเป๋าเงินใหม่หรือนำเข้าที่มีอยู่แล้ว."
      },
      step3: {
        title: "แตะที่ไอคอน QR แล้วสแกน",
        description: "แตะที่ไอคอน QR บนหน้าจอหลักของคุณ สแกนรหัสและยืนยันการเชื่อมต่อ"
      }
    }
  },
  metamask: {
    qr_code: {
      step1: {
        title: "เปิดแอป MetaMask",
        description: "เราขอแนะนำให้วาง MetaMask บนหน้าจอหลักของคุณเพื่อเข้าถึงได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้า Wallet",
        description: "ตรวจสอบว่าได้สำรองกระเป๋าเงินของคุณโดยใช้วิธีที่ปลอดภัย อย่าเปิดเผยวลีลับของคุณให้กับใคร"
      },
      step3: {
        title: "แตะที่ปุ่มสแกน",
        description: "หลังจากการสแกน, จะปรากฏข้อความเชื่อมต่อสำหรับคุณเพื่อเชื่อมต่อกับกระเป๋าเงินของคุณ"
      }
    },
    extension: {
      step1: {
        title: "ติดตั้งส่วนขยาย MetaMask",
        description: "เราขอแนะนำให้คุณปัก MetaMask ไว้ที่แถบงานของคุณเพื่อเข้าถึงกระเป๋าเงินของคุณได้รวดเร็ว"
      },
      step2: {
        title: "สร้างหรือนำเข้ากระเป๋าเงิน",
        description: "อย่างแน่นอนให้สำรองข้อมูลกระเป๋าเงินของคุณโดยใช้วิธีที่ปลอดภัย อย่าแชร์ประโยคลับของคุณกับใครเลย"
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้ว คลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนขยาย"
      }
    }
  },
  okx: {
    qr_code: {
      step1: {
        title: "เปิดแอพ OKX Wallet",
        description: "เราแนะนำให้วาง OKX Wallet บนหน้าจอหลักของคุณเพื่อให้เข้าถึงได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้า Wallet",
        description: "จงแน่ใจว่าคุณได้สำรองข้อมูล wallet ของคุณด้วยวิธีที่ปลอดภัย อย่าแชร์วลีลับของคุณให้คนอื่น"
      },
      step3: {
        title: "แตะปุ่มสแกน",
        description: "หลังจากคุณสแกน จะมีการแสดงข้อมูลเพื่อให้คุณเชื่อมต่อ wallet ของคุณ"
      }
    },
    extension: {
      step1: {
        title: "ติดตั้งส่วนเสริม OKX Wallet",
        description: "เราแนะนำให้ยึด OKX Wallet ไว้ที่แถบงานของคุณเพื่อให้เข้าถึง wallet ของคุณได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้า Wallet",
        description: "โปรดแน่ใจว่าคุณได้สำรองกระเป๋าสตางค์ของคุณด้วยวิธีที่ปลอดภัย อย่าเปิดเผยประโยคลับของคุณให้ใครทราบ"
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่ากระเป๋าสตางค์ของคุณแล้ว คลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนขยาย"
      }
    }
  },
  omni: {
    qr_code: {
      step1: {
        title: "เปิดแอป Omni",
        description: "เพิ่ม Omni ไปยังหน้าจอแรกเพื่อเข้าถึงกระเป๋าสตางค์ของคุณได้รวดเร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้ากระเป๋าสตางค์",
        description: "สร้างกระเป๋าสตางค์ใหม่หรือนำเข้ากระเป๋าสตางค์ที่มีอยู่"
      },
      step3: {
        title: "แตะที่ไอคอน QR แล้วสแกน",
        description: "แตะที่ไอคอน QR บนหน้าจอหน้าแรกของคุณ, สแกนรหัสและยืนยันการเตือนเพื่อเชื่อมต่อ."
      }
    }
  },
  token_pocket: {
    qr_code: {
      step1: {
        title: "เปิดแอป TokenPocket",
        description: "เราแนะนำให้วาง TokenPocket บนหน้าจอหน้าแรกของคุณเพื่อเข้าถึงได้เร็วขึ้น."
      },
      step2: {
        title: "สร้างหรือนำเข้ากระเป๋าเงิน",
        description: "ตรวจสอบว่าได้สำรองกระเป๋าเงินของคุณโดยใช้วิธีที่ปลอดภัย อย่าเปิดเผยวลีลับของคุณให้ผู้อื่นทราบในทางใดทางหนึ่ง."
      },
      step3: {
        title: "แตะปุ่มสแกน",
        description: "หลังจากที่คุณสแกนแล้ว จะมีการเรียกให้เชื่อมต่อกับกระเป๋าเงินของคุณ"
      }
    },
    extension: {
      step1: {
        title: "ติดตั้งส่วนขยาย TokenPocket",
        description: "เราขอแนะนำให้คุณปัก TokenPocket ไว้ที่แถบงานเพื่อทำให้สามารถเข้าถึงกระเป๋าเงินของคุณได้ง่ายขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้ากระเป๋าเงิน",
        description: "ตรวจสอบให้แน่ใจว่าคุณได้สำรองข้อมูลกระเป๋าเงินของคุณด้วยวิธีที่ปลอดภัย อย่าทำการแชร์ประโยคลับด้วยความลับของคุณกับใคร"
      },
      step3: {
        title: "รีเฟรชบราวเซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้ว คลิกด้านล่างเพื่อรีเฟรชบราวเซอร์และโหลดส่วนขยาย"
      }
    }
  },
  trust: {
    qr_code: {
      step1: {
        title: "เปิดแอพ Trust Wallet",
        description: "วาง Trust Wallet ที่หน้าจอหลักของคุณเพื่อเข้าถึงกระเป๋าเงินของคุณได้รวดเร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้า Wallet",
        description: "สร้าง wallet ใหม่หรือนำเข้า wallet ที่มีอยู่แล้ว"
      },
      step3: {
        title: "แตะ WalletConnect ในการตั้งค่า",
        description: "เลือก New Connection จากนั้นสแกน QR code และยืนยันการแจ้งเตือนเพื่อเชื่อมต่อ"
      }
    },
    extension: {
      step1: {
        title: "ติดตั้งส่วนขยาย Trust Wallet",
        description: "คลิกที่มุมบนขวาของเบราว์เซอร์ของคุณและปัก Trust Wallet เพื่อเข้าถึงได้ง่าย"
      },
      step2: {
        title: "สร้างหรือนำเข้า wallet",
        description: "สร้าง wallet ใหม่หรือนำเข้า wallet ที่มีอยู่แล้ว"
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่า Trust Wallet แล้ว คลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนขยายขึ้นมา"
      }
    }
  },
  uniswap: {
    qr_code: {
      step1: {
        title: "เปิดแอป Uniswap",
        description: "เพิ่ม Uniswap Wallet ไปยังหน้าจอหลักของคุณเพื่อเข้าถึงกระเป๋าเงินของคุณได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้า Wallet",
        description: "สร้างกระเป๋าเงินใหม่หรือนำเข้ากระเป๋าเงินที่มีอยู่แล้ว"
      },
      step3: {
        title: "แตะที่ไอคอน QR และสแกน",
        description: "แตะที่ไอคอน QR บนหน้าจอหลักของคุณ สแกนรหัสและยืนยันการเชื่อมต่อ"
      }
    }
  },
  zerion: {
    qr_code: {
      step1: {
        title: "เปิดแอป Zerion",
        description: "เราแนะนำให้คุณวาง Zerion บนหน้าจอหลักของคุณเพื่อเข้าถึงได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้า Wallet",
        description: "ลองทำสำเนาข้อมูล wallet ของคุณไว้ในช่องทางที่ปลอดภัย อย่าเปิดเผยวลีลับของคุณให้กับผู้อื่น"
      },
      step3: {
        title: "แตะที่ปุ่มสแกน",
        description: "หลังจากสแกน จะมีหน้าต่างแสดงคำสั่งเชื่อมต่อให้คุณเชื่อมต่อ wallet ของคุณ"
      }
    },
    extension: {
      step1: {
        title: "ติดตั้งส่วนขยาย Zerion",
        description: "เราแนะนำให้คุณติด Zerion บนแถบงานของคุณเพื่อเข้าถึง wallet ของคุณได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้ากระเป๋าเงิน",
        description: "ตรวจสอบให้แน่ใจว่าคุณได้สำรองข้อมูลกระเป๋าเงินของคุณโดยวิธีที่ปลอดภัย อย่าเปิดเผยประโยคลับลับของคุณให้ใครทราบครับ"
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้ว คลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนขยาย"
      }
    }
  },
  rainbow: {
    qr_code: {
      step1: {
        title: "เปิดแอป Rainbow",
        description: "เราขอแนะนำให้คุณวาง Rainbow อยู่บนหน้าจอหลักของคุณเพื่อรับผิดชอบจากกระเป๋าสตางค์ของคุณอย่างรวดเร็ว"
      },
      step2: {
        title: "สร้างหรือนำเข้ากระเป๋าสตางค์",
        description: "คุณสามารถสำรองข้อมูลกระเป๋าสตางค์ของคุณได้ง่ายๆ ด้วยฟีเจอร์สำรองข้อมูลบนโทรศัพท์ของคุณ"
      },
      step3: {
        title: "แตะปุ่มสแกน",
        description: "หลังจากสแกนแล้ว จะแสดงข้อความขอเชื่อมต่อเพื่อให้คุณเชื่อมต่อกระเป๋าสตางค์ของคุณ"
      }
    }
  },
  enkrypt: {
    extension: {
      step1: {
        description: "เราขอแนะนำให้คุณปัก Enkrypt Wallet ไว้ที่แทบงานของคุณเพื่อให้สามารถเข้าถึงกระเป๋าสตางค์ของคุณได้เร็วขึ้น",
        title: "ติดตั้งส่วนขยาย Enkrypt Wallet"
      },
      step2: {
        description: "ตรวจสอบให้แน่ใจว่าคุณได้สำรองกระเป๋าสตางค์ของคุณโดยใช้วิธีที่ปลอดภัย ห้ามแชร์วลีลับของคุณให้กับใคร",
        title: "สร้างหรือนำเข้า Wallet"
      },
      step3: {
        description: "เมื่อคุณตั้งค่า wallet ของคุณแล้ว คลิกด้านล่างเพื่อรีเฟรช browser และโหลดขึ้น extension",
        title: "รีเฟรช browser ของคุณ"
      }
    }
  },
  frame: {
    extension: {
      step1: {
        description: "เราแนะนำให้หมุน Frame ไว้บน taskbar ของคุณเพื่อให้เข้าถึง wallet ได้เร็วขึ้น",
        title: "ติดตั้ง Frame และ extension ที่เป็นคู่"
      },
      step2: {
        description: "ตรวจสอบว่าได้สำรอง wallet ของคุณโดยใช้วิธีการที่ปลอดภัย อย่าเปิดเผยวลีลับของคุณให้กับใคร",
        title: "สร้างหรือนำเข้า Wallet"
      },
      step3: {
        description: "เมื่อคุณตั้งค่า wallet ของคุณแล้ว คลิกด้านล่างเพื่อรีเฟรช browser และโหลดขึ้น extension",
        title: "รีเฟรช browser ของคุณ"
      }
    }
  },
  one_key: {
    extension: {
      step1: {
        title: "ติดตั้งส่วนเสริม OneKey Wallet",
        description: "เราแนะนำการปัก OneKey Wallet ไว้บนแทบงานของคุณเพื่อเข้าถึงกระเป๋าเงินได้ง่ายขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้ากระเป๋าเงิน",
        description: "อย่าลืมสำรองกระเป๋าเงินของคุณด้วยวิธีที่ปลอดภัย อย่าแชร์วลีลับของคุณกับใคร"
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้ว คลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนเสริม"
      }
    }
  },
  phantom: {
    extension: {
      step1: {
        title: "ติดตั้งส่วนเสริม Phantom",
        description: "เราแนะนำการปัก Phantom ไว้บนแทบงานของคุณเพื่อเข้าถึงกระเป๋าเงินได้ง่ายขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้ากระเป๋าเงิน",
        description: "แน่ใจว่าคุณได้สำรองกระเป๋าเงินของคุณโดยใช้วิธีที่ปลอดภัย อย่าเปิดเผยข้อความลับสำหรับการกู้คืนของคุณกับบุคคลใด ๆ"
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินเรียบร้อยแล้ว, คลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนขยาย"
      }
    }
  },
  rabby: {
    extension: {
      step1: {
        title: "ติดตั้งส่วนขยาย Rabby",
        description: "เราแนะนำให้คุณปัก Rabby ไว้ที่แถบงานเพื่อให้เข้าถึงกระเป๋าเงินของคุณได้รวดเร็วขึ้น."
      },
      step2: {
        title: "สร้างหรือนำเข้ากระเป๋าเงิน",
        description: "แน่ใจว่าคุณได้สำรองกระเป๋าเงินของคุณโดยใช้วิธีที่ปลอดภัย อย่าแชร์ข้อความลับของคุณกับบุคคลอื่น"
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้ว คลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนขยาย"
      }
    }
  },
  ronin: {
    qr_code: {
      step1: {
        description: "เราแนะนำให้คุณวางกระเป๋าเงิน Ronin บนหน้าจอหลักเพื่อการเข้าถึงที่รวดเร็วยิ่งขึ้น",
        title: "เปิดแอปกระเป๋าเงิน Ronin"
      },
      step2: {
        description: "ตรวจสอบการสำรองข้อมูลกระเป๋าสตางค์ของคุณให้แน่นอนโดยใช้วิธีที่ปลอดภัย อย่าแชร์วลีลับของคุณกับใครเป็นอันขาด.",
        title: "สร้างหรือนำเข้า Wallet"
      },
      step3: {
        description: "หลังจากคุณสแกน จะปรากฏหน้าต่างเชื่อมต่อให้คุณเชื่อมต่อกระเป๋าเงินของคุณ",
        title: "แตะปุ่มสแกน"
      }
    },
    extension: {
      step1: {
        description: "เราแนะนำให้คุณปักหมุดกระเป๋าเงิน Ronin ไว้ที่แถบงานเพื่อการเข้าถึงกระเป๋าเงินของคุณได้เร็วยิ่งขึ้น",
        title: "ติดตั้งส่วนขยายกระเป๋าเงิน Ronin"
      },
      step2: {
        description: "ตรวจสอบการสำรองข้อมูลกระเป๋าสตางค์ของคุณให้แน่นอนโดยใช้วิธีที่ปลอดภัย อย่าแชร์วลีลับของคุณกับใครเป็นอันขาด.",
        title: "สร้างหรือนำเข้า Wallet"
      },
      step3: {
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้วคลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนเสริม",
        title: "รีเฟรชเบราว์เซอร์ของคุณ"
      }
    }
  },
  ramper: {
    extension: {
      step1: {
        title: "ติดตั้งส่วนขยาย Ramper",
        description: "เราแนะนำให้คุณปักหมุด Ramper ไว้ที่แถบงานเพื่อการเข้าถึงกระเป๋าเงินของคุณได้ง่ายยิ่งขึ้น"
      },
      step2: {
        title: "สร้างกระเป๋าเงิน",
        description: "ตรวจสอบการสำรองข้อมูลกระเป๋าสตางค์ของคุณให้แน่นอนโดยใช้วิธีที่ปลอดภัย อย่าแชร์วลีลับของคุณกับใครเป็นอันขาด."
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้วคลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนเสริม"
      }
    }
  },
  safeheron: {
    extension: {
      step1: {
        title: "ติดตั้งส่วนขยาย Core",
        description: "เราขอแนะนำให้คุณปัก Safeheron ไว้ที่แถบงานเพื่อเข้าถึงกระเป๋าเงินของคุณได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้ากระเป๋าเงิน",
        description: "อย่าลืมสำรองกระเป๋าเงินของคุณโดยใช้วิธีที่ปลอดภัย อย่าเปิดเผยประโยคลับของคุณให้ผู้อื่นทราบ"
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้ว คลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนขยาย"
      }
    }
  },
  taho: {
    extension: {
      step1: {
        title: "ติดตั้งส่วนขยาย Taho",
        description: "เราแนะนำให้คุณปัก Taho ไว้ที่แถบงานของคุณเพื่อเข้าถึงกระเป๋าเงินของคุณได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้ากระเป๋าเงิน",
        description: "โปรดแน่ใจว่าคุณได้สำรองกระเป๋าเงินของคุณโดยใช้วิธีที่ปลอดภัย อย่าแชร์ประโยคลับคุณกับผู้อื่น"
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้ว คลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนขยาย"
      }
    }
  },
  talisman: {
    extension: {
      step1: {
        title: "ติดตั้งส่วนขยาย Talisman",
        description: "เราแนะนำให้คุณปัก Talisman ไว้ที่แถบงานของคุณเพื่อเข้าถึงกระเป๋าเงินของคุณได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้ากระเป๋าเงิน Ethereum",
        description: "ให้แน่ใจว่าคุณได้สำรองกระเป๋าเงินของคุณโดยใช้วิธีที่ปลอดภัย อย่าเปิดเผยวลีการกู้คืนของคุณให้ใครทราบเด็ดขาด"
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้ว คลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนขยาย"
      }
    }
  },
  xdefi: {
    extension: {
      step1: {
        title: "ติดตั้งส่วนขยาย XDEFI Wallet",
        description: "เราแนะนำให้คุณตรา XDEFI Wallet ไว้ที่แถบงานเพื่อเข้าถึงกระเป๋าเงินของคุณได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้ากระเป๋าเงิน",
        description: "ให้แน่ใจว่าคุณได้สำรองกระเป๋าเงินของคุณโดยใช้วิธีที่ปลอดภัย อย่าเปิดเผยวลีลับของคุณให้ใครทราบเด็ดขาด"
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "หลังจากที่คุณตั้งค่ากระเป๋าสตางค์ของคุณแล้ว คลิกด้านล่างเพื่อรีเฟรชบราวเซอร์และโหลดส่วนเสริม."
      }
    }
  },
  zeal: {
    extension: {
      step1: {
        title: "ติดตั้งส่วนขยาย Zeal",
        description: "เราแนะนำให้ปัก Zeal ไว้ที่แถบงานของคุณเพื่อเข้าถึงกระเป๋าเงินของคุณได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้า Wallet",
        description: "ตรวจสอบการสำรองข้อมูลกระเป๋าสตางค์ของคุณให้แน่นอนโดยใช้วิธีที่ปลอดภัย อย่าแชร์วลีลับของคุณกับใครเป็นอันขาด."
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้วคลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนเสริม"
      }
    }
  },
  safepal: {
    extension: {
      step1: {
        title: "ติดตั้งส่วนขยาย SafePal Wallet",
        description: "คลิกที่มุมบนขวาของเบราว์เซอร์ของคุณและปักมุม SafePal Wallet เพื่อที่จะเข้าถึงได้ง่าย"
      },
      step2: {
        title: "สร้างหรือนำเข้ากระเป๋าเงิน",
        description: "สร้างกระเป๋าเงินใหม่หรือนำเข้าที่มีอยู่แล้ว."
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "หลังจากคุณตั้งค่า SafePal Wallet เรียบร้อยแล้ว คลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนขยาย"
      }
    },
    qr_code: {
      step1: {
        title: "เปิดแอป SafePal Wallet",
        description: "วาง SafePal Wallet ที่หน้าจอหลักของคุณเพื่อเข้าถึงกระเป๋าเงินของคุณได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้า Wallet",
        description: "สร้างกระเป๋าเงินใหม่หรือนำเข้าที่มีอยู่แล้ว."
      },
      step3: {
        title: "แตะ WalletConnect ในการตั้งค่า",
        description: "เลือก New Connection, แล้วสแกน QR code และยืนยันการรับรองสำหรับการเชื่อมต่อ"
      }
    }
  },
  desig: {
    extension: {
      step1: {
        title: "ติดตั้งส่วนขยาย Desig",
        description: "เราขอแนะนำให้คุณตรึง Desig ไว้ที่แถบงานของคุณเพื่อให้เข้าถึงกระเป๋าเงินของคุณได้ง่ายขึ้น"
      },
      step2: {
        title: "สร้างกระเป๋าเงิน",
        description: "ตรวจสอบการสำรองข้อมูลกระเป๋าสตางค์ของคุณให้แน่นอนโดยใช้วิธีที่ปลอดภัย อย่าแชร์วลีลับของคุณกับใครเป็นอันขาด."
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้วคลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนเสริม"
      }
    }
  },
  subwallet: {
    extension: {
      step1: {
        title: "ติดตั้งส่วนขยาย SubWallet",
        description: "เราขอแนะนำให้คุณตรึง SubWallet ไว้ที่แถบงานของคุณเพื่อเข้าถึงกระเป๋าเงินของคุณได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้า Wallet",
        description: "ให้แน่ใจว่าคุณได้สำรองกระเป๋าเงินของคุณโดยใช้วิธีที่ปลอดภัย อย่าเปิดเผยวลีการกู้คืนของคุณให้ใครทราบเด็ดขาด"
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้วคลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนเสริม"
      }
    },
    qr_code: {
      step1: {
        title: "เปิดแอพ SubWallet",
        description: "เราขอแนะนำให้วาง SubWallet ไว้ที่หน้าจอหลักของคุณเพื่อเข้าถึงได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้า Wallet",
        description: "ตรวจสอบการสำรองข้อมูลกระเป๋าสตางค์ของคุณให้แน่นอนโดยใช้วิธีที่ปลอดภัย อย่าแชร์วลีลับของคุณกับใครเป็นอันขาด."
      },
      step3: {
        title: "แตะปุ่มสแกน",
        description: "หลังจากคุณสแกน จะปรากฏหน้าต่างเชื่อมต่อให้คุณเชื่อมต่อกระเป๋าเงินของคุณ"
      }
    }
  },
  clv: {
    extension: {
      step1: {
        title: "ติดตั้งส่วนขยาย CLV Wallet",
        description: "เราขอแนะนำให้คุณตรึง CLV Wallet ไว้ที่แถบงานของคุณเพื่อเข้าถึงกระเป๋าเงินของคุณได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้า Wallet",
        description: "ตรวจสอบการสำรองข้อมูลกระเป๋าสตางค์ของคุณให้แน่นอนโดยใช้วิธีที่ปลอดภัย อย่าแชร์วลีลับของคุณกับใครเป็นอันขาด."
      },
      step3: {
        title: "รีเฟรชเบราว์เซอร์ของคุณ",
        description: "เมื่อคุณตั้งค่ากระเป๋าเงินของคุณแล้วคลิกด้านล่างเพื่อรีเฟรชเบราว์เซอร์และโหลดส่วนเสริม"
      }
    },
    qr_code: {
      step1: {
        title: "เปิดแอพ CLV Wallet",
        description: "เราแนะนำให้คุณวาง CLV Wallet บนหน้าจอหลักเพื่อให้สามารถเข้าถึงได้เร็วขึ้น"
      },
      step2: {
        title: "สร้างหรือนำเข้า Wallet",
        description: "ตรวจสอบการสำรองข้อมูลกระเป๋าสตางค์ของคุณให้แน่นอนโดยใช้วิธีที่ปลอดภัย อย่าแชร์วลีลับของคุณกับใครเป็นอันขาด."
      },
      step3: {
        title: "แตะปุ่มสแกน",
        description: "หลังจากคุณสแกน จะปรากฏหน้าต่างเชื่อมต่อให้คุณเชื่อมต่อกระเป๋าเงินของคุณ"
      }
    }
  },
  okto: {
    qr_code: {
      step1: {
        title: "เปิดแอพ Okto",
        description: "เพิ่ม Okto ไปยังหน้าจอหลักของคุณเพื่อเข้าถึงได้เร็ว"
      },
      step2: {
        title: "สร้างกระเป๋าเงิน MPC",
        description: "สร้างบัญชีและสร้างกระเป๋าเงิน"
      },
      step3: {
        title: "แตะ WalletConnect ในการตั้งค่า",
        description: "แตะที่ไอคอน Scan QR ที่บริเวณมุมบนขวาและยืนยันข้อความเพื่อเชื่อมต่อ."
      }
    }
  },
  ledger: {
    desktop: {
      step1: {
        title: "เปิดแอป Ledger Live",
        description: "เราแนะนำให้คุณวาง Ledger Live บนหน้าจอหลักเพื่อให้สามารถเข้าถึงได้เร็วขึ้น"
      },
      step2: {
        title: "ตั้งค่า Ledger ของคุณ",
        description: "ตั้งค่า Ledger ใหม่หรือเชื่อมต่อกับ Ledger ที่มีอยู่แล้ว"
      },
      step3: {
        title: "เชื่อมต่อ",
        description: "หลังจากที่คุณสแกนแล้ว จะมีการเรียกให้เชื่อมต่อกับกระเป๋าเงินของคุณ"
      }
    },
    qr_code: {
      step1: {
        title: "เปิดแอป Ledger Live",
        description: "เราแนะนำให้วาง Ledger Live บนหน้าจอหลักของคุณเพื่อการเข้าถึงที่รวดเร็วขึ้น"
      },
      step2: {
        title: "ตั้งค่า Ledger ของคุณ",
        description: "คุณสามารถซิงค์กับแอพพลิเคชันบนเดสก์ท็อปหรือเชื่อมต่อ Ledger ของคุณ"
      },
      step3: {
        title: "สแกนรหัส",
        description: "แตะ WalletConnect แล้วเปลี่ยนไปที่ Scanner. หลังจากที่คุณสแกนแล้ว จะมีการเรียกให้เชื่อมต่อกับกระเป๋าเงินของคุณ"
      }
    }
  }
}, h = {
  connect_wallet: Zt,
  intro: Gt,
  sign_in: Jt,
  connect: Yt,
  connect_scan: Ht,
  connector_group: ei,
  get: ti,
  get_options: ii,
  get_mobile: ai,
  get_instructions: ni,
  chains: ri,
  profile: oi,
  wallet_connectors: si
}, li = {
  label: "Cüzdanı Bağla",
  wrong_network: {
    label: "Yanlış ağ"
  }
}, pi = {
  title: "Cüzdan nedir?",
  description: "Bir cüzdan, dijital varlıkları göndermek, almak, saklamak ve görüntülemek için kullanılır. Aynı zamanda her web sitesinde yeni hesaplar ve şifreler oluşturmanıza gerek kalmadan oturum açmanın yeni bir yoludur.",
  digital_asset: {
    title: "Dijital Varlıklarınız İçin Bir Ev",
    description: "Cüzdanlar, Ethereum ve NFT'ler gibi dijital varlıkları göndermek, almak, depolamak ve görüntülemek için kullanılır."
  },
  login: {
    title: "Yeni Bir Giriş Yolu",
    description: "Her web sitesinde yeni hesap ve parolalar oluşturmak yerine, sadece cüzdanınızı bağlayın."
  },
  get: {
    label: "Bir Cüzdan Edinin"
  },
  learn_more: {
    label: "Daha fazla bilgi edinin"
  }
}, ci = {
  label: "Hesabınızı doğrulayın",
  description: "Bağlantıyı tamamlamak için, bu hesabın sahibi olduğunuzu doğrulamak için cüzdanınızdaki bir mesaja imza atmalısınız.",
  message: {
    send: "Mesajı gönder",
    preparing: "Mesaj hazırlanıyor...",
    cancel: "İptal",
    preparing_error: "Mesajı hazırlarken hata oluştu, lütfen tekrar deneyin!"
  },
  signature: {
    waiting: "İmza bekleniyor...",
    verifying: "İmza doğrulanıyor...",
    signing_error: "Mesajı imzalarken hata oluştu, lütfen tekrar deneyin!",
    verifying_error: "İmza doğrulanırken hata oluştu, lütfen tekrar deneyin!",
    oops_error: "Hata, bir şeyler yanlış gitti!"
  }
}, di = {
  label: "Bağlan",
  title: "Bir Cüzdanı Bağla",
  new_to_ethereum: {
    description: "Ethereum cüzdanlarına yeni misiniz?",
    learn_more: {
      label: "Daha fazla bilgi edinin"
    }
  },
  learn_more: {
    label: "Daha fazla bilgi edinin"
  },
  recent: "Son",
  status: {
    opening: "{wallet}açılıyor...",
    connecting: "Bağlanıyor",
    connect_mobile: "{wallet}'da devam edin",
    not_installed: "{wallet} yüklü değil",
    not_available: "{wallet} kullanılabilir değil",
    confirm: "Bağlantıyı eklentide onaylayın",
    confirm_mobile: "Cüzdanında bağlantı isteğini kabul et"
  },
  secondary_action: {
    get: {
      description: "{wallet}yok mu?",
      label: "AL"
    },
    install: {
      label: "YÜKLE"
    },
    retry: {
      label: "YENİDEN DENE"
    }
  },
  walletconnect: {
    description: {
      full: "Resmi WalletConnect modalına mı ihtiyacınız var?",
      compact: "WalletConnect modalına mı ihtiyacınız var?"
    },
    open: {
      label: "AÇ"
    }
  }
}, ui = {
  title: "{wallet}ile tarama yapın",
  fallback_title: "Telefonunuzla tarama yapın"
}, mi = {
  installed: "Yüklendi",
  recommended: "Tavsiye Edilen",
  other: "Diğer",
  popular: "Popüler",
  more: "Daha Fazla",
  others: "Diğerleri"
}, ki = {
  title: "Bir Cüzdan Edinin",
  action: {
    label: "AL"
  },
  mobile: {
    description: "Mobil Cüzdan"
  },
  extension: {
    description: "Tarayıcı Eklentisi"
  },
  mobile_and_extension: {
    description: "Mobil Cüzdan ve Eklenti"
  },
  mobile_and_desktop: {
    description: "Mobil ve Masaüstü Cüzdan"
  },
  looking_for: {
    title: "Aradığınız şey bu değil mi?",
    mobile: {
      description: "Ana ekranda başka bir cüzdan sağlayıcısıyla başlamak için bir cüzdan seçin."
    },
    desktop: {
      compact_description: "Ana ekranda başka bir cüzdan sağlayıcısıyla başlamak için bir cüzdan seçin.",
      wide_description: "Başka bir cüzdan sağlayıcısıyla başlamak için sol tarafta bir cüzdan seçin."
    }
  }
}, bi = {
  title: "{wallet}ile başlayın",
  short_title: "{wallet}Edinin",
  mobile: {
    title: "{wallet} Mobil İçin",
    description: "Mobil cüzdanı kullanarak Ethereum dünyasını keşfedin.",
    download: {
      label: "Uygulamayı alın"
    }
  },
  extension: {
    title: "{wallet} için {browser}",
    description: "Cüzdanınıza favori web tarayıcınızdan doğrudan erişin.",
    download: {
      label: "{browser}'e ekle"
    }
  },
  desktop: {
    title: "{wallet} için {platform}",
    description: "Güçlü masaüstünüzden cüzdanınıza yerel olarak erişin.",
    download: {
      label: "{platform}ekleyin"
    }
  }
}, gi = {
  title: "{wallet}'i yükleyin",
  description: "iOS veya Android'de indirmek için telefonunuzla tarayın",
  continue: {
    label: "Devam et"
  }
}, yi = {
  mobile: {
    connect: {
      label: "Bağlan"
    },
    learn_more: {
      label: "Daha fazla bilgi edinin"
    }
  },
  extension: {
    refresh: {
      label: "Yenile"
    },
    learn_more: {
      label: "Daha fazla bilgi edinin"
    }
  },
  desktop: {
    connect: {
      label: "Bağlan"
    },
    learn_more: {
      label: "Daha fazla bilgi edinin"
    }
  }
}, fi = {
  title: "Ağları Değiştir",
  wrong_network: "Yanlış ağ algılandı, devam etmek için bağlantıyı kesin veya değiştirin.",
  confirm: "Cüzdanında Onayla",
  switching_not_supported: "Cüzdanınız {appName}. ağları değiştirmeyi desteklemiyor. Bunun yerine cüzdanınızdan ağları değiştirmeyi deneyin.",
  switching_not_supported_fallback: "Cüzdanınız bu uygulamadan ağları değiştirmeyi desteklemiyor. Bunun yerine cüzdanınızdaki ağları değiştirmeyi deneyin.",
  disconnect: "Bağlantıyı Kes",
  connected: "Bağlı"
}, hi = {
  disconnect: {
    label: "Bağlantıyı Kes"
  },
  copy_address: {
    label: "Adresi Kopyala",
    copied: "Kopyalandı!"
  },
  explorer: {
    label: "Explorer üzerinde daha fazlasını görün"
  },
  transactions: {
    description: "{appName} işlem burada görünecek...",
    description_fallback: "İşlemleriniz burada görünecek...",
    recent: {
      title: "Son İşlemler"
    },
    clear: {
      label: "Hepsini Temizle"
    }
  }
}, zi = {
  argent: {
    qr_code: {
      step1: {
        description: "Cüzdanınıza daha hızlı erişim için Argent'i ana ekranınıza koyun.",
        title: "Argent uygulamasını açın"
      },
      step2: {
        description: "Bir cüzdan ve kullanıcı adı oluşturun veya mevcut bir cüzdanı içe aktarın.",
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar"
      },
      step3: {
        description: "Taradıktan sonra, cüzdanınızı bağlamak için bir bağlantı istemi görünecektir.",
        title: "QR tarayıcı düğmesine dokunun"
      }
    }
  },
  bifrost: {
    qr_code: {
      step1: {
        description: "Daha hızlı erişim için Bifrost Cüzdan'ı ana ekranınıza koymanızı öneririz.",
        title: "Bifrost Cüzdan uygulamasını açın"
      },
      step2: {
        description: "Kurtarma ifadenizle bir cüzdan oluşturun veya içe aktarın.",
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar"
      },
      step3: {
        description: "Tarama işlemi sonrasında, cüzdanınızı bağlamak için bir bağlantı istemi gözükecektir.",
        title: "Tarayıcı düğmesine dokunun"
      }
    }
  },
  bitget: {
    qr_code: {
      step1: {
        description: "Daha hızlı erişim için Bitget Cüzdanınızı ana ekranınıza koymanızı öneririz.",
        title: "Bitget Cüzdan uygulamasını açın"
      },
      step2: {
        description: "Cüzdanınızı güvenli bir yöntemle yedeklemeye emin olun. Gizli ifadenizi asla kimseyle paylaşmayın.",
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar"
      },
      step3: {
        description: "Tarama yaptıktan sonra, cüzdanınızı bağlamak için bir bağlantı istemi görünecektir.",
        title: "Tarama düğmesine dokunun"
      }
    },
    extension: {
      step1: {
        description: "Cüzdanınıza daha hızlı erişim için Bitget Cüzdanını görev çubuğunuza sabitlemenizi öneririz.",
        title: "Bitget Cüzdan eklentisini yükleyin"
      },
      step2: {
        description: "Cüzdanınızı güvenli bir yöntemle yedeklemekten emin olun. Gizli ifadenizi hiç kimseyle paylaşmayın.",
        title: "Bir Cüzdan Oluşturun veya İçe Aktarın"
      },
      step3: {
        description: "Cüzdanınızı kurduktan sonra, aşağıya tıklayın ve tarayıcıyı yenileyin ve eklentiyi yükleyin.",
        title: "Tarayıcınızı yenileyin"
      }
    }
  },
  bitski: {
    extension: {
      step1: {
        description: "Cüzdanınıza daha hızlı erişim için Bitski'yi görev çubuğunuza sabitlemenizi öneririz.",
        title: "Bitski eklentisini yükleyin"
      },
      step2: {
        description: "Cüzdanınızı güvenli bir yöntem kullanarak yedeklediğinizden emin olun. Gizli ifadenizi kimseyle paylaşmayın.",
        title: "Bir Cüzdan Oluşturun veya İçe Aktarın"
      },
      step3: {
        description: "Cüzdanınızı kurduktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıya tıklayın.",
        title: "Tarayıcınızı yenileyin"
      }
    }
  },
  bloom: {
    desktop: {
      step1: {
        title: "Bloom Cüzdan uygulamasını açın",
        description: "Daha hızlı erişim için Bloom Cüzdan'ı ana ekranınıza koymayı öneririz."
      },
      step2: {
        description: "Kurtarma ifadenizle bir cüzdan oluşturun veya içe aktarın.",
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar"
      },
      step3: {
        description: "Bir cüzdanınız olduktan sonra, Bloom üzerinden bağlanmak için Bağlan'a tıklayın. Uygulamada bağlantıyı onaylamanız için bir bağlantı istemi belirecektir.",
        title: "Bağlan'a tıklayın"
      }
    },
    qr_code: {
      step1: {
        title: "Bloom Cüzdan uygulamasını açın",
        description: "Daha hızlı erişim için Bloom Cüzdan'ı ana ekranınıza koymayı öneririz."
      },
      step2: {
        description: "Kurtarma ifadenizle bir cüzdan oluşturun veya içe aktarın.",
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar"
      },
      step3: {
        description: "Bir cüzdanınız olduktan sonra, Bloom üzerinden bağlanmak için Bağlan'a tıklayın. Uygulamada bağlantıyı onaylamanız için bir bağlantı istemi belirecektir.",
        title: "Bağlan'a tıklayın"
      }
    }
  },
  coin98: {
    qr_code: {
      step1: {
        description: "Cüzdanınıza daha hızlı erişim için Coin98 Cüzdanınızı ana ekranınıza koymanızı öneririz.",
        title: "Coin98 Cüzdan uygulamasını açın"
      },
      step2: {
        description: "Telefonunuzdaki yedekleme özelliğimizi kullanarak cüzdanınızı kolayca yedekleyebilirsiniz.",
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar"
      },
      step3: {
        description: "Tarama işlemi yaptıktan sonra, cüzdanınızı bağlamak için bir bağlantı istemi görünecektir.",
        title: "CüzdanBağlantısı düğmesine dokunun"
      }
    },
    extension: {
      step1: {
        description: "Tarayıcınızın sağ üst köşesinde tıklayın ve Coin98 Cüzdanınızı kolay erişim için sabitleyin.",
        title: "Coin98 Cüzdan eklentisini yükleyin"
      },
      step2: {
        description: "Yeni bir cüzdan oluşturun veya mevcut birini içe aktarın.",
        title: "Bir cüzdan oluşturun veya içe aktarın"
      },
      step3: {
        description: "Coin98 Cüzdan'ı kurduktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıya tıklayın.",
        title: "Tarayıcınızı yenileyin"
      }
    }
  },
  coinbase: {
    qr_code: {
      step1: {
        description: "Coinbase Cüzdan'ı ana ekranınıza koymanızı öneririz, böylece daha hızlı erişim sağlanır.",
        title: "Coinbase Wallet uygulamasını açın"
      },
      step2: {
        description: "Cüzdanınızı bulut yedekleme özelliğini kullanarak kolayca yedekleyebilirsiniz.",
        title: "Bir Cüzdan Oluşturun veya İçe Aktarın"
      },
      step3: {
        description: "Tarama yaptıktan sonra, cüzdanınızı bağlamanız için bir bağlantı istemi belirecektir.",
        title: "Tarama düğmesine dokunun"
      }
    },
    extension: {
      step1: {
        description: "Cüzdanınıza daha hızlı erişim için Coinbase Wallet'ı görev çubuğunuza sabitlemenizi öneririz.",
        title: "Coinbase Wallet uzantısını yükleyin"
      },
      step2: {
        description: "Cüzdanınızı güvenli bir yöntem kullanarak yedekleyin. Gizli ifadenizi asla başkalarıyla paylaşmayın.",
        title: "Cüzdan Oluştur veya İçe Aktar"
      },
      step3: {
        description: "Cüzdanınızı kurduktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıya tıklayın.",
        title: "Tarayıcınızı yenileyin"
      }
    }
  },
  core: {
    qr_code: {
      step1: {
        description: "Cüzdanınıza daha hızlı erişim için Core'u ana ekranınıza koymanızı öneririz.",
        title: "Core uygulamasını açın"
      },
      step2: {
        description: "Cüzdanınızın yedeğini telefonunuzda bulunan yedekleme özelliğimizi kullanarak kolayca alabilirsiniz.",
        title: "Cüzdan Oluştur veya İçe Aktar"
      },
      step3: {
        description: "Tarama yaptıktan sonra, cüzdanınızı bağlamak üzere bir bağlantı istemi görünecektir.",
        title: "WalletConnect düğmesine dokunun"
      }
    },
    extension: {
      step1: {
        description: "Cüzdanınıza daha hızlı erişim için Core'u görev çubuğunuza sabitlemenizi öneririz.",
        title: "Core eklentisini yükleyin"
      },
      step2: {
        description: "Cüzdanınızı güvenli bir yöntemle yedeklemeye dikkat edin. Gizli ifadenizi asla kimseyle paylaşmayın.",
        title: "Bir Cüzdan Oluşturun veya İçe Aktarın"
      },
      step3: {
        description: "Cüzdanınızı kurduktan sonra, aşağıya tıklayarak tarayıcıyı yenileyin ve eklentiyi yükleyin.",
        title: "Tarayıcınızı yenileyin"
      }
    }
  },
  fox: {
    qr_code: {
      step1: {
        description: "Daha hızlı erişim için FoxWallet'ı ana ekranınıza koymanızı öneririz.",
        title: "FoxWallet uygulamasını açın"
      },
      step2: {
        description: "Cüzdanınızı güvenli bir yöntem kullanarak yedeklediğinizden emin olun. Gizli ifadenizi asla kimseyle paylaşmayın.",
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar"
      },
      step3: {
        description: "Tarama yaptıktan sonra cüzdanınızı bağlamanız için bir bağlantı istemi belirecektir.",
        title: "Tarama düğmesine dokunun"
      }
    }
  },
  frontier: {
    qr_code: {
      step1: {
        description: "Daha hızlı erişim için Frontier Cüzdanını ana ekranınıza koymanızı öneririz.",
        title: "Frontier Cüzdan uygulamasını açın"
      },
      step2: {
        description: "Cüzdanınızı güvenli bir yöntem kullanarak yedeklediğinizden emin olun. Gizli ifadenizi asla kimseyle paylaşmayın.",
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar"
      },
      step3: {
        description: "Taramadan sonra, cüzdanınızı bağlamak için bir bağlantı istemi görünecektir.",
        title: "Tarama düğmesine dokunun"
      }
    },
    extension: {
      step1: {
        description: "Cüzdanınıza daha hızlı erişim için Frontier Cüzdanını görev çubuğunuza sabitlemenizi öneririz.",
        title: "Frontier Cüzdan eklentisini yükleyin"
      },
      step2: {
        description: "Cüzdanınızı güvenli bir yöntemle yedeklediğinizden emin olun. Gizli ifadenizi hiç kimseyle paylaşmayın.",
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar"
      },
      step3: {
        description: "Cüzdanınızı ayarladıktan sonra, tarayıcıyı yenilemeye ve eklentiyi yüklemeye başlamak için aşağıya tıklayın.",
        title: "Tarayıcınızı Yenileyin"
      }
    }
  },
  im_token: {
    qr_code: {
      step1: {
        title: "imToken uygulamasını açın",
        description: "Cüzdanınıza daha hızlı erişim için imToken uygulamasını ana ekranınıza koyun."
      },
      step2: {
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar",
        description: "Yeni bir cüzdan oluşturun veya mevcut bir cüzdanı içe aktarın."
      },
      step3: {
        title: "Sağ üst köşede Tarayıcı Simgesine dokunun",
        description: "Yeni Bağlantı'yı seçin, ardından QR kodunu tarayın ve bağlantıyı onaylamak için istemi onaylayın."
      }
    }
  },
  kresus: {
    qr_code: {
      step1: {
        title: "Kresus Cüzdan uygulamasını açın",
        description: "Cüzdanınıza daha hızlı erişim için Kresus Cüzdanını ana ekranınıza ekleyin."
      },
      step2: {
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar",
        description: "Yeni bir cüzdan oluşturun veya mevcut birini içe aktarın."
      },
      step3: {
        title: "QR simgesine dokunun ve tarayın",
        description: "Ana ekranınızdaki QR simgesine dokunun, kodu tarayın ve bağlanmayı onaylamak için istemi kabul edin."
      }
    }
  },
  metamask: {
    qr_code: {
      step1: {
        title: "MetaMask uygulamasını açın",
        description: "Daha hızlı erişim için MetaMask'ı ana ekranınıza koymanızı öneririz."
      },
      step2: {
        title: "Bir Cüzdan Oluşturun veya İçe Aktarın",
        description: "Cüzdanınızı güvenli bir yöntem kullanarak yedekleyin. Gizli kurtarma ifadenizi asla başkalarıyla paylaşmayın."
      },
      step3: {
        title: "Tarama düğmesine dokunun",
        description: "Taramayı yaptıktan sonra, cüzdanınızı bağlamak için bir bağlantı istemi belirecektir."
      }
    },
    extension: {
      step1: {
        title: "MetaMask eklentisini yükleyin",
        description: "Cüzdanınıza daha hızlı erişim için MetaMask'i görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Bir Cüzdan Oluşturun veya İçe Aktarın",
        description: "Cüzdanınızı güvenli bir yöntemle yedeklediğinizden emin olun. Gizli ifadenizi hiç kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı Yenileyin",
        description: "Cüzdanınızı ayarladıktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıya tıklayın."
      }
    }
  },
  okx: {
    qr_code: {
      step1: {
        title: "OKX Wallet uygulamasını açın",
        description: "Daha hızlı erişim için OKX Wallet'ı ana ekranınıza koymanızı öneririz."
      },
      step2: {
        title: "Bir Cüzdan Oluşturun veya İçe Aktarın",
        description: "Cüzdanınızı güvenli bir yöntem kullanarak yedeklediğinizden emin olun. Gizli cümlenizi asla kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarama düğmesine dokunun",
        description: "Tarama yaptıktan sonra, cüzdanınızı bağlama istemi görünecektir."
      }
    },
    extension: {
      step1: {
        title: "OKX Cüzdan eklentisini yükleyin",
        description: "Cüzdanınıza daha hızlı erişim için OKX Cüzdan'ı görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Cüzdan Oluşturun veya İçe Aktarın",
        description: "Cüzdanınızı güvenli bir yöntem kullanarak yedeklediğinizden emin olun. Gizli cümlenizi asla kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Cüzdanınızı kurduktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıya tıklayın."
      }
    }
  },
  omni: {
    qr_code: {
      step1: {
        title: "Omni uygulamasını açın",
        description: "Cüzdanınıza daha hızlı erişim için Omni'yi ana ekranınıza ekleyin."
      },
      step2: {
        title: "Bir Cüzdan Oluşturun ya da İçe Aktarın",
        description: "Yeni bir cüzdan oluşturun veya mevcut birini içe aktarın."
      },
      step3: {
        title: "QR simgesine dokunun ve tarayın",
        description: "Ana ekranınızdaki QR simgesine dokunun, kodu tarayın ve bağlanmak için istemi onaylayın."
      }
    }
  },
  token_pocket: {
    qr_code: {
      step1: {
        title: "TokenPocket uygulamasını açın",
        description: "Daha hızlı erişim için TokenPocket'ı ana ekranınıza koymanızı öneririz."
      },
      step2: {
        title: "Bir Cüzdan Oluşturun veya Cüzdanı İçe Aktarın",
        description: "Cüzdanınızı güvenli bir yöntem kullanarak yedekleyin. Gizli ifadenizi asla başkalarıyla paylaşmayın."
      },
      step3: {
        title: "Tarama düğmesine dokunun",
        description: "Taramayı yaptıktan sonra, cüzdanınızı bağlamak için bir bağlantı istemi belirecektir."
      }
    },
    extension: {
      step1: {
        title: "TokenPocket eklentisini yükleyin",
        description: "Cüzdanınıza daha hızlı erişim için TokenPocket'i görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar",
        description: "Cüzdanınızı güvenli bir yöntemle yedeklediğinizden emin olun. Gizli cümlenizi asla başkalarıyla paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Cüzdanınızı ayarladıktan sonra, tarayıcıyı yenilemekte ve eklentiyi yüklemek için aşağıya tıklayın."
      }
    }
  },
  trust: {
    qr_code: {
      step1: {
        title: "Trust Wallet uygulamasını açın",
        description: "Cüzdanınıza daha hızlı erişim için Trust Wallet'ı ana ekranınıza koyun."
      },
      step2: {
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar",
        description: "Yeni bir cüzdan oluşturun veya mevcut bir tane içe aktarın."
      },
      step3: {
        title: "Ayarlar'da WalletConnect'e dokunun",
        description: "Yeni Bağlantı'yı seçin, ardından QR kodunu tarayın ve bağlanmak için istemi onaylayın."
      }
    },
    extension: {
      step1: {
        title: "Trust Wallet eklentisini yükleyin",
        description: "Tarayıcınızın sağ üst köşesine tıklayın ve kolay erişim için Trust Wallet'i sabitleyin."
      },
      step2: {
        title: "Bir cüzdan oluşturun veya içe aktarın",
        description: "Yeni bir cüzdan oluşturun veya mevcut bir tane içe aktarın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Trust Wallet'ı kurduktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıya tıklayın."
      }
    }
  },
  uniswap: {
    qr_code: {
      step1: {
        title: "Uniswap uygulamasını açın",
        description: "Cüzdanınıza daha hızlı erişim için Uniswap Cüzdanınızı ana ekranınıza ekleyin."
      },
      step2: {
        title: "Cüzdan Oluştur veya İçe Aktar",
        description: "Yeni bir cüzdan oluşturun veya mevcut birini içe aktarın."
      },
      step3: {
        title: "QR ikonuna dokunun ve tarama yapın",
        description: "Ana ekranınızdaki QR simgesine dokunun, kodu tarayın ve bağlanmayı onaylamak için istemi kabul edin."
      }
    }
  },
  zerion: {
    qr_code: {
      step1: {
        title: "Zerion uygulamasını açın",
        description: "Daha hızlı erişim için Zerion'un ana ekranınıza konumlandırmanızı öneririz."
      },
      step2: {
        title: "Bir Cüzdan Oluşturun veya İçe Aktarın",
        description: "Cüzdanınızı güvenli bir yöntem kullanarak yedekleyin. Gizli ifadenizi asla başkalarıyla paylaşmayın."
      },
      step3: {
        title: "Tarama düğmesine basın",
        description: "Taramadan sonra, cüzdanınızı bağlamak için bir bağlantı istemi belirecektir."
      }
    },
    extension: {
      step1: {
        title: "Zerion eklentisini yükleyin",
        description: "Cüzdanınıza daha hızlı erişim için Zerion'u görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Cüzdan Oluştur veya İçe Aktar",
        description: "Cüzdanınızı güvenli bir yöntem kullanarak yedeklemeye emin olun. Gizli ifadenizi asla başkalarıyla paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Cüzdanınızı ayarladıktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıya tıklayın."
      }
    }
  },
  rainbow: {
    qr_code: {
      step1: {
        title: "Rainbow uygulamasını açın",
        description: "Cüzdanınıza daha hızlı erişim için Rainbow'u ana ekranınıza koymanızı öneririz."
      },
      step2: {
        title: "Cüzdan Oluştur veya İçe Aktar",
        description: "Telefonunuzdaki yedekleme özelliğimizi kullanarak cüzdanınızı kolayca yedekleyebilirsiniz."
      },
      step3: {
        title: "Tarama düğmesine dokunun",
        description: "Tarama yaptıktan sonra, cüzdanınızı bağlamanız için bir bağlantı istemi belirecektir."
      }
    }
  },
  enkrypt: {
    extension: {
      step1: {
        description: "Cüzdanınıza daha hızlı erişim sağlamak için Enkrypt Cüzdan'ı görev çubuğunuza sabitlemenizi öneririz.",
        title: "Enkrypt Cüzdan eklentisini yükleyin"
      },
      step2: {
        description: "Cüzdanınızı güvenli bir yöntemle yedeklediğinizden emin olun. Gizli ifadenizi hiç kimseyle paylaşmayın.",
        title: "Bir Cüzdan Oluşturun veya İçe Aktarın"
      },
      step3: {
        description: "Cüzdanınızı kurduktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıya tıklayın.",
        title: "Tarayıcınızı yenileyin"
      }
    }
  },
  frame: {
    extension: {
      step1: {
        description: "Cüzdanınıza daha hızlı erişim sağlamak için Frame'ı görev çubuğunuza sabitlemenizi öneririz.",
        title: "Frame ve eşlik eden uzantıyı yükleyin"
      },
      step2: {
        description: "Cüzdanınızı güvenli bir yöntem kullanarak yedeklediğinizden emin olun. Gizli ifadenizi asla başkasıyla paylaşmayın.",
        title: "Cüzdan Oluştur veya İçe Aktar"
      },
      step3: {
        description: "Cüzdanınızı ayarladıktan sonra, tarayıcıyı yenilemek ve uzantıyı yüklemek için aşağıya tıklayın.",
        title: "Tarayıcınızı yenileyin"
      }
    }
  },
  one_key: {
    extension: {
      step1: {
        title: "OneKey Wallet uzantısını yükleyin",
        description: "Cüzdanınıza daha hızlı erişim için OneKey Wallet'ı görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Cüzdan Oluştur veya İçe Aktar",
        description: "Cüzdanınızı güvenli bir yöntem kullanarak yedeklediğinizden emin olun. Gizli ifadenizi kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Cüzdanınızı kurduktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıya tıklayın."
      }
    }
  },
  phantom: {
    extension: {
      step1: {
        title: "Phantom eklentisini yükleyin",
        description: "Cüzdanınıza daha kolay erişim sağlamak için Phantom'u görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Bir Cüzdan Oluşturun veya İçe Aktarın",
        description: "Cüzdanınızı güvenli bir yöntem kullanarak yedeklediğinizden emin olun. Gizli kurtarma ifadenizi kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Cüzdanınızı ayarladıktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıya tıklayın."
      }
    }
  },
  rabby: {
    extension: {
      step1: {
        title: "Rabby eklentisini yükleyin",
        description: "Cüzdanınıza daha hızlı erişim için Rabby'yi görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Cüzdan Oluştur veya İçe Aktar",
        description: "Cüzdanınızı güvenli bir yöntemle yedeklediğinizden emin olun. Gizli ifadenizi asla başkalarıyla paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Cüzdanınızı kurduktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıdaki düğmeye tıklayın."
      }
    }
  },
  ronin: {
    qr_code: {
      step1: {
        description: "Cüzdanınıza daha hızlı erişim için Ronin Cüzdanını ana ekranınıza koymayı öneririz.",
        title: "Ronin Cüzdan uygulamasını açın"
      },
      step2: {
        description: "Cüzdanınızı güvenli bir yöntemle yedeklemeye emin olun. Gizli ifadenizi asla kimseyle paylaşmayın.",
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar"
      },
      step3: {
        description: "Taradıktan sonra, cüzdanınızı bağlamak için bir bağlantı istemi görünecektir.",
        title: "Tarayıcı düğmesine dokunun"
      }
    },
    extension: {
      step1: {
        description: "Cüzdanınıza daha hızlı erişim için Ronin Cüzdanını görev çubuğunuza sabitlemenizi öneririz.",
        title: "Ronin Cüzdan eklentisini yükleyin"
      },
      step2: {
        description: "Cüzdanınızı güvenli bir yöntemle yedeklemeye emin olun. Gizli ifadenizi asla kimseyle paylaşmayın.",
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar"
      },
      step3: {
        description: "Cüzdanınızı kurduktan sonra, aşağıya tıklayın ve tarayıcıyı yenileyin ve eklentiyi yükleyin.",
        title: "Tarayıcınızı yenileyin"
      }
    }
  },
  ramper: {
    extension: {
      step1: {
        title: "Ramper eklentisini yükleyin",
        description: "Cüzdanınıza daha kolay erişim için Ramper'ı görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Bir Cüzdan Oluşturun",
        description: "Cüzdanınızı güvenli bir yöntemle yedeklemeye emin olun. Gizli ifadenizi asla kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Cüzdanınızı kurduktan sonra, aşağıya tıklayın ve tarayıcıyı yenileyin ve eklentiyi yükleyin."
      }
    }
  },
  safeheron: {
    extension: {
      step1: {
        title: "Core eklentisini yükleyin",
        description: "Cüzdanınıza daha hızlı erişim için Safeheron'u görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Cüzdan Oluştur veya İçe Aktar",
        description: "Cüzdanınızı güvenli bir yöntemle yedeklediğinizden emin olun. Gizli ifadenizi hiç kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Cüzdanınızı ayarladıktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıya tıklayın."
      }
    }
  },
  taho: {
    extension: {
      step1: {
        title: "Taho uzantısını yükleyin",
        description: "Cüzdanınıza daha hızlı erişim için Taho'yu görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Bir Cüzdan Oluşturun veya İçe Aktarın",
        description: "Cüzdanınızı güvenli bir yöntemle yedeklediğinizden emin olun. Gizli ifadenizi hiç kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Cüzdanınızı ayarladıktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıya tıklayın."
      }
    }
  },
  talisman: {
    extension: {
      step1: {
        title: "Talisman eklentisini yükleyin",
        description: "Cüzdanınıza daha hızlı erişim için Talisman'ı görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Ethereum Cüzdanı Oluşturun veya İçe Aktarın",
        description: "Cüzdanınızı güvenli bir yöntemle yedeklediğinizden emin olun. Kurtarma ifadenizi hiç kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Cüzdanınızı ayarladıktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıya tıklayın."
      }
    }
  },
  xdefi: {
    extension: {
      step1: {
        title: "XDEFI Cüzdan eklentisini yükleyin",
        description: "Cüzdanınıza daha hızlı erişim için XDEFI Wallet'ı görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Bir Cüzdan Oluşturun veya İçe Aktarın",
        description: "Cüzdanınızı güvenli bir yöntemle yedeklediğinizden emin olun. Gizli ifadenizi hiç kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Cüzdanınızı ayarladıktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıya tıklayın."
      }
    }
  },
  zeal: {
    extension: {
      step1: {
        title: "Zeal eklentisini yükleyin",
        description: "Cüzdanınıza daha hızlı erişim için Zeal'ı görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar",
        description: "Cüzdanınızı güvenli bir yöntemle yedeklemeye emin olun. Gizli ifadenizi asla kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Cüzdanınızı kurduktan sonra, aşağıya tıklayın ve tarayıcıyı yenileyin ve eklentiyi yükleyin."
      }
    }
  },
  safepal: {
    extension: {
      step1: {
        title: "SafePal Wallet eklentisini yükleyin",
        description: "Tarayıcınızın sağ üst köşesine tıklayın ve kolay erişim için SafePal Wallet'ı sabitleyin."
      },
      step2: {
        title: "Bir cüzdan oluşturun veya içe aktarın",
        description: "Yeni bir cüzdan oluşturun veya mevcut birini içe aktarın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "SafePal Cüzdan'ı kurduktan sonra, tarayıcıyı yenilemek ve eklentiyi yüklemek için aşağıya tıklayın."
      }
    },
    qr_code: {
      step1: {
        title: "SafePal Cüzdan uygulamasını açın",
        description: "SafePal Cüzdan'ı ana ekranınıza koyun, cüzdanınıza daha hızlı erişim için."
      },
      step2: {
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar",
        description: "Yeni bir cüzdan oluşturun veya mevcut birini içe aktarın."
      },
      step3: {
        title: "Ayarlar'da WalletConnect'e dokunun",
        description: "Yeni Bağlantı'yı seçin, ardından QR kodunu tarayın ve bağlantıyı onaylamak için istemi onaylayın."
      }
    }
  },
  desig: {
    extension: {
      step1: {
        title: "Desig eklentisini yükleyin",
        description: "Cüzdanınıza daha kolay erişim sağlamak için Desig'i görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Bir Cüzdan Oluşturun",
        description: "Cüzdanınızı güvenli bir yöntemle yedeklemeye emin olun. Gizli ifadenizi asla kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Cüzdanınızı kurduktan sonra, aşağıya tıklayın ve tarayıcıyı yenileyin ve eklentiyi yükleyin."
      }
    }
  },
  subwallet: {
    extension: {
      step1: {
        title: "SubWallet eklentisini yükleyin",
        description: "Cüzdanınıza daha hızlı erişim için SubWallet'ı görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar",
        description: "Cüzdanınızı güvenli bir yöntemle yedeklediğinizden emin olun. Kurtarma ifadenizi hiç kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Cüzdanınızı kurduktan sonra, aşağıya tıklayın ve tarayıcıyı yenileyin ve eklentiyi yükleyin."
      }
    },
    qr_code: {
      step1: {
        title: "SubWallet uygulamasını açın",
        description: "Daha hızlı erişim için SubWallet'ı ana ekranınıza koymenizi öneririz."
      },
      step2: {
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar",
        description: "Cüzdanınızı güvenli bir yöntemle yedeklemeye emin olun. Gizli ifadenizi asla kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarayıcı düğmesine dokunun",
        description: "Taradıktan sonra, cüzdanınızı bağlamak için bir bağlantı istemi görünecektir."
      }
    }
  },
  clv: {
    extension: {
      step1: {
        title: "CLV Cüzdanı eklentisini yükleyin",
        description: "Cüzdanınıza daha hızlı erişim için CLV Cüzdanını görev çubuğunuza sabitlemenizi öneririz."
      },
      step2: {
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar",
        description: "Cüzdanınızı güvenli bir yöntemle yedeklemeye emin olun. Gizli ifadenizi asla kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarayıcınızı yenileyin",
        description: "Cüzdanınızı kurduktan sonra, aşağıya tıklayın ve tarayıcıyı yenileyin ve eklentiyi yükleyin."
      }
    },
    qr_code: {
      step1: {
        title: "CLV Cüzdan uygulamasını açın",
        description: "Daha hızlı erişim için CLV Cüzdanını ana ekranınıza koymanızı öneririz."
      },
      step2: {
        title: "Cüzdan Oluştur veya Cüzdanı İçe Aktar",
        description: "Cüzdanınızı güvenli bir yöntemle yedeklemeye emin olun. Gizli ifadenizi asla kimseyle paylaşmayın."
      },
      step3: {
        title: "Tarayıcı düğmesine dokunun",
        description: "Taradıktan sonra, cüzdanınızı bağlamak için bir bağlantı istemi görünecektir."
      }
    }
  },
  okto: {
    qr_code: {
      step1: {
        title: "Okto uygulamasını açın",
        description: "Hızlı erişim için Okto'yu ana ekranınıza ekleyin"
      },
      step2: {
        title: "MPC Cüzdanı oluşturun",
        description: "Bir hesap oluşturun ve bir cüzdan oluşturun"
      },
      step3: {
        title: "Ayarlar'da WalletConnect'e dokunun",
        description: "Sağ üstteki Tarama QR simgesine dokunun ve bağlanmak için istemi onaylayın."
      }
    }
  },
  ledger: {
    desktop: {
      step1: {
        title: "Ledger Live uygulamasını açın",
        description: "Daha hızlı erişim için Ledger Live'ı ana ekranınıza koymanızı öneririz."
      },
      step2: {
        title: "Ledger'ınızı kurun",
        description: "Yeni bir Ledger kurun veya mevcut birine bağlanın."
      },
      step3: {
        title: "Bağlan",
        description: "Cüzdanınızı bağlamak için bir bağlantı istemi belirecektir."
      }
    },
    qr_code: {
      step1: {
        title: "Ledger Live uygulamasını açın",
        description: "Daha hızlı erişim için Ledger Live'ı ana ekranınıza koymanızı öneririz."
      },
      step2: {
        title: "Ledger'ınızı kurun",
        description: "Masaüstü uygulama ile senkronize olabilir veya Ledger'ınızı bağlayabilirsiniz."
      },
      step3: {
        title: "Kodu tarayın",
        description: "WalletConnect'e dokunun ve ardından Tarayıcı'ya geçin. Taramadan sonra, cüzdanınızı bağlamak için bir bağlantı istemi belirecektir."
      }
    }
  }
}, z = {
  connect_wallet: li,
  intro: pi,
  sign_in: ci,
  connect: di,
  connect_scan: ui,
  connector_group: mi,
  get: ki,
  get_options: bi,
  get_mobile: gi,
  get_instructions: yi,
  chains: fi,
  profile: hi,
  wallet_connectors: zi
}, vi = {
  label: "Під'єднати гаманець",
  wrong_network: {
    label: "Неправильна мережа"
  }
}, Ci = {
  title: "Що таке гаманець?",
  description: "Гаманець використовується для відправлення, отримання, зберігання та відображення цифрових активів. Це також новий спосіб входу, без необхідності створювати нові облікові записи та паролі на кожному сайті.",
  digital_asset: {
    title: "Дім для ваших цифрових активів",
    description: "Гаманці використовуються для відправлення, отримання, зберігання та відображення цифрових активів, таких як Ethereum та NFT."
  },
  login: {
    title: "Новий спосіб увійти",
    description: "Замість створення нових облікових записів та паролів на кожному сайті, просто під'єднайте ваш гаманець."
  },
  get: {
    label: "Отримати гаманець"
  },
  learn_more: {
    label: "Дізнатися більше"
  }
}, _i = {
  label: "Перевірте свій обліковий запис",
  description: "Щоб завершити підключення, вам потрібно підписати повідомлення у вашому гаманці, щоб підтвердити, що ви є власником цього облікового запису.",
  message: {
    send: "Підписати повідомлення",
    preparing: "Підготовка повідомлення...",
    cancel: "Скасувати",
    preparing_error: "Помилка підготовки повідомлення, будь ласка, спробуйте ще раз!"
  },
  signature: {
    waiting: "Очікування підпису...",
    verifying: "Перевірка підпису...",
    signing_error: "Помилка підпису повідомлення, будь ласка, спробуйте ще раз!",
    verifying_error: "Помилка перевірки підпису, будь ласка, спробуйте ще раз!",
    oops_error: "Ой, щось пішло не так!"
  }
}, wi = {
  label: "Під'єднати",
  title: "Під'єднати гаманець",
  new_to_ethereum: {
    description: "Вперше зіткнулися з гаманцями Ethereum?",
    learn_more: {
      label: "Дізнатися більше"
    }
  },
  learn_more: {
    label: "Дізнатися більше"
  },
  recent: "Недавні",
  status: {
    opening: "Відкриття {wallet}...",
    connecting: "Підключення",
    connect_mobile: "Продовжити в {wallet}",
    not_installed: "{wallet} не встановлено",
    not_available: "{wallet} недоступний",
    confirm: "Підтвердіть з'єднання в розширенні",
    confirm_mobile: "Підтвердіть запит на підключення у гаманці"
  },
  secondary_action: {
    get: {
      description: "Не маєте {wallet}?",
      label: "ОТРИМАТИ"
    },
    install: {
      label: "ВСТАНОВИТИ"
    },
    retry: {
      label: "ПОВТОРИТИ"
    }
  },
  walletconnect: {
    description: {
      full: "Потрібне офіційне модальне вікно WalletConnect?",
      compact: "Потрібне модальне вікно WalletConnect?"
    },
    open: {
      label: "ВІДКРИТИ"
    }
  }
}, xi = {
  title: "Сканувати за допомогою {wallet}",
  fallback_title: "Сканувати за допомогою вашого телефону"
}, Wi = {
  installed: "Встановлено",
  recommended: "Рекомендовано",
  other: "Інші",
  popular: "Популярні",
  more: "Більше",
  others: "Інші"
}, Ai = {
  title: "Отримати гаманець",
  action: {
    label: "ОТРИМАТИ"
  },
  mobile: {
    description: "Мобільний Гаманець"
  },
  extension: {
    description: "Розширення Браузера"
  },
  mobile_and_extension: {
    description: "Мобільний Гаманець та Розширення"
  },
  mobile_and_desktop: {
    description: "Мобільний та Настільний Гаманець"
  },
  looking_for: {
    title: "Не те, що ви шукаєте?",
    mobile: {
      description: "Виберіть гаманець на головному екрані, щоб розпочати роботу з іншим провайдером гаманця."
    },
    desktop: {
      compact_description: "Виберіть гаманець на головному екрані, щоб розпочати роботу з іншим провайдером гаманця.",
      wide_description: "Виберіть гаманець зліва, щоб розпочати роботу з іншим провайдером гаманця."
    }
  }
}, qi = {
  title: "Розпочніть з {wallet}",
  short_title: "Отримати {wallet}",
  mobile: {
    title: "{wallet} для Мобільних",
    description: "Використовуйте мобільний гаманець для вивчення світу Ethereum.",
    download: {
      label: "Отримати додаток"
    }
  },
  extension: {
    title: "{wallet} для {browser}",
    description: "Отримайте доступ до свого гаманця прямо з улюбленого веб-браузера.",
    download: {
      label: "Додати до {browser}"
    }
  },
  desktop: {
    title: "{wallet} для {platform}",
    description: "Отримайте доступ до вашого гаманця нативно з потужного настільного комп'ютера.",
    download: {
      label: "Додати до {platform}"
    }
  }
}, Ri = {
  title: "Встановити {wallet}",
  description: "Скануйте за допомогою телефону, щоб завантажити на iOS або Android",
  continue: {
    label: "Продовжити"
  }
}, Bi = {
  mobile: {
    connect: {
      label: "Під'єднати"
    },
    learn_more: {
      label: "Дізнатися більше"
    }
  },
  extension: {
    refresh: {
      label: "Оновити"
    },
    learn_more: {
      label: "Дізнатися більше"
    }
  },
  desktop: {
    connect: {
      label: "Під'єднати"
    },
    learn_more: {
      label: "Дізнатися більше"
    }
  }
}, Ti = {
  title: "Перемкнути мережу",
  wrong_network: "Виявлено неправильну мережу, змініть її або від'єднайтеся, щоб продовжити.",
  confirm: "Підтвердіть у гаманці",
  switching_not_supported: "Ваш гаманець не підтримує зміну мереж з {appName}. Спробуйте змінити мережу безпосередньо через ваш гаманець.",
  switching_not_supported_fallback: "Ваш гаманець не підтримує зміну мереж з цього додатку. Спробуйте змінити мережу безпосередньо через ваш гаманець.",
  disconnect: "Від'єднатися",
  connected: "Під'єднано"
}, Ii = {
  disconnect: {
    label: "Від'єднатися"
  },
  copy_address: {
    label: "Скопіювати адресу",
    copied: "Скопійовано!"
  },
  explorer: {
    label: "Переглянути більше в експлорері"
  },
  transactions: {
    description: "{appName} транзакції з'являться тут...",
    description_fallback: "Тут з'являться ваші транзакції...",
    recent: {
      title: "Останні Транзакції"
    },
    clear: {
      label: "Очистити Все"
    }
  }
}, Oi = {
  argent: {
    qr_code: {
      step1: {
        description: "Додайте Argent на домашній екран для швидшого доступу до вашого гаманця.",
        title: "Відкрийте додаток Argent"
      },
      step2: {
        description: "Створіть гаманець та ім'я користувача, або імпортуйте існуючий гаманець.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця.",
        title: "Натисніть кнопку 'Сканувати QR-код'"
      }
    }
  },
  bifrost: {
    qr_code: {
      step1: {
        description: "Ми рекомендуємо додати Bifrost Wallet на ваш домашній екран для швидшого доступу.",
        title: "Відкрийте додаток Bifrost Wallet"
      },
      step2: {
        description: "Створіть або імпортуйте гаманець, використовуючи вашу фразу для відновлення.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця.",
        title: "Натисніть кнопку сканування"
      }
    }
  },
  bitget: {
    qr_code: {
      step1: {
        description: "Ми рекомендуємо розмістити Bitget Wallet на вашому домашньому екрані для швидшого доступу.",
        title: "Відкрийте додаток Bitget Wallet"
      },
      step2: {
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця.",
        title: "Натисніть кнопку сканування"
      }
    },
    extension: {
      step1: {
        description: "Ми рекомендуємо закріпити Bitget Wallet на вашій панелі задач для швидшого доступу до вашого гаманця.",
        title: "Встановіть розширення Bitget Wallet"
      },
      step2: {
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення.",
        title: "Оновіть ваш браузер"
      }
    }
  },
  bitski: {
    extension: {
      step1: {
        description: "Ми рекомендуємо закріпити Bitski на панелі задач для швидшого доступу до вашого гаманця.",
        title: "Встановіть розширення Bitski"
      },
      step2: {
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення.",
        title: "Оновіть ваш браузер"
      }
    }
  },
  bloom: {
    desktop: {
      step1: {
        title: "Відкрийте додаток Bloom Wallet",
        description: "Ми рекомендуємо розмістити Bloom Wallet на головному екрані для швидшого доступу."
      },
      step2: {
        description: "Створіть або імпортуйте гаманець, використовуючи вашу фразу для відновлення.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після того, як у вас буде гаманець, натисніть 'Підключитися', щоб підключитися через Bloom. На екрані додатка з'явиться запит на підтвердження з'єднання.",
        title: "Натисніть 'Підключитися'"
      }
    },
    qr_code: {
      step1: {
        title: "Відкрийте додаток Bloom Wallet",
        description: "Ми рекомендуємо розмістити Bloom Wallet на головному екрані для швидшого доступу."
      },
      step2: {
        description: "Створіть або імпортуйте гаманець, використовуючи вашу фразу для відновлення.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після того, як у вас буде гаманець, натисніть 'Підключитися', щоб підключитися через Bloom. На екрані додатка з'явиться запит на підтвердження з'єднання.",
        title: "Натисніть 'Підключитися'"
      }
    }
  },
  coin98: {
    qr_code: {
      step1: {
        description: "Ми рекомендуємо розмістити Coin98 Wallet на домашньому екрані для швидшого доступу до вашого гаманця.",
        title: "Відкрийте додаток Coin98 Wallet"
      },
      step2: {
        description: "Ви можете легко зробити резервну копію вашого гаманця, використовуючи нашу функцію резервного копіювання на вашому телефоні.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця.",
        title: "Натисніть кнопку WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "Клацніть у верхньому правому куті вашого браузера та закріпіть Coin98 Wallet для зручного доступу.",
        title: "Встановіть розширення Coin98 Wallet"
      },
      step2: {
        description: "Створіть новий гаманець або імпортуйте існуючий.",
        title: "Створіть або імпортуйте гаманець"
      },
      step3: {
        description: "Після налаштування гаманця Coin98 натисніть нижче, щоб оновити браузер і завантажити розширення.",
        title: "Оновіть ваш браузер"
      }
    }
  },
  coinbase: {
    qr_code: {
      step1: {
        description: "Ми рекомендуємо додати Coinbase Wallet на домашній екран для швидшого доступу.",
        title: "Відкрийте додаток Coinbase Wallet"
      },
      step2: {
        description: "Ви можете легко створити резервну копію гаманця за допомогою функції хмарного резервного копіювання.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця.",
        title: "Натисніть кнопку сканування"
      }
    },
    extension: {
      step1: {
        description: "Ми рекомендуємо закріпити Coinbase Wallet на панелі задач для швидшого доступу до вашого гаманця.",
        title: "Встановіть розширення Coinbase Wallet"
      },
      step2: {
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення.",
        title: "Оновіть ваш браузер"
      }
    }
  },
  core: {
    qr_code: {
      step1: {
        description: "Ми рекомендуємо додати Core на домашній екран для швидшого доступу до вашого гаманця.",
        title: "Відкрийте додаток Core"
      },
      step2: {
        description: "Ви можете легко зробити резервну копію вашого гаманця, використовуючи нашу функцію резервного копіювання на вашому телефоні.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця.",
        title: "Натисніть кнопку WalletConnect"
      }
    },
    extension: {
      step1: {
        description: "Ми рекомендуємо закріпити Core на панелі задач для швидшого доступу до вашого гаманця.",
        title: "Встановіть розширення Core"
      },
      step2: {
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення.",
        title: "Оновіть ваш браузер"
      }
    }
  },
  fox: {
    qr_code: {
      step1: {
        description: "Ми рекомендуємо розмістити FoxWallet на головному екрані для швидшого доступу.",
        title: "Відкрийте додаток FoxWallet"
      },
      step2: {
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця.",
        title: "Натисніть кнопку сканування"
      }
    }
  },
  frontier: {
    qr_code: {
      step1: {
        description: "Ми рекомендуємо розмістити Frontier Wallet на головному екрані для швидшого доступу.",
        title: "Відкрийте додаток Frontier Wallet"
      },
      step2: {
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця.",
        title: "Натисніть кнопку сканування"
      }
    },
    extension: {
      step1: {
        description: "Ми рекомендуємо закріпити Frontier Wallet на панелі задач для швидкого доступу до вашого гаманця.",
        title: "Встановіть розширення Frontier Wallet"
      },
      step2: {
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення.",
        title: "Оновіть ваш браузер"
      }
    }
  },
  im_token: {
    qr_code: {
      step1: {
        title: "Відкрийте додаток imToken",
        description: "Розмістіть додаток imToken на головному екрані для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Створіть новий гаманець або імпортуйте існуючий."
      },
      step3: {
        title: "Натисніть на іконку сканера в правому верхньому куті",
        description: "Виберіть 'Нове з'єднання', потім відскануйте QR-код і підтвердіть запит на підключення."
      }
    }
  },
  kresus: {
    qr_code: {
      step1: {
        title: "Відкрийте додаток Kresus Wallet",
        description: "Додайте Kresus Wallet на домашній екран для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Створіть новий гаманець або імпортуйте існуючий."
      },
      step3: {
        title: "Натисніть на іконку QR та відскануйте",
        description: "Торкніться іконки QR на вашому домашньому екрані, відскануйте код та підтвердіть запит на підключення."
      }
    }
  },
  metamask: {
    qr_code: {
      step1: {
        title: "Відкрийте додаток MetaMask",
        description: "Ми рекомендуємо розмістити MetaMask на головному екрані для швидкого доступу."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Натисніть кнопку сканування",
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця."
      }
    },
    extension: {
      step1: {
        title: "Встановіть розширення MetaMask",
        description: "Ми рекомендуємо закріпити MetaMask на панелі задач для швидкого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    }
  },
  okx: {
    qr_code: {
      step1: {
        title: "Відкрийте додаток OKX Wallet",
        description: "Ми рекомендуємо розмістити OKX Wallet на головному екрані для швидкого доступу."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Натисніть кнопку сканування",
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця."
      }
    },
    extension: {
      step1: {
        title: "Встановіть розширення OKX Wallet",
        description: "Ми рекомендуємо закріпити OKX Wallet на панелі задач для швидкого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    }
  },
  omni: {
    qr_code: {
      step1: {
        title: "Відкрийте додаток Omni",
        description: "Додайте Omni на головний екран для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Створіть новий гаманець або імпортуйте існуючий."
      },
      step3: {
        title: "Натисніть на іконку QR та відскануйте",
        description: "Натисніть на іконку QR на вашому головному екрані, відскануйте код та підтвердіть запит для підключення."
      }
    }
  },
  token_pocket: {
    qr_code: {
      step1: {
        title: "Відкрийте додаток TokenPocket",
        description: "Ми рекомендуємо розмістити TokenPocket на вашому головному екрані для швидшого доступу."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Натисніть кнопку сканування",
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця."
      }
    },
    extension: {
      step1: {
        title: "Встановіть розширення TokenPocket",
        description: "Ми рекомендуємо прикріпити TokenPocket до вашої панелі задач для швидкого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    }
  },
  trust: {
    qr_code: {
      step1: {
        title: "Відкрийте додаток Trust Wallet",
        description: "Розмістіть Trust Wallet на вашому головному екрані для швидшого доступу до гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Створіть новий гаманець або імпортуйте існуючий."
      },
      step3: {
        title: "Натисніть WalletConnect у Налаштуваннях",
        description: "Виберіть 'Нове з'єднання', потім відскануйте QR-код і підтвердіть запит на підключення."
      }
    },
    extension: {
      step1: {
        title: "Встановіть розширення Trust Wallet",
        description: "Натисніть у верхньому правому куті вашого браузера та закріпіть Trust Wallet для зручного доступу."
      },
      step2: {
        title: "Створіть або імпортуйте гаманець",
        description: "Створіть новий гаманець або імпортуйте існуючий."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування Trust Wallet натисніть нижче, щоб оновити браузер та завантажити розширення."
      }
    }
  },
  uniswap: {
    qr_code: {
      step1: {
        title: "Відкрийте додаток Uniswap",
        description: "Додайте Uniswap Wallet на свій домашній екран для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Створіть новий гаманець або імпортуйте існуючий."
      },
      step3: {
        title: "Натисніть на іконку QR та відскануйте",
        description: "Торкніться іконки QR на вашому домашньому екрані, відскануйте код та підтвердіть запит на підключення."
      }
    }
  },
  zerion: {
    qr_code: {
      step1: {
        title: "Відкрийте додаток Zerion",
        description: "Ми рекомендуємо розмістити Zerion на вашому домашньому екрані для швидшого доступу."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Натисніть кнопку сканування",
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця."
      }
    },
    extension: {
      step1: {
        title: "Встановіть розширення Zerion",
        description: "Ми рекомендуємо закріпити Zerion на вашій панелі завдань для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    }
  },
  rainbow: {
    qr_code: {
      step1: {
        title: "Відкрийте додаток Rainbow",
        description: "Ми рекомендуємо додати Rainbow на домашній екран для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Ви можете легко зробити резервну копію вашого гаманця, використовуючи нашу функцію резервного копіювання на вашому телефоні."
      },
      step3: {
        title: "Натисніть кнопку сканування",
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця."
      }
    }
  },
  enkrypt: {
    extension: {
      step1: {
        description: "Ми рекомендуємо закріпити Enkrypt Wallet на панелі задач для швидшого доступу до вашого гаманця.",
        title: "Встановіть розширення Enkrypt Wallet"
      },
      step2: {
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення.",
        title: "Оновіть ваш браузер"
      }
    }
  },
  frame: {
    extension: {
      step1: {
        description: "Ми рекомендуємо закріпити Frame на панелі задач для швидшого доступу до вашого гаманця.",
        title: "Встановіть Frame та супутнє розширення"
      },
      step2: {
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення.",
        title: "Оновіть ваш браузер"
      }
    }
  },
  one_key: {
    extension: {
      step1: {
        title: "Встановіть розширення OneKey Wallet",
        description: "Ми рекомендуємо закріпити OneKey Wallet на панелі задач для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    }
  },
  phantom: {
    extension: {
      step1: {
        title: "Встановіть розширення Phantom",
        description: "Ми рекомендуємо закріпити Phantom на панелі задач для легшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою відновлення з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    }
  },
  rabby: {
    extension: {
      step1: {
        title: "Встановіть розширення Rabby",
        description: "Ми рекомендуємо закріпити Rabby на панелі задач для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    }
  },
  ronin: {
    qr_code: {
      step1: {
        description: "Ми рекомендуємо розмістити Ronin Wallet на домашньому екрані для швидшого доступу.",
        title: "Відкрийте додаток Ronin Wallet"
      },
      step2: {
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця.",
        title: "Натисніть кнопку сканування"
      }
    },
    extension: {
      step1: {
        description: "Ми рекомендуємо закріпити Ronin Wallet на панелі задач для швидшого доступу до вашого гаманця.",
        title: "Встановіть розширення Ronin Wallet"
      },
      step2: {
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось.",
        title: "Створити або Імпортувати Гаманець"
      },
      step3: {
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення.",
        title: "Оновіть ваш браузер"
      }
    }
  },
  ramper: {
    extension: {
      step1: {
        title: "Встановіть розширення Ramper",
        description: "Ми рекомендуємо закріпити Ramper на панелі задач для легшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створіть гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    }
  },
  safeheron: {
    extension: {
      step1: {
        title: "Встановіть розширення Core",
        description: "Ми рекомендуємо закріпити Safeheron на панелі задач для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    }
  },
  taho: {
    extension: {
      step1: {
        title: "Встановіть розширення Taho",
        description: "Ми рекомендуємо закріпити Taho на панелі задач для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    }
  },
  talisman: {
    extension: {
      step1: {
        title: "Встановіть розширення Talisman",
        description: "Ми рекомендуємо закріпити Talisman на панелі задач для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створіть або Імпортуйте Ethereum гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться своєю фразою для відновлення з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    }
  },
  xdefi: {
    extension: {
      step1: {
        title: "Встановіть розширення гаманця XDEFI",
        description: "Ми рекомендуємо закріпити гаманець XDEFI на панелі задач для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    }
  },
  zeal: {
    extension: {
      step1: {
        title: "Встановіть розширення Zeal",
        description: "Ми рекомендуємо закріпити Zeal на панелі задач для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    }
  },
  safepal: {
    extension: {
      step1: {
        title: "Встановіть розширення SafePal Wallet",
        description: "Клацніть у верхньому правому куті вашого браузера та закріпіть SafePal Wallet для зручного доступу."
      },
      step2: {
        title: "Створіть або імпортуйте гаманець",
        description: "Створіть новий гаманець або імпортуйте існуючий."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування SafePal Wallet натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    },
    qr_code: {
      step1: {
        title: "Відкрийте додаток SafePal Wallet",
        description: "Додайте SafePal Wallet на домашній екран для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Створіть новий гаманець або імпортуйте існуючий."
      },
      step3: {
        title: "Натисніть WalletConnect у Налаштуваннях",
        description: "Виберіть 'Нове з'єднання', потім відскануйте QR-код і підтвердіть запит на підключення."
      }
    }
  },
  desig: {
    extension: {
      step1: {
        title: "Встановіть розширення Desig",
        description: "Ми рекомендуємо закріпити Desig на панелі задач для легшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створіть гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    }
  },
  subwallet: {
    extension: {
      step1: {
        title: "Встановіть розширення SubWallet",
        description: "Ми рекомендуємо закріпити SubWallet на панелі задач для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться своєю фразою для відновлення з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    },
    qr_code: {
      step1: {
        title: "Відкрийте додаток SubWallet",
        description: "Ми рекомендуємо розмістити SubWallet на головному екрані для швидшого доступу."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Натисніть кнопку сканування",
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця."
      }
    }
  },
  clv: {
    extension: {
      step1: {
        title: "Встановіть розширення CLV Wallet",
        description: "Ми рекомендуємо закріпити CLV Wallet на панелі задач для швидшого доступу до вашого гаманця."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Оновіть ваш браузер",
        description: "Після налаштування вашого гаманця, натисніть нижче, щоб оновити браузер і завантажити розширення."
      }
    },
    qr_code: {
      step1: {
        title: "Відкрийте додаток CLV Wallet",
        description: "Ми рекомендуємо розмістити CLV Wallet на головному екрані для швидшого доступу."
      },
      step2: {
        title: "Створити або Імпортувати Гаманець",
        description: "Не забудьте зробити резервну копію вашого гаманця за допомогою безпечного методу. Ніколи не діліться вашою секретною фразою з кимось."
      },
      step3: {
        title: "Натисніть кнопку сканування",
        description: "Після сканування з'явиться запит на під'єднання для підключення вашого гаманця."
      }
    }
  },
  okto: {
    qr_code: {
      step1: {
        title: "Відкрийте додаток Okto",
        description: "Додайте Okto на домашній екран для швидкого доступу"
      },
      step2: {
        title: "Створіть MPC гаманець",
        description: "Створіть обліковий запис та згенеруйте гаманець"
      },
      step3: {
        title: "Натисніть WalletConnect у Налаштуваннях",
        description: "Натисніть на іконку Сканування QR-коду в правому верхньому куті та підтвердіть запит для підключення."
      }
    }
  },
  ledger: {
    desktop: {
      step1: {
        title: "Відкрийте додаток Ledger Live",
        description: "Рекомендуємо розмістити Ledger Live на головному екрані для швидшого доступу."
      },
      step2: {
        title: "Налаштуйте ваш Ledger",
        description: "Налаштуйте новий Ledger або під'єднайте існуючий."
      },
      step3: {
        title: "Під'єднати",
        description: "З'явиться запит на підключення для того, щоб ви могли під'єднати свій гаманець."
      }
    },
    qr_code: {
      step1: {
        title: "Відкрийте додаток Ledger Live",
        description: "Рекомендуємо розмістити Ledger Live на головному екрані для швидшого доступу."
      },
      step2: {
        title: "Налаштуйте ваш Ledger",
        description: "Ви можете синхронізувати з десктопним додатком або підключити ваш Ledger."
      },
      step3: {
        title: "Сканувати код",
        description: "Натисніть WalletConnect, потім перейдіть до сканера. Після сканування з'явиться запит на підключення для того, щоб ви могли під'єднати свій гаманець."
      }
    }
  }
}, v = {
  connect_wallet: vi,
  intro: Ci,
  sign_in: _i,
  connect: wi,
  connect_scan: xi,
  connector_group: Wi,
  get: Ai,
  get_options: qi,
  get_mobile: Ri,
  get_instructions: Bi,
  chains: Ti,
  profile: Ii,
  wallet_connectors: Oi
}, Si = {
  label: "连接钱包",
  wrong_network: {
    label: "错误的网络"
  }
}, Pi = {
  title: "什么是钱包？",
  description: "钱包用于发送、接收、存储和显示数字资产。它也是一种新型的登录方式，无需在每个网站上创建新账户和密码。",
  digital_asset: {
    title: "您的数字资产之家",
    description: "钱包用于发送、接收、存储和显示像以太坊和NFT这样的数字资产。"
  },
  login: {
    title: "一种新的登录方式",
    description: "而不是在每个网站上创建新的账户和密码，只需连接您的钱包。"
  },
  get: {
    label: "获取钱包"
  },
  learn_more: {
    label: "了解更多"
  }
}, Ni = {
  label: "验证您的账户",
  description: "为了完成连接，您必须在钱包中签署一条消息，以验证您是此账户的所有者。",
  message: {
    send: "发送消息",
    preparing: "准备消息中...",
    cancel: "取消",
    preparing_error: "准备消息时出错，请重试！"
  },
  signature: {
    waiting: "等待签名...",
    verifying: "正在验证签名...",
    signing_error: "签署消息时出错，请重试！",
    verifying_error: "验证签名时出错，请重试！",
    oops_error: "哎呀，出了点问题！"
  }
}, Li = {
  label: "连接",
  title: "连接钱包",
  new_to_ethereum: {
    description: "对以太坊钱包不熟悉？",
    learn_more: {
      label: "了解更多"
    }
  },
  learn_more: {
    label: "了解更多"
  },
  recent: "近期",
  status: {
    opening: "正在打开 {wallet}...",
    connecting: "正在连接",
    connect_mobile: "在 {wallet}中继续",
    not_installed: "{wallet} 尚未安装",
    not_available: "{wallet} 不可用",
    confirm: "在扩展中确认连接",
    confirm_mobile: "在钱包中接受连接请求"
  },
  secondary_action: {
    get: {
      description: "没有 {wallet}吗？",
      label: "获取"
    },
    install: {
      label: "安装"
    },
    retry: {
      label: "重试"
    }
  },
  walletconnect: {
    description: {
      full: "需要官方的 WalletConnect 弹窗吗？",
      compact: "需要 WalletConnect 弹窗吗？"
    },
    open: {
      label: "打开"
    }
  }
}, Di = {
  title: "使用 {wallet}扫描",
  fallback_title: "使用您的手机扫描"
}, Ki = {
  installed: "已安装",
  recommended: "推荐",
  other: "其他",
  popular: "流行",
  more: "更多",
  others: "其他的"
}, Ei = {
  title: "获取一个钱包",
  action: {
    label: "获取"
  },
  mobile: {
    description: "移动钱包"
  },
  extension: {
    description: "浏览器扩展"
  },
  mobile_and_extension: {
    description: "移动钱包和扩展"
  },
  mobile_and_desktop: {
    description: "移动和桌面钱包"
  },
  looking_for: {
    title: "不是你要找的吗？",
    mobile: {
      description: "在主屏幕上选择一个钱包，以开始使用不同的钱包提供商。"
    },
    desktop: {
      compact_description: "在主屏幕上选择一个钱包，以开始使用不同的钱包提供商。",
      wide_description: "在左侧选择一个钱包，以开始使用不同的钱包提供商。"
    }
  }
}, Mi = {
  title: "开始使用 {wallet}",
  short_title: "获取 {wallet}",
  mobile: {
    title: "{wallet} 用于移动",
    description: "使用移动钱包探索以太坊的世界。",
    download: {
      label: "获取应用"
    }
  },
  extension: {
    title: "{wallet} 为 {browser}",
    description: "从您最喜欢的网络浏览器直接访问您的钱包。",
    download: {
      label: "添加到 {browser}"
    }
  },
  desktop: {
    title: "{wallet} 对于 {platform}",
    description: "从您强大的桌面原生访问您的钱包。",
    download: {
      label: "添加到 {platform}"
    }
  }
}, $i = {
  title: "安装 {wallet}",
  description: "用手机扫描下载 iOS 或 Android",
  continue: {
    label: "继续"
  }
}, Fi = {
  mobile: {
    connect: {
      label: "连接"
    },
    learn_more: {
      label: "了解更多"
    }
  },
  extension: {
    refresh: {
      label: "刷新"
    },
    learn_more: {
      label: "了解更多"
    }
  },
  desktop: {
    connect: {
      label: "连接"
    },
    learn_more: {
      label: "了解更多"
    }
  }
}, Qi = {
  title: "切换网络",
  wrong_network: "检测到错误的网络，请切换或断开连接以继续。",
  confirm: "在钱包中确认",
  switching_not_supported: "您的钱包不支持从 {appName}切换网络。请尝试从您的钱包内部切换网络。",
  switching_not_supported_fallback: "您的钱包不支持从此应用切换网络。尝试从您的钱包内切换网络。",
  disconnect: "断开连接",
  connected: "已连接"
}, ji = {
  disconnect: {
    label: "断开连接"
  },
  copy_address: {
    label: "复制地址",
    copied: "已复制！"
  },
  explorer: {
    label: "在浏览器上查看更多"
  },
  transactions: {
    description: "{appName} 交易将会出现在这里...",
    description_fallback: "您的交易将会出现在这里...",
    recent: {
      title: "最近交易"
    },
    clear: {
      label: "清除全部"
    }
  }
}, Ui = {
  argent: {
    qr_code: {
      step1: {
        description: "将 Argent 放到您的主屏幕上，以便更快地访问您的钱包。",
        title: "打开 Argent 应用"
      },
      step2: {
        description: "创建钱包和用户名，或导入现有钱包。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "在您扫描后，将出现连接提示，供您连接您的钱包。",
        title: "点击扫描二维码按钮"
      }
    }
  },
  bifrost: {
    qr_code: {
      step1: {
        description: "我们建议将Bifrost Wallet放在您的主屏幕上，以便更快地访问。",
        title: "打开 Bifrost Wallet 应用"
      },
      step2: {
        description: "使用恢复短语创建或导入钱包。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "在您扫描后，将出现连接提示，供您连接您的钱包。",
        title: "点击扫描按钮"
      }
    }
  },
  bitget: {
    qr_code: {
      step1: {
        description: "我们建议您将Bitget钱包添加到主屏幕，以便更快地访问。",
        title: "打开Bitget钱包应用程序"
      },
      step2: {
        description: "务必使用安全的方法备份您的钱包。决不与任何人分享您的秘密短语。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "扫描后，将出现一个连接提示，供您连接您的钱包。",
        title: "点击扫描按钮"
      }
    },
    extension: {
      step1: {
        description: "我们建议您将Bitget钱包固定在任务栏，以便更快地访问您的钱包。",
        title: "安装Bitget Wallet扩展"
      },
      step2: {
        description: "确保使用安全的方式备份您的钱包。绝不与任何人分享您的秘密短语。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "设置钱包后，点击下方刷新浏览器并加载扩展。",
        title: "刷新您的浏览器"
      }
    }
  },
  bitski: {
    extension: {
      step1: {
        description: "我们建议您将Bitski固定在任务栏上，以便更快地访问您的钱包。",
        title: "安装Bitski扩展"
      },
      step2: {
        description: "请确保用安全的方法备份您的钱包。绝不与任何人共享您的秘密短语。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "设置完您的钱包后，点击下方以刷新浏览器并加载扩展程序。",
        title: "刷新您的浏览器"
      }
    }
  },
  bloom: {
    desktop: {
      step1: {
        title: "打开 Bloom 钱包应用",
        description: "我们建议将 Bloom 钱包添加到主屏幕上，以便更快地访问。"
      },
      step2: {
        description: "使用恢复短语创建或导入钱包。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "拥有钱包后，点击连接以通过 Bloom 连接。应用中会出现一个连接提示，供您确认连接。",
        title: "点击连接"
      }
    },
    qr_code: {
      step1: {
        title: "打开 Bloom 钱包应用",
        description: "我们建议将 Bloom 钱包添加到主屏幕上，以便更快地访问。"
      },
      step2: {
        description: "使用恢复短语创建或导入钱包。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "拥有钱包后，点击连接以通过 Bloom 连接。应用中会出现一个连接提示，供您确认连接。",
        title: "点击连接"
      }
    }
  },
  coin98: {
    qr_code: {
      step1: {
        description: "我们建议将Coin98钱包放在您的主屏幕上，以便更快地访问您的钱包。",
        title: "打开Coin98钱包应用程序"
      },
      step2: {
        description: "您可以使用我们的手机上的备份功能轻松备份您的钱包。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "扫描后，将出现一个连接提示，让您连接您的钱包。",
        title: "点击WalletConnect按钮"
      }
    },
    extension: {
      step1: {
        description: "点击浏览器右上角并固定Coin98钱包，以便轻松访问。",
        title: "安装Coin98钱包扩展"
      },
      step2: {
        description: "创建新钱包或导入现有钱包。",
        title: "创建或导入钱包。"
      },
      step3: {
        description: "设置完成Coin98 钱包后，单击下方以刷新浏览器并加载扩展程序。",
        title: "刷新您的浏览器"
      }
    }
  },
  coinbase: {
    qr_code: {
      step1: {
        description: "我们建议您把Coinbase钱包放到主屏幕上，以便更快地访问。",
        title: "打开Coinbase钱包应用"
      },
      step2: {
        description: "您可以轻松地使用云备份功能备份您的钱包。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "扫描后，将出现连接提示，供您连接您的钱包。",
        title: "点击扫描按钮"
      }
    },
    extension: {
      step1: {
        description: "我们建议您将Coinbase钱包固定在任务栏上，以便更快地访问您的钱包。",
        title: "安装Coinbase钱包扩展"
      },
      step2: {
        description: "务必使用安全的方法备份您的钱包。永远不要与任何人分享您的秘密短语。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "设置好钱包后，点击下方以刷新浏览器并加载扩展。",
        title: "刷新您的浏览器"
      }
    }
  },
  core: {
    qr_code: {
      step1: {
        description: "我们建议您将Core添加到主屏幕，以便更快地访问您的钱包。",
        title: "打开Core应用程序"
      },
      step2: {
        description: "您可以使用我们的手机备份功能轻松备份您的钱包。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "扫描后，将出现连接提示，让您连接您的钱包。",
        title: "点击WalletConnect按钮"
      }
    },
    extension: {
      step1: {
        description: "我们建议将 Core 固定到任务栏，以便更快地访问您的钱包。",
        title: "安装 Core 扩展"
      },
      step2: {
        description: "一定要使用安全的方法备份您的钱包。切勿与任何人分享您的秘密短语。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "设置好钱包后，点击下方以刷新浏览器并加载扩展。",
        title: "刷新你的浏览器"
      }
    }
  },
  fox: {
    qr_code: {
      step1: {
        description: "我们建议您将 FoxWallet 放到主屏幕上，以便更快的访问。",
        title: "打开 FoxWallet 应用"
      },
      step2: {
        description: "确保使用安全的方法备份您的钱包。永远不要与任何人共享您的秘密短语。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "扫描后，将出现连接提示，让您连接您的钱包。",
        title: "点击扫描按钮"
      }
    }
  },
  frontier: {
    qr_code: {
      step1: {
        description: "我们建议将 Frontier 钱包放在您的主屏幕上，以便更快地访问。",
        title: "打开 Frontier 钱包应用"
      },
      step2: {
        description: "确保使用安全的方法备份您的钱包。永远不要与任何人共享您的秘密短语。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "扫描后，将出现连接提示，让您连接您的钱包。",
        title: "点击扫描按钮"
      }
    },
    extension: {
      step1: {
        description: "我们建议您将Frontier钱包固定到任务栏，以便更快地访问您的钱包。",
        title: "安装Frontier钱包扩展"
      },
      step2: {
        description: "确保使用安全的方法备份您的钱包。永远不要与任何人分享您的秘密短语。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "设置完成钱包后，点击下方刷新浏览器并加载扩展。",
        title: "刷新你的浏览器"
      }
    }
  },
  im_token: {
    qr_code: {
      step1: {
        title: "打开imToken应用",
        description: "将imToken应用放在您的主屏幕上，以更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "创建新钱包或导入已有的钱包。"
      },
      step3: {
        title: "点击右上角的扫描图标",
        description: "选择新连接，然后扫描二维码并确认提示以进行连接。"
      }
    }
  },
  kresus: {
    qr_code: {
      step1: {
        title: "打开 Kresus 钱包应用",
        description: "将Kresus钱包添加到主屏幕，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "创建新钱包或导入现有钱包。"
      },
      step3: {
        title: "点击QR图标并扫描",
        description: "在您的主屏幕上点击QR图标，扫描代码并确认提示以进行连接。"
      }
    }
  },
  metamask: {
    qr_code: {
      step1: {
        title: "打开 MetaMask 应用",
        description: "我们建议将 MetaMask 放在您的主屏幕上，以便更快地访问。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "确保使用安全的方法备份您的钱包。永远不要与任何人分享你的秘密短语。"
      },
      step3: {
        title: "点击扫描按钮",
        description: "扫描后，将出现连接提示，以便你连接你的钱包。"
      }
    },
    extension: {
      step1: {
        title: "安装 MetaMask 扩展",
        description: "我们建议将MetaMask固定在您的任务栏上，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "请务必使用安全的方法备份您的钱包。切勿与任何人分享您的秘密短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "一旦您设置好您的钱包，点击下面刷新浏览器并加载扩展。"
      }
    }
  },
  okx: {
    qr_code: {
      step1: {
        title: "打开OKX钱包应用程序",
        description: "我们建议将OKX钱包放在您的主屏幕上，以便更快地访问。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "务必使用安全的方法备份您的钱包。千万不要与任何人分享您的秘密短语。"
      },
      step3: {
        title: "点击扫描按钮",
        description: "扫描后，将出现一个连接提示，让您连接您的钱包。"
      }
    },
    extension: {
      step1: {
        title: "安装 OKX 钱包扩展",
        description: "我们建议将 OKX 钱包固定到您的任务栏，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "务必使用安全的方法备份您的钱包。千万不要与任何人分享您的秘密短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "一旦你设置好你的钱包，点击下方刷新浏览器并加载扩展。"
      }
    }
  },
  omni: {
    qr_code: {
      step1: {
        title: "打开Omni应用",
        description: "将Omni添加到你的主屏幕，以便更快地访问你的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "创建新的钱包或导入现有的钱包。"
      },
      step3: {
        title: "点击QR图标并扫描",
        description: "点击首页的二维码图标，扫描代码并确认提示以连接。"
      }
    }
  },
  token_pocket: {
    qr_code: {
      step1: {
        title: "打开TokenPocket应用",
        description: "我们建议将TokenPocket放在您的主屏幕上以便更快的访问。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "一定要使用安全的方法备份您的钱包。切勿与任何人分享您的秘密短语。"
      },
      step3: {
        title: "点击扫描按钮",
        description: "扫描后，将出现连接提示，供您连接钱包。"
      }
    },
    extension: {
      step1: {
        title: "安装TokenPocket扩展",
        description: "我们建议将TokenPocket固定到任务栏，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入一个钱包",
        description: "一定要使用安全的方法备份您的钱包。绝对不要与任何人分享您的秘密短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "设置好您的钱包后，点击下面刷新浏览器并加载扩展。"
      }
    }
  },
  trust: {
    qr_code: {
      step1: {
        title: "打开Trust Wallet应用",
        description: "将Trust Wallet放在主屏幕上，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入一个钱包",
        description: "创建新的钱包或导入现有的钱包。"
      },
      step3: {
        title: "在设置中点击WalletConnect",
        description: "选择新的连接，然后扫描二维码并确认提示以进行连接。"
      }
    },
    extension: {
      step1: {
        title: "安装Trust Wallet扩展程序",
        description: "在浏览器的右上角点击并固定Trust Wallet以便于访问。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "创建新的钱包或导入现有的钱包。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "设置Trust Wallet后，点击下面以刷新浏览器并加载扩展程序。"
      }
    }
  },
  uniswap: {
    qr_code: {
      step1: {
        title: "打开Uniswap应用",
        description: "将Uniswap钱包添加到您的主屏幕，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "创建新钱包或导入现有钱包。"
      },
      step3: {
        title: "点击QR图标并扫描",
        description: "在您的主屏幕上点击QR图标，扫描代码并确认提示以进行连接。"
      }
    }
  },
  zerion: {
    qr_code: {
      step1: {
        title: "打开Zerion应用",
        description: "我们建议将Zerion放在您的主屏幕上以便更快地访问。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "确保使用安全的方式备份你的钱包。绝对不要与任何人分享你的私人密语。"
      },
      step3: {
        title: "点击扫描按钮",
        description: "你扫描后，会出现一个连接提示让你连接你的钱包。"
      }
    },
    extension: {
      step1: {
        title: "安装 Zerion 扩展",
        description: "我们建议将 Zerion 固定在你的任务栏以便更快访问你的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "确保使用安全的方法备份你的钱包。永远不要与任何人分享你的秘密短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "设置您的钱包后，点击下面以刷新浏览器并加载扩展程序。"
      }
    }
  },
  rainbow: {
    qr_code: {
      step1: {
        title: "打开 Rainbow 应用",
        description: "我们建议将 Rainbow 放在您的主屏幕上，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "您可以使用我们的备份功能在您的手机上轻松备份你的钱包。"
      },
      step3: {
        title: "点击扫描按钮",
        description: "扫描后，将出现连接提示，让您连接您的钱包。"
      }
    }
  },
  enkrypt: {
    extension: {
      step1: {
        description: "我们建议将Enkrypt Wallet固定到任务栏，以便更快地访问您的钱包。",
        title: "安装Enkrypt Wallet扩展"
      },
      step2: {
        description: "请确保使用安全方法备份您的钱包。永远不要与任何人分享您的秘密短语。",
        title: "创建钱包或导入钱包"
      },
      step3: {
        description: "设置钱包后，点击下面刷新浏览器并加载扩展。",
        title: "刷新您的浏览器"
      }
    }
  },
  frame: {
    extension: {
      step1: {
        description: "我们建议将Frame固定到任务栏，以便更快地访问您的钱包。",
        title: "安装Frame及其配套扩展"
      },
      step2: {
        description: "务必使用安全的方法备份您的钱包。决不与任何人分享您的秘密短语。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "设置钱包后，点击下方以刷新浏览器并加载扩展。",
        title: "刷新你的浏览器"
      }
    }
  },
  one_key: {
    extension: {
      step1: {
        title: "安装OneKey Wallet扩展",
        description: "我们建议将OneKey Wallet固定到任务栏，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "确保使用安全的方法备份您的钱包。切勿与任何人分享您的秘密短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "设置您的钱包后，点击下方以刷新浏览器并加载扩展程序。"
      }
    }
  },
  phantom: {
    extension: {
      step1: {
        title: "安装 Phantom 扩展程序",
        description: "我们建议将 Phantom 固定到您的任务栏，以便更容易访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "确保使用安全的方法备份您的钱包。切勿与任何人分享您的秘密恢复短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "设置好您的钱包后，点击下方以刷新浏览器并加载扩展程序。"
      }
    }
  },
  rabby: {
    extension: {
      step1: {
        title: "安装 Rabby 扩展程序",
        description: "我们建议将 Rabby 固定在您的任务栏，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "一定要使用安全的方法备份您的钱包。切勿与任何人分享您的密钥短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "一旦您设置好您的钱包，点击以下以刷新浏览器并加载扩展程序。"
      }
    }
  },
  ronin: {
    qr_code: {
      step1: {
        description: "我们建议您将Ronin钱包添加到主屏幕，以便更快地访问。",
        title: "打开Ronin钱包应用"
      },
      step2: {
        description: "务必使用安全的方法备份您的钱包。决不与任何人分享您的秘密短语。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "在您扫描后，将出现连接提示，供您连接您的钱包。",
        title: "点击扫描按钮"
      }
    },
    extension: {
      step1: {
        description: "我们建议您将Ronin钱包固定到任务栏，以便更快地访问您的钱包。",
        title: "安装Ronin钱包扩展"
      },
      step2: {
        description: "务必使用安全的方法备份您的钱包。决不与任何人分享您的秘密短语。",
        title: "创建或导入钱包"
      },
      step3: {
        description: "设置钱包后，点击下方刷新浏览器并加载扩展。",
        title: "刷新您的浏览器"
      }
    }
  },
  ramper: {
    extension: {
      step1: {
        title: "安装Ramper扩展",
        description: "我们建议您将Ramper固定到任务栏，以便更容易地访问您的钱包。"
      },
      step2: {
        title: "创建一个钱包",
        description: "务必使用安全的方法备份您的钱包。决不与任何人分享您的秘密短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "设置钱包后，点击下方刷新浏览器并加载扩展。"
      }
    }
  },
  safeheron: {
    extension: {
      step1: {
        title: "安装 Core 扩展",
        description: "我们建议将 Safeheron 固定在您的任务栏，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "确保使用安全的方法备份您的钱包。切勿与任何人分享您的秘密短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "设置好您的钱包后，点击下方以刷新浏览器并加载扩展程序。"
      }
    }
  },
  taho: {
    extension: {
      step1: {
        title: "安装Taho扩展程序",
        description: "我们建议将Taho固定在您的任务栏上，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "确保使用安全的方法备份您的钱包。切勿与任何人分享您的秘密短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "设置好您的钱包后，点击下方以刷新浏览器并加载扩展程序。"
      }
    }
  },
  talisman: {
    extension: {
      step1: {
        title: "安装 Talisman 扩展程序",
        description: "我们建议将 Talisman 固定在任务栏上，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入以太坊钱包",
        description: "确保使用安全的方法备份您的钱包。永远不要与任何人分享您的恢复短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "设置好您的钱包后，点击下方以刷新浏览器并加载扩展程序。"
      }
    }
  },
  xdefi: {
    extension: {
      step1: {
        title: "安装 XDEFI 钱包扩展程序",
        description: "我们建议将XDEFI钱包固定到您的任务栏，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "确保使用安全的方法备份您的钱包。永远不要与任何人共享您的秘密短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "一旦你设置好你的钱包，点击下面刷新浏览器和加载扩展。"
      }
    }
  },
  zeal: {
    extension: {
      step1: {
        title: "安装Zeal扩展程序",
        description: "我们建议将Zeal固定在您的任务栏上，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "务必使用安全的方法备份您的钱包。决不与任何人分享您的秘密短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "设置钱包后，点击下方刷新浏览器并加载扩展。"
      }
    }
  },
  safepal: {
    extension: {
      step1: {
        title: "安装SafePal Wallet扩展程序",
        description: "点击浏览器右上角并固定SafePal Wallet以便于快速访问。"
      },
      step2: {
        title: "创建或导入钱包。",
        description: "创建新钱包或导入现有钱包。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "一旦设置了SafePal钱包，点击下方刷新浏览器并加载扩展程序。"
      }
    },
    qr_code: {
      step1: {
        title: "打开SafePal钱包应用程序",
        description: "将SafePal钱包放在主屏幕上以更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "创建新钱包或导入现有钱包。"
      },
      step3: {
        title: "在设置中点击WalletConnect",
        description: "选择新连接，然后扫描二维码并确认提示以进行连接。"
      }
    }
  },
  desig: {
    extension: {
      step1: {
        title: "安装 Desig 扩展",
        description: "我们建议将 Desig 固定到任务栏，以便更轻松地访问您的钱包。"
      },
      step2: {
        title: "创建一个钱包",
        description: "务必使用安全的方法备份您的钱包。决不与任何人分享您的秘密短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "设置钱包后，点击下方刷新浏览器并加载扩展。"
      }
    }
  },
  subwallet: {
    extension: {
      step1: {
        title: "安装 SubWallet 扩展",
        description: "我们建议将 SubWallet 固定到任务栏，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "确保使用安全的方法备份您的钱包。永远不要与任何人分享您的恢复短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "设置钱包后，点击下方刷新浏览器并加载扩展。"
      }
    },
    qr_code: {
      step1: {
        title: "打开 SubWallet 应用",
        description: "我们建议将 SubWallet 放置在主屏幕上，以便更快地访问。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "务必使用安全的方法备份您的钱包。决不与任何人分享您的秘密短语。"
      },
      step3: {
        title: "点击扫描按钮",
        description: "在您扫描后，将出现连接提示，供您连接您的钱包。"
      }
    }
  },
  clv: {
    extension: {
      step1: {
        title: "安装 CLV Wallet 扩展",
        description: "我们建议将 CLV Wallet 固定到任务栏，以便更快地访问您的钱包。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "务必使用安全的方法备份您的钱包。决不与任何人分享您的秘密短语。"
      },
      step3: {
        title: "刷新您的浏览器",
        description: "设置钱包后，点击下方刷新浏览器并加载扩展。"
      }
    },
    qr_code: {
      step1: {
        title: "打开 CLV 钱包应用",
        description: "我们建议将 CLV 钱包添加到您的主屏幕，以便更快地访问。"
      },
      step2: {
        title: "创建或导入钱包",
        description: "务必使用安全的方法备份您的钱包。决不与任何人分享您的秘密短语。"
      },
      step3: {
        title: "点击扫描按钮",
        description: "在您扫描后，将出现连接提示，供您连接您的钱包。"
      }
    }
  },
  okto: {
    qr_code: {
      step1: {
        title: "打开 Okto 应用",
        description: "将 Okto 添加到您的主屏幕以便快速访问"
      },
      step2: {
        title: "创建一个 MPC 钱包",
        description: "创建一个账户并生成一个钱包"
      },
      step3: {
        title: "在设置中点击WalletConnect",
        description: "点击右上角的扫描二维码图标，并确认提示以连接。"
      }
    }
  },
  ledger: {
    desktop: {
      step1: {
        title: "打开Ledger Live应用",
        description: "我们建议将Ledger Live放在您的主屏幕上，以便更快地访问。"
      },
      step2: {
        title: "设置您的Ledger",
        description: "设置一个新的Ledger或连接到一个现有的。"
      },
      step3: {
        title: "连接",
        description: "你扫描后，会出现一个连接提示让你连接你的钱包。"
      }
    },
    qr_code: {
      step1: {
        title: "打开Ledger Live应用",
        description: "我们建议将Ledger Live放在您的主屏幕上，以便更快地访问。"
      },
      step2: {
        title: "设置您的Ledger",
        description: "您可以同步桌面应用程式，或连接您的Ledger。"
      },
      step3: {
        title: "扫描代码",
        description: "点击 WalletConnect 然后切换到扫描器。你扫描后，会出现一个连接提示让你连接你的钱包。"
      }
    }
  }
}, C = {
  connect_wallet: Si,
  intro: Pi,
  sign_in: Ni,
  connect: Li,
  connect_scan: Di,
  connector_group: Ki,
  get: Ei,
  get_options: Mi,
  get_mobile: $i,
  get_instructions: Fi,
  chains: Qi,
  profile: ji,
  wallet_connectors: Ui
}, Xi = () => {
  function _(w, e) {
    const r = (e == null ? void 0 : e.currentLocale) ?? "en-US", o = (e == null ? void 0 : e.fallbackLocale) ?? "en-US", t = W({
      locale: r,
      fallbackLocale: o,
      legacy: !1,
      globalInjection: !0,
      messages: {
        ar: p,
        "ar-AR": p,
        en: c,
        "en-US": c,
        es: d,
        "es-419": d,
        fr: u,
        "fr-FR": u,
        hi: m,
        "hi-IN": m,
        id: k,
        "id-ID": k,
        ja: b,
        "ja-JP": b,
        ko: g,
        "ko-KR": g,
        pt: y,
        "pt-BR": y,
        ru: f,
        "ru-RU": f,
        th: h,
        "th-TH": h,
        tr: z,
        "tr-TR": z,
        ua: v,
        "uk-UA": v,
        zh: C,
        "zh-CN": C
      }
    });
    w.use(t);
    const n = e == null ? void 0 : e.messages;
    return n && Object.keys(n).forEach((i) => {
      t.global.mergeLocaleMessage(i, n[i]);
    }), {
      name: "vue-i18n",
      currentLocale: r,
      fallbackLocale: o,
      messages: t.global.messages.value,
      //// @ts-expect-error Type instantiation is excessively deep and possibly infinite
      t: (i, a, s, l, ...x) => t.global.t(l, x),
      n: (i, a, s, ...l) => t.global.n(s),
      changeLocale: (i, a) => {
        t.global.locale.value = a, i.value = {
          ...i.value,
          messages: t.global.messages.value,
          currentLocale: a
        };
      }
    };
  }
  return { create: _ };
};
export {
  Xi as RainbowKitVueI18nLocaleAdapterPlugin
};
