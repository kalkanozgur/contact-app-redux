import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();
const initialState = contactAdaptor.getInitialState();

export const contactSelectors = contactAdaptor.getSelectors(
	(state) => state.contacts
);

const contactSlice = createSlice({
	name: "contacts",
	initialState: initialState,
	reducers: {
		addContact: contactAdaptor.addOne,
		deleteContact: contactAdaptor.removeOne,
		deleteAllContacts: contactAdaptor.removeAll,
	},
});

export const { addContact, deleteContact, deleteAllContacts } =
	contactSlice.actions;

export default contactSlice.reducer;
