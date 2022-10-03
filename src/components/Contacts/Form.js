import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact, updateContact } from "./../../context/contactSlice";

function Form(props) {
	const [name, setName] = useState(props.contact ? props.contact.name : "");
	const [number, setNumber] = useState(
		props.contact ? props.contact.phone_number : ""
	);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !number) return false;
		if (props.type === "Change") {
			const returnValue = {
				id: props.contact.id,
				changes: {
					name: name,
					phone_number: number,
				},
			};
			dispatch(updateContact(returnValue));
			props.onClose();
		} else dispatch(addContact({ id: nanoid(), name, phone_number: number }));

		setName("");
		setNumber("");
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-center gap-y-3 py-3"
			>
				<input
					type="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder={
						props.namePlaceHolder ? `Name: ${props.namePlaceHolder}` : "Name"
					}
				/>
				<input
					type="number"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					placeholder={
						props.phonePlaceHolder
							? `Phone: ${props.phonePlaceHolder}`
							: "Phone Number"
					}
				/>
				<button
					type="submit"
					className="w-20 self-center rounded-lg bg-gray-600 py-2 font-mono text-lg font-semibold text-gray-900"
				>
					{props.type ? props.type : "Add"}
				</button>
			</form>
		</div>
	);
}

export default Form;
