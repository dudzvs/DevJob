import { ButtonType } from '../Types.ts';

const Button = ({ optionClasses, type, children, onSmashButton }: ButtonType) => {
	return (
		<button className={`${optionClasses} rounded bg-center bg-no-repeat`} type={type} onClick={onSmashButton}>
			<span>{children}</span>
		</button>
	);
};

export default Button;
