import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = () => {
	return (
		<form className="searchBar">
			<input type="text" placeholder="search.." />
			<button type="submit" className="btn">
				<AiOutlineSearch className="icon-search" />
			</button>
		</form>
	);
};
