const SearchBar = () => {
	return (
		<div>
			<form className="flex h-20 w-full items-center justify-between gap-4 rounded-[8px] bg-pureWhite shadow-2xl dark:bg-blue-veryDark">
				<Input type="text" example="Filter by title…" value="" />
				<div className="flex items-center gap-6 pr-8">
					<Button className="bg-mobileIconFilter" bgColor="bg-transparent" size="w-[22px] h-[22px]" />
					<Button className="bg-iconSearchWhite" bgColor="bg-blue-thick" size="w-[48px] h-[48px]" />
				</div>
			</form>
		</div>
	);
};

function Input({ value, type, example }: { value: string; type: string; example: string }) {
	return (
		<>
			<input
				className="bg-transparent w-6/12 rounded-[8px] p-5 outline-none"
				value={value}
				type={type}
				placeholder={example}
			/>
		</>
	);
}

function Button({ className, size, bgColor }: { className: string; size: string; bgColor: string }) {
	return <button className={`${className} ${size} ${bgColor} rounded-md bg-center bg-no-repeat`}></button>;
}
export default SearchBar;
