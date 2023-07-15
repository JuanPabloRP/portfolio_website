import PropTypes from 'prop-types';

export const Button = () => {
	return <div>Button</div>;
};

export const ButtonCard = ({ name, link }) => {
	return (
		<>
			<a
				href={link}
				target="_blank"
				rel="noreferrer"
				className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-pink to-blue group-hover:from-pink group-hover:to-blue hover:text-white"
			>
				<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
					{name}
				</span>
			</a>
		</>
	);
};

ButtonCard.propTypes = {
	name: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default Button;
