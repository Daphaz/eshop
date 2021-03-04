import React from "react";
import {
	AiFillPlusCircle,
	AiFillMinusCircle,
	AiOutlineDelete,
} from "react-icons/ai";
import { priceFormatted } from "../helpers/price";

export const CartItem = ({
	lesProduitsInCart,
	removeToCart,
	addQuantity,
	removeQuantity,
}) => {
	const { id, img, title, price, promo, count } = { ...lesProduitsInCart };
	let newPrice = promo === 0 ? price : ((100 - promo) / 100) * price;

	const handleDelete = () => {
		removeToCart(id);
	};

	const handleAddQuantity = () => {
		addQuantity(id);
	};
	const handleRemoveQuantity = () => {
		removeQuantity(id);
	};

	return (
		<div className="cart_item">
			<div className="cart_img">
				<img src={img} alt={title} />
			</div>
			<h5>{title}</h5>
			<h6>{priceFormatted(newPrice)}</h6>
			<div className="cart_quantity">
				<button className="btn" onClick={handleAddQuantity}>
					<AiFillPlusCircle />
				</button>
				<span>{count}</span>
				<button className="btn" onClick={handleRemoveQuantity}>
					<AiFillMinusCircle />
				</button>
			</div>
			<div className="cart_delete">
				<button className="btn" onClick={handleDelete}>
					<AiOutlineDelete />
				</button>
			</div>
			<div className="cart_total">
				<span>{priceFormatted(newPrice * count)}</span>
			</div>
		</div>
	);
};
