import React from "react";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./card.styles.css";

const Card = ({ user }) => {
	return (
		<div className="col-lg-3 col-md-4 col-sm-6 py-3">
			<div className="card-container">
				<img
					src={`https://robohash.org/${user["id"]}?set=set2`}
					alt={user["name"]}
				/>
				<h1>{user["name"]}</h1>
			</div>
		</div>
	);
};

export default Card;
