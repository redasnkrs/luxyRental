// CarCard.tsx
import React from "react";

export type Stat = {
  label: string; // e.g., "Top Speed"
  value: string; // e.g., "330 km/h"
};

export type CarCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  pricePerDay: number; // e.g., 1299
  stats: Stat[]; // exactly 3 per your design (speed, 0-100, hp)
  onLearnMore?: () => void;
  className?: string;
};

const currency = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

export const CarCard: React.FC<CarCardProps> = ({
  title,
  imageSrc,
  imageAlt,
  pricePerDay,
  stats,
  onLearnMore,
  className = "",
}) => {
  return (
    <article
      className={` relative overflow-hidden   bg-black shadow-lg ${className}`}
      aria-label={title}
    >
      {/* Image */}
      <div className="relative">
        {/* Aspect ratio to keep consistent height */}
        <div className="aspect-[16/9] w-full bg-neutral-900">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover rounded-xl"
            loading="lazy"
          />
        </div>

        {/* Dark gradient overlay: stronger at bottom for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

        {/* Top-left stat chips */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {stats.map((s) => (
            <div
              key={`${s.label}-${s.value}`}
              className="rounded-md bg-black/60 px-3 py-1.5 text-xs text-neutral-200 backdrop-blur-sm border border-white/10"
            >
              <span className="font-medium text-white">{s.value}</span>
              <span className="ml-1 text-neutral-300">• {s.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom content row: title + price left, CTA right */}
      <div className="mt-2 bottom-4 left-4 right-4 flex items-end justify-between">
        <div className="flex min-w-0 flex-col">
          <h4 className="truncate text-white text-lg sm:text-xl font-semibold">
            {title}
          </h4>
          <p className="text-neutral-300 text-sm">
            from {currency(pricePerDay)}/day
          </p>
        </div>

        <button
          type="button"
          onClick={onLearnMore}
          id="card-btn"
          className="inline-flex items-center gap-2 px-4 py-2  "
        >
          Learn More
          <span aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#666666"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </button>
      </div>
    </article>
  );
};
