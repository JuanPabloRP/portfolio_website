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
				className="outline-none px-4 py-2 font-medium rounded-md border text-center dark:border-neutral-400 dark:text-neutral-400 dark:hover:border-white dark:hover:text-white dark:focus:border-blue dark:focus:text-blue "
			>
				{name}
			</a>
		</>
	);
};

ButtonCard.propTypes = {
	name: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default Button;
