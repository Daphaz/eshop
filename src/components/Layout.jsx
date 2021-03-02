import React from "react";
import { Header } from "./Header/Header";

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className="main_content">{children}</main>
		</>
	);
};
