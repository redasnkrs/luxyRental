export interface CarStat {
  label: string;
  value: string;
}

export interface Car {
  title: string;
  imageSrc: string;
  hoverImageSrc?: string;
  imageAlt: string;
  pricePerDay: number;
  stats: CarStat[];
}

export interface NewsCard {
  url: string;
  title: string;
  description: string;
  id: number;
  position: string;
  longDescription?: string[];
  gallery?: string[];
  specs?: { label: string; value: string }[];
  accentColor?: string;
}

export type BrandId = "lamborghini" | "ferrari" | "porsche" | "bmw" | "aston-martin" | "mercedes" | "mclaren" | "nissan";
