import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Card from './Card';
import { JobTypes } from '../Types.ts';

const Content = () => {
	const [jobData, setJobData] = useState<JobTypes[]>([]);

	async function fetchJobData() {
		try {
			const res = await fetch('/assets/data.json');
			const data: JobTypes[] = await res.json();
			setJobData(data);
		} catch (err) {
			console.error('error', err);
		}
	}

	useEffect(() => {
		fetchJobData();
	}, []);

	return (
		<main className="mt-32 flex flex-col items-center justify-center gap-7 p-5">
			<SearchBar />
			{jobData.length > 0 ? (
				jobData.map((job) => (
					<Card
						key={job.id}
						icon={job.logo}
						position={job.position}
						company={job.company}
						contract={job.contract}
						location={job.location}
						postedAt={job.postedAt}
						bgColor={job.logoBackground}
					/>
				))
			) : (
				<p>Carregando...</p>
			)}
		</main>
	);
};

export default Content;
