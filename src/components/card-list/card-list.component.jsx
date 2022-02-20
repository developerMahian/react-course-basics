import React from "react";
import Card from "../card/card.component";

import "./card-list.styles.css";

const CardList = ({ users }) => {
	return (
		<div className="card-list">
			{users.map((user) => (
				<Card user={user} key={user["id"]} />
			))}
		</div>
	);
};

export default CardList;
