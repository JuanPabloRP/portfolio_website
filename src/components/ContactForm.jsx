import { useState } from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		toast('This feature is unavailable right now', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		});
		console.log(e);
	};

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		console.log(values);

		const newValues = {
			...values,
			[name]: value,
		};

		setValues(newValues);
	};

	return (
		<form
			className="flex flex-col justify-center items-center max-w-xl m-auto"
			onSubmit={handleSubmit}
		>
			<div className="relative z-0 w-full mb-6 group">
				<input
					type="text"
					name="name"
					id="name"
					className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none peer"
					value={values.name}
					onChange={handleChange}
					required
				/>
				<label
					htmlFor="name"
					className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Name
				</label>
			</div>

			<div className="relative z-0 w-full mb-6 group">
				<input
					type="email"
					name="email"
					id="email"
					className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none peer"
					value={values.email}
					onChange={handleChange}
					required
				/>
				<label
					htmlFor="email"
					className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Email address
				</label>
			</div>

			<button
				type="submit"
				className="text-white border border-white hover:bg-white hover:text-black focus:outline-none focus:ring-white focus:ring-1 focus:scale-x-105 text-center mr-2 mb-2   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
			>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
