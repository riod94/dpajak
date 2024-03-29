"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { subtitle, title } from "@/components/primitives";
import DefaultInput from "@/components/reusables/DefaultInput";
import ButtonRadioGroup from "@/components/reusables/ButtonRadioGroup";
import DefaultAccordion from "@/components/reusables/DefaultAccordion";
import { FAQ, INITIAL_STATE } from "@/config/constants";
import { PpnStateInterface } from "@/config/interfaces";
import { Money } from "@/utils";

export default function PpnPage() {
	const [state, setState] = React.useState(INITIAL_STATE.PPN_STATE);

	const handleStateChange = (
		groupKey: keyof typeof INITIAL_STATE.PPN_STATE,
		key: number,
		value: string
	) => {
		setState((prev) => {
			const newState = { ...prev };
			newState[groupKey][key].value = value;
			return newState;
		});
	};

	const handleResetState = () => {
		const resetState = { ...INITIAL_STATE.PPN_STATE };
		Object.keys(resetState).forEach((groupKey) => {
			resetState[groupKey as keyof PpnStateInterface].forEach(
				(item, index) => {
					const value =
						item.name == "type"
							? "Tidak"
							: (item.type === "money" ? "0": "");
					resetState[groupKey as keyof PpnStateInterface][index].value =
						value;
				}
			);
		});
		setState(resetState);
	};

	const handleSubmit = () => {
		// Mengambil nilai price, quantity, dan discount dari state dan ubah menjadi number
		const price: number = Money.toNumeric(
			state.components.find((item: any) => item.name == "price")?.value
		);
		const quantity: number = Money.toNumeric(
			state.components.find((item: any) => item.name == "quantity")?.value
		);
		const discount: number = Money.toNumeric(
			state.components.find((item: any) => item.name == "discount")?.value
		);

		const tax: number = 0.11; // Persentase pajak

		let dpp: number = price * quantity - discount; // Menghitung nilai DPP

		const type: string =
			state.settings.find((item: any) => item.name == "type")?.value ||
			"Tidak"; // Mendapatkan nilai tipe ("Ya" atau "Tidak")

		let ppn: number = dpp * tax; // Menghitung nilai PPN

		if (type == "Ya") {
			// Jika tipe adalah "Ya", maka menghitung nilai DPP sebelum pajak
			dpp = dpp / (1 + tax); // Menghitung nilai DPP sebelum pajak
			ppn = dpp * tax; // Menghitung nilai PPN berdasarkan DPP
		}

		const total: number = dpp + ppn; // Menghitung total (DPP + PPN)

		setState((prev) => {
			return {
				...prev,
				result: [
					...prev.result.map((item: any) => {
						if (item.name === "dpp") {
							return { ...item, value: Money.toString(Math.round(dpp)) };
						}
						if (item.name === "ppn") {
							return { ...item, value: Money.toString(Math.round(ppn)) };
						}
						if (item.name === "total") {
							return {
								...item,
								value: Money.toString(Math.round(total)),
							};
						}
						return item;
					}),
				],
			};
		});
	};

	return (
		<div>
			<div className="text-center justify-center">
				<h1 className={title()}>Kalkulator&nbsp;</h1>
				<h1 className={title({ color: "green" })}>PPN&nbsp;</h1>
				<br />
				<h2 className={subtitle({ class: "my-4" })}>
					Simulasi perhitungan Pajak Pertambahan Nilai dari Barang/Jasa
				</h2>
			</div>

			<div className="container m-auto gap-6 grid grid-cols-1 lg:grid-cols-5 my-8">
				{state?.settings?.map((item: any, index: number) =>
					item.type == "text" ? (
						<div key={item.name} className="w-full col-span-2">
							<DefaultInput
								{...item}
								onChange={(value) =>
									handleStateChange("settings", index, value)
								}
							/>
						</div>
					) : (
						<div key={item.name} className="w-full col-span-3">
							<ButtonRadioGroup
								{...item}
								onValueChange={(value) =>
									handleStateChange("settings", index, value)
								}
							/>
						</div>
					)
				)}
			</div>
			<div className="container m-auto gap-2 grid grid-cols-1 lg:grid-cols-6 my-8">
				{state?.components?.map((item: any, index: number) => (
					<div key={item.name} className="w-full col-span-2">
						<DefaultInput
							{...item}
							onChange={(value) =>
								handleStateChange("components", index, value)
							}
						/>
					</div>
				))}
			</div>
			<div className="container m-auto gap-2 grid grid-cols-1 lg:grid-cols-6 my-8">
				{state?.result?.map((item: any, index: number) => (
					<div key={item.name} className="w-full col-span-2">
						<DefaultInput
							{...item}
							onChange={(value) =>
								handleStateChange("result", index, value)
							}
						/>
					</div>
				))}
			</div>
			<div className="container m-auto flex justify-center gap-6 my-4">
				<Button variant="bordered" onClick={handleResetState}>
					Reset
				</Button>
				<Button type="submit" color="success" onClick={handleSubmit}>
					Hitung
				</Button>
			</div>

			<div className="container m-auto flex flex-col justify-center gap-6 my-4">
				<p className="font-bold">Disclaimer</p>
				<p>
					Kalkulator Pajak Pertambahan Nilai (PPN) disusun sesuai dengan
					ketentuan yang berlaku per tanggal 1 April 2022. Berdasarkan
					regulasi terbaru, tarif PPN ditetapkan sebesar 11% atau meningkat
					dibandingkan tarif sebelumnya yang sebesar 10%.
				</p>
			</div>
			<div className="container m-auto flex flex-col justify-center gap-6 mb-4 mt-8">
				<p className="font-bold">FAQ</p>
				<DefaultAccordion items={FAQ.PPN} />
			</div>
		</div>
	);
}
