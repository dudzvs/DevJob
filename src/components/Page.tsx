import Header from './Header';
import Content from './Content';

const Page = () => {
	return (
		<div className="bg-gray-light flex h-screen flex-col">
			<Header />
			<Content />
		</div>
	);
};

export default Page;
