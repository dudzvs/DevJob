import { useState } from 'react';
import SearchBar from './SearchComponent.tsx';

const Header = () => {
	return (
		<header className="flex h-[136px] w-full flex-col bg-headerMobilePattern bg-cover bg-center bg-no-repeat p-7">
			<div className="mb-6 flex w-full justify-between">
				<div className="h-8 w-[115px] bg-logo bg-cover"></div>
				<Switch />
			</div>
			<SearchBar />
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
			<div className="h-5 w-5 self-center bg-iconSun bg-cover"></div>
			<div className="flex h-6 w-12 cursor-pointer items-center rounded-full bg-pureWhite p-1">
				<div
					className={`h-4 w-4 rounded-full bg-blue-thick transition-transform duration-300 ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
				></div>
			</div>
			<div className="h-4 w-4 self-center bg-iconMoon bg-cover bg-no-repeat"></div>
		</div>
	);
}

export default Header;
