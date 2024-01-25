import { title } from "@/components/primitives";

export default function AboutPage() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({ color: "green" })}>About</h1>
			</div>
			<div className="container m-auto gap-6 grid grid-cols-1">
				<p>
					KPAJAK merupakan kalkulator perhitungan pajak yang sederhana dan
					mudah digunakan. Dengan antarmuka yang intuitif, Anda dapat
					dengan menghitung Pajak Penghasilan Pasal 21 (PPh21) dan Pajak
					Pertambahan Nilai (PPN) dengan cepat dan mudah.
				</p>
				<p>
					Jangan biarkan perhitungan PPh21 menjadi beban tambahan bagi
					Anda. Dengan KPAJAK, Anda dapat membuat simulasi perhitungan
					pajak dengan efisien, akurat dan selalu terbaru sesuai dengan
					undang-undang yang berlaku. Untuk kedepannya KPAJAK akan terus
					melakukan update perhitungan pajak lainnya!
				</p>
			</div>
		</section>
	);
}
