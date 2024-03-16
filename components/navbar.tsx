"use client";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";

import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, HeartFilledIcon } from "@/components/icons";

import { Logo } from "@/components/icons";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<Link className="flex justify-start items-center gap-1" href="/">
						<Logo className="text-blue-800" />
						<p
							className={
								"font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-green-500"
							}
						>
							DPAJAK
						</p>
					</Link>
				</NavbarBrand>
				<ul className="hidden md:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<Link
								href={item.href}
								color={item.href == pathname ? "success" : "foreground"}
							>
								{item.label}
							</Link>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link
						isExternal
						href={siteConfig.links.github}
						aria-label="Github"
					>
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<Button
						isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href={siteConfig.links.sponsor}
						startContent={<HeartFilledIcon className="text-danger" />}
						variant="flat"
					>
						Sponsor
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								href={item.href}
								color={item.href == pathname ? "success" : "foreground"}
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
					<NavbarMenuItem>
						<Button
							isExternal
							as={Link}
							className="text-sm font-normal text-default-600 bg-default-100"
							href={siteConfig.links.sponsor}
							startContent={<HeartFilledIcon className="text-danger" />}
							variant="flat"
						>
							Sponsor
						</Button>
					</NavbarMenuItem>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};

export default Navbar;