import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./routes/home";
import Products from "./routes/products";
import Detail from "./routes/products/Detail";
import Contact from "./routes/contact";
import Cart from "./routes/cart";
import FourOneFour from "./routes/FourOneFour";
import { connect } from "react-redux";

//actions
import { addToCart } from "./redux/ActionCreator";

const mapStateToProps = (state) => {
	return {
		lesProduits: state.Products,
		lesProduitInCart: state.Cart,
	};
};

const mapDispatchToProps = (dispatch) => ({
	addToCart: (product) => dispatch(addToCart(product)),
});

const App = ({ lesProduits, lesProduitInCart, addToCart }) => {
	const { lesProduits: products } = lesProduits;
	const { lesProduitsInCart } = lesProduitInCart;
	return (
		<div className="App">
			<Switch>
				<Route
					exact
					path="/home"
					component={(props) => (
						<Home lesProduits={products} addToCart={addToCart} {...props} />
					)}
				/>
				<Route
					exact
					path="/home/:id"
					component={(props) => (
						<Detail lesProduits={products} addToCart={addToCart} {...props} />
					)}
				/>
				<Route
					exact
					path="/products"
					component={(props) => (
						<Products lesProduits={products} addToCart={addToCart} {...props} />
					)}
				/>
				<Route
					exact
					path="/products/:id"
					component={(props) => (
						<Detail lesProduits={products} addToCart={addToCart} {...props} />
					)}
				/>
				<Route exact path="/contact" component={Contact} />
				<Route
					exact
					path="/cart"
					component={(props) => (
						<Cart lesProduitsInCart={lesProduitsInCart} {...props} />
					)}
				/>
				<Redirect exact path="/" to="/home" />
				<FourOneFour />
			</Switch>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
