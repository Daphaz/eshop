import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = ({ history }) => {
	const [search, setSearch] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		history.push("/search", search);
	};

	return (
		<form className="searchBar" onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="search.."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type="submit" className="btn">
				<AiOutlineSearch className="icon-search" />
			</button>
		</form>
	);
};
