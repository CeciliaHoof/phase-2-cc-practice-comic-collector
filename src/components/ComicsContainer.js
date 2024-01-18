import Comic from "./Comic"

function ComicsContainer({ comics, onDelete }) {
  const comicsDisplay = comics.map(comic => <Comic comic={comic} onDelete={onDelete}key={comic.id}/>)

  return (
    <>
      {comicsDisplay}
    </>
  )

}

export default ComicsContainer
