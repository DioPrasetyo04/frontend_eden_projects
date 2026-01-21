import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Layanan",
    links: [
      { name: "Layanan Pemakaman", href: "/layanan" },
      { name: "Kremasi", href: "/layanan#kremasi" },
      { name: "Perlengkapan Duka", href: "#jasa-layanan-peti" },
      { name: "Transportasi Jenazah", href: "/layanan#transportasi" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { name: "Tentang Kami", href: "/tentang" },
      { name: "Keunggulan", href: "/tentang#keunggulan" },
      { name: "Galeri", href: "#" },
      { name: "Kontak", href: "/kontak" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { name: "Hubungi Kami", href: "https://wa.me/6282211111415" },
      { name: "FAQ", href: "#faq" },
      { name: "Syarat & Ketentuan", href: "#" },
      { name: "Kebijakan Privasi", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaWhatsapp className="size-5" />, href: "https://wa.me/6282211111415", label: "WhatsApp" },
  { icon: <FaYoutube className="size-5" />, href: "#", label: "YouTube" },
];

const defaultLegalLinks = [
  { name: "Syarat & Ketentuan", href: "#" },
  { name: "Kebijakan Privasi", href: "#" },
];

const EdenLogo = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

export const Footer7 = ({
  logo = {
    url: "/",
    alt: "Eden Layanan Kedukaan",
    title: "Eden",
  },
  sections = defaultSections,
  description = "Jasa pemakaman profesional yang siap membantu Anda dengan penuh dedikasi dan penghormatan di saat-saat yang sulit.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2026 Eden Layanan Kedukaan. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <footer className="py-16 bg-slate-950 text-slate-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start lg:max-w-sm">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                 <EdenLogo className="h-8 w-8 text-white" />
                <h2 className="text-2xl font-bold text-white tracking-tight">{logo.title}</h2>
              </a>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-slate-400">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-white transition-colors">
                  <a href={social.href} aria-label={social.label} target={social.label === "WhatsApp" ? "_blank" : undefined} rel={social.label === "WhatsApp" ? "noopener noreferrer" : undefined}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-white text-lg">{section.title}</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-white transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-800 pt-8 text-xs font-medium text-slate-500 md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-4 sm:flex-row md:order-2">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-white transition-colors">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
