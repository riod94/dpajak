export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "KPAJAK",
	description: "KPAJAK adalah aplikasi kalkulator pajak online. Hitung pajak penghasilan pasal 21 dan pajak pertambahan nilai dengan mudah",
	navItems: [
		{
			label: "Pph21",
			href: "/",
		},
		{
			label: "PPN",
			href: "/ppn",
		},
		// {
		// 	label: "Blog",
		// 	href: "/blog",
		// },
		{
			label: "About",
			href: "/about",
		}
	],
	links: {
		github: "https://github.com/riod94",
		sponsor: "https://nusawork.com"
	},
};
