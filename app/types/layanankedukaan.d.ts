import { IconType } from "react-icons";

export type LayananKedukaan = {
    id: string;
    title: string;
    slug: string;
    name: string;
    images: string;
    benefits: Benefits[];   
}

export type Benefits = {
    id: string;
    description: string;
}
