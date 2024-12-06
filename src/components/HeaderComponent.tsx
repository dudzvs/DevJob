import { useState } from 'react';

const Header = () => {
	return (
		<header className="flex p-7 bg-headerMobilePattern w-full h-[136px]">
			<div className="flex justify-between w-full">
				<div className="bg-logo bg-cover w-[115px] h-8"></div>
				<Switch />
			</div>
		</header>
	);
};

function Switch() {
	const [isDark, setDark] = useState(false);

	const toggleDarkMode = () => {
		setDark(!isDark);
		document.documentElement.classList.toggle('dark');
	};

	return (
		<div className="flex h-6 gap-2" onClick={toggleDarkMode}>
			<div className="bg-iconSun bg-cover self-center w-5 h-5"></div>
			<div className="bg-pureWhite w-12 h-6 rounded-full flex items-center p-1 cursor-pointer">
				<div
					className={`rounded-full bg-blue-thick w-4 h-4 transition-transform duration-300 ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
				></div>
			</div>
			<div className="bg-iconMoon bg-no-repeat w-4 h-4 bg-cover self-center"></div>
		</div>
	);
}

export default Header;
