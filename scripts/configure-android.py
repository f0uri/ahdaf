#!/usr/bin/env python3
import re
from pathlib import Path

WEB_CLIENT = "965355836624-gpp8n1ijkrh57invn56s5scu9325fbjc.apps.googleusercontent.com"
cfg = Path("public/js/google-config.js")
if cfg.exists():
    m = re.search(r'webClientId:\s*"([^"]*)"', cfg.read_text())
    if m and m.group(1):
        WEB_CLIENT = m.group(1)

strings = Path("android/app/src/main/res/values/strings.xml")
if strings.exists():
    s = strings.read_text()
    s = s.replace(">Ahdaf<", ">أهداف<").replace(">ahdaf<", ">أهداف<")
    for name, value in (
        ("server_client_id", WEB_CLIENT),
        ("client_id", WEB_CLIENT),
    ):
        if f'name="{name}"' in s:
            s = re.sub(
                rf'<string name="{name}">[^<]*</string>',
                f'<string name="{name}">{value}</string>',
                s,
            )
        else:
            s = s.replace("</resources>", f'    <string name="{name}">{value}</string>\n</resources>')
    strings.write_text(s)

styles = Path("android/app/src/main/res/values/styles.xml")
if styles.exists():
    t = styles.read_text()
    if "windowDisablePreview" not in t:
        t = t.replace(
            "</style>",
            '        <item name="android:windowDisablePreview">true</item>\n    </style>',
            1,
        )
    styles.write_text(t)

man = Path("android/app/src/main/AndroidManifest.xml")
if man.exists():
    mtxt = man.read_text()
    if 'android:launchMode=' not in mtxt:
        mtxt = mtxt.replace("<activity", '<activity android:launchMode="singleTask"', 1)
    elif 'android:launchMode="standard"' in mtxt:
        mtxt = mtxt.replace('android:launchMode="standard"', 'android:launchMode="singleTask"')

    filters = """
              <intent-filter>
                  <action android:name="android.intent.action.VIEW" />
                  <category android:name="android.intent.category.DEFAULT" />
                  <category android:name="android.intent.category.BROWSABLE" />
                  <data android:scheme="app.ahdaf.scores" />
              </intent-filter>
              <intent-filter>
                  <action android:name="android.intent.action.VIEW" />
                  <category android:name="android.intent.category.DEFAULT" />
                  <category android:name="android.intent.category.BROWSABLE" />
                  <data android:scheme="https" android:host="localhost" android:pathPrefix="/" />
              </intent-filter>"""
    if 'android:host="localhost"' not in mtxt:
        mtxt = mtxt.replace("</activity>", filters + "\n        </activity>", 1)
    elif "app.ahdaf.scores" not in mtxt:
        mtxt = mtxt.replace("</activity>", filters + "\n        </activity>", 1)
    man.write_text(mtxt)

gradle = Path("android/app/build.gradle")
if gradle.exists():
    g = gradle.read_text()
    if "ahdaf-debug.keystore" not in g:
        block = """android {
    signingConfigs {
        debug {
            storeFile file("../../signing/ahdaf-debug.keystore")
            storePassword "android"
            keyAlias "androiddebugkey"
            keyPassword "android"
        }
    }"""
        g = g.replace("android {", block, 1)
        gradle.write_text(g)

print("android configured")
