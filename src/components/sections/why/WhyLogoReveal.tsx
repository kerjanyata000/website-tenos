"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

type PrismEngine = {
  setProgress: (p: number) => void;
  resize: (w: number, h: number, dpr?: number) => void;
  dispose: () => void;
};

/** Scroll → prism progress map from Intelligence Prism.html (syncs with 3 Why cards). */
const SCROLL_MAP: Array<[number, number]> = [
  [0, 0],
  [0.17, 0.15],
  [0.34, 0.35],
  [0.66, 0.55],
  [0.84, 0.8],
  [1, 1],
];

const REDUCED_STILLS = [0, 0.45, 1] as const;

function clamp01(x: number) {
  return Math.min(1, Math.max(0, x));
}

function mapScrollToProgress(s: number) {
  const t = clamp01(s);
  for (let i = 1; i < SCROLL_MAP.length; i++) {
    if (t <= SCROLL_MAP[i][0]) {
      const a = SCROLL_MAP[i - 1];
      const b = SCROLL_MAP[i];
      return a[1] + ((b[1] - a[1]) * (t - a[0])) / (b[0] - a[0] || 1);
    }
  }
  return 1;
}

function deviceOptions(width: number) {
  if (width < 640) {
    return {
      w: Math.min(width, 350),
      h: 220,
      o: {
        fragments: 8,
        facets: 4,
        lod: "low",
        sx: 1.5,
        sy: 0.6,
        hh0: 2.6,
        hh1: 1.3,
        maxDpr: 1.5,
      },
    };
  }
  if (width < 1024) {
    return {
      w: 294,
      h: 340,
      o: { fragments: 12, facets: 6, maxDpr: 2 },
    };
  }
  return {
    w: 420,
    h: 420,
    o: { fragments: 12, facets: 6, maxDpr: 2 },
  };
}

function readScrollProgress(scrolly: HTMLElement) {
  const rect = scrolly.getBoundingClientRect();
  const range = Math.max(1, scrolly.offsetHeight - window.innerHeight);
  return clamp01(-rect.top / range);
}

function FallbackRing({ style }: { style?: CSSProperties }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="wy-ring-img wy-prism-fallback"
      src="/images/why/tenos-ring-3d.webp"
      alt=""
      width={840}
      height={840}
      draggable={false}
      decoding="async"
      style={style}
    />
  );
}

/**
 * Why mid visual — scroll-scrubbed Intelligence Prism (transparent WebGL).
 * Keeps `.rb-stage` footprint used by the sticky / scroll-timeline Why layout.
 */
export function WhyLogoReveal() {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engRef = useRef<PrismEngine | null>(null);
  const lastP = useRef(-1);
  const [mode, setMode] = useState<"loading" | "webgl" | "fallback">("loading");

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;

    let disposed = false;
    let reduceMotion = false;
    try {
      reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
    } catch {
      /* ignore */
    }

    const scrolly =
      stage.closest<HTMLElement>(".wy-scrolly") ??
      stage.closest<HTMLElement>(".wy") ??
      null;

    let raf = 0;
    const applyProgress = () => {
      const eng = engRef.current;
      if (!eng || !scrolly) return;
      let p = mapScrollToProgress(readScrollProgress(scrolly));
      if (reduceMotion) {
        const s = readScrollProgress(scrolly);
        p = REDUCED_STILLS[s < 0.34 ? 0 : s < 0.66 ? 1 : 2];
      }
      if (Math.abs(p - lastP.current) < 0.0008) return;
      lastP.current = p;
      eng.setProgress(p);
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(applyProgress);
    };

    const fit = () => {
      const eng = engRef.current;
      if (!eng || !stage) return;
      const cssW = stage.clientWidth || 420;
      const cssH = stage.clientHeight || 420;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      eng.resize(cssW, cssH, dpr);
      lastP.current = -1;
      applyProgress();
    };

    const boot = async () => {
      try {
        const { createTenosPrism } = await import("./tenosPrism");
        if (disposed) return;
        const opts = deviceOptions(window.innerWidth).o;
        const eng = createTenosPrism(canvas, opts) as PrismEngine;
        if (disposed) {
          eng.dispose();
          return;
        }
        engRef.current = eng;
        setMode("webgl");
        fit();
      } catch {
        if (!disposed) setMode("fallback");
      }
    };

    void boot();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    const ro = new ResizeObserver(() => {
      fit();
      onScrollOrResize();
    });
    ro.observe(stage);
    if (scrolly) ro.observe(scrolly);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      ro.disconnect();
      engRef.current?.dispose();
      engRef.current = null;
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="rb-stage wy-ring-stage wy-prism-stage"
      aria-hidden="true"
    >
      <div className="wy-prism-frame">
        <canvas
          ref={canvasRef}
          className="wy-prism-canvas"
          style={{
            display: mode === "webgl" ? "block" : "none",
            background: "transparent",
          }}
        />
        {mode !== "webgl" ? <FallbackRing /> : null}
      </div>
    </div>
  );
}
