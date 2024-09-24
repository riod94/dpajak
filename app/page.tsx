import React from "react";
import { title, subtitle } from "@/components/primitives";
import Pph21TerContainer from "@/components/containers/Pph21TerContainer";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Kalkulator&nbsp;</h1>
				<h1 className={title({ color: "green" })}>PPh 21&nbsp; Masa</h1>
				<br />
				<h2 className={subtitle({ class: "mt-2" })}>
					Simulasi perhitungan PPh Pasal 21 Masa Pajak (Jan-Nov)
				</h2>
			</div>

			<Pph21TerContainer />

			<div className="container m-auto flex flex-col justify-center gap-6 my-4">
				<p className="font-bold">Disclaimer</p>
				<p>
					Sesuai dengan Peraturan Pemerintah Nomor 58 Tahun 2023 dan
					Peraturan Menteri Keuangan Nomor 168 Tahun 2023, mulai 1 Januari
					2024 berlaku tarif Pajak Efektif Rata-rata(TER)
				</p>
			</div>
		</section>
	);
}
