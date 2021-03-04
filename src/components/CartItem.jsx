import React from "react";
import {
	AiFillPlusCircle,
	AiFillMinusCircle,
	AiOutlineDelete,
} from "react-icons/ai";

export const CartItem = ({ produit }) => {
	const { img, title, price } = { ...produit };
	return (
		<>
			{produit && (
				<div className="cart_item">
					<div className="cart_img">
						<img src={img} alt={title} />
					</div>
					<h5>{title}</h5>
					<h6>{price}</h6>
					<div className="cart_quantity">
						<button className="btn">
							<AiFillPlusCircle />
						</button>
						<span>2</span>
						<button className="btn">
							<AiFillMinusCircle />
						</button>
					</div>
					<div className="cart_delete">
						<button className="btn">
							<AiOutlineDelete />
						</button>
					</div>
					<div className="cart_total">
						<span>168</span>
					</div>
				</div>
			)}
		</>
	);
};
