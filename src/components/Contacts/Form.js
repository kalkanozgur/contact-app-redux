import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "./../../context/contactSlice";

function Form() {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !number) return false;

		dispatch(addContact({ id: nanoid(), name, phone_number: number }));
		setName("");
		setNumber("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className="flex flex-col gap-y-3 py-3">
				<input
					type="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder={"Name"}
				/>
				<input
					// type="number"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					placeholder={"Phone Number"}
				/>
				<button
					type="submit"
					className="w-20 self-center rounded-lg bg-gray-600 py-2 font-mono text-lg font-semibold text-gray-900"
				>
					Add
				</button>
			</form>
		</div>
	);
}

export default Form;
