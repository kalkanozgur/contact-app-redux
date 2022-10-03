import React, { useState } from "react";

import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import Form from "./Form";
import { deleteContact, updateContact } from "./../../context/contactSlice";

function Item({ contact }) {
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();

	const handleDelete = (e) => {
		if (window.confirm("Are you sure?")) {
			dispatch(deleteContact(contact.id));
		}
	};
	return (
		<li className="my-3 flex h-10 w-72 flex-row items-center rounded-lg bg-gray-800">
			<div
				className="flex w-72 cursor-pointer flex-row justify-between"
				onClick={() => setShow(true)}
			>
				<span className="pl-3 font-semibold text-slate-400">
					{contact.name}
				</span>
				<div>
					<Modal
						title="Edit Contact"
						show={show}
						onClose={() => setShow(false)}
					>
						<Form
							namePlaceHolder={contact.name}
							phonePlaceHolder={contact.phone_number}
							contact={contact}
							type="Change"
							onClose={() => setShow(false)}
						/>
					</Modal>
				</div>
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
