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
};

const ventures: Venture[] = [
  {
    id: 'developers',
    kicker: 'REAL ESTATE • CONSTRUCTION',
    title: 'Nirmittee Developers',
    blurb:
      'Residential and commercial developments built with modern design, transparency, and on-time delivery.',
    ctaText: 'Explore More',
    href: '/ventures/developers',
    imgSrc: '/ventures/developers.png',
    align: 'right',
  },
  {
    id: 'traders',
    kicker: 'COMMODITIES • DISTRIBUTION',
    title: 'Nirmittee Traders',
    blurb:
      'Sourcing and distribution with strong supplier networks and reliable last-mile fulfillment.',
    ctaText: 'Explore More',
    href: '/ventures/traders',
    imgSrc: '/ventures/traders.png',
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
    imgSrc: '/ventures/vrindavan-restaurant.png',
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
    imgSrc: '/ventures/vrindavan-lawn.png',
    align: 'left',
  },
  {
    id: 'Leozkate-jewellery',
    kicker: 'JEWELLERY • LUXURY',
    title: 'Leozkate Jewellery',
    blurb:
      'Exquisite handcrafted jewellery that blends timeless elegance with modern design, crafted with the finest materials.',
    ctaText: 'Explore More',
    href: '/ventures/leozkate-jewellery',
    imgSrc: '/ventures/leozkate jewellery.png',
    align: 'right',
  }, // ← the missing comma was here
  {
    id: 'tours-travels',
    kicker: 'TRAVEL • EXPERIENCES',
    title: 'Nirmittee Tours & Travels',
    blurb:
      'Tailored itineraries, corporate travel, and curated experiences—end-to-end planning, ticketing, and stays.',
    ctaText: 'Explore More',
    href: '/ventures/tours-and-travels',
    imgSrc: '/ventures/tours-travels.png',
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
    imgSrc: '/ventures/gulmohar-hotel.png',
    align: 'right',
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
        <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{v.blurb}</p>
        <a href={v.href} className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold">
          <span className="relative after:block after:h-[2px] after:w-full after:bg-gray-900 after:mt-[6px]">
            {v.ctaText}
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" className="mt-[1px]">
            <path
              fill="currentColor"
              d="M13.172 12l-4.95 4.95 1.414 1.414L16 12l-6.364-6.364-1.414 1.414z"
            />
          </svg>
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
    <section className="bg-[#082b49] py-12 md:py-20 pb-24 md:pb-28">
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
