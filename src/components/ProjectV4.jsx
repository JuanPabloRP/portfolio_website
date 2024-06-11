import PropTypes from 'prop-types';
import Tag from './Tag';

const Project = ({ image, name, description, tags, link, color }) => {
	return (
		<li
			className={`cursor-pointer w-full relative overflow-hidden h-64 rounded-md group border border-[${color}]/20 border-[#fff]/20 bg-[#000000] bg-[${color}]`}
		>
			<a href={link.link} target="_blank" className="w-full h-full">
				<div className="z-10 absolute inset-0 flex items-center p-5 group-hover:pl-0 group-hover:opacity-0 transition-all duration-300 ease-out">
					<div className="flex flex-col gap-y-2">
						<h3 className="text-2xl font-bold max-w-[13ch]">{name}</h3>
						<span>{description}</span>
						<ul className="flex gap-x-2">
							<li className="ring-2 ring-neutral-800 bg-neutral-700 w-8 h-8 grid place-content-center rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
									<path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
									<path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
									<path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
									<path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
									<path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
									<path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
								</svg>
							</li>
						</ul>
					</div>
				</div>

				<img
					className="right-3 top-3 absolute max-w-64 group-hover:max-w-md group-hover:h-auto transition-all duration-700 ease-out"
					src={image}
					alt={`${name} image`}
					loading="lazy"
				/>
				<div
					className={`h-full aspect-square right-10 absolute group-hover:right-96 transition-all duration-700 ease-out bg-gradient-to-r  to-transparent transform-none from-[#000000] from-[${color}]`}
				></div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="absolute top-5 right-5 z-10 scale-0 group-hover:scale-100 transition-all duration-500"
				>
					<path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
					<path d="M11 13l9 -9"></path>
					<path d="M15 4h5v5"></path>
				</svg>
			</a>
		</li>
	);
};

export default Project;
