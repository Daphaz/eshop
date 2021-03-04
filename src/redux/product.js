import { storeProducts } from "../shared/data";
import * as ActionType from "./ActionTypes";

export const Products = (state = { lesProduits: storeProducts }, action) => {
	switch (action.type) {
		case ActionType.ADD_TO_CART:
			return {
				...state,
				lesProduits: state.lesProduits.map((p) =>
					p === action.payload.product ? { ...p, inCart: true } : p
				),
			};
		default:
			return state;
	}
};
