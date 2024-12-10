const Header = () => {
	return (
		<header className="bg-mobile-pattern-header sm:bg-tablet-pattern-header lg:bg-desktop-pattern-header flex h-[136px] w-screen justify-between bg-cover bg-center bg-no-repeat p-9">
			<div className="bg-icon-logo w-[115px] bg-no-repeat"></div>
			<Switch />
		</header>
	);
};

function Switch() {
	return (
		<div className="flex gap-3">
			<span className="bg-icon-sun h-5 w-5 bg-contain bg-center"></span>
			<div className="bg-pureWhite cursor-pointe relative flex h-6 w-12 cursor-pointer items-center rounded-full p-1">
				<div className="bg-blue-thick h-4 w-4 rounded-full"></div>
			</div>
			<span className="bg-icon-moon h-5 w-5 bg-contain bg-center"></span>
		</div>
	);
}

export default Header;
