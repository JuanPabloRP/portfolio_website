import PropTypes from 'prop-types';
import Tag from './Tag';
import { ButtonCard } from './Button';
import styled from '@emotion/styled';

const Project = ({ image, name, tags, links }) => {
	const ArticleStyled = styled.article`
		box-shadow: inset 0px 0px 7px 0px #00adb5, 0px 0px 7px 0px #00adb5;
	`;

	return (
		<li key={name} className="p-3">
			<ArticleStyled className="max-w-sm bg-dark border border-white rounded-lg shadow ">
				<img
					className="rounded-xl pt-2 px-2"
					src={image}
					alt={`${name} image`}
				/>

				<div className="p-5">
					<h3 className="text-center mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white ">
						{name}
					</h3>

					<div className="flex flex-wrap space-x-2 items-center justify-center opacity-40">
						<span className="text-blue">Made with: </span>
						{tags
							? tags.map(({ id, tag }) => <Tag key={id} tag={tag} />)
							: null}
					</div>

					<div className="flex items-center justify-around py-2 ">
						{links
							? links.map(({ id, name, link }) => (
									<ButtonCard key={id} name={name} link={link} />
							))
							: null}
					</div>
				</div>
			</ArticleStyled>
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
