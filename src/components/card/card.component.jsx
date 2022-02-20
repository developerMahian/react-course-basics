import React from "react";

import "./card.styles.css";

const Card = ({ user }) => {
	return (
		<div className="card-container">
			<img
				src={`https://robohash.org/${user["id"]}?set=set2`}
				alt={user["name"]}
				width="200"
			/>
			<h1>{user["name"]}</h1>
		</div>
	);
};

export default Card;
