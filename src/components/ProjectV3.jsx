import PropTypes from 'prop-types';

import { ButtonCard } from './Button';
import Tag from './Tag';

const ProjectV3 = ({ image, name, tags, links }) => {
	/* const ArticleStyled = styled.article`
		box-shadow: inset 0px 0px 7px 0px #00adb5, 0px 0px 7px 0px #00adb5;
		& figure:hover > div {
			opacity: 0.9;
		}

		& > figure:hover > img {
			opacity: 0.4;
		}
	`;
 */
	return (
		<li>
			<article className="relative max-w-sm overflow-hidden rounded-md shadow-md shadow-blue border-2 border-white box-content p-2">
				<h3 className="text-center p-2 text-2xl">{name}</h3>
				<figure className="relative max-w-sm overflow-hidden rounded-md shadow-md  p-2">
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
					</div>
				</figure>
				<div className="flex items-center justify-around py-2 ">
					{links
						? links.map(({ id, name, link }) => (
								<ButtonCard key={id} name={name} link={link} />
						  ))
						: null}
				</div>
			</article>
		</li>
	);
};

ProjectV3.propTypes = {
	image: PropTypes.any.isRequired,
	name: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	links: PropTypes.array.isRequired,
};

export default ProjectV3;
