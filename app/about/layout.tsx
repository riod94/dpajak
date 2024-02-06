import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: siteConfig.description,
	keywords: `${siteConfig.keywords}, about, tentang kami, tentang dpajak`,
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				{children}
			</div>
		</section>
	);
}
