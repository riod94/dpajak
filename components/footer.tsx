import { Link } from "@nextui-org/link";

export default function Footer() {
	const startYear = 2024;
	const currentYear = new Date().getFullYear();

	const year =
		currentYear > startYear ? `${startYear}-${currentYear}` : startYear;
	return (
		<footer className="w-full flex items-center justify-center py-3">
			<Link
				// isExternal
				className="flex items-center gap-1 text-current"
				href={"/"}
				title="nextui.org homepage"
			>
				<span className="text-default-600">&copy; {year}</span>
				<p className="text-primary">KPAJAK</p>
			</Link>
		</footer>
	);
}
