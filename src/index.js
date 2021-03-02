import "./scss/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { SizesProvider } from "./helpers/context";
import App from "./App";

ReactDOM.render(
	<SizesProvider>
		<Router>
			<App />
		</Router>
	</SizesProvider>,
	document.getElementById("root")
);
