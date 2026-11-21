import { useId } from "react";

export function SilkField() {
  return (
    <svg
      className="silk-drift pointer-events-none absolute inset-0 h-full w-full text-ribbon/30"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <path d="M-80 140C220 20 400 260 740 120C1080 -20 1240 100 1560 40" stroke="currentColor" strokeWidth="1.5" />
      <path d="M-80 200C240 100 440 320 780 180C1120 40 1280 160 1560 90" stroke="currentColor" strokeWidth="0.8" />
      <path d="M-40 780C280 680 520 900 860 750C1180 600 1320 720 1560 640" stroke="currentColor" strokeWidth="1.5" />
      <path d="M-40 840C300 750 560 960 900 810C1220 660 1360 780 1560 700" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

export function Ribbon({ className }: { className?: string }) {
  const clip = `${useId().replace(/:/g, "")}-fold`;
  return (
    <svg viewBox="0 0 280 450" className={className} aria-hidden="true">
      <defs>
        <clipPath id={clip}>
          <rect x="0" y="0" width="132" height="250" />
        </clipPath>
      </defs>
      <polygon className="fill-ribbon-deep" points="196,118 138,176 44,424 112,434" />
      <polygon className="fill-ribbon" points="70,124 158,184 252,368 184,416" />
      <path
        d="M94 198 A82 106 0 1 1 190 198"
        className="fill-none stroke-ribbon"
        strokeWidth="60"
        strokeLinecap="butt"
      />
      <path
        d="M94 198 A82 106 0 1 1 190 198"
        className="fill-none stroke-ribbon-deep"
        strokeWidth="60"
        strokeLinecap="butt"
        clipPath={`url(#${clip})`}
      />
    </svg>
  );
}
