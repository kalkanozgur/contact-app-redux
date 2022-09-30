import React from "react";

function Item({ contact }) {
	return (
		<li className="my-3 flex h-10 w-72 flex-row items-center justify-between rounded-lg bg-gray-800">
			<div className="pl-3">{contact.name}</div>
			<div className="pr-3">{contact.phone_number}</div>
		</li>
	);
}

export default Item;
