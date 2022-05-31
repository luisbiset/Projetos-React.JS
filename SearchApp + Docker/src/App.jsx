import { useEffect, useState } from "react";
import axios from "axios";
import style from "./App.module.css";
import List from "./Components/List.component";
import SearchList from "./Components/SearchList.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  // Captura o input e armazena no state 'searchfield'
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    return searchField;
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setMonsters(response.data));
  }, []);

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className={style.app}>
      <h1 className={style.title}>Teste react</h1>
      <SearchList
        placeholder={"search monster"}
        onChangeHandler={onSearchChange}
      />
      <List monsters={filteredMonsters} />
    </div>
  );
};

export default App;
