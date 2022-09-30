import Contacts from "./components/Contacts";
import { useDispatch } from "react-redux";
import { deleteAllContacts } from "./context/contactSlice";

function App() {
	const dispatch = useDispatch();
	return (
		<div>
			<Contacts />
			<span
				onClick={() => dispatch(deleteAllContacts())}
				className="absolute right-5 bottom-5 cursor-pointer rounded-lg bg-red-600 py-1 px-3 text-center text-xl font-extrabold text-black hover:bg-white hover:text-red-700"
			>
				Remove All
			</span>
		</div>
	);
}

export default App;
