import * as ActionType from "./ActionTypes";

export const Cart = (
	state = {
		lesProduitsInCart: [],
		nbProduit: 0,
	},
	action
) => {
	switch (action.type) {
		case ActionType.ADD_TO_CART:
			return {
				...state,
				lesProduitsInCart: state.lesProduitsInCart.concat(
					action.payload.product
				),
				nbProduit: state.nbProduit + 1,
			};
		case ActionType.REMOVE_TO_CART:
			return {
				...state,
				lesProduitsInCart: state.lesProduitsInCart.filter(
					(p) => p.id !== action.payload.id
				),
				nbProduit: state.nbProduit - 1,
			};
		default:
			return state;
	}
};
