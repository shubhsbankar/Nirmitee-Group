'use client';

import Image from 'next/image';
import EmblaCarousel from './EmblaCarousel';

type EmblaOptionsType = {
  align?: 'start' | 'center' | 'end';
  loop?: boolean;
  dragFree?: boolean;
  slidesToScroll?: number;
  [key: string]: unknown;
};

type Venture = {
  id: string;
  kicker: string;
  title: string;
  blurb: string;
  ctaText: string;
  href: string;
  imgSrc: string;
  align?: 'left' | 'right';
  isComingSoon?: boolean;
};

const ventures: Venture[] = [
  {
    id: 'developers',
    kicker: 'REAL ESTATE • CONSTRUCTION',
    title: 'Nirmitee Developers',
    blurb:
      'Residential and commercial developments built with modern design, transparency, and on-time delivery.',
    ctaText: 'Explore More',
    href: '/ventures/developers',
    imgSrc:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80',
    align: 'right',
  },
  {
    id: 'traders',
    kicker: 'COMMODITIES • DISTRIBUTION',
    title: 'Nirmitee Traders',
    blurb:
      'Sourcing and distribution with strong supplier networks and reliable last-mile fulfillment.',
    ctaText: 'Explore More',
    href: '/ventures/traders',
    imgSrc:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80',
    align: 'left',
  },
  {
    id: 'vrindavan-restaurant',
    kicker: 'DINING • F&B',
    title: 'Vrindavan Restaurant',
    blurb:
      'A family-favorite destination known for warm hospitality and a carefully crafted multi-cuisine menu.',
    ctaText: 'Explore More',
    href: '/ventures/vrindavan-restaurant',
    imgSrc:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80',
    align: 'right',
  },
  {
    id: 'vrindavan-lawn',
    kicker: 'EVENTS • CELEBRATIONS',
    title: 'Vrindavan Lawn',
    blurb:
      'An open-air venue for weddings and corporate events with premium decor, stage, and guest services.',
    ctaText: 'Explore More',
    href: '/ventures/vrindavan-lawn',
    imgSrc:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=80',
    align: 'left',
  },
  {
    id: 'gulmohar-hotel',
    kicker: 'HOSPITALITY • STAYS',
    title: 'Gulmohar Hotel',
    blurb:
      'Thoughtfully designed rooms and event spaces with warm service for business and leisure travelers.',
    ctaText: 'Explore More',
    href: '/ventures/gulmohar-hotel',
    imgSrc:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80',
    align: 'right',
  },
  {
    id: 'nirmitee-fashion',
    kicker: 'FASHION • LIFESTYLE',
    title: 'Nirmitee Fashion',
    blurb:
      'Contemporary fashion and lifestyle collections that blend modern design with everyday comfort.',
    ctaText: 'Visit Website',
    href: 'https://fashion.nirmiteegroup.com/',
    imgSrc:
      'https://images.unsplash.com/photo-1520975958225-85f51bd7a4f4?auto=format&fit=crop&w=1400&q=80',
    align: 'left',
  },
  {
    id: 'new-outlet',
    kicker: 'RETAIL • EXPANSION',
    title: 'New Outlet',
    blurb: 'Coming soon — a new destination from the Nirmitee Group family.',
    ctaText: 'Coming Soon',
    href: '#',
    imgSrc:
      'https://images.unsplash.com/photo-1521332154212-9cdbf62a2b87?auto=format&fit=crop&w=1400&q=80',
    align: 'right',
    isComingSoon: true,
  },
  {
    id: 'salon',
    kicker: 'BEAUTY • GROOMING',
    title: 'Salon',
    blurb: 'Coming soon — premium grooming & styling experience.',
    ctaText: 'Coming Soon',
    href: '#',
    imgSrc:
      'https://images.unsplash.com/photo-1527799820374-dcf8f5d06d65?auto=format&fit=crop&w=1400&q=80',
    align: 'left',
    isComingSoon: true,
  },
];

function VentureSlide({ v, index }: { v: Venture; index: number }) {
  const cardPos =
    v.align === 'left'
      ? 'left-6 sm:left-8 md:left-12'
      : 'right-6 sm:right-8 md:right-12';

  return (
    <div className="relative w-full">
      {/* image (4:3) */}
      <div className="relative mx-auto w-[68vw] sm:w-[58vw] md:w-[600px] aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
        <Image
          src={v.imgSrc}
          alt={v.title}
          fill
          className="object-cover"
          priority={index === 0}
        />
      </div>

      {/* overlapping info card */}
      <article
        className={`absolute ${cardPos} -bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2
                    w-[78vw] sm:w-[56vw] md:w-[420px] max-w-[90vw]
                    bg-white text-gray-900 shadow-[0_8px_24px_rgba(0,0,0,.12)]
                    border border-gray-300
                    relative before:absolute before:-inset-2 before:border before:border-gray-300 before:rounded
                    rounded p-5 md:p-6`}
      >
        <p className="mb-2 text-[11px] tracking-[.2em] text-gray-500">{v.kicker}</p>
        <h3 className="text-xl md:text-[24px] leading-tight font-serif">{v.title}</h3>
        {v.isComingSoon && (
          <span className="mt-2 inline-flex items-center rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
            Coming Soon
          </span>
        )}
        <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{v.blurb}</p>
        <a
          href={v.href}
          className={`mt-5 inline-flex items-center gap-2 text-[15px] font-semibold ${
            v.isComingSoon ? "pointer-events-none opacity-60" : ""
          }`}
          aria-disabled={v.isComingSoon || undefined}
          target={v.href.startsWith("http") ? "_blank" : undefined}
          rel={v.href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          <span className="relative after:block after:h-[2px] after:w-full after:bg-gray-900 after:mt-[6px]">
            {v.ctaText}
          </span>
          {!v.isComingSoon && (
            <svg width="18" height="18" viewBox="0 0 24 24" className="mt-[1px]">
              <path
                fill="currentColor"
                d="M13.172 12l-4.95 4.95 1.414 1.414L16 12l-6.364-6.364-1.414 1.414z"
              />
            </svg>
          )}
        </a>
      </article>
    </div>
  );
}

export default function VenturesSection() {
  const options: EmblaOptionsType = {
    align: 'center',
    loop: false,
    dragFree: false,
    slidesToScroll: 1,
  };

  const slides = ventures.map((v, i) => <VentureSlide v={v} index={i} key={v.id} />);

  return (
    <section id="ventures" className="bg-[#082b49] py-12 md:py-20 pb-24 md:pb-28 scroll-mt-24">
      <div className="mx-auto w-full max-w-[1200px]">
        <header className="px-4 sm:px-6 md:px-8 mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            OUR VENTURES
          </h2>
        </header>

        <EmblaCarousel slides={slides} options={options} />
      </div>
    </section>
  );
}
