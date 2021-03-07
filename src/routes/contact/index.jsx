import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";
import { FormContact } from "../../components/FormContact";

const Contact = ({ history, nbProduit }) => {
	return (
		<Layout history={history} nbProduit={nbProduit}>
			<Title title="nous" subtitle="contacter" />
			<div className="container">
				<FormContact />
			</div>
		</Layout>
	);
};

export default Contact;
