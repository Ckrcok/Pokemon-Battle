import React from "react";
import styles from "./pokemon.module.css";

function Pokemon(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>Hp : {props.hp}</h2>
      <span>
        <img src={props.image}></img>
      </span>
      <br />
      <button onClick={() => props.attackHandle()}>Attack</button>
    </div>
  );
}

export default Pokemon;
