export type Slide = {
  image: StaticImageData | string;
  subtitle?: string;
};

export type Props = {
  slides: Slide[];
  interval?: number;
  title?: string;
  className?: string;
};