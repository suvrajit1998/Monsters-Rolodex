import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Searcbox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monstars: [],
      searchbox: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(respons => respons.json())
      .then(user => this.setState({ monstars: user }));
  }

  onTextChenge = () => {
    this.setState(() => ({ name: "Hello Yihua" }));
  };
  render() {
    const { monstars, searchbox } = this.state;
    const filterMonstars = monstars.filter(monster =>
      monster.name.toLowerCase().includes(searchbox.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monsters Rolodax </h1>
        <Searcbox
          placeholder="Search monsters"
          handlechenge={e => this.setState({ searchbox: e.target.value })}
        />
        <CardList monstars={filterMonstars} />
      </div>
    );
  }
}
export default App;
