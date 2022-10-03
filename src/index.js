import React from "react";
import ReactDOM from "react-dom/client";

import "./style.css";

import App from "./App";

import { Provider } from "react-redux";
import { store } from "./context/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<div className=" h-screen w-screen ">
		<Provider store={store}>
			<App />
		</Provider>
	</div>
);
