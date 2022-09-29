import React from "react";
import { useSelector } from "react-redux";
import { contactSelectors } from "./../../context/contactSlice";

import Item from "./item";

function List() {
	const contacts = useSelector(contactSelectors.selectAll);
	console.log(contacts);
	return (
		<div>
			{contacts.map((contact) => (
				<Item key={contact.id} contact={contact} />
			))}
		</div>
	);
}

export default List;
