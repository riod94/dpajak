export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "DPAJAK",
	description: "DPAJAK adalah aplikasi kalkulator pajak online. Hitung pajak penghasilan pasal 21 dan pajak pertambahan nilai dengan mudah",
	keywords: "Dpajak, Dpajak, kalkulator, pajak, kalkulator pajak, kalkulator-pajak, pph, ppn, pph21, pph 21, pasal, pph pasal 21, about, tarif efektif, tarif efektif rata-rata, TER, ter, masa pajak, masa pajak terakhir, terbaru, 2024, tarif, bonus, THR, pegawai tetap, ppn, pajak pertambahan nilai, dpp, bruto, kategori, simulasi, perhitungan, gaji,tunjangan, pengurang, tarif pajak, 2024",
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
