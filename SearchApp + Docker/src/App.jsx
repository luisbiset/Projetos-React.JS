import { Component } from "react";
import axios from "axios";
import style from "./App.module.css";
import List from "./Components/List.component";
import SearchList from './Components/SearchList.component'


class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	componentDidMount() {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => this.setState({ monsters: response.data }));
	}

	// Captura o input e armazena no state 'searchfield'
	onSearchChange = (event) => {
		const searchField = event.target.value.toLocaleLowerCase();
		this.setState({ searchField });
		return { searchField };
	};

	render() {

		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);

		});
		return (
			<div className={style.app}>
				<h1 className={style.title}>Teste react</h1>
				<SearchList placeholder={'search monster'} onChangeHandler={onSearchChange} />
				<List monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
