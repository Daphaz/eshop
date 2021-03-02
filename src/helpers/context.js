import { createContext, useContext } from "react";
import useSizes from "../hooks/useSizes";

const SizesContext = createContext({});

export const SizesProvider = ({ children }) => {
	const sizes = useSizes();

	return (
		<SizesContext.Provider value={sizes}>{children}</SizesContext.Provider>
	);
};

export default function useSize() {
	return useContext(SizesContext);
}
