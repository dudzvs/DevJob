import { CardTypes } from '../Types.ts';

const Card = ({ icon, company, postedAt, contract, position, location }: CardTypes) => {
	// think about how to retrieve infos from JSON, those infos gonna fulfill the card info
	// the infos will be catch from data.json

	return (
		<div className="mt-28 flex w-full flex-col items-center justify-center">
			<span className={`${icon} bg-center bg-no-repeat`}>icon</span>

			<div className="flex flex-col">
				<div className="flex items-center">
					{/*5h ago . Full Time */}
					<span>{postedAt}</span>
					<span>{contract}</span>
				</div>
				<h4>{position}</h4>
				<p>{company}</p>
				<span>{location}</span>
			</div>
		</div>
	);
};

export default Card;
