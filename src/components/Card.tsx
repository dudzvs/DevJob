import { CardTypes } from '../Types.ts';

const Card = ({ icon, company, postedAt, contract, position, location, bgColor }: CardTypes) => {
	return (
		<div className="relative flex w-full cursor-pointer flex-col items-center justify-start rounded-2xl p-10 align-text-top dark:text-gray-light  lg:max-w-[600px]">
			<div
				className={`absolute left-10 top-[-22px] flex h-[50px] w-[50px] items-center justify-center rounded`}
				style={{ backgroundColor: bgColor }}
			>
				<img className="" alt="logo image" src={icon} />
			</div>
			<div className="mt-4 flex w-full flex-col items-start gap-2">
				<div className="flex items-center gap-3 text-gray-neutral">
					{/*5h ago . Full Time */}
					<span>{postedAt}</span>
					<span className="h-1 w-1 self-center bg-gray-neutral"></span>
					<span>{contract}</span>
				</div>
				<h4 className="text-xl font-bold">{position}</h4>
				<p className="mb-12 text-gray-neutral">{company}</p>
				<span className="font-bold text-blue-thick">{location}</span>
			</div>
		</div>
	);
};

export default Card;
