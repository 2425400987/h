#!/usr/bin/env python3
"""Editorial 1200x630 share card for Know Check Act. Code-set type, app ribbon."""

from pathlib import Path

import cairosvg
from PIL import Image, ImageFont

ROOT = Path("/workspace/.grok/brand")
FRAUNCES = ROOT / "fraunces.ttf"
OUTFIT = ROOT / "outfit.ttf"
SVG_PATH = ROOT / "og.svg"
PNG_PATH = ROOT / "og-2x.png"

W, H = 1200, 630
BLUSH = "#FBF3F1"
INK = "#5C1633"
RIBBON = "#E23D78"
DEEP = "#9D174D"
PAPER = "#FFFAF8"

# Ribbon artwork from src/components/ribbon.tsx (viewBox 0 0 280 420).
RIBBON_SVG = """
<g id="mark">
  <g clip-path="url(#tails)">
    <polygon fill="{deep}" points="148,196 206,222 248,410 176,378"/>
    <polygon fill="{ribbon}" points="118,200 168,222 96,412 36,378"/>
  </g>
  <path d="M140 214C140 162 72 156 42 114C16 78 44 30 98 28C136 26 154 60 142 98"
        fill="none" stroke="{deep}" stroke-width="36" stroke-linecap="round"/>
  <path d="M140 214C140 162 208 156 238 114C264 78 236 30 182 28C144 26 126 60 138 98"
        fill="none" stroke="{ribbon}" stroke-width="36" stroke-linecap="round"/>
  <path d="M168 86C196 78 214 98 206 122"
        fill="none" stroke="{paper}" stroke-opacity="0.55" stroke-width="6" stroke-linecap="round"/>
  <ellipse cx="142" cy="206" rx="18" ry="12" fill="{deep}"/>
</g>
""".format(deep=DEEP, ribbon=RIBBON, paper=PAPER)


def main() -> None:
    # Largest word sets the lockup width. Aim for a little over half the frame.
    probe = ImageFont.truetype(str(FRAUNCES), 100)
    check_w = probe.getlength("CHECK")
    target = 560  # ~47–55% once optical; tuned after the side ribbon
    title_size = 100 * (target / check_w)
    title_size = round(title_size, 1)
    title_font = ImageFont.truetype(str(FRAUNCES), title_size)
    words = ["KNOW", "CHECK", "ACT"]
    word_w = {w: title_font.getlength(w) for w in words}
    ascent, descent = title_font.getmetrics()
    # Caps sit well above the baseline; use a tight but open leading.
    line_gap = title_size * 0.90
    stack_h = ascent + 2 * line_gap + descent

    tag_size = 26
    tag_font = ImageFont.truetype(str(OUTFIT), tag_size)
    tag = "Learn what is usual for you"
    tag_w = tag_font.getlength(tag)
    tag_ascent, tag_descent = tag_font.getmetrics()

    # Ribbon scale: tall, but inside vertical margins of 58px.
    # Local visual extent is roughly the 280×420 viewBox plus half the 36px stroke.
    local_w, local_h = 280 + 36, 420 + 18
    ribbon_h = 500
    scale = ribbon_h / local_h
    ribbon_w = local_w * scale

    gap = 56
    lockup_w = ribbon_w + gap + max(word_w.values())
    # Center the ribbon + word block as one lockup.
    left = (W - lockup_w) / 2
    # Nudge optical center slightly left so the heavier ribbon doesn't feel right-heavy.
    left -= 8
    rib_x = left
    rib_y = (H - ribbon_h) / 2 - 6
    text_cx = left + ribbon_w + gap + max(word_w.values()) / 2

    text_top = (H - (stack_h + 22 + tag_ascent + tag_descent)) / 2 + 4
    base0 = text_top + ascent
    tag_base = base0 + 2 * line_gap + descent + 28 + tag_ascent

    print(
        {
            "title_size": title_size,
            "word_w": {k: round(v, 1) for k, v in word_w.items()},
            "lockup_w": round(lockup_w, 1),
            "left": round(left, 1),
            "text_cx": round(text_cx, 1),
            "ribbon": (round(rib_x, 1), round(rib_y, 1), round(scale, 4)),
            "baselines": [round(base0 + i * line_gap, 1) for i in range(3)],
            "tag_base": round(tag_base, 1),
            "span_frac": round(max(word_w.values()) / W, 3),
        }
    )

    # Guard: nothing important should sit within 48px of the frame.
    ink_left = text_cx - max(word_w.values()) / 2
    ink_right = text_cx + max(word_w.values()) / 2
    assert left > 40, left
    assert ink_right < W - 40, ink_right
    assert rib_y > 24, rib_y
    assert tag_base + tag_descent < H - 36, tag_base

    texts = []
    for i, word in enumerate(words):
        y = base0 + i * line_gap
        texts.append(
            f'<text x="{text_cx:.1f}" y="{y:.1f}" text-anchor="middle" '
            f'font-family="Fraunces" font-size="{title_size}" fill="{INK}">{word}</text>'
        )
    texts.append(
        f'<text x="{text_cx:.1f}" y="{tag_base:.1f}" text-anchor="middle" '
        f'font-family="Outfit" font-size="{tag_size}" fill="{DEEP}">{tag}</text>'
    )
    rule_y = base0 + 2 * line_gap + descent + 14
    rule = (
        f'<line x1="{text_cx - 28:.1f}" y1="{rule_y:.1f}" '
        f'x2="{text_cx + 28:.1f}" y2="{rule_y:.1f}" '
        f'stroke="{RIBBON}" stroke-width="2" stroke-linecap="round"/>'
    )

    silk = f"""
    <g fill="none" stroke="{RIBBON}" stroke-linecap="round" stroke-opacity="0.20">
      <path d="M-60 92C160 18 340 168 620 78C900 -8 1040 64 1280 28" stroke-width="1.6"/>
      <path d="M-60 128C180 58 360 204 640 116C920 30 1060 100 1280 62" stroke-width="0.9"/>
      <path d="M-40 548C220 470 460 620 740 530C1020 440 1140 520 1280 468" stroke-width="1.6"/>
      <path d="M-40 586C240 512 480 658 760 568C1040 478 1160 556 1280 506" stroke-width="0.9"/>
    </g>
    """

    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="1260" viewBox="0 0 {W} {H}">
  <defs>
    <style>
      @font-face {{ font-family: "Fraunces"; src: url("{FRAUNCES}"); }}
      @font-face {{ font-family: "Outfit"; src: url("{OUTFIT}"); }}
    </style>
    <clipPath id="tails">
      <rect x="20" y="188" width="240" height="232"/>
    </clipPath>
  </defs>
  <rect width="{W}" height="{H}" fill="{BLUSH}"/>
  {silk}
  <g transform="translate({rib_x:.2f},{rib_y:.2f}) scale({scale:.5f})">
    {RIBBON_SVG}
  </g>
  {rule}
  {''.join(texts)}
</svg>
"""
    SVG_PATH.write_text(svg)
    cairosvg.svg2png(
        url=str(SVG_PATH),
        write_to=str(PNG_PATH),
        output_width=2400,
        output_height=1260,
    )
    print("png", PNG_PATH.stat().st_size)


if __name__ == "__main__":
    main()
