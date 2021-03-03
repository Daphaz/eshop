import "./scss/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { SizesProvider } from "./helpers/context";
import App from "./App";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

ReactDOM.render(
	<Provider store={store}>
		<SizesProvider>
			<Router>
				<App />
			</Router>
		</SizesProvider>
	</Provider>,
	document.getElementById("root")
);
