const Button = ({
	image,
	bgColor,
	type,
	size,
}: {
	image: string;
	bgColor: string;
	type: 'submit' | 'button';
	size: string;
}) => {
	return <button className={`${image} ${bgColor} ${size} rounded bg-center bg-no-repeat`} type={type}></button>;
};

export default Button;
