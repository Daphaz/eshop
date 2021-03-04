import React from "react";
import { Header } from "./Header/Header";
import { TopHeader } from "./TopHeader";
import { Footer } from "./Footer";

export const Layout = ({ children, history }) => {
	return (
		<>
			<TopHeader />
			<Header history={history} />
			<main className="container main_content">{children}</main>
			<Footer />
		</>
	);
};
