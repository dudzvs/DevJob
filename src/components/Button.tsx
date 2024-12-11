import { ButtonType } from '../Types.ts';

const Button = ({ image, bgColor, type, size }: ButtonType) => {
	return <button className={`${image} ${bgColor} ${size} rounded bg-center bg-no-repeat`} type={type}></button>;
};

export default Button;
