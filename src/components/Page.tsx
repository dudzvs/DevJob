import Header from './Header';
import Content from './Content';

const Page = () => {
	return (
		<div className="flex h-screen flex-col bg-gray-light">
			<Header />
			<Content />
		</div>
	);
};

export default Page;
