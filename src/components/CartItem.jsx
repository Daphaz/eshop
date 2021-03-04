import React from "react";
import {
	AiFillPlusCircle,
	AiFillMinusCircle,
	AiOutlineDelete,
} from "react-icons/ai";

export const CartItem = ({ lesProduitsInCart, removeToCart }) => {
	const { id, img, title, price, promo, count } = { ...lesProduitsInCart };
	let newPrice = promo === 0 ? price : ((100 - promo) / 100) * price;

	const handleDelete = () => {
		removeToCart(id);
	};

	return (
		<div className="cart_item">
			<div className="cart_img">
				<img src={img} alt={title} />
			</div>
			<h5>{title}</h5>
			<h6>{newPrice}</h6>
			<div className="cart_quantity">
				<button className="btn">
					<AiFillPlusCircle />
				</button>
				<span>{count}</span>
				<button className="btn">
					<AiFillMinusCircle />
				</button>
			</div>
			<div className="cart_delete">
				<button className="btn" onClick={handleDelete}>
					<AiOutlineDelete />
				</button>
			</div>
			<div className="cart_total">
				<span>{newPrice * count}</span>
			</div>
		</div>
	);
};
