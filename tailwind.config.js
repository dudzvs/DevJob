/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			blue: {
				thick: '#5964E0',
				soft: '#939BF4',
				veryDark: '#19202D',
				midnight: '#121721',
			},
			pureWhite: '#FFFFFF',
			gray: {
				lightGrey: '#F4F6F8',
				darkGrey: '#6E8098',
			},
		},
		extend: {
			backgroundImage: {
				headerMobilePattern: "url('/images/mobile/bg-pattern-header.svg')",
				headerTabletPattern: "url('/images/tablet/bg-pattern-header.svg')",
				headerDesktopPattern: "url('/images/desktop/bg-pattern-header.svg')",
				mobileIconFilter: "url('/images/mobile/icon-filter.svg')",
				iconCheck: "url('/images/common/icon-check.svg')",
				iconLocation: "url('/images/common/icon-location.svg')",
				iconSearch: "url('/images/common/icon-search.svg')",
				iconSearchWhite: "url('/images/common/icon-searchWhite.svg')",
				iconMoon: "url('/images/common/icon-moon.svg')",
				iconSun: "url('/images/common/icon-sun.svg')",
				logo: "url('/images/common/logo.svg')",
			},

			fontFamily: {
				sans: ['Kumbh Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
