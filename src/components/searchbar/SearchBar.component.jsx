import React from "react";

import "./SearchBar.style.css";

const SearchBar = ({ updateSearchField }) => {
	return (
		<form
			role="search"
			method="get"
			className="search-form form"
			onSubmit={(e) => e.preventDefault()}
		>
			<input
				type="search"
				className="search-field"
				placeholder="Search..."
				onChange={updateSearchField}
			/>
			<input type="submit" className="search-submit button" value="Search" />
		</form>
	);
};

export default SearchBar;
