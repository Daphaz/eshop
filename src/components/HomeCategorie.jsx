import React from "react";
import { Link } from "react-router-dom";
import { GiSonicShoes, GiTShirt, GiWatch, GiSmartphone } from "react-icons/gi";

export const HomeCategorie = () => {
	return (
		<div className="categorie_home">
			<nav>
				<ul>
					<li>
						<GiSonicShoes />
						<Link to="/category/0">Chaussures</Link>
					</li>
					<li>
						<GiTShirt />
						<Link to="/category/1">Chemises</Link>
					</li>
					<li>
						<GiWatch />
						<Link to="/category/2">Montres</Link>
					</li>
					<li>
						<GiSmartphone />
						<Link to="/category/3">Téléphones</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
