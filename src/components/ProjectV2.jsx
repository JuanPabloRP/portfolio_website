import PropTypes from 'prop-types';

import { ButtonCard } from './Button';
import Tag from './Tag';

const ProjectV2 = ({ image, name, tags, links }) => {
	/* const ArticleStyled = styled.article`
		box-shadow: inset 0px 0px 7px 0px #00adb5, 0px 0px 7px 0px #00adb5;
		&:hover > div {
			opacity: 0.9;
		}

		&:hover > img {
			opacity: 0.4;
		}
	`; */

	return (
		<li>
			<article
				className="relative max-w-sm overflow-hidden rounded-md shadow-md shadow-blue border-2 border-white box-content p-2"
				style={{
					boxShadow: 'inset 0px 0px 7px 0px #00adb5, 0px 0px 7px 0px #00adb5',
				}}
			>
				{/* 	<h3 className="text-center p-2 text-2xl">{name}</h3> */}
				<img
					src={image}
					alt={name}
					className="w-auto h-auto duration-500 transition-all ease-out object-fill  rounded-md "
				/>
				<div className="absolute top-0 w-full h-full bg-black opacity-0 duration-500 transition-all ease-out text-center flex flex-col justify-around items-center">
					<p className="flex flex-wrap space-x-2 items-center justify-center duration-500 transition-all ease-out">
						<span className="text-blue opacity-70">Made with: </span>
						{tags
							? tags.map(({ id, tag }) => <Tag key={id} tag={tag} />)
							: null}
					</p>
					<div className="flex items-center justify-around py-2 ">
						{links
							? links.map(({ id, name, link }) => (
									<ButtonCard key={id} name={name} link={link} />
							  ))
							: null}
					</div>
				</div>
			</article>
		</li>
	);
};

ProjectV2.propTypes = {
	image: PropTypes.any.isRequired,
	name: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	links: PropTypes.array.isRequired,
};

export default ProjectV2;
