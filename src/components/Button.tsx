import { ButtonType } from '../Types.ts';

const Button = ({ optionClasses, type }: ButtonType) => {
	return <button className={`${optionClasses} rounded bg-center bg-no-repeat`} type={type}></button>;
};

export default Button;
