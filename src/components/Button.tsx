import { ButtonType } from '../Types.ts';

const Button = ({ optionClasses, type, children }: ButtonType) => {
	return (
		<button className={`${optionClasses} rounded bg-center bg-no-repeat`} type={type}>
			<span className="hidden sm:block">{children}</span>
		</button>
	);
};

export default Button;
