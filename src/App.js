import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./routes/home";
import Products from "./routes/products";
import Category from "./routes/category";
import Detail from "./routes/products/Detail";
import Contact from "./routes/contact";
import Cart from "./routes/cart";
import Search from "./routes/search";
import FourOneFour from "./routes/FourOneFour";
import { connect } from "react-redux";

//actions
import {
	addToCart,
	removeToCart,
	addQuantity,
	removeQuantity,
} from "./redux/ActionCreator";

const mapStateToProps = (state) => {
	return {
		lesProduits: state.Products,
		lesProduitInCart: state.Cart,
		Categories: state.storeCategory,
	};
};

const mapDispatchToProps = (dispatch) => ({
	addToCart: (product) => dispatch(addToCart(product)),
	removeToCart: (id) => dispatch(removeToCart(id)),
	addQuantity: (id) => dispatch(addQuantity(id)),
	removeQuantity: (id) => dispatch(removeQuantity(id)),
});

const App = ({
	lesProduits,
	lesProduitInCart,
	Categories,
	addToCart,
	removeToCart,
	addQuantity,
	removeQuantity,
}) => {
	const { lesProduits: products } = lesProduits;
	const { lesProduitsInCart, nbProduit } = lesProduitInCart;
	return (
		<div className="App">
			<Switch>
				<Route
					exact
					path="/home"
					component={(props) => (
						<Home
							lesProduits={products}
							addToCart={addToCart}
							nbProduit={nbProduit}
							{...props}
						/>
					)}
				/>
				<Route
					exact
					path="/home/:id"
					component={(props) => (
						<Detail
							lesProduits={products}
							addToCart={addToCart}
							nbProduit={nbProduit}
							{...props}
						/>
					)}
				/>
				<Route
					exact
					path="/products"
					component={(props) => (
						<Products
							lesProduits={products}
							addToCart={addToCart}
							nbProduit={nbProduit}
							{...props}
						/>
					)}
				/>
				<Route
					exact
					path="/products/:id"
					component={(props) => (
						<Detail
							lesProduits={products}
							addToCart={addToCart}
							nbProduit={nbProduit}
							{...props}
						/>
					)}
				/>
				<Route
					exact
					path="/category/:id"
					component={(props) => (
						<Category
							category={Categories}
							products={products}
							addToCart={addToCart}
							nbProduit={nbProduit}
							{...props}
						/>
					)}
				/>
				<Route
					exact
					path="/category/:id/:id"
					component={(props) => (
						<Detail
							lesProduits={products}
							addToCart={addToCart}
							nbProduit={nbProduit}
							{...props}
						/>
					)}
				/>
				<Route
					exact
					path="/contact"
					component={(props) => <Contact nbProduit={nbProduit} {...props} />}
				/>
				<Route
					exact
					path="/cart"
					component={(props) => (
						<Cart
							lesProduitsInCart={lesProduitsInCart}
							removeToCart={removeToCart}
							nbProduit={nbProduit}
							addQuantity={addQuantity}
							removeQuantity={removeQuantity}
							{...props}
						/>
					)}
				/>
				<Route
					exact
					path="/search"
					component={(props) => (
						<Search
							nbProduit={nbProduit}
							lesProduits={products}
							addToCart={addToCart}
							{...props}
						/>
					)}
				/>
				<Route
					exact
					path="/search/:id"
					component={(props) => (
						<Detail
							lesProduits={products}
							addToCart={addToCart}
							nbProduit={nbProduit}
							{...props}
						/>
					)}
				/>
				<Redirect exact path="/" to="/home" />
				<FourOneFour />
			</Switch>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
