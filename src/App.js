import React from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/searchbar/SearchBar.component";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			users: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => this.setState({ users: json }));
	}

	render() {
		const { users, searchField } = this.state;
		const filterSearch = users.filter((user) =>
			user.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<SearchBar
					updateSearchField={(e) =>
						this.setState({ searchField: e.target.value })
					}
				/>
				<CardList users={filterSearch} />
			</div>
		);
	}
}

export default App;
