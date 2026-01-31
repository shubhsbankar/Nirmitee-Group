'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

/** Minimal options type so we don't depend on external type exports */
type EmblaOptionsType = {
  align?: 'start' | 'center' | 'end';
  loop?: boolean;
  dragFree?: boolean;
  slidesToScroll?: number;
  speed?: number;
  [key: string]: unknown;
};

const TWEEN_FACTOR = 4.2;
const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

export default function EmblaCarousel({
  slides,
  options,
}: {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
}) {
  const plugins = useMemo(() => [Autoplay({ delay: 4500, stopOnInteraction: false })], []);
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...(options || {}), loop: false }, plugins);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();
    const sp = emblaApi.scrollProgress();
    setProgress(sp);

    const values = emblaApi.scrollSnapList().map((snap, index) => {
      let diff = snap - sp;
      if (engine.options.loop) {
  engine.slideLooper.loopPoints.forEach((lp) => {
    if (index === lp.index && lp.target() !== 0) {
      diff += Math.sign(lp.target()) === -1 ? 1 : -1;
    }
  });
}

      return clamp(1 - Math.abs(diff * TWEEN_FACTOR), 0, 1);
    });

    setTweenValues(values);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on('scroll', onScroll);
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onScroll]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative">
      {/* VIEWPORT */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-x gap-4">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="basis-[85%] sm:basis-[70%] md:basis-full pl-4 md:pl-6"
              style={{ opacity: tweenValues[i] ?? 1 }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* ARROWS */}
      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white p-2 hover:bg-black/80"
        aria-label="Previous"
      >
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white p-2 hover:bg-black/80"
        aria-label="Next"
      >
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>

      {/* DOTS */}
      <div className="absolute -bottom-8 left-1/2 z-10 flex -translate-x-1/2 transform gap-2 py-2">
        {scrollSnaps.map((_, i) => (
          <DotButton
            key={i}
            onClick={() => onDotButtonClick(i)}
            isSelected={i === selectedIndex}
            className="size-2 rounded-full bg-black/50 hover:bg-black/70 transition-opacity"
          />
        ))}
      </div>

      {/* PROGRESS BAR */}
      <div className="mt-8 h-[3px] w-full bg-black/10">
        <div
          className="h-[3px] bg-black/60"
          style={{ width: `${Math.max(0, Math.min(1, progress)) * 100}%` }}
        />
      </div>
    </section>
  );
}
