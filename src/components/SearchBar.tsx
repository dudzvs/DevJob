import Button from './Button.tsx';
import { InputTypes } from '../Types.ts';

function SearchBar() {
	const handleInputChange = () => {}; // Probably you will create this funct in the content component, i dnt know we gonna research tomorrow

	return (
		<div className="absolute left-1/2 right-1/2 top-28 flex h-20 w-[90%] -translate-x-1/2 transform justify-between rounded bg-gray-light p-4 shadow-2xl lg:max-w-[70%]">
			<form className="flex w-full items-center justify-between p-2">
				<Input
					inputType={'text'}
					example={'Filter by Title'}
					inputValue={''}
					onChange={handleInputChange}
					optionsClasses={'w-full sm:bg-icon-search sm:pl-9 pl-2'}
					name={'title'}
				/>
				<Input
					inputType={'text'}
					inputValue={''}
					example={'Filter by location'}
					onChange={handleInputChange}
					optionsClasses={'w-full hidden sm:block bg-icon-location pl-9'}
					name={'location'}
				/>
				<label
					htmlFor="inputCheckbox"
					className="mr-4 hidden min-h-[24px] min-w-[24px] cursor-pointer border border-gray-neutral bg-icon-check bg-center bg-no-repeat sm:block"
				></label>
				<Input
					inputType={'checkbox'}
					inputValue={''}
					onChange={handleInputChange}
					optionsClasses={'hidden'}
					id={'inputCheckbox'}
					name={'isFullTime'}
				/>
				<span className="hidden text-nowrap text-base font-bold sm:block">Full Time</span>
				<div className="flex items-center">
					<Button
						optionClasses={'bg-icon-filter bg-transparent w-5 h-5 mr-6 ml-6 sm:hidden'}
						type={'button'}
					/>
					<Button
						optionClasses={
							'bg-icon-search-white bg-blue-thick w-12 sm:w-20 h-12 sm:bg-none text-pureWhite font-bold sm:ml-5'
						}
						type={'submit'}
						children={'Search'}
					/>
				</div>
			</form>
		</div>
	);
}

function Input({ inputType, inputValue, example, onChange, optionsClasses, id }: InputTypes) {
	return (
		<input
			className={`${optionsClasses} bg-transparent bg-no-repeat outline-none`}
			onChange={onChange}
			type={inputType}
			value={inputValue}
			placeholder={example}
			id={id}
		/>
	);
}

export default SearchBar;
