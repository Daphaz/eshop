import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/home";

const routes = [
	{
		path: "/",
		Component: Home,
	},
];

const App = () => {
	return (
		<div className="App">
			<Switch>
				{routes.map(({ path, Component }, i) => (
					<Route key={i} exact path={path}>
						<Component />
					</Route>
				))}
			</Switch>
		</div>
	);
};

export default App;
