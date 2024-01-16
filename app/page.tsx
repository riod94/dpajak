"use client";
import React from "react";
import { Button, Divider } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import ButtonRadioGroup from "@/components/reusables/ButtonRadioGroup";
import DefaultInput from "@/components/reusables/DefaultInput";
import { INITIAL_STATE, Pph21StateInterface } from "@/config/constants";

export default function Home() {
	const [state, setState] = React.useState(INITIAL_STATE.PPH_21_STATE);

	const handleStateChange = (
		groupKey: keyof Pph21StateInterface,
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
		const resetState = { ...INITIAL_STATE.PPH_21_STATE };
		Object.keys(resetState).forEach((groupKey) => {
			resetState[groupKey as keyof Pph21StateInterface].forEach(
				(item, index) => {
					let value = "";
					if (item.type === "button-group") {
						switch (item.name) {
							case "npwp":
								value = "Ya";
								break;
							case "taxMethod":
								value = "GROSS";
								break;
							case "ptkpStatus":
								value = "TK/0";
								break;
							case "earningPeriod":
								value = "12";
								break;
						}
					}
					if (item.type === "money") {
						value = "0";
					}
					resetState[groupKey as keyof Pph21StateInterface][index].value =
						value;
				}
			);
		});
		setState(resetState);
	};

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Kalkulator&nbsp;</h1>
				<h1 className={title({ color: "green" })}>PPh 21&nbsp;</h1>
				<br />
				<h2 className={subtitle({ class: "my-4" })}>
					Simulasi perhitungan PPh Pasal 21
				</h2>
			</div>

			<div className="container m-auto gap-6 grid grid-cols-1 lg:grid-cols-3">
				<div className="w-full">
					<h6 className="font-bold text-center my-2">Data Personal</h6>
					{state?.personal?.map((item: any, index: number) => (
						<div key={item.name}>
							<Divider />
							<div className="m-2">
								{item.type == "text" ? (
									<DefaultInput
										{...item}
										value={state.personal[index].value}
										onChange={(value) =>
											handleStateChange("personal", index, value)
										}
									/>
								) : (
									<ButtonRadioGroup
										{...item}
										value={state.personal[index].value}
										onValueChange={(value) =>
											handleStateChange("personal", index, value)
										}
									/>
								)}
							</div>
						</div>
					))}
				</div>
				<div className="w-full">
					<h6 className="font-bold text-center my-2">Penghasilan</h6>
					{state?.earnings?.map((item: any, index: number) => (
						<div key={item.name}>
							<Divider />
							<div className="m-2">
								<DefaultInput
									{...item}
									value={state.earnings[index].value}
									onChange={(value) =>
										handleStateChange("earnings", index, value)
									}
								/>
							</div>
						</div>
					))}
					<Divider className="my-3" />
					<h6 className="font-bold text-center my-2">Potongan</h6>
					{state?.deductions?.map((item: any, index: number) => (
						<div key={item.name}>
							<Divider />
							<div className="m-2">
								<DefaultInput
									{...item}
									value={state.deductions[index].value}
									onChange={(value) =>
										handleStateChange("deductions", index, value)
									}
								/>
							</div>
						</div>
					))}
					<div className="container m-auto flex justify-center gap-6 mb-1 mt-4">
						<Button variant="bordered" onClick={handleResetState}>
							Reset
						</Button>
						<Button type="submit" color="success">
							Hitung
						</Button>
					</div>
				</div>
				<div className="w-full">
					<h6 className="font-bold text-center my-2">
						Hasil Perhitungan PPh 21
					</h6>
					{state?.result?.map((item: any, index: number) => (
						<div key={item.name}>
							<Divider />
							<div className="m-2">
								<DefaultInput
									{...item}
									value={state.result[index].value}
									onChange={(value) =>
										handleStateChange("result", index, value)
									}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
