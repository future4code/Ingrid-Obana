import React, {useState, useEffect  } from "react";
import "./App.css"
import axios from "axios";
import PokeCard from "./components/PokeCard";

const App = () =>{
  // lista de pokemons que está sendo guardada no estado
  const [pokeList, setPokeList] = useState([])
  // nome do pokemon guardado no estado, assim que o usuário
  // escolhe um nome no dropdown
  const [pokeName, setPokeName] = useState("")
  
  // método que roda após a montagem do componente
  const getPokemons = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results)
      }).catch(() => {
        alert("Algo deu errado :(")
      })
    };

    useEffect(() => {
      getPokemons()
    }, [])

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };
  
  return (
    <div className="App">
      {/* evento onChange chama função toda vez que o usuário 
      escolhe um novo pokemon no dropdown */}
      <select onChange={changePokeName}>
        <option value={""}>Selecione...</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.length && pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
      caso o valor de pokeName, no estado, seja true */}
      {pokeName && <PokeCard pokeName={pokeName} />}
    </div>
  );
}

export default App;

