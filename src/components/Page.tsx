import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Page = () => {
	return (
		<div className="flex flex-col bg-gray-light dark:bg-blue-midnight h-full w-full">
			<Header />
			<Content />
			<Footer />
		</div>
	);
};

export default Page;
