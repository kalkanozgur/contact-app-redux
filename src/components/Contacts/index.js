import React from "react";
import Form from "./Form";
import List from "./List";

import { useSelector } from "react-redux";
import { contactSelectors } from "./../../context/contactSlice";

function Contacts() {
	const total = useSelector(contactSelectors.selectTotal);
	return (
		<div className="pt-5">
			<span className=" text-xl font-bold">
				Contacts {total > 0 && `(${total})`}
			</span>

			<Form />
			<List />
		</div>
	);
}

export default Contacts;
