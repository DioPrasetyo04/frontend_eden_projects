
import { CardColor } from "../components/CardPelayanan";

export type HeroSlideData = {
  image: string;
  subtitle: string;
}

export type HeroServiceData = {
  title: string;
  description: string;
  color: CardColor;
  delay: number;
  className?: string;
  iconPath: string; // SVG path data
}
