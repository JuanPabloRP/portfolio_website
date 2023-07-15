import PropTypes from 'prop-types';

const Tag = ({ tag }) => {
	return (
		<span className="m-1 px-2 py-0.5  bg-black text-white  ml-1">{tag}</span>
	);
};

Tag.propTypes = {
	tag: PropTypes.string.isRequired,
};

export default Tag;
