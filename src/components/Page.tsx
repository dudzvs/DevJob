import Header from './Header';
import Content from './Content';

const Page = () => {
	return (
		<div className="flex flex-col bg-gray-light dark:bg-blue-midnight h-full">
			<Header />
			<Content />
		</div>
	);
};

export default Page;
