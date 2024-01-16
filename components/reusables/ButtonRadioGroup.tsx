"use client";
import React from "react";
import {
	RadioGroup,
	useRadio,
	VisuallyHidden,
	RadioProps,
	cn,
} from "@nextui-org/react";

export const CustomRadio = (props: RadioProps) => {
	const {
		Component,
		children,
		isSelected,
		description,
		getBaseProps,
		getWrapperProps,
		getInputProps,
		getLabelProps,
		getLabelWrapperProps,
		getControlProps,
	} = useRadio(props);

	return (
		<Component
			{...getBaseProps()}
			className={cn(
				`group inline-flex items-center justify-between hover:bg-${props.color} flex-row-reverse`,
				`text-foreground max-w-[300px] cursor-pointer border-2 border-${props.color} gap-4 p-2 ${props.className}`,
				isSelected
					? `bg-${props.color} border-${props.color}`
					: "transparent"
			)}
		>
			<VisuallyHidden>
				<input {...getInputProps()} />
			</VisuallyHidden>
			<VisuallyHidden {...getWrapperProps()}>
				<span {...getControlProps()} />
			</VisuallyHidden>
			<div {...getLabelWrapperProps()}>
				{children && (
					<span {...getLabelProps()} className="mr-2">
						{children}
					</span>
				)}
				{description && (
					<span className="text-small text-foreground opacity-70">
						{description}
					</span>
				)}
			</div>
		</Component>
	);
};

interface ButtonRadioGroupProps {
	label: string;
	items: { label: string; description: string; value: string }[];
	orientation?: "horizontal" | "vertical";
	color?:
		| "default"
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "danger"
		| undefined;
	itemClassname?: string;
	containerClassname?: string;
	value?: string;
	onValueChange?: (value: any) => void;
}

export default function ButtonRadioGroup({
	label = "",
	items = [],
	orientation = "horizontal",
	color = "primary",
	value = "",
	onValueChange = () => {},
	containerClassname,
	itemClassname,
}: ButtonRadioGroupProps) {
	const [state, setState] = React.useState(value || "");

	// efek untuk memperbarui state saat nilai properti value berubah
	React.useEffect(() => {
		setState(value || "");
	}, [value]);

	const handleValueChange = (value: string) => {
		setState(value);
		onValueChange(value);
	};
	return (
		<RadioGroup
			label={label}
			orientation={orientation}
			color={color}
			className={`text-green-500 ${containerClassname}`}
			value={state}
			onValueChange={handleValueChange}
			classNames={{
				label: "text-default-900 text-sm text-left",
				base: "text-sm w-full flex",
				wrapper: "w-full flex",
				description: "text-default-400 text-xs",
			}}
		>
			{items?.map((item) => {
				return (
					<CustomRadio
						key={item.value}
						description={item.description}
						value={item.value}
						color={color}
						className={itemClassname}
					>
						{item.label}
					</CustomRadio>
				);
			})}
		</RadioGroup>
	);
}
