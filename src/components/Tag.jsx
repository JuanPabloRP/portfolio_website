import PropTypes from 'prop-types';

const Tag = ({ name }) => {
	return (
		<span className="m-1 px-2 py-0.5 rounded-3xl border border-white bg-black text-white opacity-30 ml-1">
			{name}
		</span>
	);
};

Tag.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Tag;
