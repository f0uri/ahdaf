# ربط أهداف بحساب Google (حفظ سحابي حقيقي)

البيانات تُحفظ في **مجلد تطبيق مخفي داخل Google Drive الخاص بالمستخدم** (`appDataFolder`).
لا تظهر في Drive العادي. نفس حساب Google على هاتف آخر يسترجع المتابعات.

## ما تحتاجه (دقيقتان بعد إنشاء المشروع)

1. افتح https://console.cloud.google.com/ وأنشئ مشروعاً باسم **Ahdaf**
2. **APIs & Services → Library** → فعّل **Google Drive API**
3. **APIs & Services → OAuth consent screen**
   - External
   - اسم التطبيق: أهداف
   - ثم أضف النطاقات:
     - `openid`
     - `.../auth/userinfo.email`
     - `.../auth/userinfo.profile`
     - `https://www.googleapis.com/auth/drive.appdata`
4. **Credentials → Create credentials → OAuth client ID**
   - النوع **Android**
     - Package name: `app.ahdaf.scores`
     - SHA-1:
       `DB:A6:06:B3:F1:BE:E5:9B:DF:91:01:B6:5E:CE:B8:48:A3:03:41:36`
   - النوع **Web application**
     - Authorized redirect URIs:
       `app.ahdaf.scores://oauth`
5. انسخ **Web client ID** (ينتهي بـ `.apps.googleusercontent.com`) وأرسله هنا.

بعدها أضعه في التطبيق وأنشر نسخة تعمل فيها المتابعة السحابية فوراً.
