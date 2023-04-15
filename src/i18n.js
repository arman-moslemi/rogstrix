import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "سیستم های آماده": "Ready systems",
      "ساخت و اسمبل کردن سیستم":"Build and assemble the system",
      "گالری سیستم های فروخته شده":"Sold systems Gallery",
      "اسمبل آنلاین":"Assemble online",
      "سیستم های پیشنهادی":"Suggested systems",
      "مشاهده محصولات":"View products",
      "کامپیوتر و قطعات":"computer",
      " لپتاپ و کامپیوتر آماده و قطعات":"Laptop",
      "تبلت":"Tablet",
      "موبایل و گجت":"Mobile",
      "شبکه و سرور":"Network",
      " ماشین های اداری و قطعات":"Office",
      "دوربین و لوازم جانبی":"Camera",
      "کنسول و لوارم بازی":"Console",
      "انتخاب، مقایسه و اسمبل سریع از بین قطعات برندهای مختلف":"Quick selection, comparison and assembly from different brands of parts",
      "خرید از بین سیستم های آماده و بسته شده توسط کاربران":"Purchase from among the systems prepared and closed by users",
      "محصولات راگ":"Rog products",
      "مشاهده همه":"view all",
      "محصولات پر فروش":"Best-selling products",
      "محصولات جدید":"new products",
      "وبلاگ و خبرنامه":"Blog and newsletter",
      "راگ استریکس":"لپتاپ",
      "مجوز و گواهی نامه ها":"Licenses and certificates",
      "قوانین و مقررات":"Terms and Conditions",
      "حریم خصوصی":"Privacy",
      "قوانین گارانتی":"Warranty rules",
      "تماس با ما":"contact us",
      "درباره ما":"about us",
      "راهنما":"Guide",
      "تضمین اصالت کالا":"Guarantee of product authenticity",
      "شرایط عودت کالا":"Terms of returning goods",
      "نحوه ارسال کالا":"How to send goods",
      "راهنمای خرید":"Shopping Guide",
      "مطالب مفید":"Useful Articles",
      "قیمت گوشی سامسونگ":"Samsung phone price",
      "قیمت گوشی شیائومی":"Xiaomi phone price",
      "قیمت گوشی هواوی":"Huawei phone price",
      "قیمت لپ تاپ":"laptop price",
      "قیمت دوربین عکاسی":"Camera price",
      "قیمت ساعت هوشمند":"Smart watch price",
      "لیست تکنولوژی های برتر":"List of top technologies",
      "برندها":"Brands",
      "راه های ارتباطی با راگ استریکس":"Ways of communication with Rog Strix",
      "عضویت در خبرنامه":"subscribe to newsletter",
      "عضویت":"Membership",
      "نشانی ایمیل خود را وارد کنید":"Enter your email address",
      "کلیه حقوق مادی و معنوی برای گروه جمهوری گیمرهای ایران محفوظ است.":"All intellectual and material rights are reserved for the Republic of Iran Gamers group.",
      "سایت راگ استریکس":"rogstrix site",
      "سیستم های تکمیل شده":"Completed systems",
      "فیلترهای اعمال شده":"Filters applied",
      "حذف":"Delete",
      "محدوده قیمت":"Price range",
      "تا":"until the",
      "از":"From",
      "اعمال محدوده قیمت":"Apply price range",
      "همه سیستم های تکمیل شده":"All systems completed",
      "مرتب کردن بر اساس":"Sort by",
      "پربازدیدترین":"most visited",
      "ارزان ترین":"cheapest",
      "گران ترین":"the most expensive",
      "جدید ترین":"the newest",
      "جستجو در میان سیستم ها ...":"Search among systems ...",
      "صفحه مورد نظر یافت نشد !":"The requested page could not be found !",
      "صفحه اصلی":"Main Page",
      "شخصی سازی این سیستم":"Personalize this system",
      "گروه":"group",
      "انتخاب قطعه":"Select the piece",
      "قیمت(تومان)":"price (tomans)",
      "خرید":"Buy",
      "قیمت کل :":"Total price :",
      "خرید کل قطعات":"Buy whole parts",
      "توضیحات":"Description",
      "ساخت سیستم":"pc build",
      "ذخیره این سیستم":"Save this system",
      "شروع دوباره":"Restart",
      "سازگاری قطعات :":"Compatibility of parts :",
      "هیچ ناسازگاری یا مشکلی وجود ندارد.":"There are no inconsistencies or problems.",
      "تخمین مصرف انرژی :":"Estimation of energy consumption :",
      "وات":"Mouth",
      "حذف":"Delete",
      "هشدار !":"Warning !",
      "در خصوص ناسازگاری‌ها و مشکلات احتمالی":"Regarding incompatibilities and possible problems",
      "توجه !":"Attention !",
      "کالاهای موجود در سبد خرید شما ثبت و رزرو نشده اند ، برای ثبت سفارش مراحل بعدی را تکمیل کنید.":"The products in your shopping cart have not been registered and reserved, complete the next steps to place an order.",
      "سبد خرید":"Cart",
      "محصولات انتخاب شده":"Selected products",
      "ضمانت اصل بودن کالا":"Guarantee of the originality of the product",
      "تعداد :":"Number :",
      "قیمت :":"Price :",
      "جمع سبد خرید :":"Total shopping cart :",
      "ادامه سفارش":"Continue the order",
      "انتخاب آدرس":"Choose an address",
      "افزودن آدرس جدید":"Add new address",
      "شهر":"City",
      "منطقه":"Region",
      "کد پستی":"Postal code",
      "آدرس":"Address",
      "ذخیره":"save",
      "ویرایش":"Edit",
      "ویرایش آدرس":"Edit address",
      "انتخاب نحوه ارسال":"Choose how to send",
      "هزینه ارسال :":"shipping cost :",
      "مدت ارسال :":"Delivery time :",
      "روز":"Day",
      "کد تخفیف":"discount code",
      "ثبت":"ثبت",
      "انتخاب نحوه پرداخت":"Choose a payment method",
      "کد تخفیف دارید ؟":"Do you have a discount code?",
      "کد تخفیف خود را وارد کنید :":"Enter your discount code :",
      "پرداخت آنلاین":"online payment",
      "میتوانید از طریق درگاه پرداخت بانکی،اقدام به تسویه حساب نمایید":"You can settle the account through the bank payment portal",
      "پرداخت بانکی":"Bank payment",
      "پس از واریز مبلغ به شماره حساب فوق کد رهگیری را ثبت نمایید":"After depositing the amount to the above account number, register the tracking code",
      "شماره حساب :5887859896 ملت حامد مصلحی بریران شبا 0120000000005887859896":"Account number: 5887859896 Mellat Hamed Moslehi Briran Shaba 0120000000005887859896",
      "کد رهگیری :":"Tracking Code :",
      "پرداخت با اتریوم":"Pay with Ethereum",
      "پس از واریز مبلغ به آدرس کیف پول فوق،کد رهگیری را اینجا ثبت نمایید":"After depositing the amount to the above wallet address, register the tracking code here",
      "آدرس کیف پولrogstrix.eth usdt ":"Wallet address rogstrix.eth usdt",
      "کد رهگیری :":"Tracking Code :",
      "هزینه ارسال :":"shipping cost :",
      "قابل پرداخت :":"Payable :",
      "پرداخت":"the payment",
      "آدرس های من":"My addresses",
      "در حال به روز رسانی !":"Updating !",
      "قیمت محصول :":"price product :",
      "افزودن":"Add",
      "مقایسه":"Comparison",
      "سایت راگ استریکس":"Rog strix site",
      "مشخصات کاربری":"User profile",
      "حساب حقیقی":"real account",
      "ایمیل":"email",
      "نام":"name",
      "نام خانوادگی":"last name",
      "جنسیت":"gender",
      "آقا":"sir",
      "خانم":"Lady",
      "کدملی":"National Code",
      "تبعه خارجی فاقد کدملی هستم.":"I am a foreign citizen with no nationality.",
      "موبایل":"Mobile",
      "تلفن ثابت":"Phone",
      "تاریخ تولد":"Date of birth",
      "شماره کارت":"card number",
      "حساب حقوقی":"Legal account",
      "حساب حقیقی":"real account",
      "فعال کردن حساب حقوقی":"Activate legal account",
      "مایل به تکمیل اطلاعات حقوقی برای خرید سازمانی هستم.":"I would like to complete the legal information for an organizational purchase.",
      "با تکمیل اطلاعات حقوقی سازمان مورد نظر خود می‌توانید اقدام به خرید سازمانی با دریافت فاکتور رسمی و گواهی ارزش افزودنمایید.":"By completing the legal information of the organization you want, you can buy an organization by receiving an official invoice and value-added certificate.",
      "نام شرکت یا اداره":"Name of the company or office",
      "کد اقتصادی":"Economic code",
      "شماره ثبت":"registration number",
      "تلفن ثابت":"Phone",
      "ذخیره تغییرات":"Save changes",
      "پیش فاکتور":"invoice",
      "مشخصات سفارش":"Order details",
      "شماره فاکتور :":"Invoice number :",
      "تاریخ":"History",
      "نام و نام خانوادگی":"first name and last name",
      "شماره تماس":"Phone number",
      "وضعیت پرداخت":"Payment status",
      "پرداخت شده":"was paidه",
      "شرح محصول":"Product description",
      "قیمت واحد":"Unit price",
      "قیمت کل":"Total price",
      "هزینه ارسال از طریق پست سفارشی":"Shipping cost by registered post",
      "زمان فوق با توجه به محدوده جغرافیایی به صورت تقریبی بین 2 تا 4 روز کاری متفاوت است.تحویل در بازه زمانی 10-17.سقف بیمه پست برای هر محصول 20 میلیون تومان است.":"The above time varies approximately between 2 and 4 working days according to the geographical area. Delivery in the time frame of 10-17. The limit of postal insurance for each product is 20 million tomans..",
      "جمع کل":"total",
      "مبلغ قابل پرداخت":"The amount payable",
      "توضیحات خریدار":"Buyer's description",
      "خریدار محترم":"Dear buyer",
      "All the rules and regulations related to online shopping are included and visible on our website. Therefore, buying goods from this company means accepting all the rules and regulations, including the law of electronic commerce and the law of protection of consumer rights and the instructions issued by the trade union. And it is a virtual work of the Ministry of Industry, Mines and Trade and can be used in courts.":"کلیه قوانین و مقررات مربوط به خرید اینترنتی از وب سایت ما،مندرج و قابل مشاهده است.لذا خرید کالا از این شرکت به منزله پذیرش کلیه قوانین و مقررات اعم از قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده و دستورالعمل صادره از اتحادیه کسب و کار مجازی وزارت صنعت و معدن و تجارت بوده و در محاکم قابل استفاده است.",
      "فیلترهای اعمال شده":"Filters applied",
      "برندها":"Brands",
      "نام برند را وارد کنید ...":"Enter the brand name ...",
      "محدوده قیمت":"Price range",
      "از":"From",
      "اعمال محدوده قیمت":"Apply price range",
      "تا":"until the",
      "پیشنهادات ویژه":"Special offers",
      "محصولات مشاهده شده":"Viewed products",
      "بازیابی رمز عبور":"Password recovery",
      "شماره موبایل خود را وارد کنید":"Enter your mobile number",
      "ارسال درخواست بازیابی رمز عبور":"Submit a password recovery request",
      "ثبت نام":"Register",
      "شماره موبایل خود را وارد کنید.":"Enter your mobile number.",
      "ایمیل خود را وارد کنید":"Enter your email",
      "رمز عبور خود را وارد کنید":"Enter your password",
      "مرا به خاطر بسپار":"remember me",
      "ثبت نام در راگ استریکس":"Sign up for Rog strix",
      "با ورود و ثبت نام در":"By entering and registering in",
      "راگ استریکس":"Rog Strix",
      "شما":"You",
      "شرایط و قوانین":"Terms and rules",
      "استفاده از سرویس های این سایت و":"Using the services of this site and",
      "قوانین حریم خصوصی":"Privacy Policy",
      "آن را می پذیرید.":"You accept it.",
      "کد تایید":"Verification code",
      "کد تایید ارسال شده را وارد کنید":"Enter the verification code sent",
      "کد تایید را وارد کنید":"Enter Auth Code",
      "تایید شماره موبایل":"Mobile number verification",
      "انتخاب":"Selection",
      "قطعه":"piece",
      "شناسایی":"Identification",
      "نمایش همه قطعات":"Show all parts",
      "انتخاب همه":"Select all",
      "حذف انتخاب همه":"Deselect all",
      "مقایسه انتخاب شده ها (حداکثر 4 مورد)":"Comparison of selected items (up to 4 items)",
      "عکس":"Picture",
      "نام":"name",
      "قیمت":"Price",
      "امتیاز":"Score",
      "به زودی":"Soon",
      "افزودن":"Add",
      "افزودن به ساخت سیستم":"Add to build system",
      "ویژگی‌های محصول":"Product features",
      "موارد بیشتر":"More items",
      "امتیاز":"Score",
      "از ۵":"From 5",
      "نظر":"Opinion",
      "از ضمانت اصل بودن کالا":"From guaranteeing the originality of the product",
      "از این کالا":"of this product",
      "از عدد در انبار موجود است":"of the number in stock",
      "کپی":"copy",
      "ریفر":"Ref",
      "اصلی":"original",
      "تعداد":"Number",
      "گارانتی":"Warranty",
      "قیمت محصول":"price product",
      "افزودن به سبد خرید":"Add to cart",
      "توضیحات درباره":"Description about",
      "محصولات مشابه":"similar products",
      "مشاهده همه":"view all",
      "سیستم های پیشنهادی":"Suggested systems",
      "تیکت ها و پشتیبانی ها":"Tickets and support",
      "پیام جدید":"New message",
      "عنوان پیام":"Message title",
      "متن پیام":"Message text",
      "عنوان پیام خود را وارد کنید":"Enter the title of your message",
      "ارسال پیام":"send Message",
      "موضوع":"Topic",
      "وضعیت":"status",
      "آخرین به روزرسانی":"latest update",
      "مشاهده":"view",
      "درانتظار پاسخ":"waiting for an answer",
      "پاسخ داده شده":"has been answered",
      "بسته شده":"closed",
      "سفارش های من":"My orders",
      "شماره":"No",
      "محصولات":"Products",
      "مشاهده فاکتور":"View the invoice",
      "‍‍‍پرداخت شده":"‍‍‍Paid",
      "‍‍‍پرداخت نشده":"unpaid",
      "ارسال نشده":"not shipped",
      "درحال ارسال":"sending",
      "ارسال شده":"Posted",
      "کاربر":"User",
      "سبد خرید":"Card",
      "ثبت نام / ورود":"Login/Sign Up",
      "پر طرفدارها":"Most popular",
      "بزرگترین مرجع تخصصی محصولات گیمینگ شرکت ایسوس با جدیدترین  محصولات تخصصی گیمینگ ویژه گیمرهای حرفه‌ای و آماتور.":"The largest specialized reference of Asus company's gaming products with the latest specialized gaming products for professional and amateur gamers.",
      "جمهوری گیمرها":"Republic of Gaming",
      "چرا راگ استریکس ؟":"Why RogStrix?",
      "ارسال به سراسر کشور":"Ship to the whole country",
      "امکان سفارش کالا از سراسر کشور،ارسال سریع و آسان کالا به سراسر کشور":"Possibility of ordering goods from all over the country, quick and easy delivery of goods to all over the country",
      "ضمانت اصالت کالاخرید کالای اصل ایسوس راگ با بیمه نامه معتبر.":"Guarantee of the originality of the purchase of the original product of ASUS ROG with a valid insurance policy.",
      "ضمانت بازگشت ۷ روزه":"7-day return guarantee",
      "امکان بازگشت محصول در صورت مشکل فنی یا مغایرت کالا":"Possibility of product return in case of technical problem or product discrepancy",
     "محصولات مشابه":"Similar Products",
     "پرداخت با تتر USDT":"USDT Pay",
     "کالا آماده ارسال به سراسر کشور":"Product Ready for Transfer to All Country",
 "ردیف":"no",
 "کد تخفیف اعمال شد":"Discount Activation Success",
 "ضمانت اصالت کالا":"Guarantee of product authenticity",
 "خرید کالای اصل ایسوس راگ با بیمه نامه معتبر.":"Buy the original ASUS ROG product with a valid insurance policy.",
 "کل محصولات":"All Product",
 "محصولات راگ":"Rog Product",
 "مشتری یکتا":"Unique Customer",
 "فروش محصول":"Product sales",
 "۹٪ ارزش افزوده": "9% added value",
 "نظرات و دیدگاه":"Comments",
 "کاربر":"User",
 "امتیاز شما به این محصول":"Your Rate",
 "ارسال نظر":"Send Comment"

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