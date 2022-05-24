import React from "react";
import { Component } from "react";
import style from "./List.module.css";

class List extends Component {
	render() {

		return (
			<div className={style.card} >

				{this.props.monsters.map((monster, key) => (
					<>

						< div className={style.monster} key={monster.id} >
							<img src={`https://robohash.org/${monster.id}?set=set3`} alt={monster.name} />
							<div>
								<h2>{monster.name}</h2>
								<h5>{monster.email}</h5>
							</div>

						</div>

					</>


				))
				}
			</div>
		);

	}
}

export default List;
