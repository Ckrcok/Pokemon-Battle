import React from "react";
import Pokemon from "./components/pokemon/pokemon.jsx";
import "./App.css";

class App extends React.Component {
  state = {
    pica: "pikachu",
    chari: "charizard",
    picaHp: 100,
    chariHp: 150,
    status: "Fighters are ready..."
  };

  picaLoseHp = () => {
    this.setState({
      picaHp: this.state.picaHp - 10,
      status: this.state.chari + " Is Attacking " + this.state.pica
    });
  };

  chariLoseHp = () => {
    this.setState({
      chariHp: this.state.chariHp - 10,
      status: this.state.pica + " Is Attacking " + this.state.chari
    });
  };

  render() {
    return (
      <div className="App">
        <div id="pokemon">
          <Pokemon
            attackHandle={this.picaLoseHp}
            hp={this.state.picaHp}
            name={this.state.pica}
            image="https://i.imgur.com/I6zw2j9.gif"
          />
          <Pokemon
            attackHandle={this.chariLoseHp}
            hp={this.state.chariHp}
            name={this.state.chari}
            image="https://i.imgur.com/kmdppzA.gif"
          />
        </div>
        {this.state.status}
      </div>
    );
  }
}

export default App;
