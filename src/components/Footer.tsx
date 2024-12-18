import Button from './Button';

const Footer = () => {
	return (
		<div className="self-center pb-12 mt-5">
			<Button optionClasses={'p-3 bg-blue-thick text-pureWhite font-bold active:bg-blue-soft'} type={'button'} children={'Load More'} />
		</div>
	)
}

export default Footer;