import { useEffect, useState } from "react";
import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"

function App() {
  const [comics, setComics] = useState([])

  useEffect(() => {
    fetch('http://localhost:8004/comics')
      .then(resp => resp.json())
      .then(data => setComics(data))
  }, [])

  function addComic(newComic){
    setComics([...comics, newComic])
  }

  function deleteComic(deletedComic){
    const updatedComics = comics.filter(comic => comic.id !== deletedComic.id)
    setComics(updatedComics)
  }

  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer comics={comics}
            onDelete={deleteComic}/>
        </div>

        <div className="sidebar">
          <ComicForm onSubmitComic={addComic}/>
        </div>

      </div>


    </div>
  );
}

export default App;
