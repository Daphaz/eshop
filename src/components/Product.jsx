import React from "react";
import { AiFillEye, AiOutlineShopping } from "react-icons/ai";
import { PriceComponent } from "../helpers/price";

export const Product = ({ informations, handleClick, addToCart }) => {
	const { title, img, price, inCart, promo } = informations;

	const handleAddToCart = () => {
		addToCart(informations);
	};

	return (
		<div className="product_card">
			<div className="product_img">
				<img
					src={img}
					alt={title}
					width="100%"
					height="100%"
					onClick={handleClick}
				/>
				{promo > 0 && (
					<div className="promo_container">
						<span className="product_promo-label">promo</span>
						<span className="product_promo-unit">- {promo}%</span>
					</div>
				)}
			</div>
			<div className="product_content">
				<h4 className="product_content-title">{title}</h4>
				<div className="product_content-price">
					<PriceComponent price={price} promo={promo} />
				</div>
				<div className="actionBtn">
					<button className="btn action" onClick={handleClick}>
						<AiFillEye />
					</button>
					<button
						className="btn action"
						disabled={inCart}
						onClick={handleAddToCart}>
						<AiOutlineShopping />
					</button>
				</div>
			</div>
		</div>
	);
};
