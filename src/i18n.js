import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "سیستم های آماده": "Ready systems",
      "ساخت و اسمبل کردن سیستم":"Build and assemble the system"
    }
  },
  ir: {
    translation: {
      "سیستم های آماده": "سیستم های آماده",
      "ساخت و اسمبل کردن سیستم":"ساخت و اسمبل کردن سیستم",
      "سیستم‌های تکمیل شده":"سیستم‌های تکمیل شده",
      "ساخت سیستم":"ساخت سیستم",
      "سیستم های پیشنهادی":"سیستم های پیشنهادی",
      "مشاهده محصولات":"مشاهده محصولات",
      "قطعات کامپیوتر":"قطعات کامپیوتر",
      "لپتاپ":"لپتاپ",
      "تبلت":"تبلت",
      "موبایل و گجت":"لپتاپ",
      "شبکه و سرور":"لپتاپ",
      "کالای اداری":"لپتاپ",
      "تصویربرداری":"لپتاپ",
      "کنسول بازی":"لپتاپ",
      "انتخاب، مقایسه و اسمبل سریع از بین قطعات برندهای مختلف":"انتخاب، مقایسه و اسمبل سریع از بین قطعات برندهای مختلف",
      "خرید از بین سیستم های آماده و بسته شده توسط کاربران":"خرید از بین سیستم های آماده و بسته شده توسط کاربران",
      "محصولات راگ":"محصولات راگ",
      "مشاهده همه":"مشاهده همه",
      "محصولات پر فروش":"محصولات پر فروش",
      "محصولات جدید":"محصولات جدید",
      "وبلاگ و خبرنامه":"وبلاگ و خبرنامه",
      "راگ استریکس":"لپتاپ",
      "مجوز و گواهی نامه ها":"مجوز و گواهی نامه ها",
      "قوانین و مقررات":"قوانین و مقررات",
      "حریم خصوصی":"حریم خصوصی",
      "قوانین گارانتی":"قوانین گارانتی",
      "تماس با ما":"تماس با ما",
      "درباره ما":"درباره ما",
      "راهنما":"راهنما",
      "تضمین اصالت کالا":"تضمین اصالت کالا",
      "شرایط عودت کالا":"شرایط عودت کالا",
      "نحوه ارسال کالا":"نحوه ارسال کالا",
      "راهنمای خرید":"راهنمای خرید",
      "مطالب مفید":"مطالب مفید",
      "قیمت گوشی سامسونگ":"قیمت گوشی سامسونگ",
      "قیمت گوشی شیائومی":"قیمت گوشی شیائومی",
      "قیمت گوشی هواوی":"قیمت گوشی هواوی",
      "قیمت لپ تاپ":"قیمت لپ تاپ",
      "قیمت دوربین عکاسی":"قیمت دوربین عکاسی",
      "قیمت ساعت هوشمند":"قیمت ساعت هوشمند",
      "لیست تکنولوژی های برتر":"لیست تکنولوژی های برتر",
      "برندها":"برندها",
      "راه های ارتباطی با راگ استریکس":"راه های ارتباطی با راگ استریکس",
      "عضویت در خبرنامه":"عضویت در خبرنامه",
      "عضویت":"عضویت",
      "نشانی ایمیل خود را وارد کنید":"نشانی ایمیل خود را وارد کنید",
      "کلیه حقوق مادی و معنوی برای گروه جمهوری گیمرهای ایران محفوظ است.":"کلیه حقوق مادی و معنوی برای گروه جمهوری گیمرهای ایران محفوظ است.",
      "سایت راگ استریکس":"سایت راگ استریکس",
      "سیستم های تکمیل شده":"سیستم های تکمیل شده",
      "فیلترهای اعمال شده":"فیلترهای اعمال شده",
      "حذف":"حذف",
      "محدوده قیمت":"محدوده قیمت",
      "تا":"تا",
      "از":"از",
      "اعمال محدوده قیمت":"اعمال محدوده قیمت",
      "همه سیستم های تکمیل شده":"همه سیستم های تکمیل شده",
      "مرتب کردن بر اساس":"مرتب کردن بر اساس",
      "پربازدیدترین":"پربازدیدترین",
      "ارزان ترین":"ارزان ترین",
      "گران ترین":"گران ترین",
      "جدید ترین":"جدید ترین",
      "جستجو در میان سیستم ها ...":"جستجو در میان سیستم ها ...",
      "لپتاپ":"لپتاپ",
      "لپتاپ":"لپتاپ",
      "لپتاپ":"لپتاپ",
      "لپتاپ":"لپتاپ",
    }
    
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ir", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;