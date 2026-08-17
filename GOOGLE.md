# ربط أهداف بحساب Google (حفظ سحابي حقيقي)

البيانات تُحفظ في **مجلد تطبيق مخفي داخل Google Drive الخاص بالمستخدم** (`appDataFolder`).
لا تظهر في Drive العادي. نفس حساب Google على هاتف آخر يسترجع المتابعات.

## ما تحتاجه

1. افتح https://console.cloud.google.com/ وأنشئ مشروعاً باسم **Ahdaf**
2. **APIs & Services → Library** → فعّل **Google Drive API**
   https://console.cloud.google.com/apis/library/drive.googleapis.com?project=ahdaf-505812
3. **OAuth consent screen**
   - External
   - اسم التطبيق: أهداف
   - النطاقات: `openid` · `userinfo.email` · `userinfo.profile` · `drive.appdata`
   - أضف بريدك التجريبي بحروف صغيرة في OAuth audience
4. **Credentials → OAuth client ID**
   - النوع **Android**
     - Package name: `app.ahdaf.scores`
     - SHA-1:
       `DB:A6:06:B3:F1:BE:E5:9B:DF:91:01:B6:5E:CE:B8:48:A3:03:41:36`
   - النوع **Web application**
     - Authorized redirect URIs (https فقط، بدون مخطط مخصّص):
       - `https://localhost`
       - `https://localhost/`
       - `http://localhost`
5. انسخ **Web client ID** (ينتهي بـ `.apps.googleusercontent.com`).

لا تضع Client secret داخل التطبيق أو المستودع.
