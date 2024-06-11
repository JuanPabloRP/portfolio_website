import PropTypes from 'prop-types';
import Tag from './Tag';
import { ButtonCard } from './Button';

const Project = ({ image, name, tags, links }) => {
	return (
		<li className=" bg-dark border border-neutral-800 rounded-lg shadow dark:bg-neutral-950 dark:hover:bg-neutral-900 dark:hover:border-neutral-700 ">
			<figure className="">
				<img
					className="rounded-xl pt-2 px-2 object-cover w-full h-60 "
					src={image}
					alt={`${name} image`}
				/>
			</figure>

			<main className="p-5">
				<h3 className="text-center mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white ">
					{name}
				</h3>

				<footer className="flex items-center justify-around py-2 ">
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

Project.propTypes = {
	image: PropTypes.any.isRequired,
	name: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	links: PropTypes.array.isRequired,
};

export default Project;
