/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			pureWhite: '#FFFFFF',
			blue: {
				thick: '#5964E0',
				soft: '#939BF4',
				veryDark: '#19202D',
				midnight: '#121721',
			},
			gray: {
				light: '#F4F6F8',
				neutral: '#9DAEC2',
				dark: '#6E8098',
			},
		},

		fontFamily: {
			sans: ['Kumbh Sans', 'sans-serif'],
		},

		extend: {
			backgroundImage: {
				'mobile-pattern-header': "url('/images/mobile/bg-pattern-header.svg')",
				'tablet-pattern-header': "url('/images/tablet/bg-pattern-header.svg')",
				'desktop-pattern-header': "url('/images/desktop/bg-pattern-header.svg')",
				'icon-check': "url('/images/icons/icon-check.svg')",
				'icon-location': "url('/images/icons/icon-location.svg')",
				'icon-search': "url('/images/icons/icon-search.svg')",
				'icon-search-white': "url('/images/icons/icon-search-white.svg')",
				'icon-filter': "url('/images/mobile/icon-filter.svg')",
				'icon-moon': "url('/images/icons/icon-moon.svg')",
				'icon-sun': "url('/images/icons/icon-sun.svg')",
				'icon-logo': "url('/images/icons/logo.svg')",
			},
		},
	},
	plugins: [],
};
