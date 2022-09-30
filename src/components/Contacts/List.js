import React from "react";
import { useSelector } from "react-redux";
import { contactSelectors } from "./../../context/contactSlice";

import Item from "./Item";

function List() {
	const contacts = useSelector(contactSelectors.selectAll);
	console.log(contacts);
	return (
		<ul>
			{contacts.map((contact) => (
				<Item key={contact.id} contact={contact} />
			))}
		</ul>
	);
}

export default List;
