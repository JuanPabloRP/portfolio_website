import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Projects = ({ NAVBAR_HEIGHT }) => {
	const Projects = styled.section`
		scroll-margin-top: ${NAVBAR_HEIGHT}px;
		border-width: 1px;
		min-height: calc(100vh - ${NAVBAR_HEIGHT}px);
	`;

	return (
		<Projects id="projects" className="border-blue border-solid ">
			<article>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
				distinctio perferendis est vitae itaque, temporibus nulla maiores.
				Eveniet dolores provident, ut sapiente voluptate inventore aut natus,
				esse ipsam quis sequi? Officia odit necessitatibus vel, molestias eos
				deserunt quae doloribus error officiis veritatis obcaecati iusto
				consectetur eveniet nostrum sed ex quibusdam eum est! Iste sint esse,
				voluptates quaerat sed nisi minima.
			</article>
		</Projects>
	);
};

Projects.propTypes = {
	NAVBAR_HEIGHT: PropTypes.number.isRequired,
};

export default Projects;
