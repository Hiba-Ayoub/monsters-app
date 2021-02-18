import React, { Component } from "react";
import CardList from "./card-list/card-list.component";
import Search from "./searchBox/Search";

export default class ReactClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "hiba",
      //   monsters: [
      //     { name: "superMan", id: "1" },
      //     { name: "spiderMan", id: "2" },
      //     { name: "batMan", id: "3" },
      //     { name: "superMan", id: "4" },
      //   ],
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res, "respone");
        return res.json();
      })
      .then((users) => {
        console.log(users, "uuuuuuus");
        this.setState({ monsters: users });
      })
      .catch((err) => console.log(err, "errrrrrro"));
  }

  handleClick = () => {
    this.setState({ name: "hahahaha" });
  };
  handleChang = (e) => {
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state, "hhhhhhhhhdkdnnd")
    );
    // console.log(this.state, "hhhhhhhhhdkdnnd");
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        {/* <input type="search" onChange={this.handleChang} /> */}
        <h1>HelllO MonsterS </h1>
<Search placeholder="Search Monstaers.." handleChang={this.handleChang}/>
        {/* <h5>{this.state.name}</h5>
        <button onClick={this.handleClick}></button> */}
        {/* {this.state.monsters.map((monster) => (
          <div key={monster.id}>{monster.name}</div>
        ))} */}
        <CardList monsters={filteredMonsters} />
        {/* {this.state.monsters.map((monster) => (
            <div key={monster.id}>{monster.name}</div>
          ))} */}
      </div>
    );
  }
}
