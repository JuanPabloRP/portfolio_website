import PropTypes from 'prop-types';
import Tag from './Tag';
import { ButtonCard } from './Button';
import { useState } from 'react';

const ProjectV4 = ({ image, name, tags, links }) => {
	const [hovered, setHovered] = useState(false);

	const handleHover = () => {
		setHovered(true);
	};

	const handleUnhover = () => {
		setHovered(false);
	};

	return (
		<li
			className="max-w-md relative items-center border-neutral-500 border rounded-xl p-1  transition-all duration-150 ease-in-out hover:bg-neutral-950 hover:border-white hover:rounded-sm group"
			style={{
				boxShadow: hovered
					? 'inset 0 0 7px 0 #00adb5, 0 0 7px 0 #00adb5'
					: 'none',
			}}
			onMouseEnter={handleHover}
			onMouseLeave={handleUnhover}
		>
			<figure className="">
				<img
					className="rounded-xl object-fill w-full h-60 group-hover:rounded-sm"
					src={image}
					alt={`${name} image`}
					loading="lazy"
				/>
			</figure>

			<main className="p-5">
				<h3 className=" text-center mb-2 text-3xl font-bold tracking-tight text-white px-2  ">
					{name}
				</h3>

				{/* <section className="flex flex-wrap space-x-1 items-center justify-center opacity-40">
					<span className="text-blue">Made with: </span>
					{tags ? tags.map(({ id, tag }) => <Tag key={id} tag={tag} />) : null}
				</section> */}

				<footer className="  flex items-center justify-around py-2 ">
					{links
						? links.map(({ id, name, link }) => (
								<ButtonCard key={id} name={name} link={link} />
						  ))
						: null}
				</footer>
			</main>
		</li>
	);
};

export default ProjectV4;
