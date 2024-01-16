import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

interface AccordionPropsInterface {
	items: AccordionItemInterface[];
}

interface AccordionItemInterface {
	key: string;
	title: string;
	content: string | React.ReactNode;
}

export default function DefaultAccordion({ items }: AccordionPropsInterface) {
	return (
		<Accordion variant="splitted">
			{items?.map((item) => (
				<AccordionItem
					key={item.key}
					aria-label={item.title}
					title={item.title}
				>
					{item.content}
				</AccordionItem>
			))}
		</Accordion>
	);
}
