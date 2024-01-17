"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Money } from "@/utils";

interface DefaultInputProps {
	isReadOnly?: boolean;
	isRequired?: boolean;
	isInvalid?: boolean;
	isDisabled?: boolean;
	errorMessage?: string;
	type?:
		| "text"
		| "number"
		| "money"
		| "email"
		| "password"
		| "url"
		| "date"
		| "time"
		| "tel";
	name?: string;
	label?: string;
	placeholder?: string;
	value?: string;
	defaultValue?: string;
	onChange?: (value: string) => void;
	classNames?: {
		input?: string;
		label?: string;
		mainWrapper?: string;
	};
	labelPlacement?: "outside-left" | "inside" | "outside";
	variant?: "flat" | "bordered" | "faded" | "underlined";
}

function DefaultInput({
	isReadOnly = false,
	isRequired = false,
	isInvalid = false,
	isDisabled = false,
	type = "text",
	errorMessage,
	name,
	label,
	placeholder,
	value,
	defaultValue,
	onChange,
	classNames,
	labelPlacement,
	variant,
}: DefaultInputProps) {
	const inputType = type === "money" ? "text" : type;
	const [state, setState] = React.useState(value || defaultValue || "");
	const defaultClassNames = {
		input: "text-right",
		mainWrapper: "w-full",
		label: "text-xs w-full",
	};

	// efek untuk memperbarui state saat nilai properti value berubah
	React.useEffect(() => {
		setState(value || defaultValue || "");
	}, [value, defaultValue]);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		let formattedValue = value;

		if (type === "money") {
			const numericValue = Money.toNumeric(value);

			if (!isNaN(numericValue)) {
				formattedValue = Money.toString(numericValue);
			} else if (value === "") {
				formattedValue = type === "money" ? "0" : ""; // Mengosongkan nilai jika input kosong
			} else {
				formattedValue = state; // Mengembalikan nilai sebelumnya jika input tidak valid
			}
		}

		setState(formattedValue);
		onChange && onChange(formattedValue);
	};

	const handleFocusAndBlur = (action: string) => {
		if (action === "focus") {
			!isReadOnly && state == "0" && setState("");
		}
		if (action === "blur") {
			!isReadOnly && state == "" && type === "money" && setState("0");
		}
	};

	return (
		<Input
			isReadOnly={isReadOnly}
			isRequired={isRequired}
			isInvalid={isInvalid}
			isDisabled={isDisabled}
			errorMessage={errorMessage}
			min={0}
			type={inputType}
			variant={
				variant || (type === "money" && !isReadOnly)
					? variant ?? "bordered"
					: variant ?? "flat"
			}
			name={name}
			label={label}
			labelPlacement={
				labelPlacement || type === "money"
					? labelPlacement ?? "outside-left"
					: labelPlacement ?? "inside"
			}
			placeholder={placeholder}
			startContent={
				type === "money" && (
					<div className="pointer-events-none flex items-center">
						<span className="text-default-400 text-small">Rp</span>
					</div>
				)
			}
			classNames={classNames ?? defaultClassNames}
			value={state}
			defaultValue={defaultValue}
			onChange={handleOnChange}
			onFocus={() => handleFocusAndBlur("focus")}
			onBlur={() => handleFocusAndBlur("blur")}
		/>
	);
}

export default DefaultInput;
