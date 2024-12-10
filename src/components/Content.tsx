import Button from './Button.tsx';

const Content = () => {
	return (
		<main className="flex justify-center">
			<SearchBar />
		</main>
	);
};

function SearchBar() {
	return (
		<div className="absolute top-24 flex h-20 w-[90%] justify-between rounded bg-gray-light p-4 shadow-2xl">
			<form className="flex w-full justify-between">
				<Input inputType={'text'} example={'Filter by Title'} inputValue={''} />

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

function Input({ inputType, inputValue, example }: { inputType: string; inputValue: string; example: string }) {
	return <input className={`outline-none`} type={inputType} value={inputValue} placeholder={example} />;
}

export default Content;
