import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number; // milliseconds between letters
  duration?: number; // seconds per letter
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines' | 'chars,words' | 'words,lines' | 'chars,words,lines';
  from?: Record<string, any>;
  to?: Record<string, any>;
  threshold?: number; // 0..1 portion of element in view
  rootMargin?: string; // e.g. '-100px'
  textAlign?: 'left' | 'center' | 'right';
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  onLetterAnimationComplete?: () => void;
  enableScrollTrigger?: boolean; // if false, no scroll trigger
  loop?: boolean; // if true, apply subtle looping motion after intro
  loopOptions?: { amplitude?: number; duration?: number; stagger?: number };
};

const SplitText = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete,
  enableScrollTrigger = true,
  loop = false,
  loopOptions,
}: SplitTextProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if ((document as any).fonts?.status === 'loaded') {
      setFontsLoaded(true);
    } else if ((document as any).fonts?.ready) {
      (document as any).fonts.ready.then(() => setFontsLoaded(true));
    } else {
      // Fallback: proceed after a short delay if Font Loading API isn't available
      const t = setTimeout(() => setFontsLoaded(true), 300);
      return () => clearTimeout(t);
    }
  }, []);

  useGSAP(
    () => {
      const el = ref.current as any;
      if (!el || !text || !fontsLoaded) return;

      if (el._rbsplitInstance) {
        try { el._rbsplitInstance.revert(); } catch {}
        el._rbsplitInstance = null;
      }

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin || '0');
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign = marginValue === 0 ? '' : marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      // Reset content to original text
      el.innerHTML = '';
      const container = document.createElement('span');
      container.style.display = 'inline-block';
      container.style.whiteSpace = 'normal';
      container.className = 'split-container';

      const targets: HTMLElement[] = [];

      const createCharSpan = (ch: string) => {
        const span = document.createElement('span');
        span.className = 'split-char inline-block will-change-transform';
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        targets.push(span);
        return span;
      };

      const createWordSpan = (word: string) => {
        const span = document.createElement('span');
        span.className = 'split-word inline-block will-change-transform';
        span.textContent = word;
        targets.push(span);
        return span;
      };

      if (splitType.includes('chars')) {
        for (const ch of Array.from(text)) {
          container.appendChild(createCharSpan(ch));
        }
      } else if (splitType.includes('words')) {
        const words = text.split(/(\s+)/);
        for (const token of words) {
          if (/\s+/.test(token)) {
            container.appendChild(document.createTextNode(token));
          } else if (token.length) {
            container.appendChild(createWordSpan(token));
          }
        }
      } else {
        // Fallback to chars
        for (const ch of Array.from(text)) {
          container.appendChild(createCharSpan(ch));
        }
      }

      el.appendChild(container);

      const tween = gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          ...(enableScrollTrigger
            ? {
                scrollTrigger: {
                  trigger: el,
                  start,
                  once: true,
                  fastScrollEnd: true,
                  anticipatePin: 0.4,
                },
              }
            : {}),
          onComplete: () => {
            onLetterAnimationComplete?.();
            if (loop) {
              const amp = loopOptions?.amplitude ?? 2;
              const dur = loopOptions?.duration ?? 3;
              const stg = loopOptions?.stagger ?? (delay / 1000);
              gsap.to(targets, {
                y: (i) => (i % 2 === 0 ? amp : -amp),
                duration: dur,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                stagger: stg,
                overwrite: false,
              });
            }
          },
          willChange: 'transform, opacity',
          force3D: true,
        }
      );

      (el as any)._rbsplitInstance = {
        revert: () => {
          try {
            tween.kill();
          } catch {}
          el.textContent = text;
        }
      };

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === el) st.kill();
        });
        try { (el as any)._rbsplitInstance?.revert?.(); } catch {}
        (el as any)._rbsplitInstance = null;
      };
    },
    { dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        onLetterAnimationComplete,
      ],
      scope: ref as any,
    }
  );

  const style: React.CSSProperties = {
    textAlign,
    overflow: 'hidden',
    display: 'inline-block',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    willChange: 'transform, opacity',
  };
  const classes = `split-parent ${className || ''}`.trim();

  if (tag === 'h1') return <h1 ref={ref as any} style={style} className={classes}>{text}</h1>;
  if (tag === 'h2') return <h2 ref={ref as any} style={style} className={classes}>{text}</h2>;
  if (tag === 'h3') return <h3 ref={ref as any} style={style} className={classes}>{text}</h3>;
  if (tag === 'h4') return <h4 ref={ref as any} style={style} className={classes}>{text}</h4>;
  if (tag === 'h5') return <h5 ref={ref as any} style={style} className={classes}>{text}</h5>;
  if (tag === 'h6') return <h6 ref={ref as any} style={style} className={classes}>{text}</h6>;
  return <p ref={ref as any} style={style} className={classes}>{text}</p>;
};

export default SplitText;
