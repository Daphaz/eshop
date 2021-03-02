import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/home";
import Products from "./routes/products";
import Contact from "./routes/contact";
import Cart from "./routes/cart";
import FourOneFour from "./routes/FourOneFour";

const routes = [
	{
		path: "/",
		Component: Home,
	},
	{
		path: "/products",
		Component: Products,
	},
	{
		path: "/contact",
		Component: Contact,
	},
	{
		path: "/cart",
		Component: Cart,
	},
];

const App = () => {
	return (
		<div className="App">
			<Switch>
				{routes.map(({ path, Component }, i) => (
					<Route key={i} exact path={path} component={Component} />
				))}
				<FourOneFour />
			</Switch>
		</div>
	);
};

export default App;
