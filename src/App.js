import './App.css';
import Header from "./components/Header/Header";
import CharacterGallery from "./components/CharacterGallery";
import {useState, useEffect} from "react";
import fetchApiService from "./service/fetchApiService";

function App() {

    const [allCharacters, setAllCharacters] = useState([])
    const [find, setFind] = useState("")
    const [info, setInfo] = useState('')
    const [page, setPage] = useState('https://rickandmortyapi.com/api/character')


    useEffect(() => {
      fetchApiService(page)
          .then(data => {
              setAllCharacters(data.results);
              setInfo(data.info);
          })
         .catch(error => console.error(error))
    }, [page]);

    const next = () => {
        setPage(`${info.next}`)
    }

    const prev = () => {
        setPage(`${info.prev}`)
    }


     const search = (action) => {
         let string = action.target.value;
         setFind(string)
     }

     const handleCharacters = allCharacters.filter((element) => {
             return element.name.toLowerCase().includes(find.toLowerCase())
         })


  return (
      <>
          <Header title = "Gallery"/>
          <div className="fields">
              <button onClick={prev} disabled={info.prev === null}>previous</button>
              <button onClick={next} disabled={info.next === null}>next</button>
              <input type="text" onInput={search}/>
          </div>

          <CharacterGallery characters={handleCharacters}/>
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
