import Button from './Button.tsx';
import { InputTypes } from '../Types.ts';

function SearchBar() {
	const handleInputChange = () => {}; // Probably you will create this funct in the content component, i dnt know we gonna research tomorrow

	return (
		<div className="absolute left-1/2 right-1/2 top-28 flex h-20 w-[90%] -translate-x-1/2 transform justify-between rounded bg-gray-light p-4 shadow-2xl">
			<form className="flex w-full justify-between">
				<Input inputType={'text'} example={'Filter by Title'} inputValue={''} onChange={handleInputChange} />

				<div className="flex items-center gap-4">
					<Button image={'bg-icon-filter'} bgColor={'transparent'} type={'button'} size={'w-5 h-5'} />
					<Button
						image={'bg-icon-search-white'}
						bgColor={'bg-blue-thick'}
						type={'submit'}
						size={'w-12 h-12'}
					/>
				</div>
			</form>
		</div>
	);
}

function Input({ inputType, inputValue, example, onChange }: InputTypes) {
	return (
		<input
			className={`outline-none`}
			onChange={onChange}
			type={inputType}
			value={inputValue}
			placeholder={example}
		/>
	);
}

export default SearchBar;
