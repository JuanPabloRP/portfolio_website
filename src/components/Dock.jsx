'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { PropsWithChildren, useRef, forwardRef } from 'react';

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

export const Dock = forwardRef(
	(
		{
			className,
			children,
			magnification = DEFAULT_MAGNIFICATION,
			distance = DEFAULT_DISTANCE,
			...props
		},
		ref
	) => {
		const mouseX = useMotionValue(Infinity);

		const renderChildren = () => {
			return React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					mouseX: mouseX,
					magnification: magnification,
					distance: distance,
				});
			});
		};

		return (
			<motion.div
				ref={ref}
				onMouseMove={(e) => mouseX.set(e.pageX)}
				onMouseLeave={() => mouseX.set(Infinity)}
				{...props}
				className={`mx-auto w-max mt-8 h-[58px] p-2 flex items-end gap-2 rounded-2xl  ${className}`}
			>
				{renderChildren()}
			</motion.div>
		);
	}
);

Dock.displayName = 'Dock';

export const DockIcon = ({
	size,
	magnification = DEFAULT_MAGNIFICATION,
	distance = DEFAULT_DISTANCE,
	mouseX,
	className,
	children,
	...props
}) => {
	const ref = useRef(null);

	const distanceCalc = useTransform(mouseX, (val) => {
		const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

		return val - bounds.x - bounds.width / 2;
	});

	let widthSync = useTransform(
		distanceCalc,
		[-distance, 0, distance],
		[40, magnification, 40]
	);

	let width = useSpring(widthSync, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	return (
		<motion.div
			ref={ref}
			style={{ width }}
			className={`flex aspect-square cursor-pointer items-center justify-center rounded-full hover:bg-white/10 transition-colors
				${className}`}
			{...props}
		>
			{children}
		</motion.div>
	);
};

DockIcon.displayName = 'DockIcon';

export default Dock;
