import { IconType } from "react-icons";


export interface ServiceItem {
  id: string;
  title: string;
  icon: string; // Changed from IconType to string for JSON compatibility
  href: string;
}

