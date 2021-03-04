import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";

const Contact = ({ history, nbProduit }) => {
	return (
		<Layout history={history} nbProduit={nbProduit}>
			<Title title="contact" subtitle="us" />
		</Layout>
	);
};

export default Contact;
