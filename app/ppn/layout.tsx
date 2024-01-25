import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "PPN",
	description: siteConfig.description,
	keywords: `${siteConfig.keywords}, harga total, nama barang, include ppn, satuan, harga`,
};

export default function PpnLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			{children}
		</section>
	);
}
