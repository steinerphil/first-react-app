import './App.css';
import Header from "./components/Header/Header";
import responseCharacters from "./components/characters.json";
import CharacterGallery from "./components/CharacterGallery";
import {useState} from "react";

function App() {

    const characters = responseCharacters.results;

    useState()

  return (
      <>
          <Header title = "Gallery"/>
          <CharacterGallery characters={characters}/>
      </>
  );
}

export default App;

















// let state = {
//     characters: []
// }
//
// let apiData = fetch("https://rickandmortyapi.com/api/character/1,2")
//     .then(response => response.json())
//     .then(data => {data.result})
//     .then(result => {this.state({characters: result})})
