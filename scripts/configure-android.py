#!/usr/bin/env python3
import re
from pathlib import Path

strings = Path("android/app/src/main/res/values/strings.xml")
if strings.exists():
    s = strings.read_text()
    s = s.replace(">Ahdaf<", ">أهداف<").replace(">ahdaf<", ">أهداف<")
    cfg = Path("public/js/google-config.js").read_text()
    m = re.search(r'webClientId:\s*"([^"]*)"', cfg)
    cid = m.group(1) if m else ""
    if cid and 'name="server_client_id"' not in s:
        s = s.replace("</resources>", f'    <string name="server_client_id">{cid}</string>\n</resources>')
    strings.write_text(s)

styles = Path("android/app/src/main/res/values/styles.xml")
if styles.exists():
    t = styles.read_text()
    if "windowDisablePreview" not in t:
        t = t.replace(
            "</style>",
            "        <item name=\"android:windowDisablePreview\">true</item>\n    </style>",
            1,
        )
    styles.write_text(t)

man = Path("android/app/src/main/AndroidManifest.xml")
if man.exists():
    mtxt = man.read_text()
    filt = """
              <intent-filter>
                  <action android:name="android.intent.action.VIEW" />
                  <category android:name="android.intent.category.DEFAULT" />
                  <category android:name="android.intent.category.BROWSABLE" />
                  <data android:scheme="app.ahdaf.scores" android:host="oauth" />
              </intent-filter>"""
    if "app.ahdaf.scores" not in mtxt:
        mtxt = mtxt.replace("</activity>", filt + "\n        </activity>", 1)
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
