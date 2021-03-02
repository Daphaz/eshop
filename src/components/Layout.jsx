import React from "react";
import { Header } from "./Header/Header";

export const Layout = ({ children, history }) => {
	return (
		<>
			<Header history={history} />
			<main className="main_content">{children}</main>
		</>
	);
};
