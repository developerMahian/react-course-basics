import React from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			userNames: [],
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => this.setState({ userNames: json }));
	}

	render() {
		return (
			<div className="App">
				<CardList>
					{this.state.userNames.map((name) => (
						<h1 key={name["id"]}>{name["name"]}</h1>
					))}
				</CardList>
			</div>
		);
	}
}

export default App;
