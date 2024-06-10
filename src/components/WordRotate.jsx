import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';

const WordRotate = ({
	words,
	duration = 2500,
	framerProps = {
		initial: { opacity: 0, y: -50 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 50 },
		transition: { duration: 0.25, ease: 'easeOut' },
	},
	className,
}) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % words.length);
		}, duration);

		return () => clearInterval(interval);
	}, [duration, words]);

	return (
		<div className="overflow-hidden py-2">
			<AnimatePresence mode="wait">
				<motion.h1 key={words[index]} {...framerProps} className={className}>
					{words[index]}
				</motion.h1>
			</AnimatePresence>
		</div>
	);
};

WordRotate.propTypes = {
	words: PropTypes.array.isRequired,
	duration: PropTypes.number,
	framerProps: PropTypes.object,
	className: PropTypes.string,
};

export default WordRotate;
