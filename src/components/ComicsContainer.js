import Comic from "./Comic"

function ComicsContainer({ comics }) {
  const comicsDisplay = comics.map(comic => <Comic comic={comic} key={comic.id}/>)

  return (
    <>
      {comicsDisplay}
    </>
  )

}

export default ComicsContainer
