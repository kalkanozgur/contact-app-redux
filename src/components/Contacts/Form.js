import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "./../../context/contactSlice";

function Form() {
	const [name, setName] = useState("");
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name) return false;

		dispatch(addContact({ id: nanoid(), name }));
		setName("");
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder={"Name"}
				/>
			</form>
		</div>
	);
}

export default Form;
