import Button from './Button.tsx';
import { InputTypes } from '../Types.ts';

function SearchBar() {
	const handleInputChange = () => {}; // Probably you will create this funct in the content component, i dnt know we gonna research tomorrow

	return (
		<div className="absolute left-1/2 right-1/2 top-28 flex h-20 w-[90%] -translate-x-1/2 transform justify-between rounded bg-gray-light p-4 shadow-2xl">
			<form className="flex w-full items-center justify-between p-2">
				<Input
					inputType={'text'}
					example={'Filter by Title'}
					inputValue={''}
					onChange={handleInputChange}
					optionsClasses={'w-full'}
					name={'title'}
				/>
				<Input
					inputType={'text'}
					inputValue={''}
					example={'Filter by location'}
					onChange={handleInputChange}
					optionsClasses={'w-full hidden sm:block'}
					name={'location'}
				/>
				<label
					htmlFor="inputCheckbox"
					className="mr-4 hidden h-[24px] w-[54px] border-2 border-gray-neutral bg-icon-check sm:block"
				></label>
				<Input
					inputType={'checkbox'}
					inputValue={''}
					example={''}
					onChange={handleInputChange}
					optionsClasses={'hidden'}
					id={'inputCheckbox'}
					name={'isFullTime'}
				/>
				<span className="hidden text-nowrap font-bold sm:block">Full Time</span>
				<div className="flex items-center">
					<Button optionClasses={'bg-icon-filter bg-transparent w-5 h-5 mr-6 ml-6'} type={'button'} />
					<Button optionClasses={'bg-icon-search-white bg-blue-thick w-12 h-12'} type={'submit'} />
				</div>
			</form>
		</div>
	);
}

function Input({ inputType, inputValue, example, onChange, optionsClasses, id }: InputTypes) {
	return (
		<input
			className={`${optionsClasses} outline-none`}
			onChange={onChange}
			type={inputType}
			value={inputValue}
			placeholder={example}
			id={id}
		/>
	);
}

export default SearchBar;
