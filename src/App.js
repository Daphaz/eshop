import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./routes/home";
import Products from "./routes/products";
import Detail from "./routes/products/Detail";
import Contact from "./routes/contact";
import Cart from "./routes/cart";
import FourOneFour from "./routes/FourOneFour";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		lesProduits: state.Products,
	};
};

const App = ({ lesProduits }) => {
	const { lesProduits: products } = lesProduits;
	return (
		<div className="App">
			<Switch>
				<Route
					exact
					path="/home"
					component={(props) => <Home lesProduits={products} {...props} />}
				/>
				<Route
					exact
					path="/home/:id"
					component={(props) => <Detail lesProduits={products} {...props} />}
				/>
				<Route
					exact
					path="/products"
					component={(props) => <Products lesProduits={products} {...props} />}
				/>
				<Route
					exact
					path="/products/:id"
					component={(props) => <Detail lesProduits={products} {...props} />}
				/>
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/cart" component={Cart} />
				<Redirect exact path="/" to="/home" />
				<FourOneFour />
			</Switch>
		</div>
	);
};

export default connect(mapStateToProps)(App);
