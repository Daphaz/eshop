import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";

const Home = ({ history }) => {
	return (
		<Layout history={history}>
			<div style={{ height: 300 }}>
				<Title title="Home" subtitle="test" />
			</div>
		</Layout>
	);
};

export default Home;
