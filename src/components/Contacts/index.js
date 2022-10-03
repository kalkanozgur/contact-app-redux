import React from "react";
import Form from "./Form";
import List from "./List";

import { useSelector } from "react-redux";
import { contactSelectors } from "./../../context/contactSlice";

function Contacts() {
	const total = useSelector(contactSelectors.selectTotal);
	return (
		<div className="flex w-9/12 flex-col items-center pt-5">
			<span className=" text-xl font-bold">
				Contacts {total > 0 && `(${total})`}
			</span>

			<Form />
			<List />
			{total > 0 && (
				<span
					// onClick={() => dispatch(deleteAllContacts())}
					className="absolute right-5 bottom-5 cursor-pointer rounded-lg bg-red-600 py-1 px-3 text-center text-xl font-extrabold text-black hover:bg-white hover:text-red-700"
				>
					Remove All
				</span>
			)}
		</div>
	);
}

export default Contacts;
