import { useState } from 'react';
import Button from './Button.tsx';
import { InputTypes } from '../Types.ts';

function SearchBar() {

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleInputChange = () => {};

	const handleSubmit = () => {};

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	return (
		<div className="absolute left-1/2 right-1/2 z-40 top-28 flex h-20 w-[90%] -translate-x-1/2 transform justify-between rounded bg-gray-light dark:bg-blue-midnight p-4 shadow-2xl lg:max-w-[50%]">


			{isModalOpen && (
				<div className="fixed left-[-19px] inset-0 bg-blue-midnight opacity-50 w-screen h-screen bg-opacity-100" />
			)}
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
					className="mr-4 hidden min-h-[24px] min-w-[24px] cursor-pointer rounded border border-gray-neutral bg-gray-neutral bg-center bg-no-repeat sm:block"
				></label>
				<Input
					inputType={'checkbox'}
					inputValue={''}
					onChange={handleInputChange}
					optionsClasses={'hidden'}
					id={'inputCheckbox'}
					name={'isFullTime'}
				/>
				<span className="hidden text-nowrap text-base font-bold dark:text-gray-light sm:block">Full Time Only</span>
				<div className="flex items-center">
					<Button
						optionClasses={'bg-icon-filter bg-transparent w-5 h-5 mr-6 ml-6 sm:hidden'}
						type={'button'}
						onSmashButton={handleModalOpen}
					/>
					<Button
						optionClasses={
							'bg-icon-search-white bg-blue-thick hover:bg-blue-soft w-12 sm:w-20 h-12 sm:bg-none text-pureWhite font-bold sm:ml-5'
						}
						type={'submit'}
						children={'Search'}
						onSmashButton={handleSubmit}
					/>
				</div>
			</form>



			{isModalOpen && <Modal handleSubmit={handleSubmit} />}
		</div>
	);
}


function Modal({ handleSubmit }: { handleSubmit: () => void }) {
	return (
		<div className='absolute top-44 w-full left-0'>
			<form className='bg-pureWhite p-7 h-full flex flex-col gap-2 rounded shadow-2xl'>
				<Input name={'location'} inputType={'text'} inputValue={''} optionsClasses={'w-full bg-icon-location pl-9'} />
				<label
					htmlFor="inputCheckbox"
					className=""
				></label>
				<Input name={'isFullTime'} inputType={'checkbox'} inputValue={''} optionsClasses={'hidden'} id={'inputCheckbox'} />
				<span className="font-bold">Full Time Only</span>
				<Button optionClasses={'w-full h-12 bg-blue-thick mt-6 text-pureWhite font-bold'} type={'submit'} children={'Search'} onSmashButton={handleSubmit} />
			</form>
		</div>
	)
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
