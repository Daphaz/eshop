import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";

const Home = () => {
	return (
		<Layout>
			<div style={{ height: 300 }}>
				<Title title="Home" subtitle="test" />
			</div>
		</Layout>
	);
};

export default Home;
