#!/usr/bin/env python3
"""Generate Android launcher icons from public/icons/icon-512.png."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "icons" / "icon-512.png"
RES = ROOT / "android" / "app" / "src" / "main" / "res"
BG = (11, 15, 18, 255)

DENSITIES = {
    "mipmap-mdpi": 48,
    "mipmap-hdpi": 72,
    "mipmap-xhdpi": 96,
    "mipmap-xxhdpi": 144,
    "mipmap-xxxhdpi": 192,
}
FG = {
    "mipmap-mdpi": 108,
    "mipmap-hdpi": 162,
    "mipmap-xhdpi": 216,
    "mipmap-xxhdpi": 324,
    "mipmap-xxxhdpi": 432,
}

def rounded(im, radius_ratio=0.22):
    w, h = im.size
    r = int(min(w, h) * radius_ratio)
    mask = Image.new("L", (w, h), 0)
    from PIL import ImageDraw
    d = ImageDraw.Draw(mask)
    d.rounded_rectangle((0, 0, w - 1, h - 1), radius=r, fill=255)
    out = im.convert("RGBA")
    out.putalpha(mask)
    return out

def main():
    if not SRC.exists():
        raise SystemExit(f"missing {SRC}")
    if not RES.exists():
        raise SystemExit(f"missing android res at {RES}")
    src = Image.open(SRC).convert("RGBA")
    side = min(src.size)
    src = src.crop(((src.width - side) // 2, (src.height - side) // 2, (src.width + side) // 2, (src.height + side) // 2))

    for folder, size in DENSITIES.items():
        dest = RES / folder
        dest.mkdir(parents=True, exist_ok=True)
        im = src.resize((size, size), Image.Resampling.LANCZOS)
        rgb = Image.new("RGB", (size, size), BG[:3])
        rgb.paste(im, mask=im.split()[-1])
        icon = rounded(rgb)
        # launchers prefer opaque png; keep both
        rgb.save(dest / "ic_launcher.png", "PNG")
        icon.save(dest / "ic_launcher_round.png", "PNG")

    for folder, size in FG.items():
        dest = RES / folder
        dest.mkdir(parents=True, exist_ok=True)
        canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        inner = int(size * 0.62)
        im = src.resize((inner, inner), Image.Resampling.LANCZOS)
        x = (size - inner) // 2
        canvas.paste(im, (x, x), im)
        canvas.save(dest / "ic_launcher_foreground.png", "PNG")

    anydpi = RES / "mipmap-anydpi-v26"
    anydpi.mkdir(parents=True, exist_ok=True)
    xml = """<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/ic_launcher_background"/>
    <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
</adaptive-icon>
"""
    (anydpi / "ic_launcher.xml").write_text(xml)
    (anydpi / "ic_launcher_round.xml").write_text(xml)

    values = RES / "values"
    values.mkdir(parents=True, exist_ok=True)
    bg_file = values / "ic_launcher_background.xml"
    bg_file.write_text(
        """<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="ic_launcher_background">#0B0F12</color>
</resources>
"""
    )
    print("android icons written")

if __name__ == "__main__":
    main()
