import React from "react";
import { Component } from "react";
import axios from "axios";
import style from "./SearchList.module.css";

class SearchList extends Component {


	render() {

		return (
			<>
				<input
					className={style.searchList}
					type="search"
					placeholder={this.props.placeholder}
					onChange={this.props.onChangeHandler}
				/>

			</>
		);
	}
}

export default SearchList;
