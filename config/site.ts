export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "KPAJAK",
	description: "KPAJAK adalah aplikasi kalkulator pajak online. Hitung pajak penghasilan pasal 21 dan pajak pertambahan nilai dengan mudah",
	keywords: "Kpajak, kpajak, kalkulator, pajak, kalkulator pajak, kalkulator-pajak, pph, ppn, pph21, pph 21, pasal, pph pasal 21",
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
