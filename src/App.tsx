import "./App.css";
/* import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { Status } from "./components/Status";
import { Button } from "./components/button";
import { Greeting } from "./components/greeting";
import { PersonList } from "./components/personList";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { User } from "./components/useState/User";
import { Loggedln } from "./components/useState/LoggedIn";
import CounterWithPayload from "./components/useState/Counter"; */
import pokemon from "./components/pokemon.json";
import React, { useState } from "react";
import PropTypes from "prop-types";

const PokemonRow = ({ item, onSelect }: { item: any; onSelect: any }) => (
  <tr>
    <td>{item.name.english}</td>
    <td>{item.type.join(", ")}</td>
    <td>
      <button onClick={() => onSelect(item)}>Select!</button>
    </td>
  </tr>
);
PokemonRow.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
  onSelect: PropTypes.func,
};

const PokemonInfo = ({ name, base }: { name: any; base: any }) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      {Object.keys(base).map((key) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{base[key]}</td>
          <td></td>
        </tr>
      ))}
    </table>
  </div>
);

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
};

function App() {
  const [filter, filterSet] = useState("");
  const [selectedItem, setSelectedItem] =  useState<any>(null);

  return (
    /*    <div className="App"> */
    <div style={{ margin: "auto", width: 800, paddingTop: "1rem" }}>
      <h1 className="App">Pokemon Search</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70% 30%",
          gridColumnGap: "1rem",
        }}
      >
        <div>
          <input
            value={filter}
            onChange={(evt) => filterSet(evt.target.value)}
          />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {/*  {pokemon.slice(0, 10).map((item) => (
            <tr>
              <td>{item.name.english}</td>
              <td>{item.type.join(",")}</td>
            </tr>
          ))} */}
              {pokemon
                .filter((item: any) =>
                  item.name.english.toLowerCase().includes(filter.toLowerCase())
                )
                .slice(0, 10)
                .map((item) => (
                  <PokemonRow
                    item={item}
                    key={item.id}
                    onSelect={(item) => setSelectedItem(item)}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem}/>}
      </div>
    </div>
  );
}
export default App;
