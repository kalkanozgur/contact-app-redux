import React from "react";

import { useDispatch } from "react-redux";
import { deleteContact } from "./../../context/contactSlice";

function Item({ contact }) {
	const dispatch = useDispatch();
	const handleDelete = (e) => {
		if (window.confirm("Are you sure?")) {
			dispatch(deleteContact(contact.id));
		}
	};
	return (
		<li className="my-3 flex h-10 w-72 flex-row items-center rounded-lg bg-gray-800">
			<div className="flex w-72 flex-row justify-between">
				<span className="pl-3 font-semibold text-slate-400">
					{contact.name}
				</span>
				<span className="pr-2  font-semibold text-slate-400">
					{contact.phone_number}
				</span>
			</div>
			<span
				onClick={handleDelete}
				className="m-auto mr-3 h-6 w-6 cursor-pointer rounded-full bg-red-600 text-center text-white"
			>
				X
			</span>
		</li>
	);
}

export default Item;
