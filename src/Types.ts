export type CardTypes = {
	icon: string;
	company: string;
	postedAt: string;
	contract: string;
	position: string;
	location: string;
	bgColor: string;
};

export type InputTypes = {
	id?: string;
	name: string;
	inputType: string;
	inputValue: string;
	example?: string;
	optionsClasses: string;
	onChange: (value: never) => void;
};

export type ButtonType = {
	children?: string;
	optionClasses: string;
	type: 'submit' | 'button';
};

export type JobTypes = {
	id: number;
	logo: string;
	position: string;
	company: string;
	contract: string;
	location: string;
	postedAt: string;
	logoBackground: string;
};
