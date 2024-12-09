const Header = () => {
	return (
		<header className="relative flex h-[136px] w-screen justify-between bg-mobile-pattern-header bg-cover bg-center bg-no-repeat p-9 sm:bg-tablet-pattern-header lg:bg-desktop-pattern-header">
			<div className="w-[115px] bg-icon-logo bg-no-repeat"></div>
			<Switch />
		</header>
	);
};

function Switch() {
	return (
		<div className="flex gap-3">
			<span className="h-5 w-5 bg-icon-sun bg-contain bg-center"></span>
			<div className="cursor-pointe relative flex h-6 w-12 cursor-pointer items-center rounded-full bg-pureWhite p-1">
				<div className="h-4 w-4 rounded-full bg-blue-thick"></div>
			</div>
			<span className="h-5 w-5 bg-icon-moon bg-contain bg-center"></span>
		</div>
	);
}

export default Header;
