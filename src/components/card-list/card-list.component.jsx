import React from "react";
import Card from "../card/card.component";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./card-list.styles.css";

const CardList = ({ users }) => {
	return (
		<div className="card-list row">
			{users.map((user) => (
				<Card
					className="col-lg-3 col-md-4 col-sm-6"
					user={user}
					key={user["id"]}
				/>
			))}
		</div>
	);
};

export default CardList;
