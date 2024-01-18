import { useState } from "react"

function Comic({comic, onDelete}) {
  const { title, issue, image_url, id } = comic

  const [toggleDisplay, setToggleDisplay] = useState(false)

  function toggle(){
    setToggleDisplay(!toggleDisplay)
  }
  
  function handleDelete(){
    fetch(`http://localhost:8004/comics/${id}`, {
      method: 'DELETE'
    })
    onDelete(comic)
  }

  return (
    <div className="comic-item">
      {toggleDisplay ? 
      <div>
        <h3 onClick={toggle}>{title}</h3>
        <h4>{issue}</h4>
        <button onClick={handleDelete}>Remove</button>
      </div>:
      <img src={image_url} alt={"Comic Issue Image"} onClick={toggle}/>}
    </div>
  )

}

export default Comic
