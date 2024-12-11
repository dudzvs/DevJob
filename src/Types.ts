export type CardTypes = {
	icon: string;
	company: string;
	postedAt: string;
	contract: string;
	position: string;
	location: string;
};

export type InputTypes = {
	inputType: string;
	inputValue: string;
	example: string;
	onChange: (value: never) => void;
};

export type ButtonType = {
	image: string;
	bgColor: string;
	type: 'submit' | 'button';
	size: string;
};
