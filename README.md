# أهداف · Ahdaf

تطبيق نتائج ومواعيد المباريات بواجهة عربية هادئة على طراز آيفون.

يغطي الدوريات والكؤوس حول العالم، بما فيها **البطولة الاحترافية المغربية**، دوري أبطال أوروبا، والدوريات الخمس الكبرى.

## التشغيل المحلي

```bash
npm install
npm start
```

ثم افتح `http://localhost:3000`

## بناء APK

يتم البناء تلقائياً عبر GitHub Actions عند الدفع إلى `main`.

بعد نجاح المهمة يظهر ملف مباشر:

`https://github.com/f0uri/ahdaf/releases/latest/download/ahdaf.apk`

للبناء يدوياً:

```bash
npm install
npx cap add android
npx cap sync android
cd android && ./gradlew assembleDebug
```

## المزايا

- نتائج ومواعيد كل الدوريات والكؤوس
- مباريات مباشرة تتحدث تلقائياً
- تبويب البث: متابعة حية + روابط المنصات الرسمية (TOD / beIN / الرياضية / FIFA+)
- ترتيب، تشكيلات، أحداث، إحصائيات
- مفضلة، بحث، وضع ليلي، عربية / English

## الرخصة

ISC
