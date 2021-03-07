import React from "react";
import { Header } from "./Header/Header";
import { TopHeader } from "./TopHeader";
import { Footer } from "./Footer";
import { GoOnTop } from "./GoOnTop";

export const Layout = ({ children, history, nbProduit }) => {
	return (
		<>
			<TopHeader />
			<Header history={history} nbProduit={nbProduit} />
			<main className="container main_content">{children}</main>
			<Footer />
			<GoOnTop />
		</>
	);
};
