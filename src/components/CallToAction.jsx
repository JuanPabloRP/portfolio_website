import React from 'react';
import Meteors from './Meteors';

const CallToAction = ({ NAVBAR_HEIGHT }) => {
	return (
		<section
			id="callToAction"
			className="flex flex-col justify-center items-centeroverflow-hidden "
			style={{
				scrollMarginTop: NAVBAR_HEIGHT,
				minHeight: `calc(100svh - ${NAVBAR_HEIGHT}px)`,
			}}
		>
			<h1 className=" lg:text-4xl text-center font-black uppercase p-5 tracking-wide mb-5 text-pink text-5xl  ">
				¿Tienes en mente un proyecto?
			</h1>
			<p className="text-3xl font-semibold ">Yo te lo hago realidad</p>

			<footer className="flex gap-x-5 mt-5">
				<a href="" className="p-2 border border-blue rounded-md ">
					LinkedIn
				</a>
				<a
					href="mailto:jpabloroldanp@gmail.com?Subject=Interesado%20en%20desarrollar%20proyecto"
					className="p-2 border border-pink rounded-md"
				>
					Email
				</a>
			</footer>
		</section>
	);
};

export default CallToAction;
