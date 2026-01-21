'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/menu-toggle-icon';
import { createPortal } from 'react-dom';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { LucideIcon } from 'lucide-react';
import {
	Heart,
	Flame,
	Package,
	Truck,
	Users,
	Award,
	Phone,
	MessageCircle,
	HelpCircle,
	FileText,
	MapPin,
	Clock,
} from 'lucide-react';

type LinkItem = {
	title: string;
	href: string;
	icon: LucideIcon;
	description?: string;
};

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg':
					scrolled,
			})}
		>
			<nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 lg:px-8">
				<div className="flex items-center gap-6">
					<a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
						<EdenLogo className="h-8 w-8" />
						<span className="font-bold text-xl text-foreground">Eden</span>
					</a>
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink className="px-3" asChild>
									<a href="/" className="hover:bg-accent rounded-md py-2 px-3 font-medium">
										Beranda
									</a>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent font-medium">Layanan</NavigationMenuTrigger>
								<NavigationMenuContent className="bg-background p-1 pr-1.5">
									<ul className="bg-popover grid w-lg grid-cols-2 gap-2 rounded-md border p-2 shadow">
										{layananLinks.map((item, i) => (
											<li key={i}>
												<ListItem {...item} />
											</li>
										))}
									</ul>
									<div className="p-2">
										<p className="text-muted-foreground text-sm">
											Butuh bantuan?{' '}
											<a href="https://wa.me/6282211111415" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:underline">
												Hubungi kami sekarang
											</a>
										</p>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="px-3" asChild>
									<a href="#jasa-layanan-peti" className="hover:bg-accent rounded-md py-2 px-3 font-medium">
										Produk
									</a>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent font-medium">Tentang</NavigationMenuTrigger>
								<NavigationMenuContent className="bg-background p-1 pr-1.5 pb-1.5">
									<div className="grid w-md gap-2">
										<ul className="bg-popover space-y-2 rounded-md border p-2 shadow">
											{tentangLinks.map((item, i) => (
												<li key={i}>
													<ListItem {...item} />
												</li>
											))}
										</ul>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className="px-3" asChild>
									<a href="#faq" className="hover:bg-accent rounded-md py-2 px-3 font-medium">
										FAQ
									</a>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="hidden items-center gap-3 md:flex">
					<Button variant="outline" asChild>
						<a href="tel:+6282211111415" className="flex items-center gap-2">
							<Phone className="h-4 w-4" />
							Telepon
						</a>
					</Button>
					<Button asChild className="bg-green-600 hover:bg-green-700">
						<a href="https://wa.me/6282211111415" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
							<MessageCircle className="h-4 w-4" />
							WhatsApp
						</a>
					</Button>
				</div>
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>
			<MobileMenu open={open} className="flex flex-col justify-between gap-2 overflow-y-auto">
				<NavigationMenu className="max-w-full">
					<div className="flex w-full flex-col gap-y-2">
						<a href="/" className="hover:bg-accent rounded-md p-2 font-medium">
							Beranda
						</a>
						<span className="text-sm text-muted-foreground font-medium">Layanan</span>
						{layananLinks.map((link) => (
							<ListItem key={link.title} {...link} />
						))}
						<a href="#jasa-layanan-peti" className="hover:bg-accent rounded-md p-2 font-medium">
							Produk
						</a>
						<span className="text-sm text-muted-foreground font-medium">Tentang Kami</span>
						{tentangLinks.map((link) => (
							<ListItem key={link.title} {...link} />
						))}
						<a href="#faq" className="hover:bg-accent rounded-md p-2 font-medium">
							FAQ
						</a>
					</div>
				</NavigationMenu>
				<div className="flex flex-col gap-2">
					<Button variant="outline" className="w-full bg-transparent" asChild>
						<a href="tel:+6282211111415" className="flex items-center justify-center gap-2">
							<Phone className="h-4 w-4" />
							Telepon
						</a>
					</Button>
					<Button className="w-full bg-green-600 hover:bg-green-700" asChild>
						<a href="https://wa.me/6282211111415" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
							<MessageCircle className="h-4 w-4" />
							WhatsApp
						</a>
					</Button>
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
				'fixed top-16 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
					'size-full p-4',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}

function ListItem({
	title,
	description,
	icon: Icon,
	className,
	href,
	...props
}: React.ComponentProps<typeof NavigationMenuLink> & LinkItem) {
	return (
		<NavigationMenuLink className={cn('w-full flex flex-row gap-x-2 data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-sm p-2', className)} {...props} asChild>
			<a href={href}>
				<div className="bg-background/40 flex aspect-square size-12 items-center justify-center rounded-md border shadow-sm">
					<Icon className="text-foreground size-5" />
				</div>
				<div className="flex flex-col items-start justify-center">
					<span className="font-medium">{title}</span>
					<span className="text-muted-foreground text-xs">{description}</span>
				</div>
			</a>
		</NavigationMenuLink>
	);
}

// Menu items untuk Eden
const layananLinks: LinkItem[] = [
	{
		title: 'Layanan Pemakaman',
		href: '/layanan',
		description: 'Layanan pemakaman lengkap dan profesional',
		icon: Heart,
	},
	{
		title: 'Layanan Kremasi',
		href: '/layanan#kremasi',
		description: 'Proses kremasi dengan penuh penghormatan',
		icon: Flame,
	},
	{
		title: 'Perlengkapan Duka',
		href: '#jasa-layanan-peti',
		description: 'Peti jenazah dan perlengkapan lainnya',
		icon: Package,
	},
	{
		title: 'Transportasi Jenazah',
		href: '/layanan#transportasi',
		description: 'Antar jemput jenazah 24 jam',
		icon: Truck,
	},
];

const tentangLinks: LinkItem[] = [
	{
		title: 'Tentang Kami',
		href: '/tentang',
		description: 'Profil dan sejarah Eden Layanan Kedukaan',
		icon: Users,
	},
	{
		title: 'Keunggulan Kami',
		href: '/tentang#keunggulan',
		description: 'Mengapa memilih layanan kami',
		icon: Award,
	},
	{
		title: 'Lokasi',
		href: '/kontak',
		description: 'Alamat dan peta lokasi kami',
		icon: MapPin,
	},
	{
		title: 'Jam Operasional',
		href: '/kontak#jam',
		description: 'Melayani 24 jam setiap hari',
		icon: Clock,
	},
];


function useScroll(threshold: number) {
	const [scrolled, setScrolled] = React.useState(false);

	const onScroll = React.useCallback(() => {
		setScrolled(window.scrollY > threshold);
	}, [threshold]);

	React.useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [onScroll]);

	// also check on first load
	React.useEffect(() => {
		onScroll();
	}, [onScroll]);

	return scrolled;
}


const EdenLogo = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);
