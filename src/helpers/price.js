export const priceFormatted = (price) => {
	return new Intl.NumberFormat("fr-FR", {
		style: "currency",
		currency: "EUR",
	}).format(price);
};

export const PriceComponent = ({ promo, price }) => {
	const pricePromo = ((100 - promo) / 100) * price;

	return (
		<>
			{promo > 0 ? (
				<>
					<div className="first_price">{priceFormatted(pricePromo)}</div>
					<div className="second_price">{priceFormatted(price)}</div>
				</>
			) : (
				<div className="first_price">{priceFormatted(price)}</div>
			)}
		</>
	);
};
